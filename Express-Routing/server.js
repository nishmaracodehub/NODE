const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serveIndex = require('serve-index');
const db = require('./dbconnect');
const router = express.Router();
const user = require('./Router/user');
const User = require('./Models/User');


const port = 2707;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', user);

//updating the records in mongodb

// app.put('/user/:id', function (req, res) {
//     User.findById(req.params.id, function (err, user) {
//         if (err) {
//             throw err;
//         }
//         user.name = req.body.name;
//         user.email = req.body.email;
//         user.age = req.body.age;
//         user.save(function (err) {
//             if (err) {
//                 throw err;
//             }
//             res.json(user); // Gives response in JSON to Postman
//             console.log("Data Updated Successfully"); //Updates in the local server console

//         });
//     });
// });

// app.put('/admin/:id', function (req, res) {
//     Admin.findById(req.params.id, function (err, admin) {
//         if (err) {
//             throw err;
//         }
//         admin.name = req.body.name;
//         admin.email = req.body.email;

//         admin.save(function (err) {
//             if (err) {
//                 throw err;
//             }
//             res.json(admin); // Gives response in JSON to Postman
//             console.log("Data Updated Successfully"); //Updates in the local server console

//         });
//     });
// });

// //Deleting data from MongoDB

// app.delete('/user/:id', function (req, res) {
//     User.remove({
//         email: req.params.id
//     }, function (err) {
//         if (err) {
//             throw err;
//         } else {
//             res.json({
//                 "Status": "Record Successfully Deleted"
//             });
//         }
//     });
// });

// app.delete('/admin/:id', function (req, res) {
//     Admin.remove({
//         email: req.params.id
//     }, function (err) {
//         if (err) throw err;
//         else {
//             res.json({
//                 "Status": "Record Succssfully Deleted"
//             })
//         }
//     })
// });


app.listen(port, function (err) {
    if (err) throw err;
    console.log(`server running on port ${port}`);
});