const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'top secret phrase here'

const restricted = (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return next({status: 401, message: 'you aren\'t authorized to make this request'})
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return next({status:401, message: 'invalid token.. nice try'})
        }
        req.decodedJwt = decoded
        next()
    })
}

module.exports = {restricted}