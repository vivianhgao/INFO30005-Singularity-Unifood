const express = require('express');

const organiserRouter = express.Router();

const organiserController = require('../controller/organiserController.js');


organiserRouter.get("/", organiserController.getOrganisers);

organiserRouter.get("/:email", organiserController.getOrganiserByEmail);

organiserRouter.post("/", organiserController.addOrganiser);

organiserRouter.post("/update-:email", organiserController.updateOrganiser);

organiserRouter.post("/delete-:email", organiserController.deleteOrganiser);



// Export router
module.exports = organiserRouter;