var express = require("express");
var router = express.Router();

const {
    getAllCategory,
    getCategory,
    postCategory,
    updateCategory,
    deleteCategory
} = require("../controllers/category.js");



router.get("/", getAllCategory);

router.post("/", postCategory);

router.post("/:categoryId/update", updateCategory);

router.get("/:categoryId", getCategory);

router.post("/:categoryId", deleteCategory);

module.exports = router;