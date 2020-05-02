const express = require('express');

const organiserRouter = express.Router();

const organiserController = require('../controller/organiserController.js');

organiserRouter.get("/", (req,res,next)=>{
    res.render('organiserLogin');
});

organiserRouter.post('/logon', organiserController.loginOrganiser);

organiserRouter.get('logon/:email', organiserController.organiserPreview);

organiserRouter.get('/signup', (req,res,next)=>{
    res.render("organiserSignup");
});

organiserRouter.get("/all", organiserController.getOrganisers);

organiserRouter.get("/:email", organiserController.getOrganiserByEmail);

organiserRouter.post("/signup", organiserController.addOrganiser);

organiserRouter.post("/logon/update/:email", organiserController.updateOrganiser);

organiserRouter.post("/delete/:email", organiserController.deleteOrganiser);

// Export router
module.exports = organiserRouter;