function selectTimeUi(element, hours) {
    if(app.timer.countDown !== null) return false;
    app.amountTime = convertHoursToSeconds(hours);
    
    // Удаляем со всех кнопок класс выбранной кнопки =>
    let elements = document.querySelectorAll('.timers-select-section > span.button-select-time');
    for(let el of elements) { el.classList.remove('button-selected'); }
    
    // Добавляем к элементу класс выбранной кнопки =>
    element.classList.add('button-selected');
}

function editCustomTimerInput(ev) {
    console.dir(ev);
}

function convertHoursToSeconds(hours) { return hours * 3600; }