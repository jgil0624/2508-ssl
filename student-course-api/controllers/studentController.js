const Student = require("../models/Student");

//PUT
exports.enrollInCourse = async (req, res) => {
    try {
        const { id, courseId } = req.params;
        const student = await Student.findById(id);
        if (!student) return res.status(404).json({ message: "Student not found" });
        //Add course if not already enrolled
        if (!student.courses.some(c => c.toString() === courseId)) {
            student.courses.push(courseId);
        }
        await student.save();
        res.json({ message: "Enrolled in course successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//GET all
exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find().populate("courses");
        res.json(students);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

//GET by ID
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate("courses");
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};
//POST
exports.createStudent = async (req, res) => { 
    try {
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};
//PUT
exports.updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json(updatedStudent);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};
//DELETE
exports.deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

