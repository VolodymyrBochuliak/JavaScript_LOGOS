// #1.1 String

// let text = prompt('Input text', '');
let words = text.split(' ').length - 1;
console.log(words);

// #1.2

// let userMail = prompt('Input your mail', ''); // example@mail.com
// let userMail = 'logos@net.com';
// let userMail_2 = '@logosnet.com';
// let userMail_3 = 'logosnet.com@';
// let userMail_4 = 'logosnet.com';

if (userMail.startsWith('@') || userMail.endsWith('@') || userMail.includes('@') === false) {
    alert('Incorrect character input sequence');
} else {
    alert('Mail added');
}

// #1.3

// let text2 = 'hfghfghfgh html cvbdhfg html html'; // для перевірки
// let text2 = prompt('Input text', '');
let mustFind = 'html';
let matchingWordsNumber = [... text2.matchAll(mustFind)];

console.log(matchingWordsNumber.length);

// #1.4

// let userInput = "https://www.google.com"; 
// let userInput = "http://www.w3schools.com";
// let userInput = prompt('intup url:', '');
console.log(userInput.length);
console.log(userInput.charAt(8));
// console.log(userInput.slice(8) || userInput.slice(7)); //шкода що так не працює

if (userInput.charAt(7) === 'w') {
    console.log(userInput.slice(7)); 
} else {
    console.log(userInput.slice(8)); 
}