const express = require('express')
const app = express();

// set up author routes
const accountRouter = require('./routes/accountRouter');

// GET home page
app.get('/', (req, res) => {
    res.send('<H1>Unifood</H1>')
});
// Handle author-management requests
// the author routes are added onto the end of '/author-management'
app.use('/account-management', accountRouter);
app.listen(4000, () => {
    console.log('The library app is listening on port 4000!')
});