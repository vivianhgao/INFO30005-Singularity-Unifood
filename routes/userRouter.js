const express = require('express');

// add our router
const userRouter = express.Router();

// require the user controller
const userController = require('../controller/userController.js');

//user logging in
userRouter.get('/', function(req, res, next) {
    res.render('login');
});
userRouter.post("/login",userController.logIn);

//user signing up
userRouter.get('/signUp', function(req, res, next) {
    res.render('signUp');
});

userRouter.post("/signUp", userController.addUser);

//user getting their details and updating
userRouter.get("/login/:username",userController.getDetails);

userRouter.post("/login/update/:username",userController.updateUser);

<<<<<<< Updated upstream
userRouter.post("/update-:username",userController.updateUser);
=======

//user deleting their account
userRouter.get("/delete/:username",userController.deleteUser);
>>>>>>> Stashed changes

// getting list of all users
userRouter.get("/userList", userController.getAllUsers);

// export the router
module.exports = userRouter;