import serverResponse from "../../middlewares/server-response";
import authConfig from '../../constants/auth'
var moment = require('moment');  

const Query = (db, rejects, Handlers, bcrypt, Helpers) => {
    return {
        getStoreTypeList: async (obj, { input }, {token}, info) => 
        {
            const callback = async () => {
                try {
                    var data = await db.sequelize.query("select st.Id, st.Name from StoreTypes st Where st.Name!='Otro' Order by st.Name", { type: db.sequelize.QueryTypes.SELECT});
                    var defaults = await db.sequelize.query("select st.Id, st.Name from StoreTypes st Where st.Name='Otro' Order by st.Name", { type: db.sequelize.QueryTypes.SELECT});
                    data.push(defaults[0]);
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