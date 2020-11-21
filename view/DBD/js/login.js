//let  $ = require('jquery');
const path = require('path')
const fs = require('fs')

$("#frm_login" ).submit(function( event ) {
  let user_id ='';
  let password ='';
  var role="";
  user_id = $("#txt_uid").val();
  password = $("#txt_pwd").val();
  const User = require('../js/validate_user.js');
  var usrobj=new User(user_id,password,"",false);
  var usrobjreturns=usrobj.validate( function (data) {
    role=data.role;
    console.log(data.role);
    console.log(data.result);
    if(data.result) {
      const Role = require('../js/role.js');
      var roleobj=new Role(data.role);
      var permissions=roleobj.get_permission( function (role_data) {
        //write to config file
        fs.writeFile("user-config.txt", data, (err) => {
          if (err)
          console.log(err);

        });
      })
      window.location.replace(path.join(__dirname, './appmain.html'));
    }
  })
})
