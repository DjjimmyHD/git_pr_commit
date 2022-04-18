import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
const app =  express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(cors({origin: true, credentials: true}))

app.use(notFound)
app.use(errorHandler)

function notFound( request: Request,
    response: Response,
    _next: NextFunction): void {
  response .status(404).send({error: 'Not found!', status: 404, url: request.originalUrl})
}


function errorHandler(  error: Error,
    request: Request,
    response: Response,
    _next: NextFunction) {
  console.error('ERROR', error)
  const stack =  process.env.NODE_ENV !== 'production' ? error.stack : undefined
  response.status(500).send({error: error.message, stack, url: request.originalUrl})
}

module.exports = app