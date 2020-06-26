const Users = require("../model/users.model");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

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
        res.status(401).json(errs)
        return
    }
    // var passwordIsValid = bcrypt.compareSync(
    //   req.body.password,
    //   user.password
    // ); check pass
    if (user.pass!==pass){
        errs.push('Wrong password!')
        res.status(401).json(errs)
        return
    }
    var token = jwt.sign({ id: user.id }, process.env.AUTH_KEY, {
      expiresIn: 86400 // 24 hours
    });
    
//    res.cookie('userID',user.id,{ signed: true })
  //  res.redirect('/')
  res.json({user,accessToken: token});
};

module.exports.register = async (req, res) => {
  let users = await Users.find({ email: req.body.email });
  
  if (users.length) {
    res.status(500).send("User does exist");
  } else {
    //console.log(users)
    // password: bcrypt.hashSync(req.body.password, 8) tạo pass
 
    await Users.create(req.body);
   
    res.json("Welcome");
  }

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