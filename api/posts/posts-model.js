// add edit and delete models for posts

const db = require('../../data/db-config')

async function add(post) {
    await db('posts')
    .insert(post)
    // .then(ids => {
    //     return findById(ids[0])
    // });
}

function find() {
    return db('posts')
}

function findBy(filter) {
    return db('posts')
    .where(filter)
}

function findById(post_id) {
    return db('posts')
    .where('posts.post_id', post_id).first()
}


// create delete and update later. Just want to get it working first

module.exports = {
    add, 
    find, 
    findBy,
    findById,
}