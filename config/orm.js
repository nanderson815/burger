var connection = require("../config/connection.js");


function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ";
        queryString += table;
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO ";
        queryString += table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += "?";
        queryString += ") ";

        console.log(queryString);
        console.log(vals);


        connection.query(queryString, vals, function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },
    updateOne: function (table, objColVals, condition, cb){
        var queryString = "Update " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, data){
            if (err) throw err;
            cb(data);
        });
    }
}

module.exports = orm;