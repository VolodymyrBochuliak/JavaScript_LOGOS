let city;
city = 'Kyiv';
city = 'Lviv';
let address = city;
console.log(address);
let input = prompt('tape number');
let user_input = +input;
if (user_input % 2 === 0) {
    console.log('even num');
}
else if (user_input === 0) {
    console.log('num equal null');
}
else {
    console.log('odd num');
}
function maxArrValue(...args) {
    if (args.length < 1) {
        alert('Max of empty list');
    }
    let m = args[0];
    args.forEach(number => {
        if (number > m) {
            m = number;
        }
    });
    console.log(`max value is: ${m}`);
}
maxArrValue(-8, 5, 30, 8, 1, 10);
function getSqrt(number) {
    if (number && number > 0) {
        let numSgrt = Math.sqrt(number);
        console.log(`Корінь квадратний з числа ${number} дорівнює: ${numSgrt}`);
    }
    else if (number == '') {
        console.log('Будь ласка, введіть число!');
    }
    else if (number < 0) {
        console.log('Будь ласка, введіть додатнє число');
    }
    else if (number !== NaN) {
        console.log('Повинно бути числове значення');
    }
}
getSqrt(9);
getSqrt('');
getSqrt(-27);
getSqrt('nine');
