const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    content: String,
    title: String,
    author:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: Number


});

module.exports = mongoose.model('Blog', blogSchema);