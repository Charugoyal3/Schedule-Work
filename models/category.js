const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoryModel = Schema({
    categorytitle: String,
    work :[
        {
            type:Schema.Types.ObjectId,
            ref="Work",
        },  
    ],
    
    timestamps:true
    
});

module.exports= mongoose.model("Category", categoryModel);