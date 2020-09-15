const Work = require("../models/work.js");
const Category = require("../models/category.js");


const getWork = async (req, res) => {
    const work = await Work.findById(req.params.workId);
    if (work) res.status(200).render('index', {
        work: work
    });
    console.log(work);
    return "Work not found!";
}

const getAllWork = async (req, res) => {
    const works = [];
    console.log(req.params);

    try {
        const category = await Category.findById(
            req.params.categoryId
        ).populate("works");
        console.log(req.params.categoryId);
        if (category) res.status(200).render('index', {

            works: category.works
        });
        console.log(works);

    } catch (err) {
        res.send("No work found!" + err);
    }
};


const postWork = async (req, res) => {
    const work = {
        title: req.body.title,
        description: req.body.description
    };
    try {
        const category = await Category.findById(req.params.categoryId);
        if (category != null) {
            if (work) {
                const newWork = new Work(work);
                const savedWork = await newWork.save();

                category.works.unshift(savedWork);
                category.save();

                res.status(302).render('index', {
                    work: savedWork
                });

            } else {
                res.send("Work not added");
            }
        }
        res.send("Invalid Category id");
    } catch (err) {
        return err;
    }
};

const updateWork = async (req, res) => {
    const categoryId = req.params.categoryId;
    const workId = req.params.workId;

    const title = req.body.title;
    const description = req.body.description;

    try {
        if (!title && !description) res.send("No New Work");

        if (title) {
            Work.findOne({
                _id: workId
            }, async (err, doc) => {
                if (!err && doc) {
                    doc.title = title;
                    await doc.save();
                }
            });
        }
        if (description) {
            Work.findOne({
                _id: workId
            }, async (err, doc) => {
                if (!err && doc) {
                    doc.description = description;
                    await doc.save();
                }
            });
        }
        res.status(200).redirect("/" + categoryId + "/works/" + workId);

    } catch (err) {
        res.send("Work is not updated!");

    }

}
const deleteWork = async (req, res) => {
    const categoryId = req.params.categoryId;
    const workId = req.params.workId;

    try {
        Work.findByIdAndDelete(workId, (err, work) => {
            if (!err) res.status(200).redirect("/" + categoryId + "/works")
        });

    } catch {
        res.send("Couldn't delete work")

    }

}
exports.getAllWork = getAllWork;
exports.getWork = getWork;
exports.postWork = postWork;
exports.updateWork = updateWork;
exports.deleteWork = deleteWork;