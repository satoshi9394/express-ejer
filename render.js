import http from 'http';
import path from 'path'
import express from 'express';
import getImages from './utils/getImages'

let images = getImages();


const APP = express();

APP.set('views', './views');
APP.set('view engine', 'pug');

APP.use(express.static('public'));


const SERVE = http.createServer(APP);

APP.get('/', (req, res) =>{
  const data = { title: 'Home'};
  res.render('index', data);
});

APP.get('/images', (req, res)=>{
  res.render('images', { images, title: 'Image Gallary' });

});

APP.get('/download/:images', (req, res)=>{
  let imgToDownload = req.params.images
  images=images.map(images => {
    if(images.name===imgToDownload){
      images.views = images.views + 1
      return images
    }else{
      return images
    }
  })
  const file = path.join(__dirname + '/public/images/' + req.params.images + '.jpg')
  res.download(file)
})




SERVE.listen(3000)