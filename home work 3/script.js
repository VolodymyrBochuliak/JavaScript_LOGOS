// #1

// let userNumber = prompt('Enter your number', '');

// n!=1⋅2⋅3⋅...⋅(n−2)⋅(n−1)⋅n;

// function factorial(userNumber) {
//    if (userNumber === 1) {
//        return 1;
//    } else if (userNumber === 0) {
//        return 1;
//    } else {
//        return userNumber * factorial(userNumber - 1);
//    }
// }
// alert (factorial(userNumber));

// #2

// for ( let i=1000; i<=9999; i+=3) {
//    console.log(i);
// }
 
// №3

// let x = 1;
// for (i=1; i <=55; i++) {
//   x = x + 2;
//   console.log(x);
// }

// #4

// for (let i=90; i>0; i-=5) {
//    console.log(i);
// }

// №5

// let x = 1;
// for (i=1; i <=20; i++) {
//   x = x * 2;
//   console.log(x);
// }

// #6

// for (let a= 2; a<10000; a=2*a-1){
//    console.log(a);
// }

// #7

// for (let a= -116; a<100; a= 2*a+200) {
//       if (a >= -99 && a <= 99) {
//       console.log(a);
//       }
//    }

// №8

let userNumber = prompt('Enter a number','');
let numberPower = prompt('Enter power of a number','');
let result;

for (let i=0; i<1; i=+1) {

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
}