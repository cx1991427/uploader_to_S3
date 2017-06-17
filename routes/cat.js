var express = require("express");
var Cat =require("../models/cat");

var router = express.Router();

router.get("/showall",function (req,res) {
    Cat.find(function (err,data) {
        res.send("sad!"+data);
    });
});

module.exports = router;

