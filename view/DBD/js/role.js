"use strict"
const con = require('../js/db_connect');
const {remote} = require('electron')
class Role {
  constructor(role) {
    this.role = role;
  }
  get_permission(callback) {
    console.log('running fetch')
    console.log(global.sharedObj.myrole);
    let sql = 'SELECT * FROM kappal_fuels.user_permission WHERE role_id = ?';
    con.query(sql, [this.role], function (err, role_result,fields) {
      console.log('con is working in roles');
      if (err) {
        throw err;
        con.end();
        callback(this);
        return
      }
      console.log(role_result);
      if (!role_result.length) {
        console.log('No data from user_permission table');
        con.end();
        callback(this);
        return
      }
      else {
        let i=0;
        // remote.getGlobal('sharedObj').viewset.push(row.view_id)
        console.log('looping in roles');
         role_result.forEach((row) => {

          global.sharedObj.viewset.push(row.view_id);
          console.log(global.sharedObj.viewset[i]);
          i++;
        })
      }
    });
  con.end();
  callback(this);
}
}
module.exports =Role;
