//declaration
var express = require('express');
var login = require('./controllers/login');

var logout = require('./controllers/logout');




var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();
var expressSession = require('express-session');

//configuration
app.set('view engine', 'ejs');
app.use('/css', express.static('css'));

app.use('/img', express.static('img'));


//middleware 
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(expressSession({secret: 'my secret value', saveUninitialized:true, resave: false}));


//app.use(bodyParser());

app.use('/login', login);

//app.use('/logout', logout);


//routes
app.get('/', function (req, res) {
	res.send('welcome');
});

//server startup
app.listen(3000, function () {
	console.log('node server started at 3000!');
});