/**
 * Класс хранилища необходимых данных
 */

class Storage {
    constructor() {
        this.appAmountTime = null;
        this.appState = null;
        
        this.MAIN_STATE     = 0;
        this.START_STATE    = 1;
        this.PAUSE_STATE    = 2;
        this.CONTINUE_STATE = 3;
        this.STOP_STATE     = 4;
    }

    get amountTime() { return this.appAmountTime; }
    
    set amountTime(value) {
        // code...
    }

    get state() { return this.appState; }

    set state(value) {
        if(typeof value === 'number' && value <= 4)
            this.appState = value;
    }
}

module.exports = Storage;