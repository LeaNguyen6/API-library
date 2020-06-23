const Transactions = require("../model/transactions.model");

//RESTFull api Transaction
//**********GET**********
module.exports.viewTransaction= async (req,res)=>{
  let id=req.params.id
  let reg={_id:id}
  if (id=='all'){
    reg={}
  };
 // let transaction = await Transactions.find(reg).populate('user').populate('book')
    let transaction = await Transactions.find(reg)

//  console.log(transaction)
  res.json(transaction)
}
//**********POST**********
module.exports.addTransaction= async (req,res)=>{
  //await Transactions.create(req.body)
  let transaction = new Transactions(req.body)
  transaction.save().then((x)=>{
    res.json(x)
  }).catch((err)=>{
    res.json(err)
  })
}
//**********UPDATE**********
module.exports.updateTransaction= async (req,res)=>{
  let id=req.params.id
  let transaction = await Transactions.findByIdAndUpdate(id,req.body)
  res.json(transaction)
}
//**********DELETE**********
module.exports.deleteTransaction = async(req,res)=>{
  let id=req.params.id
  let transaction = await Transactions.findByIdAndDelete(id)
  if (!transaction){
    res.send('nothing in your eyes')
  }
  else{
      res.json('Da xoa')
  }
}