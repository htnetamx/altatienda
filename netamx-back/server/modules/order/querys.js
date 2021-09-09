import serverResponse from "./../../middlewares/server-response";
import authConfig from '../../constants/auth'
var moment = require('moment');  

const Query = (db, rejects, Handlers, bcrypt, Helpers) => {
    return {
        getListLogCreateMassiveUpdateStatusSkus: async (obj, { input }, {token}, info) => 
        {
            const callback = async () => {
                try {
                    const data = await db.sequelize.query("select alcm.Id, alcm.NameAction, alcm.CreatedAt, alcm.UpdatedAt, alcm.Error, alcm.Status, alcm.Detail, alcm.Description from ActivityLogCreateMassive alcm where alcm.NameAction ='Actualiza status de SKU'", { type: db.sequelize.QueryTypes.SELECT});
                    console.log(data)
                    return {
                        statusCode: 200,
                        message: "success",
                        error: '',
                        response: JSON.stringify(data)
                    }
                } catch (error) {
                    return Handlers.errorCatch(error)
                }
            }
            return await serverResponse.classicResponse(token, [authConfig.ROL_NETAMX], callback);
        }
    }
}

module.exports = Query