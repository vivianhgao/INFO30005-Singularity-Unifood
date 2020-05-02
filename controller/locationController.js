const mongoose = require("mongoose");

// import user model
const Location = mongoose.model("locations");
const Organiser = mongoose.model("organisers");
const User = mongoose.model("users");

// register location for user
const addLocation = (req, res) => {

    // Schema
    var new_location = {
        account_id: req.body.account_id,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    };
    //avoid duplicates and register a location
    const id = req.body.account_id;
    Location.findOne({account_id: id}, (err,location)=>{
        if(err){
            res.send("An error occured");
        } else if (location){
            res.send("User has been registered")
        } else {
            // validToRegister = true;
            var data = new Location(new_location);
            data.save();
            res.send('Thank you for registering');
        }
    })
};

// get all location
const getLocations = async (req, res) => {
    try {
        const locations = await Location.find();
        return res.send(locations);
    } catch (err) {
        res.status(400);
        return res.send("Database query failed!");
    }
};

const deleteLoc = (req,res) => {
    var id = req.params.id;

    Location.findByIdAndRemove( id , (err, location) =>{
        if(err) {
            console.error("Deletion Error");
        }
        else {
            res.send( "Location is successfully deleted!");
        }
    });
};

// update registered user's location
const updateLocation =  async (req, res) =>{
    var id = req.params._id;

    Location.findByIdAndUpdate(id, { $set: req.body }, (err,location)=>{
        if (err){
            console.error('An error occured!');
        }
        else if(!location){
            return res.send('Location is not found.');
        }
        else {
            return res.send("Your location is up to date.");
        }
    });
};

// update form
const preUpdate = (req, res, next)=>{
    var id =  req.params._id;

    Location.findById(id,(err,location)=>{
        if (err) {
            console.error("An error occured.");
        }
        else if(!location){
            res.send("Internal Error.")
        }
        else {
            res.render("locationUpdate",
                {
                    id:location._id,
                    account_id:location.account_id,
                    latitude: location.latitude,
                    longitude: location.longitude,
                });
        }
    });
};

module.exports = {
    addLocation,
    getLocations,
    deleteLoc,
    updateLocation,
    preUpdate
}