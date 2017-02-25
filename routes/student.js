var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config/database');
var Student = require('../models/student');
var multer = require('multer');
var path = require('path');

//Register
router.post('/register', (req, res, next) => {
    let newStudent = new Student({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        studentId: req.body.studentId
    });

    Student.addStudent(newStudent, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Failed to register user'
            });
        } else {
            res.json({
                success: true,
                msg: 'User registered'
            });
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    Student.getStudentByUsername(username, (err, student) => {
        if (err) throw err;
        if (!student) {
            return res.json({
                success: false,
                msg: 'User not found'
            });
        }

        Student.comparePassword(password, student.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                var token = jwt.sign(student, config.secret, {
                    expiresIn: 604800 //1 week
                });
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    student: {
                        id: student._id,
                        username: student.username,
                        email: student.email,
                        portfolio: {
                            name: student.portfolio.name,
                            url: student.portfolio.url
                        }
                    }
                });
            } else {
                return res.json({
                    success: false,
                    msg: 'Wrong password'
                });
            }
        })
    })
});


//Profile
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {
    res.json({
        student: req.user
    });
})

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        Student.createPortfolio(req.user.username, req.user.)
        cb(null, req.user.username + path.extname(file.originalname));

    }
})

var upload = multer({
    storage: storage
})

//portfolio
router.post('/upload', passport.authenticate('jwt', {
    session: false
}), upload.array("uploads", 12), (req, res, next) => {
    res.json(req.files);
})
module.exports = router;
