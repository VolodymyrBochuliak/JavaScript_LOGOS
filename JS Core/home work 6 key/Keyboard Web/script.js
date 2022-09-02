
const buttons = document.querySelectorAll('.btn');
const textarea = document.querySelector('textarea');

const backspace_btn = document.querySelector('.backspace');
const tab_btn = document.querySelector('.tab');
const caps_btn = document.querySelector('.capsLock');
const enter_btn = document.querySelector('.enter');
const shift_btn = document.querySelector('.shift');
const space_btn = document.querySelector('.space');

let chars = [];

buttons.forEach( btn => {
    btn.addEventListener('keydown', (event) => {
        const name = event.key;
        console.log(name);
        textarea.value += name;
        chars = textarea.value.split('');
    });
});
buttons.forEach( btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText;
        chars = textarea.value.split('');
    });
});

backspace_btn.addEventListener('click', () => {
    chars.pop();
    textarea.value = chars.join('');
});

backspace_btn.addEventListener('keydown', (event) => {
    
    console.dir(event);
    
    if (event.keyCode == 8) {

        chars.pop();
        textarea.value = chars.join('');
    }
});

tab_btn.addEventListener('click', () => {
    chars.push(['     ']);
    textarea.value = chars.join('');
});

caps_btn.addEventListener('click', () => {
    
    buttons.forEach( btn => {
        btn.classList.toggle('upper');
    });
});

caps_btn.addEventListener('keypress', (event) => {
    if (event.key == 'Capslock') {

        buttons.forEach( btn => {
            btn.classList.toggle('upper');
        });
    }    
});

enter_btn.addEventListener('click', () => {
    
    textarea.value += '\r\n';
    chars = textarea.value.split('');
    
});

shift_btn.addEventListener('mousedown', () => {
    
    buttons.forEach( btn => {
        btn.classList.toggle('upper');
    });
});
shift_btn.addEventListener('mouseup', () => {
    
    buttons.forEach( btn => {
        btn.classList.remove('upper');
    });
});

space_btn.addEventListener('click', () => {
    chars.push(' ');
    textarea.value = chars.join('');
});

// ____________________________________________________________

// const keyboardButtonsArray = [
//     '','`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
//     'Tab','q','w','e','r','t','y','u','i','o','p','[',']','|',
//     'CapsLock','a','s','d','f','g','h','j','k','l',';','"','Enter',
//     'Shift', 'z','x','c','v','b','n','m',',','.','/','Shift',
//     'Space'
// ];

// let keyIndex = 0;

// const keyboardKeys = document.createElement('div');
// document.querySelector('.keybord').append(keyboardKeys);
// keyboardKeys.classList.add("keyboard__keys");

// const textarea = document.querySelector('textarea');

// const keys = function keyInToHTML () {
    
//     while (keyIndex <= keyboardButtonsArray.length) {
    
//         keyIndex++;
//         const key = document.createElement('button');
//         key.innerText = keyboardButtonsArray[keyIndex];
//         document.querySelector('.keyboard__keys').append(key);
//         key.classList.add("keyboard__key");
//     }  
// }       