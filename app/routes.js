const express = require('express'),
	  router = express.Router(),
	  homeController = require('./controllers/home.controller');
  	  eventsController = require('./controllers/events.controller');

module.exports = router;

router.get('/', homeController.displayHome); // to display and get homepage

router.get('/events', eventsController.showEvents);

router.get('/events/:slug', eventsController.showSingle);

router.get('/events/create',  eventsController.showCreate);
router.post('/events/create', eventsController.processCreate);

router.get('/events/edit',  eventsController.showEdit);
router.post('/events/edit', eventsController.processEdit);

router.get('/events/:slug/edit', eventsController.showEdit);
router.post('/events/:slug',     eventsController.processEdit);

router.get('/events/:slug/delete', eventsController.deleteEvent);

router.get('/events/seed',  eventsController.seedEvents);
