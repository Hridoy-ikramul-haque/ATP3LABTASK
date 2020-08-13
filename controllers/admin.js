var express 	= require('express');
var employeeModel 	= require('../models/Employee');
var router 		= express.Router();

router.get('/', function(req, res){
    if(req.session.username!=null){
        employeeModel.getAll(function (results){
            var data ={results:results}
            console.log(data);
            res.render('admin/index',data);
        });

    }
    else {
        res.redirect('/login');
    }

});

router.post('/', function(req, res){



});

router.get('/addEmployee',function (req,res){
    if(req.session.username!=null){

            res.render('admin/addEmp');

    }
    else {
        res.redirect('/login');
    }
});

router.post('/addEmployee',function (req,res){
    console.log(req.body);
    employeeModel.insert(req.body,function (status) {
        if(status){
            res.redirect('/admin');
        }
        else{
            res.send('Server error');
        }
    });
});

module.exports = router;