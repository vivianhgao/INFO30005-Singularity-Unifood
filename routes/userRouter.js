const express = require('express');

// add our router
const userRouter = express.Router();

// require the user controller
const userController = require('../controller/userController.js');

// handle the GET request on root of user-management path

userRouter.get("/", userController.getAllUsers);

userRouter.post("/", userController.addUser);

userRouter.get("/:username",userController.getUserByUsername);

userRouter.get("/location/:username",userController.getLocationByUsername);

userRouter.post("/update-:username",userController.updateUser);

userRouter.post("/delete-:username",userController.deleteUser);

// export the router
module.exports = userRouter;