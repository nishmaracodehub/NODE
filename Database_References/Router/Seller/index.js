const express = require('express');
const router = express.Router();
const Sellers = require('../../Models/Sellers');

router.route('/').get(async (req, res, next) => {

    const seller = await Sellers.find({});
    res.json(seller);
}).post(async (req, res, next) => {
    let newSeller = new Sellers(req.body);

    await newSeller.save();
    res.send(newSeller);
});

module.exports = router;