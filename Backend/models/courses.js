const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    image: String,
    link: String,
    description: String
});
module.exports = mongoose.model('course', courseSchema);