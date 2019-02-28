
var mysql = require("mysql");

// Google Cloud Platform Connection
if (process.env.INSTANCE_CONNECTION_NAME) {
    config = {
        socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE
    };
    // Local DB Connection
} else {
    config = {
        host: "localhost",
        port: 4040,
        user: "root",
        password: "admin",
        database: "burgers_db"
    };
}
this.connection = mysql.createConnection(config);

module.exports = connection;
