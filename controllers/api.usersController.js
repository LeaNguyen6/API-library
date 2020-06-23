const Users = require("../model/users.model");


module.exports.index = async (req, res) => {
  //console.log('abc')
  let users = await Users.find();
  res.json(users);
};
module.exports.postLogin = async (req, res) => {
   let email=req.body.email;
    let pass=req.body.pass;
  console.log(email,pass)
    let user= await Users.findOne({email})
   // console.log(user,user.id)
    let errs=[]
    if (!user){
        errs.push('User does not exist')
        res.status(404).json(errs)
        return
    }
    if (user.pass!==pass){
        errs.push('Wrong password!')
        res.status(401).json(errs)
        return
    }

//    res.cookie('userID',user.id,{ signed: true })
  //  res.redirect('/')
  res.json(user);
};

module.exports.register = async (req, res) => {
  let users = await Users.find({ name: req.body.name });
  if (users.length) {
    res.json("User does exist");
  } else {
    //console.log(users)
    await Users.create(req.body);
    res.json("Welcome");
  }
  // let user= new Users(req.body)

  //user.save().then(()=>{})
};

module.exports.viewUser= async (req,res)=>{
  let id=req.params.id
  let reg={_id:id}
  if (id=='all'){
    reg={}
  };
  let user = await Users.find(reg)
  res.json(user)
}


module.exports.updateUser= async (req,res)=>{
  let id=req.params.id
  let user = await Users.findByIdAndUpdate(id,req.body)
  res.json(user)
}

module.exports.deleteUser = async(req,res)=>{
  let id=req.params.id
  let user = await Users.findByIdAndDelete(id)
  if (!user){
    res.send('nothing in your eyes')
  }
  else{
      res.json('Da xoa')
  }
}