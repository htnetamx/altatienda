import serverResponse from "./../../middlewares/server-response";
import encrypt from "./../../middlewares/encrypt";
import authConfig from '../../constants/auth'
import messages from '../../constants/messagesResponses'
import { json } from "body-parser";
require('../../config/config');
var moment = require('moment');  
var XLSX = require('xlsx');


const Mutations = (db, rejects, Handlers, Helpers, bcrypt) => {
    return {
        createMassiveProducts: async (obj, { input }, {token}, info) =>
        {
            const callback = async () => {
                let transaction =await db.sequelize.transaction();
                try {
                    const nameAction = 'Crear productos'
                    let INICIO = 2
                    let status = true
                    let data = {}
                    let incidentsData = await input.doc
                    var workbook = XLSX.read(incidentsData.File.body, {type:"base64"});
                    var first_sheet_name = workbook.SheetNames[0];
                    var sheet_name_list = workbook.SheetNames;
                    var worksheet = workbook.Sheets[first_sheet_name];
                    var allSkuAvailable = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]],{ raw: false, range:"R"+INICIO+":R1048576", header:1, blankrows:false });
                    let limit = (INICIO + allSkuAvailable.length) -1

                    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]],{ raw: false, range:"A"+INICIO+":CR"+ limit, header:"A" });
                    if(xlData.length == 0) {
                        status = false
                        data.errorDocument = 'Este documento no contiene registros para procesar.'
                        return {
                            statusCode: 400,
                            message: "error",
                            error: '',
                            response: JSON.stringify(data)
                        }
                    }
                    for(let i=0; i<xlData.length; i++){
                        try {
                            //console.log(i, ':xlData[i] =>', xlData[i])
                            const statusOne = await Handlers.checkRowProduct(xlData[i])
                            status = status && statusOne.status 
                            data[xlData[i].R] = statusOne
                        } catch (error) {
                            if (transaction) await transaction.rollback();
                            console.log("error catch",error)
                            status = false
                        }
                        
                    }
                    // console.log('Data =>', data)
                    let inputMassive = {
                        NameAction: nameAction,
                        CreatedAt : moment(),
                        UpdatedAt : moment(),
                        Description: input.Description,
                        Status : status
                    }
                    if(status){
                        const dataResponseActivityLog = await db.ActivityLogCreateMassive.create(inputMassive, {transaction})
                        let dataResult = dataResponseActivityLog.get({ plain: true });
                        let IdLoadMassive = dataResult.Id
                        for(let i=0; i<xlData.length; i++){
                            try {
                                const sku = xlData[i].R
                                let dataInput = data[sku] 
                                let Slug = dataInput.Slug
                                delete dataInput.status
                                delete dataInput.errors
                                delete dataInput.Slug
                                dataInput.IdActivityLogCreateMassive = IdLoadMassive
                                // console.log('dataInput', dataInput, dataResult)
                                const dataResponseProduct = await db.Product.create(dataInput, {transaction})
                                const dataResultProduct = dataResponseProduct.get({ plain: true });
                                const IdProduct = dataResultProduct.Id
                                const dataInputUrlRecord = {
                                    EntityName:'Product',
                                    Slug,
                                    EntityId:IdProduct,
                                    IsActive: 1,
                                    LanguageId: 0
                                }
                                await db.UrlRecord.create(dataInputUrlRecord, {transaction}) 
                            }catch(e){
                                if (transaction) await transaction.rollback();
                                console.log('error al insertar producto=>', e)
                                return {
                                    statusCode: 400,
                                    message: "error",
                                    error: e,
                                    response: json.stringify({IdLoadMassive : IdLoadMassive})
                                }
                               
                            }
                        }
                        await transaction.commit();
                        return {
                            statusCode: 200,
                            message: "success",
                            error: "",
                            response: ""
                        }
                    }else{
                        const dataResponseActivityLog = await db.ActivityLogCreateMassive.create(inputMassive, {transaction})
                        let dataResultGetIt = dataResponseActivityLog.get({ plain: true });
                        data.IdLoadMassive = dataResultGetIt.id
                        return {
                            statusCode: 400,
                            message: "error",
                            error: "",
                            response: JSON.stringify(data)
                        }
                    }

                    
                } catch (error) {
                    if (transaction) await transaction.rollback();
                    return Handlers.errorCatch(error)
                }
            }
            return await serverResponse.classicResponse(token, [authConfig.ROL_PUBLIC], callback);
        },
        updateMassivePromotionsProducts: async (obj, { input }, {token}, info) =>
        {
            const callback = async () => {
                try {
                    return {
                        statusCode: 200,
                        message: "success",
                        error: '',
                        response: ""
                    }
                } catch (error) {
                    return Handlers.errorCatch(error)
                }
            }
            return await serverResponse.classicResponse(token, [authConfig.ROL_PUBLIC], callback);
        }
    }
}

module.exports = Mutations