"use strict"
const { app, BrowserWindow } = require('electron')
const  path = require('path')

var win;

var ipcMain = require('electron').ipcMain;
global.sharedObj = {userrole: "test"};
ipcMain.on('global-vars', function(event) {
  console.log(global.sharedObj.userrole);
});

function createWindow () {
  win = new BrowserWindow({
    title: 'Kappal Fuels',
    show: false,
    backgroundColor: '#FFFFFF',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
  });
  win.maximize();
  win.loadURL(path.join(__dirname, './view/DBD/BS3/login.html'))
  win.webContents.openDevTools();
  win.once('ready-to-show',()=>{
    win.show();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
