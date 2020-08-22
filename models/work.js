const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workModel = Schema({
    worktitle: String,
    workDescription:String,
    timestamps:true
    
});

module.exports= mongoose.model("Work", workModel);