const express = require('express');

// add our router
const userRouter = express.Router();

// require the user controller
const userController = require('../controller/userController.js');

userRouter.get('/', function(req, res, next) {
    res.render('login');
});

userRouter.post("/login",userController.getUserByUsername);

userRouter.get("/userlist", userController.getAllUsers);

userRouter.get('/signUp', function(req, res, next) {
    res.render('signUp');
});

userRouter.post("/signUp", userController.addUser);


userRouter.post("/update-:username",userController.updateUser);

userRouter.post("/delete-:username",userController.deleteUser);

// export the router
module.exports = userRouter;