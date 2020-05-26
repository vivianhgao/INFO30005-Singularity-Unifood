const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const axios = require("axios");
const http = require("http");
const socketIo = require("socket.io");
const server = http.createServer(app);
const io= socketIo(server);

// get database connection from model/index.js
const mongo_url=require('./model/index').MONGO_URL
const db = require("monk")(mongo_url);
const form_collection = db.get("forms");

//get all forms
const getAllForms= async socket =>{
    try{
        form_collection.find({}).then( res => {
            forms=res;
        });
        socket.emit("Forms",forms)
    }catch(error){
        console.log("fail to retrieve forms")
    }
}


//to get notification
const getApiAndEmit =  async socket =>{
    try{
        const res =  await axios.get("http://localhost:5000/forms/formList");
        socket.emit("Notifications", res.data);

    }catch(error){
        console.error("Error")
    }
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

require('./model')

// set up form routes
const formRouter = require('./routes/formRouter');
const userRouter = require('./routes/userRouter');
const organiserRouter = require('./routes/organiserRouter');

// set up location routes
const locationRouter = require('./routes/locationRouter');

app.use(cors());

// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json
app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// // GET home page
// app.get('/', (req, res) => {
//     res.render('index' ,{title:'Unifood HomePage'});
// });

// Handle user requests
app.use('/users', userRouter);
// handle form requests
app.use('/forms', formRouter);
// handle organiser requests
app.use('/organisers', organiserRouter);
// handle location requests
app.use('/locations', locationRouter);

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))


let interval;

io.on("connection", (socket)=> {
    console.log("New client Time connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(()=> getAllForms(socket),2000);

    // Returning the initial data of food menu from FoodItems collection
    // socket.on("initial_data", () => {
    //     form_collection.find({}).then(docs => {
    //         io.sockets.emit("get_data", docs);
    //         console.log("emit data!");
    //     }
    //     );
        // collection_foodItems.find({}).then(docs => {
        //     io.sockets.emit("get_data", docs);
        // });
    // });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });
});

// Step 3
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

server.listen(process.env.PORT || 5000, () => {
    console.log("The Unifood app is listening on port 5000!");
});
