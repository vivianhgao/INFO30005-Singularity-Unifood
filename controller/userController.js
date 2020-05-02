const mongoose = require("mongoose");

// import user model
const User = mongoose.model("users");

// function for user to log in
const logIn = (req, res, next) => {
    var username =  req.body.username;
    var password =  req.body.password;

    // find the user in the database with the log in username
    User.findOne({username:username},function (err,user){
        if (err) {
            res.error("An error occured.");
        }
        //validate whether the password and username matches each other
        else if (!user || password!=user.password) {
            //res.send("Wrong username or password!\n Please go back and try again!");
            res.render('loginError');
        }
        //when both username and password is correct, user is logged in
        else {
            console.log("User "+username+" is logged in!")
            res.render('welcomeUser',{ first_name:user.first_name, username:username });
        }
    });
};

// function to add user account when a new user signs up
const addUser = async (req, res,next) => {
    const new_user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    }

    // check if the username/email has been registered
    User.exists({username:req.body.username} || {email:req.body.email},function (err,userExists) {
        if(err){
            res.send('An error occured');
        } else if (userExists) {
            res.render("signUpError");

        } else {
            //check whether all required information to sign up is present
            if (new_user.username && new_user.email && new_user.password && new_user.first_name && new_user.last_name){
                    var data = new User(new_user);
                    data.save();
                    console.log("User "+new_user.username+" is added!")
                    res.render('welcomeUser', {first_name: req.body.first_name});
            }
            else{
                res.render('userError');
            }
        }
    });
};

// get the details of the user when user wants to update their account information
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

// function to update an information about a user
const updateUser =  async (req, res) => {
    var condition = {username: req.params.username};
    var update = {
        username: req.body.username,
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password
    }

    //only take the filled information
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
                var first_name = update.first_name;
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

            res.render('userDelete',{username:requested});
        }
    });
};


// export the functions
module.exports = {
    logIn,
    addUser,
    getDetails,
    updateUser,
    deleteUser
};
