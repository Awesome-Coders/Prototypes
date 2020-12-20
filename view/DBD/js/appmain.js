// const path = require('path')
// console.log(global.sharedObj.viewset[0]);
// var  $ = require('jquery');
var con = require('../js/db_connect');
var ipcRenderer = require('electron').ipcRenderer;
var remote = require('electron').remote;

console.log("in appmain");
console.log(remote.getGlobal('sharedObj').userrole);
// console.log(window.usertoken);
