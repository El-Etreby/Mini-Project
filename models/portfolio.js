var mongoose = require('mongoose');
var config = require('../config/database');
var Schema = mongoose.Schema;

//Portfolio Schema
var PortfolioSchema = new Schema({
    userId: {
        type: String
    },
    name: {
        type: String,
        required: true

    },
    image: {
        type: String
    }
});

var Portfolio = module.exports = mongoose.model('Portfolio', PortfolioSchema);

module.exports.getPortfolioByUserId = function(userId, callback) {
    var query = {
        userId: userId
    }

    Portfolio.findOne(query, callback);
}


module.exports.createPortfolio = function(userId, name, image, callback) {
    let portfolio = new Portfolio({
        userId: userId,
        name: name,
        image: image,
    })
    portfolio.save(callback);
}
