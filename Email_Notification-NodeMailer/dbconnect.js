const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/Register-Complaint', {
    useNewUrlParser: true
}, function (err) {
    if (err) {
        console.log("something fishy with database");
    } else {
        console.log("Database connected");
    }
});