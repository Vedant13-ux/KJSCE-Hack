const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose
    .connect(
        process.env.MONGODB_URI,
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
module.exports.Conversation = require('./conversation');
module.exports.Message = require('./messages');
module.exports.Course = require('./courses');
module.exports.Appointment = require('./appointment');
module.exports.User = require('./user');

