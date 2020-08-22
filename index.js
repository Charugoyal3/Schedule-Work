const express =require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.port || 8000;

require("./database/index.js");

const workRouter = require("./router/workRouter");
const categoryRouter = reuire("./router/categoryRouter");

app.use(bodyParser.json());

app.use("/",categoryRouter);
app.use("/",workRouter);

app.get("*",(req,res) =>{
    res.send("App Started!");
});

app.listen(PORT,() =>{
    console.log("App started at" + PORT);
});