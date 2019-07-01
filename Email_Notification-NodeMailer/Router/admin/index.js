const express = require('express');
const router = express.Router();

router.get('/admin/home', function (req, res) {
    res.send("hello form admin home");
});

router.get('/admin/login', function (req, res) {
    res.send("hello form admin login");
});

module.exports = router;