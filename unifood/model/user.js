const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: String,
    email:String,
    first_name: String,
    last_name: String
});

const User = mongoose.model("users", userSchema, "users");

module.exports = User;