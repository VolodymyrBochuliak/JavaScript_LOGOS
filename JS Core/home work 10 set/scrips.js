// #1 forEach__________

let arr = [5, 6, 7, 8, 9];

const arrItemSum = (arr) => {
    let sum = 0;
    arr.forEach( element => {
        sum += element;
    });
    console.log(sum);
    return sum;
}
arrItemSum(arr);

// #2 Map ______________________

let arr1 = [5, 6, 7, 8, 9];
const newArr1 = arr1.map(item => Math.pow(item, 2));
console.log(newArr1);


// #3 Every ________________

let arr2 = [
    {name: 'Ivan', country: 'Ukraine'},
    {name: 'Petro', country: 'Ukraine'},
    {name: 'Stephan', country: 'Ukraine'},
    {name: 'Miguel', country: 'Cuba'}
];

const newArr2 = arr2.every(property => property.country === 'Ukraine');
console.log(`Correctness of properties is ${newArr2}`);

// #4 Some ________________

let arr3 = [
    {name: 'Ivan', country: 'Ukraine'},
    {name: 'Petro', country: 'Ukraine'},
    {name: 'Stephan', country: 'Ukraine'},
    {name: 'Miguel', country: 'Cuba'}
];

const newArr3 = arr3.some(property => property.country === 'Cuba');
console.log(`Are properties contain the value 'Cuba' - ${newArr3}`);


// #5 Filter ________________

let arr4 = [1, 'string', [3, 4], 5, [6, 7]];
const newArr4 = arr4.filter((element) => {
    return typeof(element) === 'object';
});
console.log(newArr4);

// #6 Reduce __________________________

let arr5 = [1, 2, 3, 2, 0, 4, 5, 6];
const newArr5 = arr5.reduce((acc, current) => {
   
    if (current == 0) {
        return console.log(acc);
    } else {
        return acc + current;
    }
}, 0);


var num = 0;
const newArr6 = arr5.reduce((acc, current) => {
    if (acc > 10) {
		console.log(num);
        // return; 
    } else {
		num ++;
		return acc + current;
	}
}, 0);

// #7 ______________________

// let arr7 = [1, -2, 3, 0, 4, -5, 6, -11];

// const newArr7 = arr7.forEach(element => {
//     if (element > 0) {
//         return Math.sqrt(element);
//     } else {
//         return;
//     }
// });
// console.log(newArr7);

const arr8 = [1, -2, 3, 0, 4, -5, 6, -11];

function func (element) {
    return element > 0;
}
const newArr8 = arr8.filter(func);

const result = newArr8.map((element) => {
	return Math.sqrt(element);
});
console.log(result);





