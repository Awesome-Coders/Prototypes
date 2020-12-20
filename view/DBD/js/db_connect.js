var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  // debug : true,
  // connectionLimit: 4,
  // multipleStatements: true
});

con.connect(function(err) {
    if (err) throw err;
});

module.exports = con;
