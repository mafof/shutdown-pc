let Application = require('./App');

window.addEventListener('DOMContentLoaded', () => {
    window.app = new Application();
    document.getElementById('customTime').onkeydown = editCustomTimerInput;
});
