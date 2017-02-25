var express = require('express');
var student = require('./student');

var router = express.Router();

//Index Router
router.get('/', (req, res) => {
    res.send('HOME');
});

router.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
})

router.use('/student', student);

module.exports = router;
