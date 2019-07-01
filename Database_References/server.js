//Require Packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Create Port for the Server
const port = process.env.port || 8080;

//import required files
const dbConnect = require('./dbconnect');
const laptop = require('./Router/Laptop');
const seller = require('./Router/Seller');
const customer = require('./Router/Customer');

// Use bodyparser for rendering the data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Using the Router

app.use('/', laptop);
app.use('/', seller);
app.use('/', customer);


//Creating the Server
app.listen(port, () => {
    console.log(`server is up and running ${port}`);
});