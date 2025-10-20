var jwt = require("jsonwebtoken")
var authMidlleWare = (req,res,next)=>{
    console.log("the middleware is running");
    var headerAuth = req.headers["authorization"]
    var token = headerAuth && headerAuth.split(" ")[1]
    if(!token){
        return res.status(401).json({message : "no token found"})
    }
    try{
        var decodedtoken = jwt.verify(token,process.env.WEB_TOKEN)
        req.user =  decodedtoken
        console.log(req.user);
        next()
        
    }catch(error){
        return res.status(401).json({message : "invalid token"})
    }
}

module.exports = authMidlleWare

