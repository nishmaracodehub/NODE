const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let sellerSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    laptops: [{
        type: Schema.Types.ObjectId,
        ref: 'Laptops',
    }],
    customers: [{
        type: Schema.Types.ObjectId,
        ref: 'Customers'
    }]
})

module.exports = mongoose.model('Sellers', sellerSchema, 'sellersData')