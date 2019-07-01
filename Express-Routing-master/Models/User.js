const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    nameBus: {
        type: String,
    },
    emailBus: {
        type: String,
    },
    addressBus: {
        type: String,
    },
    numBus: {
        type: Number,
    },
    nameCli: {
        type: String
    },
    emailCli: {
        type: String,
    },
    addressCli: {
        type: String,
    },
    numCli: {
        type: Number,
    },
    invNum: {
        type: Number,
    },
    invDate: {
        type: Date,
    },
    itemDes: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    }

});

module.exports = mongoose.model('User', userSchema, 'userData');