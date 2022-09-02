
const keyboardButtonsArray = [
    '','`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
    'Tab','q','w','e','r','t','y','u','i','o','p','[',']','|',
    'CapsLock','a','s','d','f','g','h','j','k','l',';','"','Enter',
    'Shift', 'z','x','c','v','b','n','m',',','.','/','Shift',
    'Space'
];

let keyIndex = 0;

const keyboardKeys = document.createElement('div');
document.querySelector('.keybord').append(keyboardKeys);
keyboardKeys.classList.add("keyboard__keys");

const textarea = document.querySelector('textarea');

const keys = function keyInToHTML () {
    
    while (keyIndex <= keyboardButtonsArray.length) {
    
        keyIndex++;
        const key = document.createElement('button');
        key.innerText = keyboardButtonsArray[keyIndex];
        document.querySelector('.keyboard__keys').append(key);
        key.classList.add("keyboard__key");
        
        // if (key.innerText == keyboardButtonsArray.includes(
        //     'Backspace','Enter','Shift'
        // )) {
        //     key.classList.add("keyboard__key--wide");
        //     let fromNewLine = document.innerHTML('<br>');
        //     key.append(fromNewLine);
            
        // } else if (key.innerText == keyboardButtonsArray.includes('Space')) {
        //     key.classList.add("keyboard__key--extraWide");
        // }
    }
};
keys();

const buttons = document.querySelectorAll('.keyboard__key');


let chars = [];

buttons.forEach ( btn => {

    btn.addEventListener('keydown', (event) => {
               
        textarea.value += event.key;
        chars = textarea.value.split('');

    });
});

// Backspace_btn.addEventListener('keydown', () => {

//     chars.pop();
//     textarea.value = chars.join('');
// });


