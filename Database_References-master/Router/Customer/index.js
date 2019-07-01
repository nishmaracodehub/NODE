const express = require('express');
const router = express.Router();
const Customers = require('../../Models/Customers');
const Sellers = require('../../Models/Sellers');


router.route('/:sid').post(async (req, res, next) => {
    const {
        sid
    } = req.params;

    const newCustomer = new Customers(req.body);
    await newCustomer.save();

    const seller = await Sellers.findById(sid);
    seller.customers.push(newCustomer);
    await seller.save();

    res.json(newCustomer);
}).get(async (req, res, next) => {
    const {
        sid
    } = req.params;

    const seller = await Sellers.findById(sid).populate('customers', "name email -_id");
    res.json(seller);

});

module.exports = router;