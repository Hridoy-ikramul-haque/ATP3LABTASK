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

router.get('/allEmployeeList',function (req,res){
    if(req.session.username!=null){
        employeeModel.getAll(function (results){
            var data ={results:results}
            console.log(data);
            res.render('admin/allEmp',data);
        });

    }
    else {

    }
});

router.get('/update/:id',function (req,res) {
    if(req.session.username!=null){
        employeeModel.get(req.params.id,function (result) {
            console.log(result);
            res.render('admin/update',result);
        });
    }else {
        res.redirect('/login');
    }
});

router.post('/update/:id',function (req,res) {
    console.log(req.body);
    var emp=req.body;
    emp.id=req.params.id;
    employeeModel.update(emp,function(status){
        if(status){
            res.redirect('/admin/allEmployeeList');
        }
        else{
            res.send("All fields required");
        }
    });
});

router.get('/delete/:id',function (req,res) {
    if(req.session.username!=null){
        employeeModel.get(req.params.id,function (result) {
            console.log(result);
            res.render('admin/delete',result);
        });
    }else {
        res.redirect('/login');
    }
});

router.post('/delete/:id',function (req,res) {
    var id=req.params.id;
    employeeModel.delete(id,function(status){
        if(status){
            res.redirect('/admin/allEmployeeList');
        }
        else{
            res.send("Server Error");
        }
    });
});

router.get('/search',function (req, res) {
    if(req.session.username!=null){

            res.render('admin/search');

    }else {
        res.redirect('/login');
    }
});

router.get('/search/:searchString',function (req, res) {
    if(req.session.username!=null){

        employeeModel.search(req.params.searchString,function (results) {
            console.log(results);
            res.send(results);
        });

    }
});

module.exports = router;
