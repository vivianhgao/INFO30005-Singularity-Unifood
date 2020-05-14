const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const http = require('http');
const socketIo = require("socket.io");
const port = process.env.PORT || 5000;

const server = http.createServer(app);
const io = socketIo(server);

require('./model/form');
const formController = require('./controller/formController.js');
const formRouter = require('./routes/formRouter');


var connection_string = "mongodb+srv://pbudiman:budiman01@cluster0-hdaoj.mongodb.net/unifood?retryWrites=true&w=majority";

const db = require("monk")(connection_string);
const form_collection = db.get("forms");

console.log("COllectionsssss: "+form_collection.find({}).then( isi => {
    // sorted by name field
    console.log(isi);
})
);

let interval;

io.on("connection", (socket)=> {
    console.log("New client Time connected");
    // if (interval) {
    //     clearInterval(interval);
    // }
    // interval = setInterval(()=> getApiAndEmit(socket),1000);

    // Returning the initial data of food menu from FoodItems collection
    socket.on("initial_data", () => {
        form_collection.find({}).then(docs => {
            io.sockets.emit("get_data", docs);
            console.log("emit data!");
        }
        );
        // collection_foodItems.find({}).then(docs => {
        //     io.sockets.emit("get_data", docs);
        // });
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });
});


const getApiAndEmit = socket => {
    const response = new Date();

    socket.emit("FromAPI", response);
};



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

require('./model');

// set up form routes

const userRouter = require('./routes/userRouter');
const organiserRouter = require('./routes/organiserRouter');

// set up location routes
const locationRouter = require('./routes/locationRouter');

//CORS
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));

// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json
app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// GET home page
app.get('/', (req, res) => {
    res.render('index' ,{title:'Unifood HomePage'});
});

// Handle user-management requests
// the user routes are added onto the end of '/user-management'
app.use('/users', userRouter);
// handle form-management requests
//the form routes are added to the end of '/form-management'
app.use('/forms', formRouter);
// handle organiser-management requests
// the form routes are added to the end of '/organiser-management'
app.use('/organisers', organiserRouter);
// handle organiser-management requests
// the form routes are added to the end of '/organiser-management'
app.use('/locations', locationRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));

// app.listen(port, () => {
//     console.log("The Unifood app is listening on port 5000!");
// });


