const {
	app,
	BrowserWindow
} = require("electron");

const path = require("path");

const locals = {
	require: require
	/* ...*/
};
const setupPug = require("electron-pug");

global.sharedObj = {
	userrole: "test"
};

var ipcMain = require("electron").ipcMain;

ipcMain.on("global-vars", function() {
	console.log(global.sharedObj.userrole);
});

var win;
app.on("ready", async () => {
	try {
		await setupPug({
			pretty: true
		}, locals);
	} catch (err) {
		// Could not initiate 'electron-pug'
		console.log("Could not initiate 'electron-pug'");
	}
	win = new BrowserWindow({
		show: false,
		title: "Kappal Fuels",
		writable: true,
		backgroundColor: "#FFFFFF",
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true
		},
	});
	win.maximize();

	/*global __dirname*/
	win.loadURL(path.join(__dirname, "./app/views/login.pug"));
	win.webContents.openDevTools();
	win.once("ready-to-show", () => {
		win.show();
	});
});

app.on("window-all-closed", () => {
	/*global process*/
	if (process.platform !== "darwin") {
		win = null;
		app.quit();
	}
});
