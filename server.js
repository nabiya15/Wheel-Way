var express = require('express')
, app = express()
, passport = require('passport')
, session = require('express-session')
, bodyParser = require('body-parser')
, env = require('dotenv').load()
, exphbs = require('express-handlebars')
, flash = require('connect-flash')
, leafletGeosearch= require('leaflet-geosearch')
, exphbs = require("express-handlebars")
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
app.use(passport.session()); // persistent login 
app.use(flash());

//For Handlebars

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//including maki markers
app.use(express.static(__dirname+'/views/layouts'));

//Models
var models = require("./models");

//Routes
var authRoute = require('./routes/auth.js')(app,passport);
require("./routes/pin-routes.js")(app);

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


