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
//MONGODB
require('dotenv').config()
const mongoose = require("mongoose");

// Connect to MongoDB --- Replace this with your Connection String
CONNECTION_STRING = "mongodb+srv://pbudiman:<password>@cluster0-hdaoj.mongodb.net/unifood?retryWrites=true&w=majority";
MONGO_URL = CONNECTION_STRING.replace("<password>",process.env.MONGO_PASSWORD);

mongoose.connect(MONGO_URL || "mongodb://localhost/info30005",
    { useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        dbName: "unifood"
    });
const db = mongoose.connection;
db.on("error", err => {
    console.error(err);
    process.exit(1);
});
db.once("open", async () => {
    console.log("Mongo connection started on " + db.host + ":" +
        db.port); });

require("./model/user");
require("./model/organiser");
require("./model/form");
require("./model/location");
//---------





//CORS
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

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

if(process.env.NODE_ENV=== 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));

    });
}

// io.on("connection", socket =>{
//     console.log("user is connected");
//     socket.on("incoming data",(data)=>{
//         socket.broadcast.emit("outgoing data", {num:data});
//     });
//     socket.on("disconnect",()=> console.log("user disconnected"));
// })

io.on("connection", socket => {
    console.log("user connected", getApiAndEmit(socket));
    socket.on("disconnect",()=> console.log("Client disconnected"));
});

const getApiAndEmit =  async socket =>{
    try{
        const res =  await axios.get("http://localhost:5000/forms/formList");
        socket.emit("FromAPI", res.data);

    }catch(error){
        console.error("Error: ${error.code}")
    }
};



server.listen(process.env.PORT || 5000, () => {
    console.log("The Unifood app is listening on port 5000!");
});
