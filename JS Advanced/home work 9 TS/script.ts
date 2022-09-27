////////////////////////////
let city :string;
city = 'Kyiv';
city = 'Lviv';
let address :string = city;
console.log(address);
///////////////////////////

let input = prompt('tape number');
let user_input :number = + input;

if (user_input % 2 === 0 ) {
    console.log('even num');
    // console.log(typeof user_input );
} else  if ( user_input === 0) {
    console.log('num equal null');
} else {
    console.log('odd num');
}

//////////////////////////////////////////
function maxArrValue (...args: Array<number>) : number | string {
    if (args.length < 1){ 
        alert ('Max of empty list'); 
    }
   let m: any = args[0];
    args.forEach(number => {
        if (number > m) {
            m = number
        }
    });
    return m;
}
console.log(maxArrValue(-8,5,30,8,1,10));
//////////////////////////////////////////

function getSqrt ( number: number | string) :any { 
   
    if (number && number > 0) {

        let numSgrt = Math.sqrt(number);
        console.log(`Корінь квадратний з числа ${number} дорівнює: ${numSgrt}`);
        // return alert(`Корінь квадратний з числа ${number} дорівнює ${numSgrt}`);
        
    } else if (number == '') {
        
        console.log('Будь ласка, введіть число!');
        // return alert('Будь ласка, введіть число!');
        
    } else if (number < 0) {

        console.log('Будь ласка, введіть додатнє число');
        // return alert('Будь ласка, введіть додатнє число');

    } else if (number !== NaN) {
        
        console.log('Повинно бути числове значення');
        // return alert('Повинно бути числове значення');
    } 
}
getSqrt(9);
getSqrt('');
getSqrt(-27);
getSqrt('nine');
//////////////////////////////////////////
