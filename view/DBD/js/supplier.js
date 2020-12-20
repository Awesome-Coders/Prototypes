var con = require('../js/db_connect');
var ipcRenderer = require('electron').ipcRenderer;
var remote = require('electron').remote;

console.log("in supplier");
console.log(remote.getGlobal('sharedObj').userrole);
