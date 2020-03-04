import fs from 'fs';
import path from 'path'

const imageForder = path.join(__dirname, '../public/images')

export default () =>{
  let images= []
  const items = fs.readdirSync(imageForder);
  for(let item in items){
    images.push({
      "name": items[item].substr(0 , items[item].length - 4),
      "views": 0
    })
  }
  return images
};