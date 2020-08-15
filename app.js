var express 	= require('express');
var exSession 	= require('express-session');
var bodyParser 	= require('body-parser');
var fileupload=require('express-fileupload');
var employee=require('./controllers/employee');
var login   = require('./controllers/login');
var admin = require('./controllers/admin');
var app 		= express();

//config
app.set('view engine', 'ejs');




//middleware

app.use(fileupload());
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));


/*app.get('/admin.js/user/:abc/:name', function(req, res){
	res.send(req.params.abc+" | "+req.params.name);
});*/

app.use('/assets',express.static('assets'));
app.use('/jquery',express.static('node_modules/jquery/dist'));
app.use('/login',login);
app.use('/admin',admin);
app.use('/employee',employee);

app.get('/', function(req, res){
    res.redirect('/login');
});

app.listen(3000, function(){
    console.log('express http server started at...3000');
});
