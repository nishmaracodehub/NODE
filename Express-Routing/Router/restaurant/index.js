const express = require('express');
const router = express.Router();

router.get('/restaurant/home', function (req, res) {
    res.send("hello form restaurant home");
});

router.get('/restaurant/login', function (req, res) {
    res.send("hello form restaurant login");
});

module.exports = router;