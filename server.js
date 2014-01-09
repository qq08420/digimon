var http    = require('http'),
    fs      = require('fs');
http = http.createServer(
    function (req, res) {
        fs.readFile(__dirname+'/index.html',
		function(err, data){res.writeHead(200);res.end(data);});
	}).listen(80);