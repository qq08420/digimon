var http    = require('http'),
    fs      = require('fs');
http = http.createServer(
    function (req, res) {
        fs.readFile(__dirname+'/index.html',
		function(err, data){res.writeHead(200, {"Content-Type": "text/plain"});response.write(data+"x");res.end();});
	}).listen(80);