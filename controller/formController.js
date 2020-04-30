const mongoose = require("mongoose");

// import form model
const Form = mongoose.model("form");

// function to create from
var createForm = function(req, res, next) {
    var new_form = {
        name:req.body.name,
        address:req.body.address,
        description:req.body.description,
        time:req.body.time,
        quantity:req.body.quantity,
        photo:req.body.photo,
        location: [
            {
                latitude: req.body.location.latitude,
                longitude: req.body.location.longitude
            }
        ]
    };
    var data = new Form(new_form);
    data.save();
    res.redirect('/');
};

// function to update form
var updateForm = function(req, res, next) {
    var id = req.body.id;

    Cafe.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no cafe found');
        }
        doc.name = req.body.name;
        doc.address = req.body.address;
        doc.description = req.body.description;
        doc.time = req.body.time;
        doc.quantity = req.body.quantity;
        doc.photo = req.body.photo;
        doc.location = [
            {
                latitude: req.body.location.latitude,
                longitude: req.body.location.longitude
            }
        ]
        doc.save();
    });
    res.redirect('/');
};

// function to delete form
var deleteForm = function(req, res, next) {
    var id = req.body.id;
    Form.findByIdAndRemove(id).exec();
    res.redirect('/');
};

// function to get all forms
var getAllForms = function(req, res, next) {
    Form.find()
        .lean()
        .then(function(doc) {
            res.render('index', {items: doc});
        });
};



// Remember to export the callbacks
module.exports = {
    createForm,
    updateForm,
    deleteForm,
    getAllForms,
};