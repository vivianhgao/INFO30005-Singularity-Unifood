// provide the controller a link to the author model
var accounts = require('../model/account');

// Function to handle a request to get all authors
const getAllAccount = (req, res) => {
    res.send(accounts); // return the list of authors
};

// Remember to export the callbacks
module.exports = {
    getAllAccount,
};