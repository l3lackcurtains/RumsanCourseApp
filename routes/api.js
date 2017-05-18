var express = require('express');
var passport = require('passport');

var Course = require('../models/course');

var router = express.Router();

router.get('/courses', function(req, res) {
	Course.find(function(err, data) {
		if (err) return res.json({ success: false, message: err });
		res.json({ success: true, message: data });
	});
})
.get('/course/:id', function(req, res) {
	Course.findById(req.params.id, function(err, data) {
		if (err) return res.send({ success: false, message: err });
		res.json({ success: true, message: data });
	});
})
.post('/course', passport.authenticate('jwt', { session: false }), function(req, res) {
	var newCourse = new Course(req.body);
	newCourse.save(function(err, data) {
		if (err) return res.send({ success: false, message: err });
		res.json({ success: true, message: data });
	});
})
.put('/course/:id', passport.authenticate('jwt', { session: false }), function(req, res) {
	Course.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, data) {
		if (err) return res.send({ success: false, message: err });
		Course.findById(data._id, function(err, updatedData) {
			res.json({ success: true, message: updatedData });
		});
	});
})
.delete('/course/:id', passport.authenticate('jwt', { session: false }), function(req, res) {
	Course.findByIdAndRemove(req.params.id, function(err) {
		if (err) return res.send({ success: false, message: err });
		res.json({ success: true, message: 'Successfully removed.' });
	});
});


module.exports = router;
