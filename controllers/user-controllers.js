var user= require("../model/user")
var bcrypt = require("bcrypt")
var webtoken = require("jsonwebtoken")


var register = async(req,res)=>{
    try{
          var {username,Email,Password,role} = req.body
    var userexists = await user.findOne({$or : [{username},{Email}]}) 
  if(userexists){
    return res.status(400).json({message : "user exists"})
  }
  var salt = await bcrypt.genSalt(10)
  var hashpassword = await bcrypt.hash(Password,salt)
  

  var newuser = await user.create({
    username,
    Email,
    Password : hashpassword,
    role
  })
  if(newuser){
   return res.status(201).json({message : "new user created"})
  }else{
    res.status(400).json({message: "cannot create"})
  }
}
    catch(error){
        console.log("error",error);
        return res.status(500).json({ message: "Server error", error: error.message });

    }
}

var login = async(req,res)=>{
    var {username , Password} = req.body
    var userthere = await user.findOne({username})
    if(!userthere){
        return res.status(400).json({message : " incorrect username or password"})
    }

    var ispassword = await bcrypt.compare(Password,userthere.Password)
    if(!ispassword){
        return res.status(400).json({message : "incorrect username or password"})   
    }

    var generatedtoken = webtoken.sign({
        username : userthere._id,
        Email : userthere.Email,
        role : userthere.role
    },process.env.WEB_TOKEN,{expiresIn : "10m"})
    
    res.status(200).json({message : "login sucess", token : generatedtoken})

}

module.exports = {register,login}

