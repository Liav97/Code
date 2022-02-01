const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    fullName : String,
    username : String,
    password : String,
    numOfActions : Number

});

module.exports = mongoose.model("systemUsers", userSchema)