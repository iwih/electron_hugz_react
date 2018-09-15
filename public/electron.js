const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url')

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 900, height: 680, show: false});
    const startUrl = url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true,
        hash: '/'
    });
    mainWindow.loadURL(startUrl)
    mainWindow.on('closed', () => mainWindow = null);
    mainWindow.on('ready-to-show', () => mainWindow.show())
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
