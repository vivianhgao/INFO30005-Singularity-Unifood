// provide  the controller a link to the form model
var form = require('../model/form');

// function to handle a request to get all the forms
const getAllForms = (req, res) => {
    res.send(form); // return the list of forms
};

// Remember to export the callbacks
module.exports = {
    getAllForms,
};