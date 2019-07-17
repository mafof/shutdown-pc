const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const cp = require('child_process');
const shutdown = require('electron-shutdown-command');

let mainWindow;

app.on('ready', init);
        
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) init();
});

function init() {
    mainWindow = new BrowserWindow({
        title: 'Таймер выключения PC',
        icon: './assets/img/icon16.png',
        width: 500,
        height: 352,
        center: true,
        resizable: false,
        backgroundColor: '#1B2D3C',
        autoHideMenuBar: true,
        darkTheme: true,
        webPreferences: {
            preload: path.join(__dirname, 'assets/js/preload.js')
        }
    });
    
    mainWindow.loadFile('./index.html');
    mainWindow.on('closed', () => { mainWindow = null; })

    ipcMain.on('shutdown', (ev, data) => {
        shutdown.shutdown({
            force: true,
            quitapp: true
        });
    });
}