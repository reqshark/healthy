var http = require('http');
http.createServer(function(req,res) { 
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('this server is node.js written in six lines of code.\n');
}).listen(80, "50.116.6.46");
console.log('Server running at http://50.116.6.46:80');