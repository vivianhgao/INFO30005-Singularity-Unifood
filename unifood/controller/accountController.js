const mongoose = require("mongoose");

// import author model
const Account = mongoose.model("accounts");


// function to handle a request to get all authors
const getAllAccount = async (req, res) => {

    try {
        const all_account = await Account.find();
        return res.send(all_account);
    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
};

// function to modify author by ID
const updateAccount = async (req, res) => {
    res.send("Working on this feature");
};

// function to add author
const addAccount = async (req, res) => {
    res.send("Working on this feature");
};

// function to get author by id
const getAccountByID = (req, res) => {
    res.send("Working on this feature");
};

// remember to export the functions
module.exports = {
    getAllAccount,
    getAccountByID,
    addAccount,
    updateAccount
};
