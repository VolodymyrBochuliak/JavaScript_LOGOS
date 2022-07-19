// let num = 5;
// let str = `${num}`;

// console.log('num', typeof num);
// console.log('str', typeof str);

// let str = new String('hello');

// console.log(str);

// let str1 = 'hello ';
// let str2 = 'world';

// console.log(str1 < str2);

// console.log('hello' > 'hell');

// let obj = {name: 'vasia', age};

// obj.name.

// let str = 'hello world_';//7

// let lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo natus veniam architecto a animi qui facere minima corrupti blanditiis? Ducimus, facilis accusamus assumenda neque quasi nulla suscipit facere quibusdam.';

// console.log(str.charAt(2));
// console.log(str.charCodeAt(2));
// console.log('s' === 'S');
// console.log(str.concat('hello ', 'world ', ' everyone'));
// console.log(str.endsWith('in'));

// console.log(str.indexOf('s'));
// console.log(str.lastIndexOf('s'));

// console.log(str.length);
// console.log(str.padEnd(20, 'string'));

// console.log(str.repeat(2));

// console.log(str.slice(3, 5));

// console.log(lorem);
// console.log(lorem.split('? '));
// console.log(str.substring(3, 5));

// console.log(str.toUpperCase());
// console.log(str.toLocaleUpperCase());

// console.log(str);



// #2. OBJECTS ____________________________

// let user = {
//     username: 'Alex',
//     age: 25,
//     isDeveloper: true
// }

// console.log(user);

// let obj = {};
// let obj = new Object({});
// console.log(obj);

// let str = '';
// let str = new String('')

// console.log(Object.create({}));

// console.log(Object.);

// user.email = 'email@mail.com';

// console.log(user);

// console.log(Object.entries(user));

// let neededProperty = 'age';

// console.log(user[neededProperty]);

// console.log(Object.freeze(user));

// user.age = 32;

// console.log(user);


// const obj2 = { username: 'Vasia', age: 15 }

// console.log(Object.isFrozen(obj2));

// Object.freeze(obj2)

// console.log(obj2);

// console.log(Object.isFrozen(obj2));

// const obj1 = { user: 'Vasia', age: 25 };

// const obj2 = { user: 'Vasia', age: 25 };

// console.log(obj1);
// console.log(obj2);

// obj1.age = 30;

// console.log(obj1);
// console.log(obj2);

// obj2.isDeveloper = true ;

// console.log(obj1);
// console.log(obj2);

// console.log(obj1 == obj2);

// let a = 5;//5

// let b = a;//5

// console.log(a);
// console.log(b);

// a*=10;

// console.log(a);
// console.log(b);


// var A1 = {a: "2"};
// var A2 = Object.assign({}, A1);

// var A3 = {...A1};  // Spread Syntax

// console.log(A1);
// console.log(A2);
// console.log(A3);




let user = {
    username: 'Alex',
    age: 25,
    isDeveloper: true
}


// console.log(user);

const user2 = { ...user, email: '1@mail.com' };

console.log(user);
console.log(user2);
console.log(user === user2);

// let a = 5;

// console.log(a + 2);

// function userInfo(name, age, isDeveloper) {
//     console.log(`user with name: ${name} is ${age} years old. isDeveloper: ${isDeveloper}`);
// }
 
// const person = [
//     ['name', 'alex']
// ]

// console.log(Object.fromEntries(person));

// console.log(Object.getOwnPropertyNames(user2));

// user2['']


// console.log(Object.keys(user2));
// console.log(Object.values(user2));


// delete user2.age;

// console.log(user2);


function foo() {
    let max = arguments[0];
    for(let i = 0; i < arguments.length; i++) {
        if(i == 0) {
            max = prompt('enter some number');
        }
        let a = prompt()
        if(a > max) {
            max = a;
        }
    }
}