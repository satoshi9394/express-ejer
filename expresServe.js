var http = require('http');
var express = require('express')

var APP = express();
var SERVER = http.createServer(APP);
var port = 4000

APP.get('/', function(req, res){
    const name = req.query.name|| 'Home'
    res.send('Hola tu nombre es :'+ name);
})

APP.get('/suma', function(req, res){
    const num1 = req.query.num1|| '1';
    const num2 = req.query.num2|| '1';
    const result = Number(num1) + Number(num2);
    res.end('El resultado es: '+ result);
})

APP.post('/save', function(req,res){
    const name = req.query.name|| 'Home'
    res.send('Guardando tu usuario:' + name);
})

SERVER.listen(port, function(err){
    if(err){
        console.log('error')
        return;
    }
    console.log('server liste on', port);
})

