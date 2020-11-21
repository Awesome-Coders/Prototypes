const con = require('../js/db_connect');

class Role {
  constructor(role) {
    this.role = role;
    this.views1=new Array();
  }
  get_permission(callback) {
    console.log('running fetch');
    console.log(this.role);
    let sql = 'SELECT * FROM kappal_fuels.user_permission WHERE role_id = ?';
    con.query(sql, [this.role], function (err, role_result,fields) {
      console.log('con is working in roles');
      if (err) {
        throw err;
        callback(this);
      }
      console.log(role_result);
      if (!role_result.length) {
        console.log('No data from user_permission table');
      }
      else {
        let i=0;
        console.log('looping in roles');
         role_result.forEach((row) => {
          //this.views1.push(row.view_id);
          console.log(row.view_id);
          i++;
        })
      }
      callback(this);
    });
  }
}
module.exports =Role;
