var express = require('express');
var student = require('./student');

var router = express.Router();

//Index Router
router.get('/', (req, res) => {
    res.send('HOME');
});

router.use('/student', student);

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

module.exports = router;
