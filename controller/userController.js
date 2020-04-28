const mongoose = require("mongoose");

// import user model
const User = mongoose.model("users");

// function to handle a request to get all users
const getAllUsers = async (req, res) => {

    try {
        const all_user = await User.find();
        return res.send(all_user);
    } catch (err) {
        res.status(400);
        return res.send("Database query failed!");
    }
};

//function to update a user
const updateUser =  async (req, res) =>{
    var condition = {username: req.params.username};

    User.findOneAndUpdate(condition, { $set: req.body }, function(err,user){
        if (err){
            console.error('An error occured!');
        }
        else if(!user){
            return res.send('User is not found!');
        }
        else {
            return res.send("User is updated!");
        }
    });
};


// function to add user account
const addUser = async (req, res) => {
    var new_user = {
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
    User.exists({username:req.body.username} || {email:req.body.email},function (err,userExists) {
        if(err){
            res.send('An error occured');
        }
        else if(userExists){
            res.send("Username/email has already existed.\nPlease change username/email.");
        }
        else{
            var data =  new User(new_user);

            data.save();

            res.send('New user added!');
        }
    });
};

// function to get user by username
const getUserByUsername = (req, res) => {
    var requested =  req.params.username;

     User.findOne({username:requested},function (err,user){
         if (err) {
             console.error("An error occured.");
         }
         else if(!user){
             res.send("No user with that username.")
         }
         else {
            res.send(user);
         }
     });
};

// Get location by username
const getLocationByUsername = (req, res) => {
  var requested = req.params.username;

  User.findOne({username:requested}, (err,user) => {
      if (err) {
          console.error("An error occured.");
      } else if (!user) {
          res.send("Sorry, this user doesn't exist.");
      } else {
          res.send(user['location']);
      }
  });
};

// function to delete a user
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

// export the functions
module.exports = {
    getAllUsers,
    getUserByUsername,
    getLocationByUsername,
    addUser,
    updateUser,
    deleteUser
};
