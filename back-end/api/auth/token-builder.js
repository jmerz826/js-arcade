const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'top secret phrase here'

function tokenBuilder(user){
    const payload = {
        subject: user.id,
        name: user.name,
        score: user.score
    }
    const options = {
        expiresIn: '15'
    }
    const token = jwt.sign(payload, JWT_SECRET, options)
    return token
}

module.exports = {tokenBuilder}