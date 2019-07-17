function startTimerUi(element) {
    if(app.amountTime === null) return false;
    // Переключаем интерфейс UI =>
    document.getElementsByClassName('hide-element')[0].classList.remove('hide-element');
    element.parentNode.classList.add('hide-element');
    
    // Устанавливаем всем кнопкам класс inactive, кроме выбранной кнопки =>
    let elementsButton = document.querySelectorAll('.timers-select-section > .button-select-time:not(.button-selected)');
    for(let el of elementsButton) {
        el.classList.add('button-select-time-inactive');
    }
    document.getElementById('customTime').setAttribute('readonly', 'readonly');

    app.timer.startCountDown();
}

function toggleTimerUi(element) {
    let status = element.src.split('/');
    status = status[status.length-1];

    if(status === 'Pause.svg') {
        element.src = "./assets/img/Start.svg";
        app.timer.stopCountDown();  
    } else if (status === 'Start.svg') {
        element.src = "./assets/img/Pause.svg";
        app.timer.startCountDown();
    }
}

function stopTimerUi(element) {
    // Переключаем интерфейс UI =>
    document.getElementsByClassName('hide-element')[0].classList.remove('hide-element');
    element.parentNode.classList.add('hide-element');
    
    // Устанавливаем кнопку переключения на стандартную позицию =>
    element.parentNode.children[0].src = "./assets/img/Pause.svg";

    // Удаляем классы выбранных элементов и неактивных элементов =>
    let elementsButton = document.querySelectorAll('.button-select-time');
    for(let el of elementsButton) {
        el.classList.remove('button-select-time-inactive');
        el.classList.remove('button-selected');
    }
    document.getElementById('customTime').removeAttribute('readonly');

    app.timer.stopCountDown();
    app.timer.cleanAmountTime();
}