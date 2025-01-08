const express = require('express');
const { resolve, parse } = require('path');
let cors = require("cors");

const app = express();
app.use(cors());
const port = 3000;
app.use(express.static('static'));

// endpoint to calculate returns
app.get('/calculate-returns',(req,res)=>{
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  let returnValue = (marketPrice - boughtAt) * quantity;
  res.send(returnValue.toString());
});

//endpoint to calculate total returns
app.get('/total-returns',(req,res)=>{
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let totalReturns = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturns.toString());
})

//calcualte return percentage
app.get('/calculate-return-percentage',(req,res)=>{
  let returns = parseFloat(req.query.returns);
  let boughtAt = parseFloat(req.query.boughtAt);
  let returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

//endpoint  total return percentage
app.get('/total-return-percentage',(req,res)=>{
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let totalReturns = stock1 + stock2 + stock3 + stock4;
  let totalReturnPercentage = (totalReturns/100) * 100;
  res.send(totalReturnPercentage.toString());
});

//endpoint to get status
app.get('/status',(req,res)=>{
  let returnPercentage = parseFloat(req.query.returnPercentage);
  if(returnPercentage>0)
    res.send("profit");
  else res.send("loss");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
