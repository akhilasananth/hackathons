import express from 'express'
import router from './routes'

const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

const app = express()

const port = 8000
// router(app)
app.listen(port, () => {
  console.log('We are live on ' + port)
})