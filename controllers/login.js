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
    if(req.body.username=='hridoy' && req.body.password=='123'){
        req.session.username = req.body.username;
        res.redirect('/admin');
    }
    else{
        employeeModel.validate(user, function(result,status){
            if(status){
                req.session.username = user.username;
                req.session.empId=result[0].empId;
                res.redirect('/employee');
            }else{
                res.send('invalid username/password<br/><a href="/login">Login</a>');
            }
        });
    }


});



module.exports = router;
