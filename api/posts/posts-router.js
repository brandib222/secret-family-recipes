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
// router.get('/:post_id', (req, res, next) => {
//     Posts.findById(req.params.post_id)
//     .then(post => {
//         res.json(post)
//     }).catch(next);
// })

// // CREATE POST
// router.post('/', (req, res, next) => {
//     Posts.add(req.body)
//         .then(newPost => {
//             res.status(201).json(newPost)
//         }).catch(err => {
//             res.status(500).json({message:'Failed to create new post'})
//         });
// });

// // DELETE POST
// router.delete('/:post_id', (req, res, next) => {
//     Posts.remove(req.body)
//         .then(newPost => {
//             res.status(201).json({message: 'Post was deleted!'})
//         }).catch(err => {
//             res.status(500).json({message:'Failed to delete new post'})
//         });
// });

// // EDIT POST 
// router.put('/:post_id', (req, res, next) => {
//     Posts.edit(req.body)
//         .then(editedPost => {
//             res.status(201).json(editedPost)
//         }).catch(err => {
//             res.status(500).json({message:'Failed to edit post'})
//         });
// });

module.exports = router