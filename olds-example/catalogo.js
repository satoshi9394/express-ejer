const http = require('http');
const express = require('express');
const bodyParse = require('body-parser')


const APP = express();


APP.use(bodyParse.json());

const SERVER = http.createServer(APP);

const catalogo = [
    {
        id:1,
        name: 'blusa-blue',
        cost: '$75'        
    },
    {
        id:2,
        name: 'pantalon-green',
        cost: '$105'        
    },
    {
        id:3,
        name: 'blusa-green',
        cost: '$79'        
    },
    {
        id:4,
        name: 'pantalon-blue',
        cost: '$120'        
    },
    ]


APP.get('/catalogo', (req, resp) => {
    console.log(catalogo[1]);
    resp.send(catalogo);
})

APP.get('/catalogo/:id', (req, resp) => {
    const id = req.params.id
    console.log(catalogo[id]);
    resp.send(catalogo[id]);
})

APP.post('/comprar/id', (req, resp) => {
    console.log(req.body.id)
    const id = req.body.id
    console.log(req.body);
    const pay = catalogo.splice(id,1);
    console.log(pay[0].name)
    resp.send('usted compro:'+''+ pay[0].name);
})
APP.post('/comprar', (req, resp) => {
    console.log(req.body.name)
    const name = req.body.name
    const newCatalogo = catalogo.filter( catalogo => catalogo.name != name )
    console.log(newCatalogo)
    resp.send('usted compro:'+ name);
}) 



SERVER.listen(4000);
