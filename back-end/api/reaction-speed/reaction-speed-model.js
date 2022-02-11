const db = require('../data/db-config');

function getAll() {
    return db('reaction-speed');
}

// function getById(id) {
//     return db('reaction-speed').where({id}).first()
// }

function add(newScore) {
    return db('reaction-speed').insert(newScore, ['*'])
}

function remove(id) {
    return db('reaction-speed').where({id}).del()
}


module.exports = {getAll, add, remove};