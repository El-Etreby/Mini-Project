var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config/database');
var Student = require('../models/student');
var Portfolio = require('../models/portfolio')
var Project = require('../models/project')
var multer = require('multer');
var path = require('path');
var fs = require('fs');
var decode64 = require('base64url').decode;
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

//Register
router.post('/register', (req, res, next) => {
    let newStudent = new Student({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        studentId: req.body.studentId
    });
    console.log(newStudent)

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
/*
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
}) */

router.get('/getPortfolio', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {
    Portfolio.getPortfolioByUserId(req.user._id, (err, portfolio) => {
        if (err || !portfolio) {
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


router.get('/getProjects', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {
    Portfolio.getPortfolioByUserId(req.user._id, (err, portfolio) => {
        if (err || !portfolio) {
            res.json({
                success: false
            })
        } else {
            Project.getProjectByPortfolioId(portfolio._id, (err, projects) => {
                if (err) {
                    res.json({
                        success: false
                    })
                } else {
                    res.json({
                        success: true,
                        projects: projects
                    })
                }

            })
        }
    })
})

router.get('/getPortfolios', (req, res, next) => {
    Portfolio.aggregate([{
        $lookup: {
            from: 'projects',
            localField: "_id",
            foreignField: 'portfolioId',
            as: "projects"
        }
    }], (err, portfolios) => {
        if (err) throw err;
        res.send({
            portfolios: portfolios
        })
    })
})

/*var storage = multer.diskStorage({ //multers disk storage settings
    destination: function(req, file, cb) {
        cb(null, '../uploads/');
    },
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');

/** API path that will upload the files */
/*router.post('/upload', function(req, res) {
    upload(req, res, function(err) {
        console.log(req.file);
        if (err) {
            res.json({
                error_code: 1,
                err_desc: err
            });
            return;
        }
        res.json({
            error_code: 0,
            err_desc: null
        });
    });
});*/

router.post("/portfolio", passport.authenticate('jwt', {
    session: false
}), multer({
    dest: "./public/uploads/"
}).array("uploads[]", 12), function(req, res) {
    var portfolio = JSON.parse(req.body.portfolio)
    var image = ""
    if (req.files[0]) {
        image = "/uploads/".concat(req.files[0].filename)
    }
    Portfolio.createPortfolio(req.user._id, portfolio.name, image, (err) => {
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
});
router.post("/project", passport.authenticate('jwt', {
    session: false
}), multer({
    dest: "./public/uploads/"
}).array("uploads[]", 12), function(req, res) {
    var project = JSON.parse(req.body.project)
    var screenshots = []
    console.log(req.files)
    if (req.files) {
        for (var i = 0; i < req.files.length; i++) {
            screenshots.push("/uploads/".concat(req.files[i].filename))
            console.log(screenshots)
        }
    }
    Portfolio.getPortfolioByUserId(req.user._id, (err, portfolio) => {
        if (err) console.log(err);
        if (portfolio) {
            if (project.type == "screenshot") {
                Project.addScreenshot(project.title, screenshots, project.type, portfolio._id, (err) => {
                    if (err) {
                        res.json({
                            success: false
                        })
                    } else {
                        res.json({
                            success: true
                        })

                        console.log(req.body)
                    }
                })
            } else {
                Project.addProject(project.title, project.details, project.type, portfolio._id, (err) => {
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
            }

        }
    })
});

//Project
/*
router.post('/project', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {
    Portfolio.getPortfolioByUserId(req.user._id, (err, portfolio) => {
        if (err) console.log(err);
        if (portfolio) {
            if (req.body.type == "screenshot") {
                Project.addScreenshot(req.body.title, req.body.screenshots, req.body.type, portfolio._id, (err) => {
                    if (err) {
                        res.json({
                            success: false
                        })
                    } else {
                        res.json({
                            success: true
                        })

                        console.log(req.body)
                    }
                })
            } else {
                Project.addProject(req.body.title, req.body.details, req.body.type, portfolio._id, (err) => {
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
            }

        }
    })

})*/
module.exports = router;
