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

// const geoProgSum = function (a, b) {
    
//     // while (a <= i) {
//     //     let i = 1;
//     //     i++;
//     //     let c = i * b;
//     // }

//     for (let i = 1; i <= a; i++) {
//         let c = i * b;
//     }
//     console.log(c);
//     return c;
// }
// console.log(geoProgSum (5, 2));


// const arrowGeoProgSum = (a, b) => {
//     const b1 = 1;
//     let sum = b1 *(( 1 - b**a ) / ( 1 - b));
//     return sum;
// }
// console.log(arrowGeoProgSum (8, 3));

// #3

let c = prompt('Input first num', '');
let d = prompt('Input second num', '');

const simpleNumber = (c, d) => {

    for (let i = c; i <= d; i++) {
        
        while ( e < i ) {
            let e = 2;
            e++;
            if (e == i - 1) {
            console.log(i);
            }
        }
    }
}
