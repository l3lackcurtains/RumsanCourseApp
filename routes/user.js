var express = require('express');
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var config = require('../utils/config');

var router = express.Router();

// Register new users
router.post('/register', function(req, res) {
  req.check('email', 'Invalid email').notEmpty().isEmail();
  req.check('username', 'Invalid Username').notEmpty();
  req.check('password', 'Invalid Password').notEmpty().isLength({ min: 6 });
  req.check('firstname', 'Invalid First Name').notEmpty();
  req.check('lastname', 'Invalid Last Name').notEmpty();
  req.check('phone', 'Invalid Phone').notEmpty();
  req.check('address', 'Invalid Address').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    var messages = [];
    errors.forEach((error) => {
      messages.push(error.msg);
    })
    return res.json({ success: false, message: 'Error registering user.', errors });
  }

  const newUser = User({
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    phone: req.body.phone,
    address: req.body.address
  });

  newUser.save(function(err) {
    if (err) return res.json({ success: false, message: 'Something went wrong, Try again.' });
    return res.json({ success: true, message: 'User successfully registered.'});
  });
});

// Authenticate User
router.post('/authenticate', function(req, res) {
  req.check('email', 'Invalid email').notEmpty().isEmail();
  req.check('password', 'Invalid Password').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    var messages = [];
    errors.forEach((error) => {
      messages.push(error.msg);
    })
    return res.json({ success: false, message: 'Error authenticating user.', errors });
  }

  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) return res.json({ success: false, message: 'Something went wrong, Try again.' });
    if (!user) return res.json({ success: false, message: 'Authentication failed. User with this email doesnt exist.' });
    if (!user.comparePassword(req.body.password)) return res.json({ success: false, message: 'Incorrect Password.' });
    var token = jwt.sign(req.body, config.secret, {
      expiresIn: 10000
    });
    res.json({ success: true, token: 'JWT ' + token });
  });
});

module.exports = router;
