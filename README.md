Student & Course API

This project is a Node.js + Express + MongoDB REST API that demonstrates full CRUD operations using Mongoose.
It includes two related collections (Students and Courses) that have a "has-a" relationship (a student has courses).

Features
.Two related Mongoose models(Student and Course)

.CRUD endpoints for both collections:
    .Create, Read (all & by ID), Update, Delete

.Relationship handling:

    . Students can be enrolled in one or more courses
    . Validation and error handling included
    . Separated controllers and routes
    . Tested with Postman

Project Structure
    -server.js
    -models/
        -Student.js
        -Course.js
    -controllers/
        -studentController.js
        -courseController.js
    -routes/
        -studentRoutes.js
        -courseRoutes.js
    -README.md

Installation
1. Clone the repo
2. Install dependecies
3. Start MongoDB locally 
4. Run the server
Server will start at:
http://localhost:3000

Mongoose Models
    Student
    Course

Postman Testing Guide
    Courses
    POST/courses
    GET/courses
    GET/courses/:id
    PUT/courses/:id
    DELETE/courses/:id
    
    Student
    POST/students
    GET/students
    GET/students/:id
    PUT/students/:id
    DELETE/students/:id

 Relationship Endpoint
PUT/students/:id/enroll/:courseId

Example:
PUT http://localhost:3000/students/64f21c5f/enroll/64f22009

Validation Checklist
(Assignment Requirements)
.Two models related with "has-a" relationship
. 3-5 properties in each model
.At least 4 data types used(String, Number, Boolean, Date, ObjectId)
.Controller functions for both models
.Separated route files with error handling
.Tested with Postman

Author: Jennifer Gil
Submission August 26, 2025