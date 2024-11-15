// backend/models/Student.js 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    rollno: {
        type: String
    }
}, {
    collection: 'students'
});

module.exports = mongoose.model('Student', studentSchema);
