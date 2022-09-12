const { app, BrowserWindow } = require('electron')
const { setupTitlebar, attachTitlebarToWindow } = require("custom-electron-titlebar/main");

setupTitlebar();

const createWindow = () => {
    const win = new BrowserWindow({
        width: 425,
        height: 450,
        maximizable: false,
        minimizable: false,
        title: "roShadow",
        autoHideMenuBar: true,
        titleBarStyle: 'hidden',
        webPreferences: {
            devTools: false,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    win.loadFile('./index.html')
    attachTitlebarToWindow(win);
}

app.whenReady().then(() => {
    createWindow()
})