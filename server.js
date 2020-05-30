import express from 'express'
import morgan from 'morgan'
import compression from 'compression'
import bodyParser from 'body-parser'
import cors from 'cors'

import ApiRoute from './routes/api.route'

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const app = express()
const port = Number(process.env.PORT || 8000)

if(process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}
else {
  app.use(compression());
}

/* SUPPORT TYPE */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/* CORS */
app.use(cors())

/* ROUTE */
app.get('/', (req, res)=>{
  res.json({message: 'Welcome to SCG assignment server !'})
})
app.use('/api', ApiRoute);

app.listen(port,() => {
  console.log(`Listening at ${port}`)
});