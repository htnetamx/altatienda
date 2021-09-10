import * as db from '../../database'
import TypeStatusSkuOrderItem from "../../constants/TypeStatusSkuOrderItem";
var moment = require('moment'); 

const checkRowOrderItem = async (data) =>{
    let status = true
    let errors = []
    let OrderItemId = null
    let TypeStatusOrderItemId = null
    try {
        //console.log(data, data.A == undefined)
        if(data.A == undefined ){
            status= false
            errors.push('No existe el valor de OrderId')
            //console.log('data.A', data.A, errors)
        }else{
            if(data.B == undefined ){
                status= false
                errors.push('No existe el valor de Sku')
                //console.log('data.B', data.B, errors)
            }else{
                const dataItem = await db.sequelize.query("select p.Sku, oi.Id as OrderItemId FROM OrderItem oi INNER JOIN Product p ON oi.ProductId = p.Id WHERE oi.OrderId = "+data.A+" and p.Sku = '"+data.B+"'", { type: db.sequelize.QueryTypes.SELECT});
                if(dataItem.length == 1) {
                    OrderItemId = dataItem[0].OrderItemId
                }else if(dataItem.length > 1){
                    status= false
                    errors.push('Existe más de un producto con este SKU.')
                }else {
                    status= false
                    errors.push('No existe el SKU del producto.')
                }
            }
        }   
        TypeStatusOrderItemId = TypeStatusSkuOrderItem[data.C]
        if(TypeStatusOrderItemId == undefined) {
            status = false
            errors.push("El valor del campo Status no existe en el catálogo.")
        } 
        

    } catch (error) {
        status = false
        errors.push(error)
    }
    return {
        status,
        errors,
        OrderItemId,
        TypeStatusOrderItemId
    }
}



module.exports = { 
    checkRowOrderItem
} 