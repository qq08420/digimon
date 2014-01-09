var http    = require('http'),
    fs      = require('fs'),
    io      = require('socket.io');
http = http.createServer(
    function (req, res) {
        fs.readFile(__dirname+'/index.html',
		function(err, data){res.writeHead(200);res.end(data);});
	}).listen(80);
io = io.listen(http);
io.sockets.on('connection',function(socket){ 
    socket.emit('msg',{'msg':'connect success'});
	socket.broadcast.emit('msg',{'msg':'new one connect success'});
    socket.on('msg',function(data){
        socket.broadcast.emit('msg',data);
    });
});
io.sockets.on('disconnection',function(socket){ 
	socket.broadcast.emit('msg',{'msg':' one leave'});
});