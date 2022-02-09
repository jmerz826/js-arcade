const db = require('../data/db-config');

function getAll() {
    return db('reaction-speed');
}


module.exports = {getAll};