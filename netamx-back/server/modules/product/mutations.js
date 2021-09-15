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
        createMassiveProducts: async (obj, { input }, {token}, info) =>
        {
            const callback = async () => {
                let transaction =await db.sequelize.transaction();
                try {
                    const nameAction = 'Crear productos'
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
                    const repet = Handlers.withoutFoundRepetProduct(allSkuAvailable)
                    if(!repet) {
                        status=false
                        data.errorDocument="Este documento contiene números de Skus repetidos."
                    }

                    for(let i=0; i<xlData.length; i++){
                        try {
                            //console.log(i, ':xlData[i] =>', xlData[i])
                            const statusOne = await Handlers.checkRowProduct(xlData[i])
                            status = status && statusOne.status 
                            data[xlData[i].R] = statusOne
                            if(statusOne.errors.length> 0) errorDetail.push({ fila:START_ROW, errors:statusOne.errors }) 
                            START_ROW++
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
                        await transaction.commit();
                        return {
                            statusCode: 400,
                            message: "error",
                            error: "",
                            response: JSON.stringify({errorDetail, errorDocument: data.errorDocument == undefined ? '' : data.errorDocument})
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
        },
        updateMassivePromotionsProducts: async (obj, { input }, {token}, info) =>
        {
            const callback = async () => {
                let transaction =await db.sequelize.transaction();
                try {
                    const nameAction = 'Actualizar promociones en productos'
                    let INICIO = 2
                    let errorDetail = []
                    let START_ROW=2;
                    let status = true
                    let data = {}
                    let incidentsData = await input.doc
                    var workbook = XLSX.read(incidentsData.File.body, {type:"base64"});
                    var first_sheet_name = workbook.SheetNames[0];
                    var sheet_name_list = workbook.SheetNames;
                    var worksheet = workbook.Sheets[first_sheet_name];
                    var allSkuAvailable = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]],{ raw: false, range:"A"+INICIO+":Q1048576", header:1, blankrows:false });
                    let limit = (INICIO + allSkuAvailable.length) -1

                    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]],{ raw: false, range:"A"+INICIO+":Q"+ limit, header:"A" });
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
                            const statusOne = await Handlers.checkRowPromotionsProducts(xlData[i])
                            status = status && statusOne.status 
                            if(data[xlData[i].B] == undefined) data[xlData[i].B] = statusOne
                            if(statusOne.errors.length> 0) errorDetail.push({ fila:START_ROW, errors:statusOne.errors }) 
                            START_ROW++
                            // console.log('statusOne', statusOne)
                        } catch (error) {
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
                               
                                const sku = xlData[i].B
                                let dataInput = data[sku] 
                                let Id = dataInput.Id
                                /*
                                delete dataInput.Id
                                delete dataInput.status
                                delete dataInput.errors
                                */
                                const dataInputUpdate = {
                                    ShowOnHomepage: dataInput.ShowOnHomepage,
                                    OrderMinimumQuantity: dataInput.OrderMinimumQuantity,
                                    OrderMaximumQuantity: dataInput.OrderMaximumQuantity,
                                    Price:  dataInput.Price,
                                    OldPrice:dataInput.OldPrice,
                                    UpdatedOnUtc: dataInput.UpdatedOnUtc
                                }
                                await db.Product.update(
                                    dataInputUpdate,
                                    { where: { Id }, transaction}
                                )
                                const dataInputLogProductPrices ={
                                    IdActivityLogCreateMassive: IdLoadMassive,
                                    IdProducts: Id,
                                    CreatedAt: moment(),
                                    UpdatedAt: moment(),
                                    Status: 1,
                                    OldPrice: dataInput.OldPrice,
                                    NewPrice: dataInput.Price
                                }
                                await db.ProductsActivityLogCreateMassive.create(dataInputLogProductPrices, {transaction}) 
                                
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
                    }else{
                        const dataResponseActivityLog = await db.ActivityLogCreateMassive.create(inputMassive, {transaction})
                        let dataResultGetIt = dataResponseActivityLog.get({ plain: true });
                        data.IdLoadMassive = dataResultGetIt.id
                        await transaction.commit();
                        return {
                            statusCode: 400,
                            message: "error",
                            error: "",
                            response: JSON.stringify({errorDetail, errorDocument: data.errorDocument == undefined ? '' : data.errorDocument})
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
        },
        updateMassivePriceProducts: async (obj, { input }, {token}, info) =>
        {
            const callback = async () => {
                let transaction =await db.sequelize.transaction();
                try {
                    const nameAction ='Actualiza precios productos';
                    let incidentsData = await input.doc
                    var workbook = XLSX.read(incidentsData.File.body, {type:"base64"});
                    var sheet_name_list = workbook.SheetNames;
                    var jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {raw: true});
                    let START_ROW = 2;
                    let errorDetail = [];
                    if(jsonData.length == 0){
                        return {
                            statusCode: 401,
                            message: "Este documento no contiene registros para procesar.",
                            error: "",
                            response: JSON.stringify({errorDocument : "Este documento no contiene registros para procesar"})
                        };
                    }else{
                        var productError = [];
                        var productUpdate = [];
                        await Helpers.asyncForEach(jsonData, async (element) => {
                            const queryProduct = await db.Product.findOne({ where: { Sku:`${element.SKU}` }});
                            if(queryProduct == null){
                                productError.push(element);
                                errorDetail.push({ fila:START_ROW, errors:['El producto con Sku '+ element.SKU+' no existe.'] })
                            }else{
                                let queryProductTemp = queryProduct.get({ plain: true })
                                productUpdate.push({
                                    idProduct: queryProductTemp.Id,
                                    ...element
                                })
                            }
                        });
                        if(productError.length == 0){
                            let inputMassive = {
                                NameAction: nameAction,
                                CreatedAt : moment(),
                                UpdatedAt : moment(),
                                Description: input.Description,
                                Status : true
                            }
                            try {
                                const dataResponseActivityLog = await db.ActivityLogCreateMassive.create(inputMassive, {transaction})
                                const dataResponseActivityLogTemp = dataResponseActivityLog.get({ plain: true });
                                const IdLog = dataResponseActivityLogTemp.Id
                                await Helpers.asyncForEach(productUpdate, async (element) => {
                                    let inputProductActivity = {
                                        IdActivityLogCreateMassive: IdLog,
                                        IdProducts: element.idProduct,
                                        CreatedAt: moment(),
                                        UpdatedAt: moment(),
                                        Status: 1,
                                        OldPrice: element.OldPrice,
                                        NewPrice: element.Price
                                    }
                                    const responseProductActivity = await db.ProductsActivityLogCreateMassive.create(inputProductActivity, {transaction})
                                    let input = {
                                        Price: element.Price,
                                        OldPrice: element.OldPrice,
                                        ProductCost: element.ProductCost,
                                        UpdatedOnUtc: moment()
                                    }
                                    const responseUpdateProduct = await db.Product.update(
                                        input,
                                        { where: { Id: element.idProduct  }, transaction}
                                    )
                                });
                            } catch (error) {
                                if (transaction) await transaction.rollback();
                                return {
                                    statusCode: 401,
                                    message: "error en el proceso de actualización de precios",
                                    error: error.message,
                                    response: JSON.stringify({errorDocument : error.messages})
                                };
                            }
                            await transaction.commit();
                            return Handlers.responseSuccess();
                        }else{
                            return {
                                statusCode: 402,
                                message: "Registros SKU no encontrados en la base de datos",
                                error: "",
                                response: JSON.stringify({errorDetail, errorDocument: ''})
                            }
                        }
                    }
                } catch (error) {
                    if (transaction) await transaction.rollback();
                    // return Handlers.errorCatch(error);
                    return {
                        statusCode: 400,
                        message: "",
                        error: "",
                        response: JSON.stringify({errorDocument : error.messages})
                    };
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