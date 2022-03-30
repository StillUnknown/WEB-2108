import dotenv from 'dotenv'
import StatusCode from "../configurations/StatusCode.js";

dotenv.config()

const notFound = (req, res, next) => {
    const error = new Error(`Not found: ${ req.originalUrl }`)
    res.status(StatusCode.NOT_FOUND)
    next(error)
}

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === StatusCode.OK ? StatusCode.INTERNAL_SERVER_ERROR : res.statusCode
    res.status(statusCode)
    res.json({
        statusCode: statusCode,
        message: error.message,
        stackTrace: process.env.ENVIRONMENT === 'development' ? error.stack : 'lol'
    })
    next()
}

export default {
    notFound,
    errorHandler
}