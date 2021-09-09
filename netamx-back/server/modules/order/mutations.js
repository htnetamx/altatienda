import serverResponse from "./../../middlewares/server-response";
import encrypt from "./../../middlewares/encrypt";
import authConfig from '../../constants/auth'
import messages from '../../constants/messagesResponses'
import { json } from "body-parser";
import { BreakingChangeType } from "graphql";
require('../../config/config');
var moment = require('moment');  
var XLSX = require('xlsx');


const Mutations = (db, rejects, Handlers, Helpers, bcrypt) => {
    return {
        updateMassiveChangeStatusSku: async (obj, { input }, {token}, info) =>
        {
            const callback = async () => {
                let transaction =await db.sequelize.transaction();
                try {
                    const nameAction = 'Actualiza status de SKU'
                    let INICIO = 2
                    let START_ROW=2;
                    let status = true
                    let data = {}
                    let errorDetail = []
                    let incidentsData = await input.doc
                    var workbook = XLSX.read(incidentsData.File.body, {type:"base64"});
                    var first_sheet_name = workbook.SheetNames[0];
                    var sheet_name_list = workbook.SheetNames;
                    var worksheet = workbook.Sheets[first_sheet_name];
                    var allOrderId = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]],{ raw: false, range:"A"+INICIO+":C1048576", header:1, blankrows:false });
                    //console.log('AllOrder',allOrderId, allOrderId.length )
                    let limit = (INICIO + allOrderId.length) -1

                    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]],{ raw: false, range:"A"+INICIO+":C"+ limit, header:"A" });
                    // console.log('xlData', xlData)
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
                            const statusOne = await Handlers.checkRowOrderItem(xlData[i])
                            status = status && statusOne.status 
                            if(data[START_ROW] == undefined) data[START_ROW] = statusOne
                            if(statusOne.errors.length> 0) errorDetail.push({ fila:START_ROW, errors:statusOne.errors }) 
                            START_ROW++
                            //console.log('statusOne', statusOne)
                        } catch (error) {
                            // if (transaction) await transaction.rollback();
                            console.log("error catch",error)
                            status = false
                        }
                        
                    }
                    data.errorDetail = errorDetail
                    //console.log('Data =>', data)
                    let inputMassive = {
                        NameAction: nameAction,
                        CreatedAt : moment(),
                        UpdatedAt : moment(),
                        Description: input.Description,
                        Status : status
                    }
                    if(status){
                        try {
                            const dataResponseActivityLog = await db.ActivityLogCreateMassive.create(inputMassive, {transaction})
                            let dataResult = dataResponseActivityLog.get({ plain: true });
                            let IdLoadMassive = dataResult.Id
                            for(let i=INICIO; i<=limit; i++){
                                try {
                                    //console.log('Inserts=>', data[i])
                                    const OrderItemId = data[i].OrderItemId
                                    await db.OrderItem.update(
                                        { TypeStatusOrderItemId: data[i].TypeStatusOrderItemId },
                                        { where: { Id: OrderItemId }, transaction}
                                    )
                                    const dataInputLogHistory ={
                                        ActivityLogMassiveId: IdLoadMassive,
                                        TypeStatusOrderItemId: data[i].TypeStatusOrderItemId,
                                        OrderItemId,
                                        CreatedAtUTC: moment(),
                                        Active: 1
                                    }
                                    await db.OrderItemStatusHistory.create(dataInputLogHistory, {transaction}) 
                                    
                                }catch(e){
                                    if (transaction) await transaction.rollback();
                                    console.log('error al insertar producto=>', e)
                                    return {
                                        statusCode: 400,
                                        message: "error",
                                        error: e,
                                        response: json.stringify({IdLoadMassive})
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
                            
                        } catch (error) {
                            if (transaction) await transaction.rollback();
                            return {
                                statusCode: 400,
                                message: "error",
                                error,
                                response: ''
                            }
                        }
                        
                    }else{
                        try {
                            const dataResponseActivityLog = await db.ActivityLogCreateMassive.create(inputMassive, {transaction})
                            let dataResultGetIt = dataResponseActivityLog.get({ plain: true });
                            data.IdLoadMassive = dataResultGetIt.id
                            return {
                                statusCode: 400,
                                message: "error",
                                error: "",
                                response: JSON.stringify({errorDetail: data.errorDetail, errorDocument: data.errorDocument == undefined ? '' : data.errorDocument})
                            }
                        } catch (error) {
                            console
                            if (transaction) await transaction.rollback();
                            return {
                                statusCode: 400,
                                message: "error",
                                error,
                                response: ''
                            }
                        }
                        
                    }

                    
                } catch (error) {
                    if (transaction) await transaction.rollback();
                    return Handlers.errorCatch(error)
                }finally{
                    try {
                        if (transaction) await transaction.rollback();
                    } catch (error) {
                    }
                }
            }
            return await serverResponse.classicResponse(token, [authConfig.ROL_NETAMX], callback);
        }
    }
}

module.exports = Mutations