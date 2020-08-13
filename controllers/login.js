var express 	= require('express');
var employeeModel 	= require('../models/Employee');
var router 		= express.Router();

router.get('/', function(req, res){
    res.render('login/index');
});

router.post('/', function(req, res){

    var user = {
        username: req.body.username,
        password: req.body.password
    };
    console.log(req.body);
    if(req.body.username=='admin' && req.body.password=='1234'){
        req.session.username = req.body.username;
        res.redirect('/admin');
    }
    else{
        employeeModel.validate(user, function(status){
            if(status){
                req.session.username = user.uname;
                res.redirect('/home');
            }else{
                res.send('invalid username/password<br/><a href="/login">Login</a>');
            }
        });
    }


});

module.exports = router;