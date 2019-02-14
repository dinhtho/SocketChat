var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname +'/client.html');
  });

  io.on('connection', function(socket){
    socket.on('send', function(data){
      io.emit('send', data);
    });
    socket.on('typing', function(data){
      io.emit('typing', data);
    });
    socket.on('stop typing', function(data){
      io.emit('stop typing', data);
    });
  });

http.listen(3000, function(){
  console.log('listening on *:3000');
});