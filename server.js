// Require Depenencies
var express = require('express')
var mongoose = require('mongoose')
var expressHandleBars = require('express-handlebars');
var bodyParser = require('body-parser');

// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our Express App
var app = express();

// Set up an Express Router
var router = express.Router();

require('./config/routes')(router);

// Designate our public folder as a static director
app.use(express.static(__dirname + '/public'));

// Connect Handlebars to our Express app
app.engine('handlebars', expressHandleBars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Use bodyParser in our app
app.use(bodyParser.urlencoded({
    extended: false
}));

// Have every request go through our router middleware
app.use(router);

// if deployed, use the deployed database. Otherwise use the local mongoHeadLines database
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";


// connect mongoose to our database
mongoose.connect(db, function(error) {
    // log any errors connecting with mongoose
    if (error) {
        console.log(error);
    }
    // Or log a success message
    else {
        console.log('Mongoose connection is successful');
    }
})

// Listen on the port
app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});