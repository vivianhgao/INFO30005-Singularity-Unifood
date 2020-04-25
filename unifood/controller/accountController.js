// provide the controller a link to the author model
var accounts = require('../model/account');

// Function to handle a request to get all accounts
const getAllAccount = (req, res) => {
    res.send(accounts); // return the list of accounts
};

// function to handle request to add account
const addAccount = (req, res) => {
    // extract info. from body
    const account = req.body;

    // add account to array
    accounts.push(account);
    res.send(accounts);
};
// function to handle request to add author
const addAccount = (req, res) => {
    // extract info. from body
    const account = req.body;

    // add author to array
    accounts.push(account);
    res.send(accounts);
};
// Remember to export the callbacks
module.exports = {
    getAllAccount,
    addAccount
};