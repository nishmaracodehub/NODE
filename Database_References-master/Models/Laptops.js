const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var laptopSchema = new Schema({
    name: {
        type: String,
    },
    model: {
        type: String,
    },
    sellers: {
        type: Schema.Types.ObjectId,
        ref: 'Sellers',
    }

});

module.exports = mongoose.model('Laptops', laptopSchema, 'LaptopsData');