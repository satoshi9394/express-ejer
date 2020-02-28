

module.exports = (APP, users) => {
  APP.get('/',(req, res)=>{
    console.log(req.headers);
    res.send('end request')
  });
  
  APP.get(['/users/:id'] ,(req, res) => {
    const id = req.paramas.id
    users.push(id)
    console.log(users);
    res.send(`search user ${id}`)
  });
}