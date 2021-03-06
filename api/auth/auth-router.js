const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = require('express').Router()
const User = require('../users/users-model')

const { JWT_SECRET } = require('../secrets/index')

router.post('/register', (req, res, next) => {

    //return console.log(user) SO IT'S NOT ABOVE THIS LINE
    
         // users are being added so i think it might be an httpie thing?
         // but users are showing in the database and the passwords are indeed encrypted
         
    const { username, password } = req.body

    const hash = bcrypt.hashSync(password, 1)

     User.add({ username, password: hash })
        .then(newUser => {
            res.status(201).json({
                user_id: newUser.user_id,
                username: newUser.username,
                password: newUser.password
            })
        }).catch(next)
        
});

router.post('/login', (req, res, next) => {

    if(bcrypt.compareSync(req.body.password, req.user.password)) {
        console.log(req.body.password, req.user.password)
        const token = buildToken(req.user)
        res.json({
            message: `Welcome, ${req.user.username}!`,
            token, 
        })
    } else {
        next({status: 401, message: 'invalid password'})
    }
});

function buildToken(user) {
    const payload = {
        subject: user.user_id,
        username:user.username,
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = router