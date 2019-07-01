const express = require('express');
const serveIndex = require('serve-index');
const path = require('path');
const router = express.Router();
const User = require('../../Models/User');
const {
    check,
    validationResult
} = require('express-validator/check');

router.use('/', express.static('views'));

// router.get('/user', function (req, res) {
//     User.find({}, function (err, data) {
//         if (err) {
//             throw err;
//         } else {
//             res.sendFile(path.resolve("views/index.html"));
//         }

//     });
// });

//inserting data to Mongodb

router.post('/user/data', [
    check('emailBus').isEmail(),
    check('emailCli').isEmail(),
    check('numBus').isLength(10),
    check('numCli').isLength(10),
    check('price').isCurrency(),
    check('quantity').isNumeric(),
], function (req, res) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            errors: errors.array()
        });
    } else {
        var user = new User();
        user.nameBus = req.body.nameBus;
        user.emailBus = req.body.emailBus;
        user.addressBus = req.body.addressBus;
        user.numBus = req.body.numBus;
        user.nameCli = req.body.nameCli;
        user.emailCli = req.body.emailCli;
        user.addressCli = req.body.addressCli;
        user.numCli = req.body.numCli;
        user.invNum = req.body.invNum;
        user.invDate = req.body.invDate;
        user.itemDes = req.body.itemDes;
        user.price = req.body.price;
        user.quantity = req.body.quantity;

        user.save(function (err) {
            if (err) {
                throw err;
            } else {
                res.json({
                    "Status": "Success"
                });
            }

        });
    }


});



module.exports = router;