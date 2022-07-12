// №1

// let i = 4;
// let password = 'gogogo';
// let answer;

// while (i > 0 && answer != password) {
//     answer = prompt('Enter a password', '');
//     i--;
//     console.log(i);
//     if (answer == password) {
//         alert('Welcome to our site');
//     } else if (i!=0) {
//         alert(`left ${i} tries`);
//     } else {
//         alert('Try again later !');
//     }
// }

// №2.1


// let f = prompt('Enter num','');
// let i = 1;
// let result = 1;

// while (i < f) {
//     i++;
//     result = result * i;
//     console.log(result);
// }

// №2.2

// let a = 8;
// while (a) {
//     console.log(a);
//     a--;
// }

// let i=1000;
// while (i<=9999 && i!=10000) {
//     i+=3;
//    console.log(i); 
// }
//  не розумію чому виводиться останнім 10000

// #2.3

// let x = 1;
// let i = 1;
// while (i <= 55) {
//     i++;
//     x = x + 2;
//     console.log(x);
// }

// #2.4

// let i = 90;
// while (i > 0) {
//     console.log(i);
//     i -=5;
// }

// #2.5

// let x = 1;
// let i = 1;
// while (i <= 20) {
//     x = x * 2;
//   console.log(x);
// }

// #2.6

// let a = 2;
// while ( a < 10000) {
//     a = 2*a-1;
//     console.log(a);
// }

// #2.7

// let a = -116;
// while (a < 100) {
//     a = 2*a+200;
//     if (a >= -99 && a <= 99) {
//         console.log(a);
//     }
// }

// #2.8

let userNumber = prompt('Enter a number','');
let numberPower = prompt('Enter power of a number','');
let result;
let i = 0;

do {
    i++;
   if (numberPower === 0) {
      result = 1;
      console.log(result);

   } else if (numberPower = -numberPower) {
      result = 1 / Math.pow(userNumber, numberPower);
      console.log(result);
      
   } else {
      // result = Math.pow(userNumber, numberPower);
      result = userNumber**numberPower;
      console.log(result);
   }
} while (i<1);