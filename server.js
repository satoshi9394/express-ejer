var http = require('http');

http.createServer(function(req, res){
    if (req.url === '/info'){
        res.end('site info');
    }else{
        res.end('Ultra light serve');
    }
}).listen(3000);