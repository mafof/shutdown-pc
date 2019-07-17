function selectTimeUi(element, hours) {
    if(app.timer.countDown !== null) return false;
    
    // Удаляем со всех кнопок класс выбранной кнопки =>
    let elements = document.querySelectorAll('.timers-select-section > .button-select-time');
    for(let el of elements) { el.classList.remove('button-selected'); }
    
    // Добавляем к элементу класс выбранной кнопки =>
    element.classList.add('button-selected');

    app.amountTime = convertHoursToSeconds(hours);
}

function selectCustomTimeUi(element) {
    if(app.timer.countDown !== null) return false;
    
    // Удаляем со всех кнопок класс выбранной кнопки =>
    let elements = document.querySelectorAll('.timers-select-section > .button-select-time');
    for(let el of elements) { el.classList.remove('button-selected'); }
    
    // Добавляем к элементу класс выбранной кнопки =>
    element.classList.add('button-selected');

    let inputText = element.value;
    if(inputText !== "") {
        app.amountTime = convertInputTextToSeconds(inputText.split(':'));
    } else {
        app.amountTime = 0;
    }

    element.setSelectionRange(element.value.length, element.value.length);
}

function editCustomTimerInput(ev) {
    if(!isCurrentInputKey(ev)) return false;
 
    let innerText = ev.srcElement.value;
    let symbol = ev.key;
    const MAX_SECONDS = 360000; // 100h
    let arrSymbols = innerText.split(':');

    if(!Number.isNaN(Number(symbol))) {
        if(isSeconds()) {
            if(innerText >= MAX_SECONDS) { 
                ev.srcElement.value = MAX_SECONDS;
                arrSymbols[0] = ''+MAX_SECONDS;
                ev.preventDefault();
            } else {
                arrSymbols[0] += symbol;
            }
        } else {
            if(arrSymbols[0] > 99) arrSymbols[0] = '99';
            let currentValue = arrSymbols[arrSymbols.length-1] + symbol;
            if(currentValue >= 60) {
                arrSymbols[arrSymbols.length-1] = '59';
            } else {
                arrSymbols[arrSymbols.length-1] = currentValue;
            }

            ev.srcElement.value = "";
            arrSymbols.forEach((element, index) => {
                if(index !== arrSymbols.length-1) ev.srcElement.value += `${element}:`;
                else ev.srcElement.value += `${element}`;
            });
            ev.preventDefault();
        }
    } else if(symbol === ':') {
        if(innerText.length === 0) return false;
        else if(innerText[innerText.length-1] === ':') return false;
        if(arrSymbols.length === 3) return false;
    } else if(symbol === 'Backspace') {
        arrSymbols[arrSymbols.length-1] = arrSymbols[arrSymbols.length-1].substring(0, arrSymbols[arrSymbols.length - 1].length - 1);
    }

    function isSeconds() { return arrSymbols.length === 1; }

    app.amountTime = convertInputTextToSeconds(arrSymbols);
}

function convertInputTextToSeconds(arrText) {
    if(arrText.length === 1) {
        return arrText[0];
    } else if(arrText.length === 2) {
        return (arrText[0] * 60) + Number(arrText[1]);
    } else if(arrText.length === 3) {
        return (arrText[0] * 3600) + (arrText[1] * 60) + Number(arrText[2]);
    }
}

function isCurrentInputKey(ev) {
    return ((!Number.isNaN(Number(ev.key)) || ev.key === ':' || ev.key === 'Backspace') && ev.code !== 'Space');
}

function convertHoursToSeconds(hours) { return hours * 3600; }