var remote = require("electron").remote;
var $=require("jquery");
var path = require("path");

$("#logout").on("click", event => {
	event.preventDefault();
	if(remote.getGlobal("sharedObj") !== "undefined") {
		remote.getGlobal("sharedObj").userrole=null;
	}
	/*global __dirname*/
	window.location.replace(path.join(__dirname, "./login.pug"));
});
