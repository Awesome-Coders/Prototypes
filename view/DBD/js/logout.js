"use strict";

var remote = require('electron').remote;
let $=require('jquery');

$("#logout").on('click', e => {
  remote.getCurrentWindow().close();
});
