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
                    var jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {raw: true});
                    var allOrderId = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]],{ raw: false, range:"A"+INICIO+":C1048576", header:1, blankrows:false });
                    //console.log('AllOrder',allOrderId, allOrderId.length )
                    let limit = (INICIO + allOrderId.length) -1

                    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]],{ raw: false, range:"A"+INICIO+":C"+ limit, header:"A" });
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

                    var xlData2 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]],{ raw: false, range:"A1"+":H1", header:"A" });
                    var errorLayout = Handlers.validateLayoutChangeStatusSku(xlData2[0]);
                    if(errorLayout.length >= 1){
                        return {
                            statusCode: 401,
                            message: "El documento no cumple con el layout requerido",
                            error: "",
                            response: JSON.stringify({errorDocument : "Columnas faltantes en el documento : "+ JSON.stringify(errorLayout)})
                        };
                    }
                    
                    await Helpers.asyncForEach(jsonData, async (element) => {
                        const queryProduct = await db.Product.findOne({ where: { Sku:`${element.SKU}` }});
                        if(queryProduct == null){
                            if(!JSON.stringify(element).includes("EMPTY")){
                                status = false;
                                errorDetail.push({ fila:START_ROW, errors:['El producto con Sku ['+ element.SKU+'] no existe.'] })
                            }
                        }
                        const queryStore = await db.Store.findOne({ where: { Id:`${element.Store_Id}` }});
                        if(queryStore == null){
                            if(!JSON.stringify(element).includes("EMPTY")){
                                status = false;
                                errorDetail.push({ fila:START_ROW, errors:['La tienda con Store_Id ['+ element.SKU+'] no existe.'] })
                            }
                        }
                        var statusSku = ""+ element.Status_SKU;                        
                        if(statusSku.toUpperCase().includes("CAMBIO PRECIO")){
                            if(element.Price == undefined){
                                status = false;
                                errorDetail.push({ fila:START_ROW, errors:['El valor de precio es obligatorio para status Cambio Precio valor recibido: ['+ element.Price+']'] })
                            }
                        }else{
                            if(element.Price != undefined){
                                status = false;
                                errorDetail.push({ fila:START_ROW, errors:['El valor de precio es obligatorio solo para estatus "Cambio Precio", valor recibido: ['+ element.Price+']'] })
                            }
                        }
                        var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
                        var deliveryDate = ""+element.Original_Delivery_Date;
                        if (!(deliveryDate.match(RegExPattern)) && (element.Original_Delivery_Date!=undefined)) {
                            status = false;
                            errorDetail.push({ fila:START_ROW, errors:['Fecha no válida : ['+ element.Original_Delivery_Date+']'] })
                        }else{
                            var today = moment(moment().format('DD-MM-YYYY'), 'DD-MM-YYYY');
                            var dateTemp = moment(deliveryDate, 'DD-MM-YYYY');
                            if(dateTemp.diff(today, 'days') > 0){
                                status = false;
                                errorDetail.push({ fila:START_ROW, errors:['Fecha de entrega mayor al día actual : ['+ element.Original_Delivery_Date+']'] })
                            }else if(dateTemp.diff(today, 'days') == 0){
                                status = false;
                                errorDetail.push({ fila:START_ROW, errors:['Fecha de entrega tiene que ser menor al día actual : ['+ element.Original_Delivery_Date+']'] })
                            }
                        }
                        if(element.Quantity == undefined){
                            status = false;
                            errorDetail.push({ fila:START_ROW, errors:['Columna Quantity es obligatorio : ['+ element.Quantity+']'] })
                        }else {
                            if(Number.isInteger(element.Quantity)){
                                if(Number(element.Quantity) <= 0 ){
                                    status = false;
                                    errorDetail.push({ fila:START_ROW, errors:['Columna Quantity tiene que ser mayor a cero : ['+ element.Quantity+']'] })
                                }
                            }else{
                                status = false;
                                errorDetail.push({ fila:START_ROW, errors:['Columna Quantity no es un valor númerico : ['+ element.Quantity+']'] })
                            }
                        }
                        if(element.Status_Payment != undefined){
                            var statusPayment = ""+element.Status_Payment;
                            if(!(statusPayment.toUpperCase() == "PAGADO" || statusPayment.toUpperCase() == "NO PAGADO")){
                                status = false;
                                errorDetail.push({ fila:START_ROW, errors:['Columna Status_Payment solo acepta "Pagado" o "No pagado" : ['+ element.Status_Payment+']'] })
                            }
                        }
                        if(element.Status_Shipping != undefined){
                            var statusPayment = ""+element.Status_Shipping;
                            if(!(statusPayment.toUpperCase() == "ENVIADO" 
                                    || statusPayment.toUpperCase() == "PROGRAMADO"
                                        || statusPayment.toUpperCase() == "CANCELADO")){
                                status = false;
                                errorDetail.push({ fila:START_ROW, errors:['Columna Status_Shipping solo acepta "Enviado", "Programado" ó "Cancelado" : ['+ element.Status_Shipping+']'] })
                            }
                        }
                        START_ROW++
                    });
                    data.errorDetail = errorDetail
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
                            await Helpers.asyncForEach(jsonData, async (element) => {
                                const dataInputLogHistory ={
                                    ActivityLogMassiveId: IdLoadMassive,
                                    TypeStatusOrderItemId: null,
                                    OrderItemId: null,
                                    CreatedAtUTC: moment(),
                                    Active: 1,
                                    Store_Id: element.Store_Id,
                                    SKU: element.SKU,
                                    Status_SKU: element.Status_SKU,
                                    Status_Payment: element.Status_Payment,
                                    Status_Shipping: element.Status_Shipping,
                                    Price: element.Price,
                                    Original_Delivery_Date: element.Original_Delivery_Date,
                                    Quantity: element.Quantity
                                }
                                await db.OrderItemStatusHistory.create(dataInputLogHistory, {transaction}) 
                            });
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
            return await serverResponse.classicResponse(token, [authConfig.ROL_PUBLIC], callback);
        }
    }
}

module.exports = Mutations