var db = require('./db');

module.exports ={

    get: function(id, callback){
        var sql = "select * from employee where id="+id;
		
        db.getResults(sql, function(result){
            if(result.length > 0){
                callback(result[0]);
            }else{
                callback([]);
            }
        });
    },

    getAll: function(callback){
        var sql = "select * from employee";var db = require('./db');

module.exports ={

    get: function(id, callback){
        var sql = "select * from employee where id="+id;
        db.getResults(sql, function(result){
            if(result.length > 0){
                callback(result[0]);
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
                callback(true);
            }else{
                callback(false);
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
            "`gender`='"+user.gender+"',`designation`='"+user.designation+"',`username`='"+user.username+"'," +
            "`password`='"+user.password+"' WHERE empId="+user.id;
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
                callback(true);
            }else{
                callback(false);
            }
        });
    },

    insert: function(user, callback){
        var sql = "insert into user values('', '"+user.name+"', '"+user.phone+"', '"+user.gender+"'" +
            ", '"+user.designation+"', '"+user.password+"')";

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
            "`gender`='"+user.gender+"',`designation`='"+user.designation+"',`username`='"+user.username+"'," +
            "`password`='"+user.password+"' WHERE empId="+user.id;
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