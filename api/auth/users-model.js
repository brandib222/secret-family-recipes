const db = require('../data/db-config');

const getAll = () => {
    return db('users').select('user_id', 'username')
}

const getById = (id) => {
    return db('users')
    .where('user_id', id).first()
}

const findBy = (filter) => {
    return db('users')
    .where(filter)
}

const add = async (user) => {
    const [newUser] = await db('users')
    .insert(user, ['user_id', 'username', 'password'])
    return newUser;
}

module.exports = {
    getAll,
    getById,
    findBy,
    add,
}