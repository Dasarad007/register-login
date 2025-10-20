var jwt = require("jsonwebtoken")

var adminmiddleware = (req,res,next)=>{
    console.log("middleware is ruuning");
    var usertype = req.user.role
    if(usertype !== "admin"){
       return res.status(401).json({message : "only admins are allowed"})
    }
    next()
    
}

module.exports = adminmiddleware
