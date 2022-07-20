const fibonache = (n) => {
    let result = [1, 2];
    
    for (let i = 2; i <= n; i++) {
        let a = result[i - 1];
        let b = result[i - 2];
        result.push(a + b);
    }
    console.log(result);
    return result[n];
}

console.log(fibonache(5));

// #2

function sumOfProgression(count, denominator) {
    let sum = 0;
    let multiplier = 1;
    
    for (let i = 0; i < count; i++) {
        sum += multiplier;
        multiplier *= denominator;
    }
        return sum;
 }
  console.log(sumOfProgression(5, 2));

const arrowGeoProgSum = (a, b) => {
    const b1 = 1;
    let sum = b1 *(( 1 - b**a ) / ( 1 - b));
    return sum;
}
console.log(arrowGeoProgSum (5, 2));

// #3

// let c = prompt('Input first num', '');
// let d = prompt('Input second num', '');

// const isCommon = (num) => {

//     for(let i = 2; i < num; i++) {

//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const showCommonRange = (c, d) => {

//     for (let i = c; i <= d; i++) {

//         const isNumberCommon = isCommon(i);
         
//         if (isNumberCommon) {
//             console.log(i + " common");
//         }
//     }
// }
// console.log(showCommonRange());


// let bla = function (from, to) {
//     from = prompt(" enter first number", "");
//     to = prompt("enter second number", "");
//     for (let i = from; i <= to; i++) {
//       let isCommon = true;
//       for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//           isCommon = false;
//         }
//       }
//       if (isCommon) {
//         console.log(i);
//       }
//     }
//   };
//   bla();