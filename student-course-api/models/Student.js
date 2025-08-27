const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 0 },
    enrolled: { type: Boolean, default: true },
    joinDate: { type: Date, default: Date.now },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});
module.exports = mongoose.model("Student", studentSchema);