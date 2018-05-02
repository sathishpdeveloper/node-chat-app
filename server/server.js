const path=require('path');
const http=require('http');
const express=require('express');
const socketIO=require('socket.io');

const publicPath=path.join(__dirname,'../public');
const port = process.env.PORT||3000;
var app = express();
var server=http.createServer(app);
var io=socketIO(server);

io.on('connection',(socket)=>{
    console.log('New user connected');

    // socket.emit('newEmail', {
    //     from:"s@s.com",
    //     subject:" Hi",
    //     text:"Hey whats going on?",
    //     createdAt:123
    // });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail',newEmail);

    // });

    socket.emit('newMessage',{
        from:'john',
        text : 'see you',
        createdAt:123123
    });

    socket.on('createMessage',(message)=>{
        console.log('creating a message',message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
});


app.use(express.static(publicPath));

server.listen(port, ()=> {
    console.log(`Server is up on port ${port}`);
});


