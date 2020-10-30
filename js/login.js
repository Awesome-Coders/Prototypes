var  $ = require('jquery');
var userfromdb = '';
var passwordfromdb = '';
var username ='';
var password ='';

$( "#frm_login" ).submit(function( event ) {
  username = $("#txt_uid").val();
  password = $("#txt_pwd").val();
  const vl_user = require('../js/validate_user.js');
});
