const mongoose = require("mongoose");
const accountSchema = new mongoose.Schema({
    username: String,
    email:String,
    first_name: String,
    last_name: String
});

const Account = mongoose.model("accounts", accountSchema, "accounts");

module.exports = Account;