const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'top secret phrase here'

function adminTokenBuilder(user){
    const payload = {
        username: user.username
    }
    const options = {
        expiresIn: '1d'
    }
    const token = jwt.sign(payload, JWT_SECRET, options)
    return token
}

function highScoreTokenBuilder(user) {
    const payload = {
        score: user.score
    }
    const options = {
        expiresIn: '20s'
    }
    const token = jwt.sign(payload, JWT_SECRET, options)
    return token;
}

module.exports = {adminTokenBuilder, highScoreTokenBuilder}