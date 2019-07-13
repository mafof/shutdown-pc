/**
 * Класс для работы с таймером
 */

class Timer {
    constructor() {
        this.amountTime = null; // Значение таймера (в секундах)
        this.elTimeOut = document.getElementById('timer-out-text');
    }

    convertSecondsToText(seconds) {
        // Узнаем кол-во часов =>
        let hours = Math.round(seconds/3600);
        seconds = seconds - hours*3600;
        hours = (hours < 10) ? `0${hours}` : hours;
        
        // Узнаем кол-во минут и секунд =>
        let minutes = Math.round(seconds/60);
        seconds = seconds - minutes*60;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;

        return `${hours}:${minutes}:${seconds}`;
    }

    setTimeOut(value) {
        this.elTimeOut.innerText = value;
    }
}

module.exports = Timer;