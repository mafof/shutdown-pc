function selectTimeUi(element, hours) {
    app.amountTime = convertHoursToSeconds(hours);
    
    let elements = document.querySelectorAll('.timers-select-section > span.button');
    for(let el of elements) { el.classList.remove('button-selected'); }
    
    element.classList.add('button-selected');
}

function editCustomTimerInput() {
    // code...
}

function convertHoursToSeconds(hours) { return hours * 3600; }