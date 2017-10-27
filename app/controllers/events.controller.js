const Event = require('../models/event');

module.exports = {
	showEvents: showEvents,
	  showSingle: showSingle,
	  showCreate: showCreate,
	  processCreate: processCreate,
	  showEdit: showEdit,
	  processEdit: processEdit,
}

function showEvents (req, res){
	Event.find({}, (err, events) => {
		if (err) {
			res.status(404);
			res.send('Event not found');
		}

		res.render('pages/events', {
			events: events,
			success: req.flash('success')
		});
	});
}

function showSingle(req, res){
	Event.findOne({slug: req.params.slug}, (err, event) => {
		if(err) {
			res.status(404);
			res.send('Event not found');
		}

		res.render('pages/single', {
			event: event,
			success: req.flash('success')
		});
	});
}

function showCreate(req, res) {
  res.render('pages/create', {
    errors: req.flash('errors')
  });
}


function processCreate(req, res){
	req.CheckBody('name', 'Name is required').notEmpty();
	req.CheckBody('description', 'description is required').notEmpty();

	const errors = req.validationErrors();
	if (errors) {
		req.flash('errors', errors.map(err => err.msg));
		return res.redirect('/events/create');
	}

	const event = new Event({
		name: req.body.name,
		description: req.body.description
	});

	event.save((err) => {
		if (err)
			throw err;

		req.flash('success', 'Successfuly created event !');

		res.redirect(`/events/${event.slug}`);
	});
}

function showEdit(req, res) {
	Event.findOne({slug: req.params.slug}, (err, event) => {
		res.render('/pages/edit', {
			event: event,
			errors: req.flash('errors')
		});
	});
}

function processEdit(req, res) {
	req.CheckBody('name', 'name is required').notEmpty();
	req.CheckBody('description', 'description is required');

	const errors = req.validationErrors();
	if (errors) {
	    req.flash('errors', errors.map(err => err.msg));
	    return res.redirect(`/events/${req.params.slug}/edit`);
	}

	Event.findOne({slug: req.params.slug}, (err, event) => {
		event.name: req.body.name,
		event.description: req.body.description;

		if (err)
			throw err;

		req.flash('success', 'Successfuly updated');
		res.redirect('/events')
	});
}