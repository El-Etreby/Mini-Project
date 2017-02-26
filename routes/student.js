var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config/database');
var Student = require('../models/student');
var Portfolio = require('../models/portfolio')
var multer = require('multer');
var path = require('path');
var fs = require('fs');
var decode64 = require('base64url').decode;

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
                            image: student.portfolio.image
                        },
                        studentId: student.studentId
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
    Portfolio.getPortfolioByUserId(req.user._id, (err, portfolio) => {
        if (err) {
            res.send({
                student: req.user
            });
        } else {
            res.send({
                student: req.user,
                portfolio: portfolio
            });
        }
    })
});

//Portfolio
router.post('/portfolio', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {
    Portfolio.createPortfolio(req.user._id, req.body.name, req.body.image, (err) => {
        if (err) {
            res.json({
                success: false
            })
        } else {
            res.json({
                success: true
            })
        }
    })
})

router.get('/getPortfolio', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {
    Portfolio.getPortfolioByUserId(req.user._id, (err, portfolio) => {
        if (err) {
            res.json({
                success: false
            })
        } else {
            res.json({
                success: true
            })
        }
    })
})
module.exports = router;
