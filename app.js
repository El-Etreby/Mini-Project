var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var mongoose = require('mongoose');
var config = require('./config/database');

//Connect to database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () =>{
  console.log('Connected to database '+ config.database)
})

// On Error
mongoose.connection.on('error',(err) =>{
  console.log('Database error: '+ err)
})

var app = express();

var users = require('./routes/users');

// Port number
var port = 3000;

//CORS Middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users);

//Index Router
app.get('/',(req,res) =>{
  res.send('HOME');
});

//Starting the server
app.listen(port,() => {
  console.log('Server started on port '+port);
})
