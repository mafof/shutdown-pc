window.addEventListener('DOMContentLoaded', () => {
    window.ipc = require('electron').ipcRenderer;
    let Storage = require('./Storage');
    window.Storage = new Storage();
});
