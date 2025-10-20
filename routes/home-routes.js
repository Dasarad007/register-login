var express = require("express")
const authMidlleWare = require("../Middleware/auth-middleware")



var router = express.Router()

router.get("/home",authMidlleWare,(req,res)=>{
    res.json({message : "welocome to homepage"})
})

module.exports = router