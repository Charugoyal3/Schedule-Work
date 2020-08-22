var express = require("express");
var router = express.Router();

const{
    getAllWork,
    getWork,
    postWork,
    updateWork,
    deleteWork
} = require("../controllers/Work.js");



router.get("/:/categoryId", getAllWork);

router.get("/:categoryId/:workId",getWork);

router.post("/:categoryId/",postWork);

router.post("/:categoryId/:workId/update",updateWork);

router.post("/:categoryID/:WorkId",deleteWork);

module.exports=router;