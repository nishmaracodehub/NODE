const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    laptops: [{
        type: Schema.Types.ObjectId,
        ref: 'Laptops'
    }],
});

module.exports = mongoose.model('Customers', customerSchema, 'customersData');