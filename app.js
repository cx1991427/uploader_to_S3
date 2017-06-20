/**
 * Created by Xiang Cao on 6/16/2017.
 */
var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var AWS = require("aws-sdk");

var index = require("./routes/index");
var cat = require("./routes/cat");

// require("./config/db");
AWS.config.loadFromPath('./config/config.json');

var app = express();
var s3Bucket = new AWS.S3( { params: {Bucket: 'thriftstorestorage'} } );
var urlParams = {Bucket: 'thriftstorestorage', Key: 'images.jpg'};
s3Bucket.getSignedUrl('getObject', urlParams, function(err, url){
    console.log('the url of the image is', url);
});

app.use(bodyParser.urlencoded({extended:false}));

app.use("/",index);

app.listen(3000,function () {
    console.log("listening on port 3000...");
});

