//console.log(username);
//console.log(password);

var sql = 'SELECT * FROM kappal_fuels.person WHERE user_id = ? AND password = ?';
con.query(sql, [username, password], function (err, result) {
  if (err) throw err;
  console.log(result);
  if (!result.length) {
    console.log('Invalid user id and password');
    $( "#validate_msg" ).label='Invalid user id and password';
    return;
  }
  console.log('validattion successful');

  result.forEach( (row) => {
    let isadminfromdb=row.isadmin;
    console.log(isadminfromdb);
    if(isadminfromdb) {
      console.log('admin');
      window.location.replace("../view/appmain.html");
    }
    else {
      console.log('user');
      window.location.replace("../view/appmain.html");
    }
  });
});


/*
con.query('SELECT * FROM kappal_fuels.person', (err,rows) => {
if(err) throw err;
console.log('Data received from Db:');
console.log(rows);

rows.forEach( (row) => {
console.log(`user ${row.user_id} password ${row.password}`);
});
});

if (userfromdb==username && passwordfromdb==password) {
console.log('validattion successful');
}
else {
console.log('validattion failed');
}
*/
