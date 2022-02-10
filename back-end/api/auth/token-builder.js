const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'top secret phrase here'

function adminTokenBuilder(user){
    const payload = {
        subject: user.id,
        name: user.name,
        score: user.score
    }
    const options = {
        expiresIn: '1d'
    }
    const token = jwt.sign(payload, JWT_SECRET, options)
    return token
}

module.exports = {adminTokenBuilder}