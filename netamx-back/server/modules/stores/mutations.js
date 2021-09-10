import serverResponse from "./../../middlewares/server-response";
import encrypt from "./../../middlewares/encrypt";
import authConfig from '../../constants/auth'
import messages from '../../constants/messagesResponses'
require('../../config/config');
var moment = require('moment');

const Mutations = (db, rejects, Handlers, Helpers, bcrypt) => {
    return {
        createStore: async (obj, { input }, {token}, info) =>
        {
            const callback = async () => {
                try {
                    const {storeName, companyName, companyAddress, companyPhoneNumber,hunter,placeId} = input;
                    var nameStoreArray = storeName.toLowerCase().split(" ");
                    var nameStoreTemp = "";
                    // for (var i=0; i < nameStoreArray.length; i++) {
                    //     if(i == nameStoreArray.length - 1)
                    //         nameStoreTemp =  nameStoreTemp + nameStoreArray[i]
                    //     else
                    //         nameStoreTemp = nameStoreTemp + nameStoreArray[i] + "_"
                    //  }
                    for (var i=0; i < nameStoreArray.length; i++) {
                        nameStoreTemp =  nameStoreTemp + nameStoreArray[i]
                    }
                    const response= await axios.get("https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyBB4T59gcXepqvOWCO34dKOnbntyATO3r4&placeid=" + placeId);
                    var urlStore = `https://${nameStoreTemp}.netamx.app/`;
                    var host = `${nameStoreTemp}.netamx.app`;
                    const resultQueryStore = await db.Store.findOne({where: {Url: urlStore}})
                    if(resultQueryStore == null && response!=null){
                        await db.Store.create(
                            {
                                Name: storeName,
                                Url: urlStore,
                                Hosts: host,
                                CompanyName: companyName,
                                CompanyAddress: companyAddress,
                                CompanyPhoneNumber: companyPhoneNumber,
                                DisplayOrder: 1,
                                SslEnabled: 0,
                                DefaultLanguageId: 0,
                                CreatedOnUtc : moment(),
                                Hunter: hunter,
                                Latitud: response.data.result.geometry.location.lat,
                                Longitud: response.data.result.geometry.location.lng
                            }
                        )
                        return {
                            statusCode: 200,
                            message: "success2",
                            error: "",
                            response: JSON.stringify({
                                url: urlStore
                            })
                        };
                    }else{
                        return {
                            statusCode: 401,
                            message: "url registrado",
                            error: '',
                            response: ""
                        }
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