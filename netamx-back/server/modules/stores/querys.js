import serverResponse from "./../../middlewares/server-response";
import authConfig from '../../constants/auth'
var moment = require('moment');  

const Query = (db, rejects, Handlers, bcrypt, Helpers) => {
    return {
        queryTest: async (obj, { input }, {token}, info) => 
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

module.exports = Query