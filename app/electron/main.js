// ------------ //
// MAIN PROCESS //
// ------------ //

// dependances
const { app, BrowserWindow } = require('electron')
const path = require('path')
// create electron window
function createWindow() {
  // Create the electron window
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // load index.html
  mainWindow.loadFile('app/src/index.html')
  // mainWindow.webContents.openDevTools()
}

// when electron is initialized and ready
// create window
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // reopen the window on macOS dock icon click and no other window exist
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed.
// when all windows are closed, exit main process if not on mac
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// app specific main process code here (require here)
