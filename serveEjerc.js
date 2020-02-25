var http = require('http');


http.createServer(function(req, res){

    if (req.url === '/name'){
        const name = process.argv[2];
        res.end('hola tu nombre es: '+ name);
    }else if(req.url === '/suma'){
        const num1 = process.argv[3];
        const num2 = process.argv[4];
        const result = num1 + num2;
        res.end('El resultado es: '+ result);
        
    }else{
        res.end('Ultra light serve');
    }
}).listen(4000);