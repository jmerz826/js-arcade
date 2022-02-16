const Filter = require('bad-words')
const filter = new Filter()

const profanityFilter = (req, res, next) => {
    const filteredUsername =  filter.clean(req.body.name)
    req.user = {
        ...req.body,
        name: filteredUsername
    }
    next()
}

module.exports = {profanityFilter}
