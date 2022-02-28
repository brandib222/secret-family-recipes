// add, edit and delete endpoints for posts

const router = require('express').Router()
const Posts = require('./posts-model')


// GET POSTS IS WORKING!!!!
router.get('/', (req, res, next) => {
    Posts.find()
    .then(posts => {
        res.json(posts)
    }).catch(next);
});

// GET POST BY ID IS WORKING!!!!
router.get('/:post_id', (req, res, next) => {
    Posts.findById(req.params.post_id)
    .then(post => {
        res.json(post)
    }).catch(next);
})

module.exports = router