var express 	= require('express');
var employeeModel 	= require('../models/Employee');
var router 		= express.Router();

router.get('/', function(req, res){
    if(req.session.username!=null){
        employeeModel.get(req.session.empId,function (results){
            var data ={results:results}
            console.log(data);
            res.render('employee/index',data);
        });

    }
    else {
        res.redirect('/login');
    }

});

router.get('/myProfile',function (req,res){
    if(req.session.username!=null){
        employeeModel.get(req.session.empId,function (result){
            res.render('employee/profile',result);
        });
    }else {
        res.redirect('/login');
    }
});

router.get('/updateProfile',function (req,res){
    if(req.session.username!=null){
        employeeModel.get(req.session.empId,function (result){
            res.render('employee/update',result);
        });
    }else {
        res.redirect('/login');
    }
});



router.post('/updateProfile',function (req,res) {
    console.log(req.body);
    var emp=req.body;
    emp.id=req.session.empId;
    employeeModel.update(emp,function(status){
        if(status){
            res.redirect('/employee/myProfile');
        }
        else{
            res.send("All fields required");
        }
    });
});

router.post('/upload', function(req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "propic") is used to retrieve the uploaded file
    let propic = req.files.propic;
    var employee={
        user_id:req.session.empId,
        propic:req.session.empId+propic.name

    };
    console.log(req.files.propic.name);
    // Use the mv() method to place the file somewhere on your server

    employeeModel.updateProPic(employee,function (status) {
        if(status){
            propic.mv('assets/'+req.session.empId+propic.name, function(err) {
                if (err)
                    console.log(err.stack);

                res.redirect('/employee/myProfile');
            });
        }
        else {
            res.redirect('/employee/updateProfile');
        }
    });


});

module.exports = router;
