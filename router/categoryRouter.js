var express = require("express");
var router = express.Router();

const{
    getAllCategory,
    getCategory,
    postCategory,
    updateCategory,
    deleteCategory
} = require("../controllers/category.js");



router.get("/", getAllCategory);

router.get("/:categoryId",getCategory);

router.post("/",postCategory);

router.post("/:categoryId/update",updateCategory);

router.post("/:categoryId",deleteCategory);

module.exports=router;