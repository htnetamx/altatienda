import serverResponse from "./../../middlewares/server-response";
import encrypt from "./../../middlewares/encrypt";
import authConfig from '../../constants/auth'
import messages from '../../constants/messagesResponses'
import axios from 'axios'
require('../../config/config');
var moment = require('moment');

const Mutations = (db, rejects, Handlers, Helpers, bcrypt) => {
    return {
        createStore: async (obj, { input }, {token}, info) =>
        {
            const callback = async () => {
                try {
                    const {storeName, companyName, companyAddress, companyPhoneNumber,companyPhoneNumber2,tipoId,hunterId,placeId} = input;
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
                    var googel_api_key='AIzaSyBB0EC3OqxZ3XAlJq3MOMlngkY4fBebofw';
                    
                    const response= await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyBB0EC3OqxZ3XAlJq3MOMlngkY4fBebofw&placeid=` + placeId);
                    //var urlStore = `https://${nameStoreTemp}.netamx.app/`;
                    var urlStore = `http://${nameStoreTemp}.netamx.app/`;
                    var host = `${nameStoreTemp}.netamx.app`;
                    const resultQueryStore = await db.Store.findOne({where: {Url: urlStore}})
                    if(resultQueryStore == null && response!=null){
                        const lat=response.data.result.geometry.location.lat;
                        const lng=response.data.result.geometry.location.lng;
                        var config = {
                            params: {
                              key: `${googel_api_key}`,
                              latlng: lat+","+lng,
                              result_type: "administrative_area_level_3"
                            },
                          }
                        const response2= await axios.get("https://maps.googleapis.com/maps/api/geocode/json",config);
                        config = {
                            params: {
                              key: `${googel_api_key}`,
                              latlng: lat+","+lng,
                              result_type: "sublocality_level_1"
                            },
                          }
                        const response3= await axios.get("https://maps.googleapis.com/maps/api/geocode/json",config);
                        config = {
                            params: {
                              key: `${googel_api_key}`,
                              latlng: lat+","+lng,
                              result_type: "postal_code"
                            },
                        }
                        const response4= await axios.get("https://maps.googleapis.com/maps/api/geocode/json",config);
                        var delegacion;
                        try{
                            delegacion=response2.data.results[0].address_components[0].long_name;
                        }
                        catch{
                            delegacion="";
                        }
                        var colonia;
                        try{
                            colonia=response3.data.results[0].address_components[0].long_name;
                        }
                        catch{
                            colonia="";
                        }
                        var zipcode;
                        try{
                            zipcode=response4.data.results[0].address_components[0].long_name;
                        }
                        catch{
                            zipcode="";
                        }
                        await db.Store.create(
                            {
                                Name: storeName,
                                Url: urlStore,
                                Hosts: host,
                                CompanyName: companyName,
                                CompanyAddress: companyAddress,
                                CompanyPhoneNumber: companyPhoneNumber,
                                CompanyPhoneNumber2: companyPhoneNumber2,
                                TipoId: tipoId,
                                DisplayOrder: 2,
                                //SslEnabled: 0,
                                SslEnabled: 1,
                                DefaultLanguageId: 0,
                                CreatedOnUtc : moment(),
                                HunterId: hunterId,
                                Longitud: lng,
                                Latitud: lat,
                                Delegacion:delegacion,
                                Colonia:colonia,
                                PlaceId:placeId,
                                FormattedAddress:response.data.result.formatted_address,
                                ZipCode: zipcode,
                                NetaCoin: 0
                            }
                        )
                        return {
                            statusCode: 200,
                            message: "success2",
                            error: "",
                            response: JSON.stringify({
                                url: urlStore,
                                storeName: storeName
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