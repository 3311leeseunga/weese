const { app, BrowserWindow } = require("electron");
const { ipcMain } = require("electron");
const db = require("./database/db_conn")();

ipcMain.on("connect", (event, arg) => {
  let conn = db.init();
  db.open(conn);
});

require("electron-reload")(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile("./build/index.html");

  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
