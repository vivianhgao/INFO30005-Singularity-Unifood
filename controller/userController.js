const mongoose = require("mongoose");

// import user model
const User = mongoose.model("users");

// function for user to log in
const logIn = (req, res, next) => {
    var username =  req.body.username;
    var password =  req.body.password;

    //find the user using the log in user name
    User.findOne({username:username},function (err,user){
        if (err) {
            console.error("An error occured.");
        }
        else if(!user || password!=user.password){
            res.send("Wrong username/password.")
        }
        else {
            res.render('welcomeUser',{ first_name:user.first_name, username:username });
        }
    });
};

// function to add user account when a new user sign up
const addUser = async (req, res,next) => {
    const new_user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        location: [
            {
                latitude: req.body.location.latitude,
                longitude: req.body.location.longitude
            }
        ]
    }

    // check if the username/email has been registered
    User.exists({username:req.body.username} || {email:req.body.email},function (err,userExists) {
        if(err){
            res.send('An error occured');
        }
        else if(userExists){
            res.send("Username/email has already existed.\nPlease change username/email.");
        }
        else{
            if(new_user.username && new_user.email && new_user.password && new_user.first_name){
                var data =  new User(new_user);
                data.save()
                res.render('welcomeUser',{first_name:req.body.first_name});
            }else{
                res.send("Incomplete information to sign up.\nPlease go back.");
            }
        }
    });
};

//get the details of the user
const getDetails = (req,res,next) => {
    var requested=  req.params.username;

    User.findOne({username:requested},function (err,user){
        if (err) {
            console.error("An error occured.");
        }
        else if(!user){
            res.send("No user with that username.")
        }
        else {
            res.render('userDetails',{first_name:user.first_name, last_name:user.last_name,username:user.username});
        }
    });
};

//function to update an information about a user
const updateUser =  async (req, res) => {
    var condition = {username: req.params.username};
    var update = {
        username: req.body.username,
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password
    }
    //clean updated field
    for( field in update ){
        if(update[field] ==''){
            delete update[field]
        }
    }

    //find the user's details and update it
    User.findOneAndUpdate(condition, update, function(err,user){
        if (err){
            console.error('An error occured!');
        }
        else if(!user){
            return res.send('User is not found!');
        }
        else {
            res.send("User is updated!");
        }
    });
};

// function to delete a user when the user wants to delete their account
const deleteUser = (req,res) => {
    var requested = req.params.username;

    User.deleteOne( {username:requested} ,function (err) {
        if(err) {
            console.error("Deletion Error");
        }
        else {
            res.send("User '" + requested + "' is successfully deleted!");
        }
    });
};

// function to get all users
const getAllUsers = async (req, res) => {
    try {
        const all_user = await User.find();
        return res.send(all_user);
    } catch (err) {
        res.status(400);
        return res.send("Database query failed!");
    }
};

// export the functions
module.exports = {
    getAllUsers,
    logIn,
    addUser,
    getDetails,
    updateUser,
    deleteUser
};
