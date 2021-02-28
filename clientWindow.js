const {
  app,
  BrowserWindow,
} = require('electron');


function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    minWidth:1080,
    minHeight:720,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule:true
    },
    backgroundColor:"#282828",
  })

  win.setMenuBarVisibility(false);
  win.loadURL(`http://localhost:5000/`);
  win.webContents.openDevTools();
  win.focus();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
