const mongoose = require("mongoose");

mongoose.connect({
    ``{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    (err)=>{
        if(err) console.log(err);
        else console.log("Database connected")
    }

});