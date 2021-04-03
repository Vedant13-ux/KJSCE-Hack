
const db = require('./models');

function chat(io){
    console.log('socket started')
    io.on('connection', (socket) => {
        console.log('new client connected');
        socket.emit('yo', null);
        socket.on('join-room',rid=>{
            socket.join(rid)
            db.Appointment.findById(rid).populate({path:'messages',populate:{path:"author"}}).populate("counsellor").then(a=>{
                socket.emit('get-rmess',a)
            })
        })
        socket.on('leave-room',rid=>{
            socket.leave(rid)
        })
        socket.on('room-message',data=>{
            db.Message.Create(data.message,m=>{
                db.Appointment.findById(data.rid).then(a=>{
                    a.messages.push(m)
                })
                io.to(data.rid).emit(data.message)
            })
            
        })
        socket.on('disconnect', () => {
            console.log("disconnected")
        });

    });
}
module.exports =chat