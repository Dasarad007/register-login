var express = require("express")

var {register , login} = require("../controllers/user-controllers")


var router = express.Router()

router.use("/register",register)

router.use("/login",login)

module.exports = router


