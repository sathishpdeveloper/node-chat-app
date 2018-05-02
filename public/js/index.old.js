var socket=io();
socket.on('connect', function () {
    console.log('Connected to the server');

    // socket.emit('createEmail',{
    //     to:"sat@s.com",
    //     text:"Hey this is sathish",
    //     Subject:"Hi"
    // });

    socket.emit('createMessage',{
        to:"sathish@chat.com",
        text:"Hello sathish, u around?"
    })


});
socket.on('disconnect',function () {
    console.log('Disconnected from the server');
});

// socket.on('newEmail', function(email){
//     console.log("Received a new email : ",email);

// });

socket.on('newMessage', function (message) {
    console.log('newMessage : ', message);
});
