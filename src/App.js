import React from 'react';
import logo from './logo.svg';
import './App.css';

const path = require('path')
const url = require('url')

const BrowserWindow = window.require('electron').remote.BrowserWindow

function createWindows() {
    let window = new BrowserWindow({width: 300, height: 300, show: false})
    window.loadURL(url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file:',
        slashes: true,
        hash: '/other'
    }))

    window.once('ready-to-show', () => window.show())
    window.on('closed', () => window = null)
}

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={createWindows}>open the other window</button>
            </div>
        );
    }
}

class newElectronWindow {

}

export default App;
