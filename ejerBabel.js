import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import bodyParse from 'body-parser';


dotenv.config()

const APP = express();
APP.use(bodyParse.json());

let salaNumber=[]
let salasNormal = []
let salasVip = []
let allCostVip=0
let allCostNormal=0
let allCost=0
let quantityNormal = 0
let quantityVip = 0
let numberSalaVip = []
let numberSalaNormal=[]
const allNormal=Number(process.env.ALLNORMAL);
const allVip=Number(process.env.ALLVIP)
for(let i=1; i <= allNormal; i++ ){
  salasNormal.push(`sala ${i}`)
}
for(let i=1; i <= allVip; i++ ){
  salasVip.push(`sala ${i+allNormal}`)
}

const SERVER = http.createServer(APP);

APP.get('/salas',(req, res)=>{
  res.send(`Salas normales tienes: ${salasNormal} y Salas vips tienes: ${salasVip}` )
});

APP.post('/compras', (req, resp) => {
  const costNormal=Number(process.env.COSTNORMAL)
  const costvip=Number(process.env.COSTVIP)
  const AllQuantityOfSala=Number(process.env.AllQuantityOfSala)
  //tipo de sala
  if(req.body.type==='vip'){
    // validar si sala esta llena
    if(salaNumber.length < AllQuantityOfSala){
      numberSalaVip.push(req.body.asiento)
      allCostVip = allCostVip + costvip;
      quantityVip = ++ quantityVip;
    }else{
      resp.send('Lo siento!! sala llena')
    }
  //tipo de sala
  }else if(req.body.type==='normal'){
    // validar si sala esta llena
    if(numberSalaNormal.length < AllQuantityOfSala){
      numberSalaNormal.push(req.body.asiento)
      quantityNormal = ++ quantityNormal;
      allCostNormal = allCostNormal + costNormal;
    }else{
      resp.send('Lo siento!! sala llena')
    }
  //default  
  }else{
    resp.send('sala no encontrada')
  }
  allCost = allCostVip + allCostNormal
  resp.send(`Tu has comprado ${quantityNormal} boleto normal y ${quantityVip} boleto vip` );
});

APP.get('/total-compra', (req, res) => {
  res.send(`total de boletos comprados es $${allCost} 
  entre ${quantityNormal} nomales con un costo de $${allCostNormal} y
  ${quantityVip} vips con un costo de $${allCostVip}`)
})

APP.get('/sala-ocupada', (req, res) => {
  res.send(`tu has comprado ${quantityNormal} en la sala}`)
})

SERVER.listen(process.env.PORT);