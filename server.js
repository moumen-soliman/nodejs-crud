//to use .env file
require('dotenv').config();

const port = process.env.PORT || 4300,
      express = require('express'),
	    app = express(),
	    expressLayouts = require('express-ejs-layouts'),
      expressValidator = require('express-validator');
      session = require('express-session'),
	    mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      flash = require('connect-flash');

//add cookie parser
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET, 
  cookie: { maxAge: 60000 },
  resave: false,    
  saveUninitialized: false  
}));
app.use(flash());

//make public is static directorey
app.use(express.static(__dirname + '/public'));

//make ejs is main for views , acutally i want to use hbs, but try something different
app.set('view engine', 'ejs');
app.use(expressLayouts);

//body-parser for data form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

//mongoose db connection with .env 
mongoose.connection.openUri(process.env.DB_URI);

//routes
app.use(require('./app/routes'));

//port listen
app.listen(port, () => {
	console.log(`port is listening on ${port}`);
});

module.exports = {app};