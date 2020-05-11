const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    account_id: {type: String, unique: true},
    latitude: Number,
    longitude: Number
});

const Location = mongoose.model("locations", locationSchema, "locations");

module.exports = Location;