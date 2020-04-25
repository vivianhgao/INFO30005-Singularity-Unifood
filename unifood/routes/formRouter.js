const express = require('express');

// add our router
const formRouter = express.Router();

// require the author controller
const formController = require('../controller/formController.js');

// handle the GET request on root of author-management path,
// i.e. get all authors
formRouter.get('/', (req, res) => formController.getAllForms(req, res));
formRouter.post('/', (req,res)=> a)

// export the router
module.exports = formRouter;
