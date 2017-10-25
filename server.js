const port = process.env.PORT || 4300,
      express = require('express'),
	  app = express(),
	  expressLayouts = require('express-ejs-layouts'),
      expressValidator = require('express-validator');
      session        = require('express-session'),
	  mongoose       = require('mongoose'),
      bodyParser     = require('body-parser'),
      cookieParser   = require('cookie-parser'),
      flash          = require('connect-flash');

app.listen(port, () => {
	console.log(`port is listening on ${port}`);
});

module.exports = {app};