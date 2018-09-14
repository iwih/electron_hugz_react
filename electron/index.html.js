const path = require('path')
const BrowserWindow = require('electron').remote.BrowserWindow

function createWindows() {
    let window = new BrowserWindow({width: 300, height: 300, show: false})
    window.loadURL(`file://${path.join(__dirname, './other.html')}`)

    window.once('ready-to-show', () => window.show())
    window.on('closed', () => window = null)
}