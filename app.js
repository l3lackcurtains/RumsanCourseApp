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
var port = process.env.PORT || 3000

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

//  Header configuration
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Multer File Uploads
var storage = multer.diskStorage({
  destination: './files',
  filename(req, file, cb) {
	var filename = bcrypt.hashSync(file.originalname + '-' + Date.now())+path.extname(file.originalname);
    cb(null, filename);
  },
});

var upload = multer({ storage });

app.post('/upload', upload.single('file'), function (req, res) {
  	const file = req.file;
	res.json({status: true, message: { filename: file.filename }});
});


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

app.listen(port, function() {
	console.log(`App Connected to ${port} port`);
})

module.exports = app;
