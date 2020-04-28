const express = require('express')
const bodyParser = require("body-parser");

const app = express();

require('./model')
// set up form routes
const formRouter = require('./routes/formRouter');

// set up user routes
const userRouter = require('./routes/userRouter');

// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json
app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// GET home page
app.get('/', (req, res) => {
    res.send('<H1>Singularity</H1><H2>Unifood</H2>' )
});

// Handle user-management requests
// the user routes are added onto the end of '/user-management'
app.use('/user-management', userRouter);
// handle form-management requests
//the form routes are added to the end of '/form-management'
app.use('/form-management', formRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log('The library app is listening on port 3000!')
});