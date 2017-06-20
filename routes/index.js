var express = require("express");

var router = express.Router();

router.get("/upload",function (req,res) {
    res.sendFile("../"+"public/upload.html");
});

router.post("/upload",function (req,res) {
    
});

module.exports = router;

