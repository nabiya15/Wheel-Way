var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')
var port = process.env.PORT || 8000;

//For BodyParser
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// For Passport
app.use(session({
	secret: 'wheelWayForYou',
	resave: true,
	saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


//For Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get('/', function(req, res) {
	res.send('Welcome to WheelWay');
});

//Models
var models = require("./models");

//Routes
var authRoute = require('./routes/auth.js')(app,passport);

//load passport strategies
require('./config/passport.js')(passport, models.User);

//Sync Database
models.sequelize.sync().then(function() {
	console.log('Nice! Database looks fine')
	app.listen(port, function(err) {
		if (!err)
			console.log("Site is live from port "+port);
		else console.log(err)
	});
}).catch(function(err) {
	console.log(err, "Something went wrong with the Database Update!")
});


