const Books = require("../model/books.model");

//RESTFull api Book
//**********GET**********
module.exports.viewBook= async (req,res)=>{
  let id=req.params.id
  let reg={_id:id}
  if (id=='all'){
    reg={}
  };
  let book = await Books.find(reg)
  res.json(book)
}
//**********POST**********
module.exports.addBook= async (req,res)=>{
  //await Books.create(req.body)
  let book = new Books(req.body)
  book.save().then((x)=>{
    res.json(x)
  }).catch((err)=>{
    res.json(err)
  })
}
//**********UPDATE**********
module.exports.updateBook= async (req,res)=>{
  let id=req.params.id
  let book = await Books.findByIdAndUpdate(id,req.body)
  res.json(book)
}
//**********DELETE**********
module.exports.deleteBook = async(req,res)=>{
  let id=req.params.id
  let book = await Books.findByIdAndDelete(id)
  if (!book){
    res.send('nothing in your eyes')
  }
  else{
      res.json('Da xoa')
  }
}