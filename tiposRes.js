import http from 'http';
import path from 'path'
import express from 'express';


const APP = express();

const SERVE = http.createServer(APP);


APP.get('/', (req, res) =>{
  res.send('hello word');
});

APP.get('/hello', (req, res) =>{
  res.sendFile(path.join(__dirname + '/views/index.html'))
});

APP.get('/gatito', (req, res) =>{
  res.sendFile(path.join(__dirname + '/images/Angel-animado.jpg'))
});

APP.get('/cookies', (req, res)=>{
  res.cookie('i-follow-you', 'hello', { expires: new Date(Date.now() + 10000) });
  res.end()
});

APP.get('/headers', (req, res)=>{
  res.set({
    a:1,
    b:2,
    c:3
  });
  res.end()
});

APP.get('/redirect', (req, res)=>{
  res.redirect('/hello');
});

APP.get('/users/:id', (req, res) =>{
  let id = Number(req.params.id)
  if(id === 1){
    res.send('usuario encontrado')
  }else{
    res.sendStatus(404)
  }
})

APP.get('/dowload', (req, res)=>{
  const file = path.join(__dirname + '/images/Angel-animado.jpg');
  res.download(file)
});



SERVE.listen(3000)