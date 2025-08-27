const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

//GET all
router.get("/", studentController.getStudents);

//GET by ID
router.get("/:id", studentController.getStudentById);

//POST
router.post("/", studentController.createStudent);

//PUT
router.put("/:id", studentController.updateStudent);

//DELETE
router.delete("/:id", studentController.deleteStudent);

//enroll helper
router.put("/:id/enroll", studentController.enrollInCourse);

module.exports = router;