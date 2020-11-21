var  $ = require('jquery');
var con = require('../js/db_connect');

class User {
  constructor(username, password, role, result) {
    this.username = username;
    this.password = password;
    this.role=role;
    this.result=result;
  }
  validate(callback) {
    console.log('running validate');
    console.log(this.username);
    console.log(this.password);
    let sql = 'SELECT * FROM kappal_fuels.user WHERE user_id = ? AND password = ?';
    con.query(sql, [this.username, this.password], function (err, result) {
      console.log('con is working');
      if (err) throw err;
      console.log(result);
      if (!result.length) {
        console.log('Invalid user id and password');
        $( "main-panel.content.container-fluid1.row.frm_login.container.row1.#validate_msg" ).label='Invalid user id and password';
        this.result=false;
        callback(this);
      }
      console.log('validation successful');
      this.role=result[0].role_id;
      console.log(this.role);
      this.result=true;
      console.log(this.result);
      callback(this);
    })
  }
}
module.exports =User
