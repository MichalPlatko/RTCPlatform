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
      enableRemoteModule:true,
      nativeWindowOpen: true, // this allows you to use popups when doing authentication using firebase in an electron app
    },
    backgroundColor:"#282828",
  })

  win.setIcon("./public/skills.png");
  win.setTitle("Real Time Communication Platform");
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
