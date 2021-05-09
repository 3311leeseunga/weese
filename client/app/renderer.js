const { ipcRenderer } = require("electron");

ipcRenderer.send("connect", {});

ipcRenderer.on("callFunction", function (event, functionName, param) {
  switch (functionName) {
    // database
    case "connect":
      check_dbconnect(param);
      break;
    case "disconnect":
      break;
  }
});

// connecting check
function check_dbconnect(param) {
  if (param) console.log("[INFO] Connected to MySQL!");
  else console.log("[ERROR] Can not Connected to MySQL!");
}
