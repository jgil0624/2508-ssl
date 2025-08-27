const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();
app.use(express.json());

//Routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

//MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/schoolDB')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.listen(4006, () => {
    console.log("Server running on port 4006");
});
module.exports = app;
    