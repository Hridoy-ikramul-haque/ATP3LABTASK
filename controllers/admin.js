var express 	= require('express');
var employeeModel 	= require('../models/Employee');
var router 		= express.Router();

router.get('/', function(req, res){
    if(req.session.username!=null){
        employeeModel.getAll(function (results){
            var data ={results:results}
            res.render('admin/index',data);
        });

    }
    else {
        res.redirect('/login');
    }

});

router.post('/', function(req, res){



});

module.exports = router;