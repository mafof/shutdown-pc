function selectTime(element, time) {
    let elements = document.getElementsByClassName('timer-selected-button');
    for(let el of elements) {
        el.classList.remove('button-selected');
    }

    element.classList.add('button-selected');
}

function clickButtonControlTimer(el, type) {
    switch(type) {
        case 'start':
            Storage.state = Storage.START_STATE;
            document.getElementById('section-pause-elements').classList.remove('hide-element');
            el.classList.add('hide-element');
            window.ipc.send('clickButton', 'start');
        break;
        case 'toggle':
            let section = document.getElementById('section-pause-elements');
            
            if(Storage.state === Storage.PAUSE_STATE || Storage.state === Storage.START_STATE) {
                section.firstElementChild.src = './img/Start.svg';
                Storage.state = Storage.CONTINUE_STATE;
            } else if(Storage.state === Storage.CONTINUE_STATE) {
                section.firstElementChild.src = './img/Pause.svg';
                Storage.state = Storage.PAUSE_STATE;   
            }
            
            window.ipc.send('clickButton', 'toggle');
        break;
        case 'stop':
            Storage.state = Storage.STOP_STATE;
            
            document.getElementById('section-pause-elements').firstElementChild.src = './img/Pause.svg';
            
            document.getElementById('section-start-elements').classList.remove('hide-element');
            el.parentNode.classList.add('hide-element');
            
            window.ipc.send('clickButton', 'stop');
        break;
    }
}