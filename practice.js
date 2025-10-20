// var encypt = require("bcrypt")

// var webtoken = require("jsonwebtoken")
// const user = require("./model/user")


// var register = async(req,res)=>{
//     try{
//         var {username,email,password,role} = req.body
//         var userexists = await user.findOne({$or: [{username},{Email}]})
//         if(userexists){
//            return res.status(400).json({message : "user exists"})
//         }
//         var salt = await encypt.genSalt(10)
//         var hashpassword = await encypt.hash(password,salt)
//         var newuser = user.create({
//             username,
//             email,
//             password : hashpassword,
//             role
//         })
//         if(newuser){
//             return res.status(201).json({message : "signup successful"})
//         }else{
//             return res.status(400).json({messag : "account not created"})
//         }
//     }catch(error){
//         console.log("error",error);
        
//     }

// }

// var login = async(req,res)=>{
//     var {username,password} = req.body
//     var userthere = await user.findOne(username)
//     if(!userthere){
//         res.status(400).json({mesage : "username or password incorrecrt"})
//     }
//     var ispassword = await encypt.compare(password,userthere.Password)
//     if(!ispassword){
//         return res.status(400).json({message : "incorrect usernamer or passwordd"})
//     }
// }


// var signup = async(req,res)=>{
//     var {username,email,password,role} = req.body
//     var userexsists = await user.findOne({$or : [{username},{Email}]})
//     if(userexsists){
//         return res.status(400).json({message : "userexists"})
//     }
//     var salt = await encypt.genSalt(10)
//     var hash = await encypt.hash(salt,password)
//     var newuser = await user.create({
//         username ,
//         Email,
//         password : hash,
//         role 

//     })
//     if(newuser){
//         req.status(201).json({message : "user created"})
//     }else{
//         req.status(404).json({message : " not created"})
//     }
// }

// var login = async(req,res)=>{
//     var {username, password}=  req.body
//     var userthere = await user.findOne(username)
//     if(!userthere){
//         req.status(400).json({mesage : "incoorect"})
//     }
//     var ispassword = await encypt.compare(userthere,password)
//     if(!ispassword){
//         req.status(400).json(mesage : "incorrect passwordd")
//     }
// }

// var webtoken = webtoken.sign({
//     username = userthere._id,
//     email = userthere.Email,
//     password = userthere.role

// },process.env.WEB_TOKEN,{})

// module.exports = {register,login}

var authMidlleWare = req.headers["Authorization"]