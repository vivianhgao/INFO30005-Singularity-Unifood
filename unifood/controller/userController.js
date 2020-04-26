const mongoose = require("mongoose");

// import author model
const User = mongoose.model("users");

// function to handle a request to get all authors
const getAllUsers = async (req, res) => {

    try {
        const all_user = await User.find();
        return res.send(all_user);
    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
};

// function to modify author by ID
const updateUser = async (req, res) => {
    res.send("Working on this feature");
};

// function to add author
const addUser = async (req, res) => {
    res.send("Working on this feature");
};

// function to get author by id
const getUserByID = (req, res) => {
    res.send("Working on this feature");
};

// remember to export the functions
module.exports = {
    getAllUsers,
    getUserByID,
    addUser,
    updateUser
};
