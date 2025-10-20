var express = require("express")
const authMidlleWare = require("../Middleware/auth-middleware")
const adminmiddleware = require("../Middleware/admin-middleware")


var router = express.Router()



router.get("/admin",authMidlleWare,adminmiddleware,(req,res)=>{
   return res.json({message : "welcome admin"})
})

module.exports = router