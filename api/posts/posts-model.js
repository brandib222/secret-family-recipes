// add edit and delete models for posts

const db = require('../../data/db-config')

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

async function add(post) {
    const [id] = await db('posts').insert(post);
    return findById(id);
    // await db('posts')
    // .insert(post)
    // .then(ids => {
    //     return findById(ids[0])
    // });
}

async function remove(post) {
    await db('posts')
    .delete(post)
}

async function edit(post) {
    await db('posts')
    .update(post)
}

// create delete and update later. Just want to get it working first

module.exports = {
    add, 
    find, 
    findBy,
    findById,
    remove,
    edit
}