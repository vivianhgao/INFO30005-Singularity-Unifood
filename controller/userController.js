const mongoose = require("mongoose");

// import user model
const User = mongoose.model("users");

// function for user to log in
const logIn = (req, res, next) => {
    var username =  req.body.username;
    var password =  req.body.password;

    //find the user in the database with the log in user name
    User.findOne({username:username},function (err,user){
        if (err) {
            console.error("An error occured.");
        } else if (!user || password!=user.password) {
            res.send("Wrong username/password.")
        } else {
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
        last_name: req.body.last_name
    }

    // check if the username/email has been registered
    User.exists({username:req.body.username} || {email:req.body.email},function (err,userExists) {
        if(err){
            res.send('An error occured');
        } else if (userExists) {
            res.send("Username/email has already existed.\nPlease change username/email.");
        } else {
            //check whether all required information to sign up is present
            if(new_user.username && new_user.email && new_user.password && new_user.first_name){
                var data =  new User(new_user);
                data.save()
                res.render('welcomeUser',{first_name:req.body.first_name});
            }else {
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
        } else if (!user) {
            res.send("No user with that username.")
        } else {
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
            return console.error('An error occured!');
        } else if (!user) {
            return res.send('User is not found!');
        } else {
            //to update the name in the welcome page
            if(update.first_name){
                var first_name=update.first_name;
            } else {
                first_name=user.first_name;
            }
            console.log("User is updated!");
            res.render('welcomeUser',{first_name:first_name});
        }
    });
};

// function to delete a user when the user wants to delete their account
const deleteUser = (req,res) => {
    var requested = req.params.username;

    User.deleteOne( {username:requested} ,function (err) {
        if (err) {
            console.error("Deletion Error");
        } else {
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
