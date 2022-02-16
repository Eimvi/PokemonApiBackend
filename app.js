'use-strict'

const express = require('express')
const cors = require('cors')

const routes = require('./src/routes/routes')
const { PORT } = require('./src/domain/properties')
const DB = require('./src/domain/db')

//Init DB
DB() 

const { Router, json, urlencoded } = express
const app = express()
const router = Router()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())

app.use('/api', router)
app.use( function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*') 
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method') 
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE') 
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE') 
    next() 
}) 
routes(router)

app.use(router)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})