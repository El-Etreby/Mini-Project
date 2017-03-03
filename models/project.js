var mongoose = require('mongoose');
var config = require('../config/database');
var Schema = mongoose.Schema;
var Portfolio = require('./portfolio.js')

var ProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String
    },
    screenshots: {
        type: [String]
    },
    type: {
        type: String,
        required: true
    },
    portfolioId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Portfolio',
        required: true
    },

});

var Project = module.exports = mongoose.model("Project", ProjectSchema);

module.exports.addProject = function(title, details, type, portfolioId, callback) {
    let project = new Project({
        title: title,
        details: details,
        type: type,
        portfolioId: portfolioId
    })

    project.save(callback);

}
module.exports.addScreenshot = function(title, screenshots, type, portfolioId, callback) {
    let project = new Project({
        title: title,
        screenshots: screenshots,
        type: type,
        portfolioId: portfolioId
    })

    project.save(callback);

}
module.exports.getProjectByPortfolioId = function(portfolioId, callback) {
    var query = {
        portfolioId: portfolioId
    }

    Project.find(query, callback);
}
