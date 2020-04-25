const express = require('express')
const app = express();

// set up author routes
const accountRouter = require('./routes/accountRouter');
// set up form routes
const formRouter = require('./routes/formRouter');

// GET home page
app.get('/', (req, res) => {
    res.send('<H1>Unifood </H1>' )
});

// Handle author-management requests
// the author routes are added onto the end of '/author-management'
app.use('/account-management', accountRouter);

// handle form-management requests
//the form routes are added to the end of '/form-management'
app.use('/form-management', formRouter);

app.listen(3000, () => {
    console.log('The library app is listening on port 3000!')
});