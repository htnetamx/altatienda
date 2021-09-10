import serverResponse from "../../middlewares/server-response";
import encrypt from "../../middlewares/encrypt";
import authConfig from '../../constants/auth'
import messages from '../../constants/messagesResponses'
import bcrypt from "bcrypt-nodejs";

require('../../config/config');
var moment = require('moment');  
var XLSX = require('xlsx');


const Mutations = (db, rejects, Handlers, Helpers, bcrypt) => {
    return {
        createUser: async (obj, { input }, {token}, info) => 
        {
            const callback = async () => {
                try {
                    const nameUser = 'adminNeta'
                    const Password= 'Neta12345+'
                    const result  = await db.Superheroe.findOne({ where: { NameUser: nameUser }});
                    if(result !== null) {
                        return {
                            statusCode: 404,
                            message: "error",
                            error: 'Nombre de usuario duplicado. La cuenta NO fue creada.',
                            response: ""
                        };
                    }
                    
                    
                    try {
                        let dataUser = {
                            Name1: 'Hugo',
                            Name2: '',
                            LastName1: '',
                            LastName2: '',
                            Email: 'neta@default.mx',
                            NameUser: nameUser,
                            Active:1,
                            RoleId:1,
                            CreatedAtUTC: moment()
                        }
                        const salt = bcrypt.genSaltSync(10);
                        const hash = bcrypt.hashSync(Password, salt);
                        dataUser.Password= hash
                        // const resultDataUser  = await db.Superheroe.create(dataUser);
                        let dataCreateUser = resultDataUser.get({ plain: true })

                        const cresultServer = {
                            statusCode: 200,
                            message: "success",
                            error: "",
                            response:  '',
                        };
                        return cresultServer;
                    } catch (error) {
                        console.log("error => "+ error);
                        return {
                            statusCode: 404,
                            message: "error",
                            error: 'Error al crear cuenta',
                            response: ""
                        };
                    }
                    
                } catch (error) {
                    const resultServer = {
                        statusCode: 404,
                        message: "error",
                        error: error,
                        response: ""
                    };
                    return resultServer;
                }
                
            }
            const roles = [authConfig.ROL_NETAMX];
            return await serverResponse.classicResponse(token, roles, callback);
        },
        login: async (obj, { input }, {token, res, headers, req}, info) => 
        {
            //console.log('headers', headers)
            // params async (obj, args, context, info)
            const callback = async () => {
                let dataLog = {}
                try {
                    let resultServer 
                    let responseStringError = {
                        error: 'No es posible iniciar sesión'
                    }
                    const result  = await db.Superheroe.findOne({ where: { nameUser: input.nameUser, active:true  },
                        attributes: ['Id', 'Password','Email', 'Name1']
                    });
                    if(result !== null) {
                        let dataSuperheroe = result.get({ plain: true })
                        if (!bcrypt.compareSync(input.password, dataSuperheroe.Password)) {
                        // if (!true) {
                            resultServer = {
                                statusCode: 400,
                                message: "error",
                                error: "Contraseña incorrecta",
                                response: JSON.stringify(responseStringError),
                            }
                        }else{
                            //const dataStatusUser = Handlers.rolesByUser(input.source, dataSuperheroe.catalog_user.company_id, dataSuperheroe.catalog_user.collaborator_id);
                                let resultSession = await db.LoginAttempts.create({SuperHeroeId: dataSuperheroe.Id, CreatedAtUTC: moment()})
                                let dataResultSesion = resultSession.get({ plain: true });
                                const userDataRes = { 
                                    idCont:  dataSuperheroe.Id,
                                    firstName: dataSuperheroe.Name1,
                                    middleName:'',
                                    fathersLastName:'',
                                    mothersLastName:'',
                                    idSession: dataResultSesion.Id,
                                    idCatRelAction: "", //esto es innecesario no tenemos esta relacion
                                    ProfilePicture: "",
                                    Email: dataSuperheroe.Email, 
                                    Email1:'',
                                    nameUser:  input.nameUser,            
                                    BirthDate: "",
                                    Gender: "",
                                    roles: { [authConfig.ROL_NETAMX]: true, [authConfig.ROL_PUBLIC]: true },
                                    superheroeId: dataSuperheroe.Id,
                                    idUser: dataSuperheroe.Id, 
                                }
                                const options = {
                                    maxAge: 1000 * 60 * 60 * 24,
                                    httpOnly: true, // cookie is only accessible by the server
                                    secure: true, // only transferred over https
                                    //sameSite: true, // only sent for requests to the same FQDN as the domain in the cookie original CORU
                                    sameSite: 'None'
                                    };
                                    // Coru sameSite: true y sin habilitar opcion de secure
                                    const newToken = encrypt.createToken(
                                    userDataRes,
                                    process.env.SEED,
                                    "24h"
                                    );
                                console.log('token', newToken)
                                res.cookie("sessionToken", newToken, options);

                                let responseString = {
                                    token:newToken,
                                    ...userDataRes
                                }
                                resultServer = {
                                    statusCode: 200,
                                    message: "success",
                                    error: "",
                                    response: JSON.stringify(responseString),
                                }
                        }
                    } else {
                        resultServer = {
                            statusCode: 404,
                            message: "error",
                            error: 'Usuario no existe.',
                            response: JSON.stringify(responseStringError)
                        }
                    }
                    return resultServer;
                } catch (error) {
                    return {
                        statusCode: 404,
                        message: "error",
                        error: error,
                        response: ""
                    };
                }
            }
            const roles = [authConfig.ROL_PUBLIC];
            return await serverResponse.classicResponse(token, roles, callback);
        },
        logout: async (obj, { input }, {token, res}, info) => 
        {
            const callback = async () => {
                try {
                    const options = {
                        maxAge: 1000 * 60 * 60 * 24,
                        httpOnly: true, // cookie is only accessible by the server
                        //secure: true, // only transferred over https
                        sameSite: true, // only sent for requests to the same FQDN as the domain in the cookie
                    };
                    let tokenNew = encrypt.createToken({}, process.env.SEED, '24h')
                    res.cookie("sessionToken", tokenNew, options);
                    const resultServer = {
                        statusCode: 200,
                        message: "success",
                        error: "",
                        response: ""
                    };
                    return resultServer;
                } catch (error) {
                    return Handlers.errorCatch(error);
                }
            }
            const roles = [authConfig.ROL_NETAMX, authConfig.ROL_PUBLIC]; 
            return await serverResponse.classicResponse(token, roles, callback);
        }
        
    }
}

module.exports = Mutations