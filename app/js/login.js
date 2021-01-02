// require path to load new page
const path = require("path");

if ($ === "undefined") {
	var $ = require("jquery");
}

//require db connection
const con = require("../js/db_connect");

document.getElementById("txt_uid").value="vjo";
document.getElementById("txt_pwd").value="vjo";

//focus the cursor on userid field
$("#but_submit").focus();

var ipcRenderer = require("electron").ipcRenderer;
var remote = require("electron").remote;

//on submission of the login form
$("#frm_login").submit((event) => {
	event.preventDefault();
	let user_id = $("#txt_uid").val();
	let password = $("#txt_pwd").val();
	validate(user_id, password);
});

// function to validate the given user id and password
function validate(user, pass) {
	if (con == "undefined") {
		console.log("Conection is not established yet");
		return;
	}
	let query_str = "select * from kappal_fuels.user where user_id=? and password=?;";
	con.query(query_str, [user, pass], process_con);
}

// process the db returns
function process_con(err, data) {
	if (err) throw err;
	if (!data.length) {
		document.getElementById("validate_msg").innerHTML = "<p style=\"color:red\">Invalid user id and  password</p>";
		return;
	}

	data.every((row) => {
		console.log("entering loop");
		console.log(row);
		remote.getGlobal("sharedObj").userrole = row.user_groupid;
		console.log(remote.getGlobal("sharedObj").userrole);
		ipcRenderer.send("global-vars");
		return true;
	});

	/*global __dirname*/
	/*eslint no-undef: "error"*/
	window.location.replace(path.join(__dirname, "./appmain.pug"));
}
