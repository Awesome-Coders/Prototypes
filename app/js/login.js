/*global __dirname, $, con, ipcRenderer, remote, path  */

document.getElementById("txt_uid").value = "vjo";
document.getElementById("txt_pwd").value = "vjo";

//focus the cursor on userid field
$("#txt_uid").focus();

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

	window.location.replace(path.join(__dirname, "./appmain.pug"));
}
