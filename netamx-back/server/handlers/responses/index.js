const errorCatch = (error) =>{
    return {
        statusCode: 400,
        message: "error",
        error: error,
        response: ''
    };
}
const responseSuccess = (response) =>{
    return {
        statusCode: 200,
        message: "success",
        error: "",
        response
    };
}
const responseMasiveSuccess = () =>{
    return {
        statusCode: 200,
        errorDocument: "",
        errorDetail: ""
    };
}
const responseMasiveError = (statusCode, error, errorDetail) =>{
    return {
        statusCode: statusCode,
        errorDocument: error,
        errorDetail: JSON.stringify(errorDetail)
    };
}
const responseError = (error, response) =>{
    return {
        statusCode: 400,
        message: "error",
        error,
        response
    };
}
module.exports = { 
    errorCatch,
    responseSuccess,
    responseError,
    responseMasiveSuccess,
    responseMasiveError
} 