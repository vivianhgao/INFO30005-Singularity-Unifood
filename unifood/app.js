const express = require('express')
const bodyParser = require("body-parser");

const app = express();

// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json
app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// GET home page
app.get('/', (req, res) => {
    res.send('<H1>Unifood</H1>')
});

// set up author routes
const accountRouter = require('./routes/accountRouter');

// Handle author-management requests
// the author routes are added onto the end of '/author-management'
app.use('/account', accountRouter);

app.listen(4000, () => {
    console.log('The library app is listening on port 4000!')
});