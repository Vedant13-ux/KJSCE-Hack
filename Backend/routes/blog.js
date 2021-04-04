const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/allBlogs', (req, res, next) => {
    db.Blog.find().populate('author', 'name role')
        .then((blogs) => {
            return res.send(blogs);
        }).catch((err) => {
            next(err);
        });
})

router.get('/blogContent/:id', (req, res, next) => {
    db.Blog.findById(req.params.id).populate('author', 'name role')
        .then((blog) => {
            return res.send(blog);
        }).catch((err) => {
            next(err);
        });
})

router.post('/blogContent', (req, res, next) => {
    db.Blog.create(req.body)
        .then((blog) => {
            return res.send(blog);
        }).catch((err) => {
            next(err);
        });
})


module.exports = router