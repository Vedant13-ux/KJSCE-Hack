
const db = require('../models');

function chat(io){
    console.log('socket started')
    io.on('connection', (socket) => {
        console.log('new client connected');
        socket.emit('yo', null);
        socket.on('join-room',rid=>{
            socket.join(rid)
        })
        socket.on('leave-room',rid=>{
            socket.leave(rid)
        })
        socket.on('room-message',data){
            db.
            io.to(data.rid).emit(data.message)
        }
        socket.on('disconnect', () => {
            console.log("disconnected")
        });

    });
}
module.exports =chat