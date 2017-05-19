var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var courseSchema = Schema({
	name: {
		type: String,
		require: true
	},
	description: {
		type: String
	},
	price: {
		type: String,
		required: true
	},
	instructor: {
		type: String
	},
	startDate: {
		type: Date
	},
	category: {
		type: String
	},
	address: {
		type: String
	},
	image: {
		type: String
	}
}, { collection: 'course', timestamps: true });

// Before Course is created, format the startdate
courseSchema.pre('save', function (next) { 
	var course = this;
	var now = moment(course.startDate);
	var date = now.format("MM/DD/YYYY");
	course.startDate= date;
	next();
});

var Course = mongoose.model('Course', courseSchema);

module.exports = Course;