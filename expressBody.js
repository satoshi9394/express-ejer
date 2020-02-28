const http = require('http');
const express = require('express');
const bodyParse = require('body-parser')


const APP = express();
APP.use(bodyParse.urlencoded())
APP.use(bodyParse.json());

const SERVER = http.createServer(APP);




APP.post('/', (req, resp) => {
    console.log(req.body);
    
    resp.send('hola');
})





SERVER.listen(3000);
