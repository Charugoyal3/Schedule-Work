const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const PORT = process.env.port || 5000;

require("./database/index.js");

const workRouter = require("./router/workRouter");
const categoryRouter = require("./router/categoryRouter");

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.use("/schedule/category", categoryRouter);
app.use("/schedule/work", workRouter);

app.get("/", (req, res) => {
    res.send("App Started!");
});

app.listen(PORT, () => {
    console.log("App started at: " + PORT);
});