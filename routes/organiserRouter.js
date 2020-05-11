const express = require('express');

const organiserRouter = express.Router();

const organiserController = require('../controller/organiserController.js');

// organiser's home/login page
organiserRouter.get("/", (req,res,next)=>{
    res.render('organiserLogin');
});
// process the login
organiserRouter.post('/logon', organiserController.loginOrganiser);
// organiser's update form
organiserRouter.get('/update/:id', organiserController.organiserPreview);
// sign up page
organiserRouter.get('/signup', (req,res,next)=>{
    res.render("organiserSignup");
});
// All of organisers accounts
organiserRouter.get("/all", organiserController.getOrganisers);

// Create new account
organiserRouter.post("/signup", organiserController.addOrganiser);
// Update an organiser by its id
organiserRouter.post("/update/:id", organiserController.updateOrganiser);
// Delete organiser account by its id
organiserRouter.get("/delete/:id", organiserController.deleteOrganiser);

// Export router
module.exports = organiserRouter;