const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/allBlogs', (req,res,next)=>{
    db.Blog.find().populate('author', 'name')
    .then((blogs) => {
        db.User
    }).catch((err) => {
        
    });
})

module.exports=router