var express = require("express");
var router = express.Router();

const {
    getAllWork,
    getWork,
    postWork,
    updateWork,
    deleteWork
} = require("../controllers/work.js");


router.get("/:categoryId/", getAllWork);

router.post("/:categoryId/", postWork);

router.get("/:categoryId/:workId", getWork);

router.post("/:categoryId/:workId/update", updateWork);

router.post("/:categoryId/:workId", deleteWork);

module.exports = router;