var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var userSchema = Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	username: {
		type: String,
	},
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	phone: {
		type: String
	},
	address: {
		type: String
	}
}, { collection: 'user', timestamps: true });

// Before User is created, hash the password
userSchema.pre('save', function (next) { 
	var user = this;
	if (!user.isModified('password')) return next();
	bcrypt.hash(user.password, null, null, function (err, hash) {
		if (err) return next(err);
		user.password = hash;
		next();
	})
})

// Compare password method used during login
userSchema.methods.comparePassword = function (pass) {
	var user = this;
	return bcrypt.compareSync(pass, user.password);
}

var User = mongoose.model('User', userSchema);

module.exports = User;
