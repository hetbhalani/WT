const { Schema, default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Student = mongoose.model('Students',userSchema)
module.exports = Student;
