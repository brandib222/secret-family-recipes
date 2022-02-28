const db = require('../../data/db-config')

async function add(user) {
    await db('users')
    .insert(user)
    // .then(ids => {
    //     return findById(ids[0])
    // });
}

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users')
    .where(filter)
}

function findById(user_id) {
    return db('users')
    .where('users.user_id', user_id).first()
}

// create add, delete, and update later. Just want to get it working first

module.exports = {
    add, 
    find, 
    findBy,
    findById,
}