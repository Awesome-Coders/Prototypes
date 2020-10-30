const { app, BrowserWindow } = require('electron')
var con;
var  mysqlcon
var  db_con = require('./js/db_connect.js');
var win;

function createWindow () {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }

  })

  win.loadFile('./view/login.html')

  //win.loadURL(`file://${__dirname}/view/login.html`)
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
  var  con_close = require('./js/db_close.js');
})

//process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
