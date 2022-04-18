import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import fetch from "node-fetch"

const app =  express()

export default express()
  .use(helmet())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
  .use(cors({ origin: true, credentials: true }))

  .get('/', (req: Request, res: Response) =>
    res.send('HEY WELCOME TO MY SERVER 🥳')
  )
  .get('/test', (req: Request, res: Response) => {
    let protectedUrl:string = 'https://api.github.com/'
   fetch(protectedUrl)
   .then(data => data.json())
   .then(data => res.send(data))
   .catch(error => {
     console.error('Error:', error)
   })
})

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

