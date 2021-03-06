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


    socket.emit('newMessage', {
        from:'Admin',
        Message:'Welcome to my chat room'
    });

    socket.broadcast.emit('newMessage',{
        from:'Admin',
        Message:'New user joined',
        createdAt: new Date().getTime()
    });



    // socket.on('createMessage',(message)=>{
    //     console.log('creating a message',message);
    //     io.emit('newMessage', {
    //         from:message.from,
    //         text:message.text,
    //         createdAt:new Date().getTime()
    //     })
    // });

    // lets try if proxy works now

    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
});


app.use(express.static(publicPath));

server.listen(port, ()=> {
    console.log(`Server is up on port ${port}`);
});


