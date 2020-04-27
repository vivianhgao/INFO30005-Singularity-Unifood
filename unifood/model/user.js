const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{ type: String,unique:true,required:true},
    email:{ type: String,unique:true,required:true},
    first_name: { type: String,required:true},
    last_name: String
});

const User = mongoose.model("users", userSchema, "users");

module.exports = User;