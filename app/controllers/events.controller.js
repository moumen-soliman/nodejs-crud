const Event = require('../models/event');

module.exports = {
	showEvents: showEvents,
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