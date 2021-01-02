const mysql = require("mysql");

var connectionObj = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password"
});

connectionObj.connect(function(err) {
	if (err) throw err;
});

module.exports = connectionObj;
