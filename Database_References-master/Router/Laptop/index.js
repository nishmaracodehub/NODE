const express = require('express');
const router = express.Router();
const Laptops = require('../../Models/Laptops');
const Sellers = require('../../Models/Sellers');


router.route('/:sid').post(async (req, res, next) => {
    const {
        sid
    } = req.params;

    const newLaptop = new Laptops(req.body);
    await newLaptop.save();

    const seller = await Sellers.findById(sid);
    seller.laptops.push(newLaptop);
    await seller.save();

    res.json(newLaptop);
}).get(async (req, res, next) => {
    const {
        sid
    } = req.params;

    const seller = await Sellers.findById(sid).populate('laptops', "name model -_id");
    res.json(seller);

});

module.exports = router;