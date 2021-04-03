const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose
    .connect(
        process.env.MONGODB_URI2,
        'mongodb+srv://vedant:1234@cluster0.blpd9.mongodb.net/linkedin?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            keepAlive: true
        }
    )
    .then(() => {
        console.log('Connected');
    })
    .catch((err) => {
        console.log(err.message);
    });

module.exports.User = require('./user');
