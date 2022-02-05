const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()
server.use(express.json())

server.use(cors())
server.use(helmet())


// error catcher
server.use('/', (err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({message: `${req.method} could not be performed, ` + err.message, stack: err.stack})
})

module.exports = server