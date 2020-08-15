var db = require('./db');

module.exports ={

    get: function(id, callback){
        var sql = "select * from employee where empId="+id;
        db.getResults(sql, function(result){
            if(result.length > 0){
                callback(result[0]);
            }else{
                callback([]);
            }
        });
    },
    search: function(string, callback){
        var sql = "select * from employee where empId='"+string+"' or name like'%"+string+"' or name like '"+string+"%' " +
            "or name like '%___"+string+"___%'";
        db.getResults(sql, function(result){
            if(result.length > 0){
                callback(result);
            }else{
                callback([]);
            }
        });
    },

    getAll: function(callback){
        var sql = "select * from employee";
        db.getResults(sql, function(result){
            if(result.length > 0){
                callback(result);
            }else{
                callback([]);
            }
        });
    },

    validate: function(user, callback){
        var sql = "select * from employee where username='"+user.username+"' and password='"+user.password+"'";
        db.getResults(sql, function(result){
            if(result.length > 0){
                callback(result, true);
            }else{
                callback([],false);
            }
        });
    },

    insert: function(user, callback){
        var sql = "insert into employee values('', '"+user.name+"', '"+user.phone+"', '"+user.gender+"'" +
            ", '"+user.designation+"' , '"+user.username+"', '"+user.password+"')";

        console.log(sql);

        db.execute(sql, function(status){
            if(status){
                callback(true);
            }else{
                callback(false);
            }
        });
    },

    update: function(user, callback){
        var sql = "UPDATE `employee` SET `Name`='"+user.name+"',`Phone`='"+user.phone+"'," +
            "`gender`='"+user.gender+"',`designation`='"+user.designation+"'," +
            "`password`='"+user.password+"' WHERE empId="+user.id;
        db.execute(sql, function(status){
            if(status){
                callback(true);
            }else{
                callback(false);
            }
        });
    },
    updateProPic:function (employee,callback){
        var sql = "UPDATE employee SET " +
            "`path`='"+employee.propic+"' where empId="+employee.user_id;
        db.execute(sql, function(status){
            if(status){
                callback(true);
            }else{
                callback(false);
            }
        });
    },

    delete: function(id, callback){
        var sql = "delete from employee where empid="+id;
        db.execute(sql, function(status){
            if(status){
                callback(true);
            }else{
                callback(false);
            }
        });
    }
}
