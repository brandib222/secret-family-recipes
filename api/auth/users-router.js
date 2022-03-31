const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { usernameExists, validateUser} = require('../middleware/users-middleware');
const { buildToken } = require('./user-tokenBuilder');
const { BCRYPT_ROUNDS } = require('../secrets');
const User = require('./users-model');

router.get('/', (req, res, next) => {
    User.getAll()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            next(err)
        })
})

router.post('/register', usernameExists, validateUser, async (req, res, next) => {
    let user = req.body;
    
    const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS);
    user.password = hash;

    User.add(user)
        .then(newUser => {
            res.status(201).json({ message: `Welcome, ${newUser.username}!`})
        })
        .catch(err => {
            next(err)
        })
});

router.post('/login', validateUser, (req, res, next) => {
    let {username, password} = req.body;

    User.findBy({username})
    .then(([user]) => {
        if(user && bcrypt.compareSync(password, user.password)) {
            const token = buildToken(user)
            res.status(200).json({
                message: `Welcome, ${username}!`, 
                token
            })
        } else {
            next({ status: 401, message: 'The credentials you have entered are invalid. Please try again.'})
        }
    })
});

module.exports = router;