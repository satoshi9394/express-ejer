import http from 'http';
import path from 'path'
import express from 'express';


const APP = express();

const SERVE = http.createServer(APP);

APP.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname + '/views/practicaResp.html'))
});

APP.get('/dowload/:name', (req, res)=>{
  let name = req.params.name
  const file = path.join(__dirname + `/images/${name}.jpg`);
  res.download(file)
});





SERVE.listen(3000)