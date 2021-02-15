const {
  app,
  BrowserWindow
} = require('electron');


function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true
    },
    backgroundColor:"#ffff0000",
    fullscreen:true,
  })
  
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
