require("dotenv").config()
var express = require("express")
const connectedToDatabase = require("./database/db")
var cors = require("cors")
var userRoute = require("./routes/user-routes")
var homeroute = require("./routes/home-routes")
var adminroute = require("./routes/admin-route")

var app = express()

connectedToDatabase()
app.use(express.json())
app.use("/api/auth",userRoute)
app.use("/api/welcome",homeroute)
app.use("/api/welcome",adminroute)
app.use(cors())


var PORT = process.env.PORT || 2001
app.listen(PORT,()=>{
    console.log("server is running");
    
})

