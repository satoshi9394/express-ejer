export default (params, images) =>{
  let imgToDownload = params
  images=images.map(images => {
    if(images.name===imgToDownload){
      images.views = images.views + 1
      return images
    }else{
      return images
    }
  })
  return images
};