const express = require('express'),
	  router = express.Router(),
	  homeController = require('./controllers/home.controller');

module.exports = router;

router.get('/', homeController.displayHome); // to display and get homepage

