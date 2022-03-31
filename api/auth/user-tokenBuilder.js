const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');

const buildToken = (user) => {
    const payload = {
        subject: user.id,
        username: user.username
    };
    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = {
    buildToken
}