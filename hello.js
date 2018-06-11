var http = require("http");
    
http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello\r\n");
    res.write("World\r\n");
    res.write("은성아 분발하자..!\r\n");
    res.end();
}).listen(22);
