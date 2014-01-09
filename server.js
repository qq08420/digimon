var http    = require('http'),
    fs      = require('fs');
http = http.createServer(
    function (req, res) {
        fs.readFile(__dirname+'/index.html',
		function(err, data){res.writeHead(200, {"Content-Type": "text/html"});res.write(data);res.end();});
	}).listen(80);