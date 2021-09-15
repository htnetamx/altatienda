import serverResponse from "../../middlewares/server-response";
import authConfig from '../../constants/auth'
var moment = require('moment');  

const Query = (db, rejects, Handlers, bcrypt, Helpers) => {
    return {
        getHuntersList: async (obj, { input }, {token}, info) => 
        {
            const callback = async () => {
                try {
                    const data = await db.sequelize.query("select h.Id, h.Name from Hunter h", { type: db.sequelize.QueryTypes.SELECT});
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