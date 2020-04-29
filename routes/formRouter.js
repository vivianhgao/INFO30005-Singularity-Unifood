const express = require('express');

// add our router
const formRouter = express.Router();

// require the author controller
const formController = require('../controller/formController.js');

// handle the GET request on root of author-management path,

formRouter.get("/", formController.getAllForms);

formRouter.post("/", formController.createForm);

formRouter.post("/update-:ID",formController.updateForm);

formRouter.post("/delete-:ID",formController.deleteForm);


// export the router
module.exports = formRouter;
