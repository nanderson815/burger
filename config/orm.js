var connection = require("../config/connection.js");


var orm = {
    selectAll = function(table, cb){
        var queryString = "SELECT * FROM ";
        queryString += table;
        connection.query(queryString, function(err, data){
            if (err) throw err;
            cb(data);
        });
    },
}


module.exports = orm;