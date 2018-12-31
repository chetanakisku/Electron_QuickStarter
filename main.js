// import modules 
const {app, BrowserWindow} = require('electron');

// create the browser window
let win;

function createWindow() {
    win = new BrowserWindow();
    win.loadFile('index.html');
    win.webContents.openDevTools();

    //close 
    win.on('closed', function() {
        win = null;
    })
}

// run browser window
app.on('ready', createWindow);