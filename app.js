/**
 * Created by Xiang Cao on 6/16/2017.
 */
var express = require("express");

var index = require("./routes/index");
var cat = require("./routes/cat");

require("./config/db");

var app = express();

app.use("/cat",cat);
app.use("/",index);

app.listen(3000,function () {
    console.log("listening on port 3000...");
});

