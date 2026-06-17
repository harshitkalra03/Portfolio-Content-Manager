const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const portfolioService =
    require('./src/services/portfolioService');

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

ipcMain.handle(
    "getProjects",
    () => {
        return portfolioService.getProjects();
    }
);

ipcMain.handle(
    "getTechnologies",
    () => portfolioService.getTechnologies()
);

ipcMain.handle(
    "getTags",
    () => portfolioService.getTags()
);

ipcMain.handle(
    "getTimeline",
    () => portfolioService.getTimeline()
);

ipcMain.handle(
    "getSocials",
    () => portfolioService.getSocials()
);

app.whenReady().then(() => {
    createWindow();
});