const mongoose = require("mongoose");

// import user model
const Organiser = mongoose.model("organisers");


// function to get all organisers
const getOrganisers = async (req, res) => {

    try {
        const organisers = await Organiser.find();
        return res.send(organisers);
    } catch (err) {
        res.status(400);
        return res.send("Database query failed!");
    }
};

// function for login
const loginOrganiser = (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    Organiser.findOne({email:email}, (err, organiser)=>{
       if (err){
           console.error("An Error occured");
       }
       else if(!email || organiser.password!=password){
           res.send("The email or password you entered incorrect");
       } else {
           res.render('organiserLogon', {organisation_name:organiser.organisation_name, email:email});
       }
    });
};


const organiserPreview = (req, res, next)=>{
    var requested =  req.params.email;

    Organiser.findOne({email:requested},(err,organiser)=>{
        if (err) {
            console.error("An error occured.");
        }
        else if(!organiser){
            res.send("No user with that username.")
        }
        else {
            res.render("organiserUpdate");
        }
    });
};

// function to get organiser by email
const getOrganiserByEmail = (req, res) => {
    var requested =  req.params.email;

    Organiser.findOne({email:requested},(err,organiser)=>{
        if (err) {
            console.error("An error occured.");
        }
        else if(!organiser){
            res.send("No user with that username.")
        }
        else {
            res.send(organiser);
        }
    });
};

// function to create organiser
const addOrganiser = async (req, res) => {
    var new_organiser = {
        organisation_name: req.body.organisation_name,
        officer_name: req.body.officer_name,
        contact_number: req.body.contact_number,
        email: req.body.email,
        password: req.body.password
    };
    Organiser.exists( {email:req.body.email},(err,organiserExists) => {
        if(err){
            res.send('An error occured.');
        }
        else if(organiserExists){
            res.send("The email has been used.\nPlease enter other email.");
        }
        else if (req.body.organisation_name && req.body.officer_name && req.body.contact_number
            && req.body.email && req.body.password){

            var data =  new Organiser(new_organiser);

            data.save();

            res.send('Account created.');
        }
        else {
            res.send("You haven't filled all the required fields.");
        }
    });
};

//function to update an organiser
const updateOrganiser =  async (req, res) =>{
    var email = {email: req.params.email};

    Organiser.findOneAndUpdate(email, { $set: req.body }, (err,organiser_email)=>{
        if (err){
            console.error('An error occured!');
        }
        else if(!organiser_email){
            return res.send('Organiser is not found.');
        }
        else {
            return res.send("Organiser is updated.");
        }
    });
};

// function to delete an organiser
const deleteOrganiser = (req,res) => {
    var requested = req.params.email;

    Organiser.deleteOne( {email:requested} , (err) =>{
        if(err) {
            console.error("Deletion Error");
        }
        else {
            res.send("Organiser '" + requested + "' is successfully deleted!");
        }
    });

};

// export the functions

module.exports = {
    getOrganisers,
    getOrganiserByEmail,
    addOrganiser,
    updateOrganiser,
    deleteOrganiser,
    organiserPreview,
    loginOrganiser
};
