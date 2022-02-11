const db = require('../data/db-config')

function getAll() {
    return db('prime-numbers').select('*').orderBy('score', 'desc')
}

function add(highScore){
    return db('prime-numbers').insert(highScore, ['*'])
}

function remove(id) {
    return db('prime-numbers').where({id}).del()
}
module.exports = {getAll, add, remove}