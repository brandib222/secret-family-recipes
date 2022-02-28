// add, edit and delete endpoints for posts

const router = require('express').Router()
const Posts = require('./posts-model')


// GET POSTS IS WORKING?
router.get('/', (req, res, next) => {
    Posts.find()
    .then(posts => {
        res.json(posts)
    }).catch(next);
});

// GET POST BY ID IS WORKING?
router.get('/:user_id', (req, res, next) => {
    posts.findById(req.params.user_id)
    .then(user => {
        res.json(user)
    }).catch(next);
})

module.exports = router