var mongoose = require("mongoose");

var catSchema = mongoose.Schema({
    name:String
});

catSchema.methods.speak = function () {
    console.log("my name is:"+this.name);
}

module.exports = mongoose.model("Cat",catSchema);