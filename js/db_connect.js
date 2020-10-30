mysqlcon = require('mysql');
con = mysqlcon.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
