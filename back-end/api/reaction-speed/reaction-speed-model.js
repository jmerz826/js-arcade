const db = require('../data/db-config');

function getAll() {
    return db('reaction-speed');
}

function getById(id) {
    return db('reaction-speed').where({id})
}

async function add(newScore) {
    return db('reaction-speed').insert(newScore, ['*'])
}


module.exports = {getAll, add};