
var mysql = require("mysql");
require('dotenv').config();

var config;

if (!process.env.INSTANCE_CONNECTION_NAME){
    config = {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "admin",
        database: "burgers_db"
    };
} else{

    config = {
        socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE
    };

}




connection = mysql.createConnection(config);

connection.connect(function(err){
    if (err){
        console.log("Error: ", err);
    } else {
        console.log("Connected as ID ", connection.threadId);
    };
});

module.exports = connection;


