var mongoose = require('mongoose');
var config = require('../config/database');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    title: {
        title: String,
        required: true,
        unique: true
    },
    URL: String,
    pid: String

});

var Project = module.exports = mongoose.model("Project", ProjectSchema);
