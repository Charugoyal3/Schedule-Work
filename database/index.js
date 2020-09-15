const mongoose = require("mongoose");

mongoose.connect(
    'mongodb://localhost/schedulework', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) console.log(err);
        else console.log("Database connected")
    }

);