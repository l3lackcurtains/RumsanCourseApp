var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var passport = require('passport');
var expressValidator = require('express-validator');
var multer =require('multer');
var bcrypt     = require('bcrypt-nodejs');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var wpconfig = require('./webpack.config');
var config = require('./utils/config');
var index = require('./routes/index');
var user = require('./routes/user');
var api = require('./routes/api');

var app = express();
process.env.PWD = process.cwd();

/*
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
*/

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());

// Setup Mongoose connection with mongoDB
mongoose.connect(config.mdb, function(err, database){
	console.log("Connected to database successfully.");
})
// Using bluebird Promise removes depricated warning
mongoose.Promise = Promise

// Middlewares
app.use(passport.initialize())

// Require passport
require('./utils/passport')(passport);

// Basic routes
app.use('/user', user);
app.use('/api', api);


// Multer File Uploads
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer()

app.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      res.json({status: false, message: err});
    }
	res.json({status: true, message: req.file });
  })
})


// Setup for webpack and client renderer
if (process.env.NODE_ENV !== 'production') {
	var indexPath = path.join(__dirname, './src/index.html');
	var compiler = webpack(wpconfig);
	var middleware = webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: wpconfig.output.publicPath
	})
	app.use(middleware);
	app.use(webpackHotMiddleware(compiler));
	app.get('/*', function(req, res) {
		res.sendFile(indexPath);
	});
} else {
	var indexPath = path.join(__dirname, './dist/index.html');
	var publicPath = express.static(path.join(process.env.PWD, 'dist'));
	app.use(publicPath);
	app.get('/*', function(req, res) {
		res.sendFile(indexPath);
	});
}

var port = process.env.PORT || '3000'

app.listen(port, function() {
	console.log('App Connected to 3000 port');
})

module.exports = app;
