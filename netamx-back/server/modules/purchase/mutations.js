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
        createProcurement: async (obj, { input }, {token}, info) =>
        {
            const callback = async () => {
                let transaction =await db.sequelize.transaction();
                try {
                    const {doc, Description} = input;
                    const nameAction ='Registro de compras';
                    let incidentsData = await doc
                    var workbook = XLSX.read(incidentsData.File.body, {type:"base64"});
                    var sheet_name_list = workbook.SheetNames;
                    var jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {raw: true});
                    let errorData = {}
                    let START_ROW = 2
                    let errorDetail = []
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
                        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]],{ raw: false, range:"A1"+":I1", header:"A" });
                        var errorLayout = Handlers.validateLayout(xlData[0]);
                        if(errorLayout.length >= 1){
                            return {
                                statusCode: 401,
                                message: "El documento no cumple con el layout requerido",
                                error: "",
                                response: JSON.stringify({errorDocument : "Columnas faltantes en el documento : "+ JSON.stringify(errorLayout)})
                            };
                        }
                        await Helpers.asyncForEach(jsonData, async (element) => {
                            console.log('Element=>', element)
                            const queryProduct = await db.Product.findOne({ where: { Sku:`${element.SKUNeta}` }});
                            if(queryProduct == null){
                                if(!JSON.stringify(element).includes("EMPTY")){
                                    productError.push(element);
                                    errorDetail.push({ fila:START_ROW, errors:['El producto con Sku '+ element.SKUNeta+' no existe.'] })
                                }
                            }else{
                                let queryProductTemp = queryProduct.get({ plain: true })
                                productUpdate.push({
                                    idProduct: queryProductTemp.Id,
                                    stockQuantity: queryProductTemp.StockQuantity,
                                    ...element
                                })
                            }
                            if(element.Purchase_id == undefined){
                                productError.push(element);
                                errorDetail.push({ fila:START_ROW, errors:['El campo Purchase_id es obligatorio ['+ element.Purchase_id+']'] })
                            }
                            START_ROW++
                        });
                        //errorData.errorDetail = errorDetail

                        if(productError.length == 0){
                        // if(productError.length == 0){
                            let inputMassive = {
                                NameAction: nameAction,
                                CreatedAt : moment(),
                                UpdatedAt : moment(),
                                Description,
                                Status : true
                            }
                            try {
                                const dataResponseActivityLog = await db.ActivityLogCreateMassive.create(inputMassive, {transaction})
                                const dataResponseActivityLogTemp = dataResponseActivityLog.get({ plain: true });
                                const IdLog = dataResponseActivityLogTemp.Id
                                await Helpers.asyncForEach(productUpdate, async (element) => {
                                    let inputPurchase = {
                                        SkuNeta: element.SKUNeta,
                                        PurchasePrice: element.PurchasePrice,
                                        IVA: element.IVA,
                                        Quantity: element.Quantity,
                                        Supplier: element.Supplier,
                                        IdSupplier: element.SupplierId,
                                        Box: element.Caja,  
                                        Date:moment(element.Date),
                                        CreateAt: moment(),
                                        UpdateAt: moment(),
                                        IdActivityLogCreateMassive: IdLog,
                                        IdProduct: element.idProduct,
                                        PurchaseId: element.Purchase_id
                                    }
                                    const responsePurchase = await db.Purchase.create(inputPurchase, {transaction})
                                    var quantityTemp = Number(element.stockQuantity) + Number (element.Quantity);
                                    const dataUpdate ={
                                        StockQuantity: quantityTemp
                                    }
                                    await db.Product.update(dataUpdate, { where: { Id: element.idProduct } })
                                });
                            } catch (error) {
                                if (transaction) await transaction.rollback();
                                // return Handlers.responseMasiveError(401,"error en el proceso de actualización de precios", {});
                                return {
                                    statusCode: 400,
                                    message: "error en el proceso de registro de compras",
                                    error: error.message,
                                    response: JSON.stringify({errorDocument : error.messages})
                                };
                            }
                            await transaction.commit();
                            return Handlers.responseSuccess();
                        }else{
                            return {
                                statusCode: 402,
                                message: "",
                                error: "",
                                response: JSON.stringify({errorDetail, errorDocument: ''})
                            };
                        }
                    }
                } catch (error) {
                    console.log(error);
                    if (transaction) await transaction.rollback();
                    // return Handlers.responseMasiveError(401,error.messages, {});
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