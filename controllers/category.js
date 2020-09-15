const Category = require("../models/category.js");
const express = require("express");
const app = express();

const getAllCategory = async (req, res) => {
    const category = await Category.find().populate("works");
    if (category) res.render('profile', {
        category: category
    })
    console.log(category);
    return "No category Found";


}
const getCategory = async (req, res) => {
    // const categoryOne = await Category.findById(req.params.categoryId);
    // if (category) res.send({
    //     category: categoryOne
    // });
    // return "No particular Category found"
    res.render('profile', {
        category: await Category.findById(req.params.categoryId)

    });

}

const postCategory = async (req, res) => {
    const categoryData = {
        title: req.body.title
    };

    try {
        if (!categoryData.title) throw Error("No Category Found");
        else {
            const category = await Category.findOne({
                title: categoryData.title
            });

            if (!category) {
                const newCategory = new Category(categoryData);
                const savedCategory = await newCategory.save();
                res.status(201).render('profile', {
                    category: savedCategory
                });
            } else {
                res.send("Category already exist");
            }
        }
    } catch (err) {
        res.send("Error" + err);
    }
};

const updateCategory = (req, res) => {
    Category.findOne({
        _id: req.params.categoryId
    }, async (err, doc) => {
        if (err && !doc) {
            return res.send(500, {
                error: err
            });
        } else {
            doc.title = req.body.title;
            await doc.save();
            return res.status(302).redirect("/" + doc._id);
        }
    });
}

const deleteCategory = (req, res) => {
    Category.findByIdAndRemove({
        _id: req.params.categoryId
    }, (err, doc) => {
        if (err && !doc) return res.status(500).send(err);
        return res.status(200).redirect("/")
    })

}
exports.getAllCategory = getAllCategory;
exports.getCategory = getCategory;
exports.postCategory = postCategory;
exports.updateCategory = updateCategory;
exports.deleteCategory = deleteCategory;