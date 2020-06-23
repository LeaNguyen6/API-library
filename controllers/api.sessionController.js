const Sessions = require("../model/sessions.model");

//RESTFull api Session
//**********GET**********
module.exports.viewSession= async (req,res)=>{
  let id=req.params.id
  let reg={_id:id}
  if (id=='all'){
    reg={}
  };
  let session = await Sessions.find(reg)
  res.json(session)
}
//**********POST**********
module.exports.addSession= async (req,res)=>{
  //await Sessions.create(req.body)
  let session = new Sessions(req.body)
  session.save().then((x)=>{
    res.json(x)
  }).catch((err)=>{
    res.json(err)
  })
}
//**********UPDATE**********
module.exports.updateSession= async (req,res)=>{
  let id=req.params.id
  let session = await Sessions.findByIdAndUpdate(id,req.body)
  res.json(session)
}
//**********DELETE**********
module.exports.deleteSession = async(req,res)=>{
  let id=req.params.id
  let session = await Sessions.findByIdAndDelete(id)
  if (!session){
    res.send('nothing in your eyes')
  }
  else{
      res.json('Da xoa')
  }
}