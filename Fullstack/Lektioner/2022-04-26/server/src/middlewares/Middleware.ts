import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import StatusCode from "../utils/StatusCode";
import MorganMiddleware from "./MorganMiddleware";

dotenv.config()
const env = process.env.NODE_ENV || 'production'

const allowedOrigins = ['http://localhost:3000']
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE']

const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: allowedMethods
}

const applyMiddlewares = (app: express.Application) => {
    app.use(cors(options))
    app.use(helmet())
    app.use(MorganMiddleware)
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
}