var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var config = require('../config/database');
var Schema = mongoose.Schema;

// User Schema
var StudentSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    portfolio: {
        name: {
            type: String
        },
        picture: {
            type: String
        }
    },
    studentId: {
        type: String,
        required: true
    }
})

var Student = module.exports = mongoose.model('Student', StudentSchema);

module.exports.getStudentById = function(id, callback) {
    Student.findById(id, callback);
}

module.exports.getStudentByUsername = function(username, callback) {
    const query = {
        username: username
    }
    Student.findOne(query, callback);
}

module.exports.addStudent = function(newStudent, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newStudent.password, salt, (err, hash) => {
            if (err) throw err;
            newStudent.password = hash;
            newStudent.save(callback);
        })
    })
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch)
    })
}

module.exports.createPortfolio = function(username, name, picture, callback) {
    const query = {
        username: username
    }
    Student.update(query, {
        $set: {
            "portfolio.name": name,
            "portfolio.picture": picture
        }
    })
}
