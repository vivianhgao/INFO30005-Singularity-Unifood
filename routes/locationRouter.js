const express = require('express');

// add router
const locationRouter = express.Router();

// require the location controller
const locationController = require('../controller/locationController.js');


// handle the GET request on root of location-management path
// Location's main page
locationRouter.get("/", (req,res,next)=> {
    res.render('location');
});

// Get all of the data on location database
locationRouter.get('/all', locationController.getLocations);
// Shows update form
locationRouter.get('/update/:_id',locationController.preUpdate);
// Update user's location info
locationRouter.post('/update/:_id',locationController.updateLocation);
// add location
locationRouter.post('/register', locationController.addLocation);





// export the router
module.exports = locationRouter;