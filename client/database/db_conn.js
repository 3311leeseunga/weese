const mysql = require("mysql");
const config = require("./db_info");
const { BrowserWindow } = require("electron");

module.exports = function () {
  return {
    init: function () {
      return mysql.createConnection(config.local);
    },

    open: function (conn) {
      const mainWindow = BrowserWindow.getFocusedWindow();
      conn.connect(function (err, callback) {
        if (err) {
          console.log("[ERROR] Can not Connected to MySQL!");
          mainWindow.webContents.send("callFunction", "connect", false);
        } else {
          console.log("[INFO] Connected to MySQL!");
          mainWindow.webContents.send("callFunction", "connect", true);
        }
      });
    },

    close: function (conn) {
      conn.end(function (err) {
        if (err) con.destroy(); // 에러가 발생할 경우 즉시 종료
        console.log("[INFO] Connection closed.");
        mainWindow.webContents.send("callFunction", "disconnect", true);
      });
    }
  };
};
