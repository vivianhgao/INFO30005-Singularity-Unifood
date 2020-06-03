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
    const {email,password} = req.body;
    Organiser.findOne({email:email}, function(err, organiser){
       if (err){
           return res.json({success:false, error:err})
       }
       // Incorrect email or password
       else if(!organiser || password!=organiser.password){
            return res.json({success:false, error:err})
       } 
       // login successful
       else {
           console.log(organiser)
            return (res.json({ success: true, organiser:organiser }));
       }
    });
};

// The display for updating organiser's profile
const organiserPreview = (req, res, next)=>{
    var id =  req.params.id;

    Organiser.findById(id,(err,organiser)=>{
        if (err) {
            console.error("An error occured.");
        }
        else if(!organiser){
            res.send("Internal Error.")
        }
        else {
            res.render("organiserUpdate",
                {
                    id:organiser._id,
                    organisation_name:organiser.organisation_name,
                    email:organiser.email,
                    officer_name: organiser.officer_name,
                    contact_number: organiser.contact_number,
                    email: organiser.email,
                    password: organiser.password
                });
        }
    });
};

// function to get organiser by email
const getOrganiserById = (req, res) => {
    var requested =  req.params.email;

    Organiser.findOne({email:requested},(err,organiser)=>{
        if (err) {
            console.error("An error occured.");
        }
        else if(!organiser){
            res.send("Sorry, the email is not registered.\nPlease check again your input.")
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
        console.log("Organiser doesnt exist");
        if(err){
            res.send('An error occured.');
        }
        else if(organiserExists){
            res.send("The email has been used.\nPlease enter other email.");
            // res.status(409);
        }
        else if (req.body.organisation_name && req.body.officer_name && req.body.contact_number
            && req.body.email && req.body.password){
            var data =  new Organiser(new_organiser);
            data.save();
            // res.send('Organisation account created.');
            // return res.json({ success: true });
            // res.send({ message: 'Organisation created' });
            res.json({success:true});
            // res.status(201);
        }
        else {
            res.send("You haven't filled all the required fields.");
        }
    });
};

//function to update an organiser
const updateOrganiser =  async (req, res) =>{
    var id = req.params.id;
    const update= {
        organisation_name,
        officer_name,
        contact_number,
        email,
        password}=req.body;

    //only take the filled information
    for( field in update ){
        if(update[field] ==''){
            delete update[field]
        }
    }
     console.log(update)
    Organiser.findByIdAndUpdate(id, update, (err,organiser_id)=>{
        console.log("this is the id: "+id);
        if (err){
            // console.log("ENTEREEDDD ERRORRRRRRR");
            console.error('An error occured! '+ err);
            res.json({success:false});
        }
        else if(!organiser_id){
            // console.log("ENTEREEDDD");
            res.json({success:false, message:"Organiser is not found"});
            res.send('Organiser is not found.');
        }
        else {
            // console.log("SHOULD BE GOOODODDD");
            res.json({ success: true, organiser:organiser_id});
        }
    });
};

// function to delete an organiser
const deleteOrganiser = (req,res) => {
    var id = req.params.id;

    Organiser.findByIdAndRemove( id , (err, organiser) =>{
        if(err) {
            console.error("Deletion Error");
            res.json({success:false})
        }
        else {
            // res.send("Organiser '" + organiser.organisation_name + "' is successfully deleted!");
            res.json({success:true});
        }
    });

};

// export the functions

module.exports = {
    getOrganisers,
    getOrganiserById,
    addOrganiser,
    updateOrganiser,
    deleteOrganiser,
    organiserPreview,
    loginOrganiser
};
