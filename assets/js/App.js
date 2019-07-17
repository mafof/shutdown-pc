/**
 * Основной класс приложения
 */
let Timer = require('./Timer');

class Application {
    constructor() {
        this.appState = null; // Состояние приложения
        this.ipc = require('electron').ipcRenderer;
        this.timer = new Timer();
    }

    get amountTime() { return this.timer.amountTime; }
    
    set amountTime(seconds) {
        this.timer.amountTime = seconds;
        this.timer.setTimeOut(this.timer.convertSecondsToTextTime(this.amountTime));
    }
}

module.exports = Application;