/**
 * Основной класс приложения
 */
let Timer = require('./Timer');

class Application {
    constructor() {
        this.appState = null; // Состояние приложения
        this.ipc = require('electron').ipcRenderer;
        this.timer = new Timer();
        
        this.MAIN_STATE     = 0; // При старте приложения
        this.START_STATE    = 1; // При старте таймера
        this.PAUSE_STATE    = 2; // При паузе таймера
        this.CONTINUE_STATE = 3; // При возобновление таймера
        this.STOP_STATE     = 4; // При остановке таймера
    }

    get amountTime() { return this.timer.amountTime; }
    
    set amountTime(seconds) {
        this.timer.amountTime = seconds;
        this.timer.setTimeOut(this.timer.convertSecondsToTextTime(this.amountTime));
    }

    get state() { return this.appState; }

    set state(value) {
        if(typeof value === 'number' && value <= 4)
            this.appState = value;
    }
}

module.exports = Application;