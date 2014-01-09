var http    = require('http'),
    fs      = require('fs'),
    io      = require('socket.io');
http = http.createServer(
    function (req, res) {
        fs.readFile(__dirname+'/x2.html',
		function(err, data){res.writeHead(200, {"Content-Type": "text/html"});res.write(data);res.end();});
	}).listen(80);
io = io.listen(http);
io.sockets.on('connection',function(socket){ 
	socket.on('userInfo',function(data){
	   socket.emit('tip',{'msg':'connect success'});
    });
    
	socket.on('tip',function(data){
        socket.broadcast.emit('tip',data);
    });
    socket.on('msg',function(data){
        socket.broadcast.emit('msg',data);
    });
	socket.on('disconnect', function(){
        socket.broadcast.emit('tip',{'msg':socket.id+' leave'});
    });
});