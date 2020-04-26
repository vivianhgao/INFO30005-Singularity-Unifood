const express = require('express');

// add our router
const userRouter = express.Router();

// require the author controller
const userController = require('../controller/userController.js');

// handle the GET request on root of author-management path,
// i.e. get all authors
userRouter.get('/', userController.getAllUsers);

userRouter.post("/", userController.addUser);

// export the router
module.exports = userRouter;