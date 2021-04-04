const express = require('express');
const app = express();
app.disable('etag').disable('x-powered-by');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const socket = require('socket.io');


var server = require('http').createServer(app);
const io = socket(server, {
    cors: {
        origin: '*',
    }
});
server.listen(process.env.PORT || 3001, process.env.IP, () => {
    console.log('Server Listening on Port 3001')
})
require('./Chat')(io);
// require('./seed')();

const errorHandler = require('./handlers/errorHandler');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Database
require('./models/index');

// ROutes

const authRoutes = require('./routes/auth');
const appRoutes = require('./routes/appointment');
const blogRoutes = require('./routes/blog');


// // Incuding Routes
app.use('/api/auth', authRoutes);
app.use('/api/appointment', appRoutes);
app.use('/api/blog', blogRoutes);


app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(errorHandler);
