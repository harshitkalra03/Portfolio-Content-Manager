const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {

    const mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 1200,
        minHeight: 700,

        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile(
        path.join(__dirname, 'src', 'index.html')
    );
}

app.whenReady().then(() => {
    createWindow();
});