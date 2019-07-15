/**
 * Класс для работы с таймером
 */

class Timer {
    constructor() {
        this.amountTime = null; // Значение таймера (в секундах)
        this.countDown = null;
        this.elTimeOut = document.getElementById('timer-out-text');
    }

    /**
     * Запустить таймер
     */
    startCountDown() {
        if(this.amountTime === null) return false;
        
        this.countDown = setInterval(() => {
            if(this.amountTime !== 0) {
                window.app.amountTime = --this.amountTime;
            } else {
                clearInterval(this.countDown);
            }
        }, 1000);
    }

    /**
     * Остановить таймер
     */
    stopCountDown() {
        clearInterval(this.countDown);
        this.countDown = null;
    }


    convertSecondsToTextTime(seconds) {
        // Узнаем кол-во часов =>
        let hours = Math.floor(seconds/3600);
        seconds = seconds - hours*3600;
        hours = (hours < 10) ? `0${hours}` : hours;
        
        // Узнаем кол-во минут и секунд =>
        let minutes = Math.floor(seconds/60);
        seconds = seconds - minutes*60;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;

        return `${hours}:${minutes}:${seconds}`;
    }

    setTimeOut(value) {
        this.elTimeOut.innerText = value;
    }

    cleanAmountTime() {
        window.app.amountTime = 0;
        this.amountTime = null;
    }
}

module.exports = Timer;