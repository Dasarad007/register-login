var mongoose = require("mongoose")

var userschema = new mongoose.Schema({
    username : {
        type : String,
        requried : true,
        trim : true,
        unique : true
    },

    Email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    Password : {
        type : String,
        required : true,
    },
        role : {
        type : String,
        enum : ["user","admin"],
        defualt : "user"
    }

})

module.exports = mongoose.model("users",userschema)


