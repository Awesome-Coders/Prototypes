const { app, BrowserWindow } = require('electron')
const  path = require('path')
//const  url = require('url');
var win;

function createWindow () {
  win = new BrowserWindow({
    title: 'Kappal Fuels',
    webPreferences: {
      nodeIntegration: true,
      preload: `${__dirname}/preload.js`
      // path.join(__dirname, 'preload.js'),
       //`${__dirname}/preload.js`,
      //preload: path.join(__dirname, './preload.js'),
    },
  });
  win.maximize()
  //win.setFullScreen(true);

  win.loadURL(path.join(__dirname, './view/DBD/BS3/login.html'))
  // win.loadURL(url.format({
  //   pathname: path.join(__dirname, './view/login.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }));
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
  //const db_close = require('./js/db_close.js');
  //db_close.close(db_con.obj);
});

// module.exports=win
// window.win =win
