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
function maxArrValue (...args: Array<number>) : void {
    if (args.length < 1){ 
        alert ('Max of empty list'); 
    }
   let m: any = args[0];
    args.forEach (number => {
        if (number > m) {
            m = number
        }
    });
    console.log(`max value is: ${m}`);
}

maxArrValue(-8,5,30,8,1,10);
// console.log(maxArrValue(-8,5,30,8,1,10));
//////////////////////////////////////////

function getSqrt ( number: number | string) :void { 
   
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

const add_btn = document.querySelector('.add_btn') as HTMLButtonElement;
const reset_btn = document.querySelector('.reset_btn') as HTMLButtonElement;

let cenzorWords: string[] = [];

add_btn.addEventListener('click', () => {
    const userInput = document.querySelector('#user_input') as HTMLInputElement;
    const bad_word :string = userInput.value;
    const bad_word_container = document.createElement('span') as HTMLElement;
    const bad_words_container = document.querySelector('.bad_words') as HTMLDataElement;
    bad_word_container.innerText = bad_word;
    bad_words_container.append(bad_word_container);
    userInput.value = '';

    cenzorWords.push(bad_word);

});

reset_btn.addEventListener('click', () => {
    const bad_words_container = document.querySelector('.bad_words') as HTMLDataElement;
    bad_words_container.innerHTML = '';    
});

const cenzor_btn = document.querySelector('.cenzor_btn') as HTMLButtonElement;
cenzor_btn.addEventListener('click', () => {

    const textarea = document.querySelector('#user_input_area') as HTMLAreaElement;
    let text_string: string = textarea.value;

    console.log(typeof text_string );
    console.log(text_string );
    console.log(cenzorWords);
    
    textarea.value = cenzor(text_string);

});


// function cenzor(str: string): string {
    
//     let words = str.split(" ");

//     const newWords = words.map((word) => {
//         console.log(word);
        
//         if (cenzorWords.includes(word)) {
//             word.replace(word, "*".repeat(word.length));       
//         }
//     });
    
//     console.log(newWords);
//   return newWords.join();
// }

function cenzor(str: string): string {
    let words = str.split(" ");

    const newWords = words.map((word) => {
        
        return cenzorWords.includes(word)
          ? word.replace(word, "*".repeat(word.length))
          : word;
    });
      
    console.log(newWords);
    return newWords.join(' ');
}
////////////////////////////////////////////////