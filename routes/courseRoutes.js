const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const Course = require("../models/Course");

//GET all courses
router.get("/", courseController.getCourses);

//GET course by ID
router.get("/:id", courseController.getCourseById);

//POST create a new course
router.post("/", async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).json(course);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

//PUT update a course
router.put("/:id", courseController.updateCourse);

//DELETE a course
router.delete("/:id", courseController.deleteCourse);

module.exports = router;
