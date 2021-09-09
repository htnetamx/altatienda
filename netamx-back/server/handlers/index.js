import {
    errorCatch,
    responseSuccess,
    responseError,
    responseMasiveSuccess,
    responseMasiveError
} from './responses'

import {
    dataUserLogIn,
    rolesByUser
} from './auth'

import {
    checkRowProduct,
    checkRowPromotionsProducts,
    withoutFoundRepetProduct
} from './products'

import {
    checkRowOrderItem
} from './order'

import {
    validateLayout
} from './purchase'

const Handlers = {
    rolesByUser:(source, company_id, collaborator_id) => rolesByUser(source, company_id, collaborator_id),
    dataUserLogIn: (token) => dataUserLogIn(token),
    errorCatch: (error) => errorCatch(error),
    responseSuccess:(response) => responseSuccess(response),
    responseError:(error, response) => responseError(error, response),
    checkRowProduct:(data) => checkRowProduct(data),
    checkRowPromotionsProducts:(data) => checkRowPromotionsProducts(data),
    checkRowOrderItem:(data) => checkRowOrderItem(data),
    responseMasiveSuccess:() => responseMasiveSuccess(),
    responseMasiveError: (statusCode, error, errorDetail) => responseMasiveError(statusCode, error, errorDetail),
    withoutFoundRepetProduct:(data) => withoutFoundRepetProduct(data),
    validateLayout: (layout) => validateLayout(layout)
}

module.exports = Handlers