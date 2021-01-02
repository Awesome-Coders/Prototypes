"use strict";

var remote = require("electron").remote;

if($ === undefined) {
	var $=require("jquery");
}

$("#close").on("click", event => {
	event.preventDefault();
	if(remote.getGlobal("sharedObj") !== "undefined") {
		remote.getGlobal("sharedObj").userrole=null;
	}
	remote.getCurrentWindow().close();
});
