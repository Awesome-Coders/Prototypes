/*global __dirname, $,  path, remote */

$("#logout").on("click", event => {
	event.preventDefault();
	if (remote.getGlobal("sharedObj") !== "undefined") {
		remote.getGlobal("sharedObj").userrole = null;
	}
	window.location.replace(path.join(__dirname, "./login.pug"));
});
