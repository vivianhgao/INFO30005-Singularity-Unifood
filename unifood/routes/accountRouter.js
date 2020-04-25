const express = require('express');

// add our router
const accountRouter = express.Router();

// require the author controller
const accountController = require('../controller/accountController.js');

// handle the GET request on root of author-management path,
// i.e. get all authors
accountRouter.get('/', (req, res) => accountController.getAllAccount(req, res));
accountRouter.post('/', (req,res)=> a)

// export the router
module.exports = accountRouter;
