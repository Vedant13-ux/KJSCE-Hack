function chat(io){
    console.log('socket started')
    io.on('connection', (socket) => {
        console.log('new client connected');
        socket.emit('connection', null);
        socket.on('channel-join', id => {
            console.log('channel join', id);
            return id;
        });
        socket.on('send-message', message => {
            io.emit('message', message);
        });

        socket.on('disconnect', () => {
            console.log("disconnected")
        });

    });
}
module.exports =chat