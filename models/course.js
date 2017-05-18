var mongoose = require('mongoose');

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

var Course = mongoose.model('Course', courseSchema);

module.exports = Course;