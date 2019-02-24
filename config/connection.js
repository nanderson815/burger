
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err){
        console.log("Error: ", err);
    } else {
        console.log("Connected as ID ", connection.threadId);
    };
});

module.exports = connection;