const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    credit: { type: Number, required: true, min: 1 },
    active: { type: Boolean, default: true },
    startDate: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Course", courseSchema);