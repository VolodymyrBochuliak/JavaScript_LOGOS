
// let a = prompt();

// function exs1(a) {
//     console.log('hw1', a);
// }


// exs1(5);

// const sum = function(a, b) {
//     console.log(a + b);

//     return a + b;
// }

// let b = sum(1, 6);  //  7

// console.log(b); //  7

// console.log(sum(1, 6));


// function isPrime(num) {
//     for(let i = 2; i < num; i++) {
//         if(num % i == 0) {
//             console.log('is not a prime number');
//             break;
//         } else if(i == num -1) {
//             console.log('is a prime number');
//         }
//     }

// }

// isPrime(9);


// let number = 10;
// let x = 2;

// function foo(a = x) {
//     console.log(a ** 2);
// }

// foo();



// const myPow = function(a, b) {
//     return a ** b;
// }

// let result = myPow(3,6);
// console.log('expression:', result);


// const arrow = (a, b) =>  a ** b;


// let res = arrow(3,6);
// console.log('arrow:', res);


// if(true) console.log('this is true');

// const pow2 = a => a ** 2;

// console.log(pow2(2));




// let user = {
//     username: 'Max',
//     password: 'qwerty',
//     age: 25,
//     isDeveloper: true,
//     logInfo: function(){
//         console.log(this);
//         console.log(`user: ${this.username}, age: ${this.age} is developer: ${this.isDeveloper}`);
//     }
//     // logInfo: () => {
//     //     console.log(this);
//     //     console.log(`user: ${this.username}, age: ${this.age} is developer: ${this.isDeveloper}`);
//     // }
// }


// console.log(user.logInfo());




// n! = 1 * 2 * 3 * .. * n - 1 * n; n! = 2 * 3  * 4 ... || 6 * 4 * 5 

// n! = n * n - 1 * n - 2 *.. 1;


// function factorial(n) {

//     if(n < 1) {
//         return 1;
//     }

//     return n * factorial(n - 1);

//     // 5! = 4! * 5 || 4! = 1 *2 * 3 * 4

// }

// let a = prompt('enter your factorial number');

// let result = factorial(a);

// console.log('result:', result);





function foo(a,b,c, ...args) {
    console.log('args:', args);
    // arguments;
    console.log(arguments);

    c();

    let sum = 1;

    for(let i = 1; i < arguments.length + 1; i++){
        sum *= arguments[i - 1];
    }

    console.log(sum);

    return a + b + c;
}


let a = foo(1,2,()=>{console.log(1)},{},'');

console.log(a);


let b = 8 % 3;

console.log(b);
