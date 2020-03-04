export default (params, images) =>{
  images=images.map(images => {
    if(images.name===params){
      images.views = images.views + 1
      return images
    }else{
      return images
    }
  })
  return images
};