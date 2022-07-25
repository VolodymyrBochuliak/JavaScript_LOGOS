// #1

const arrayNum = [1,2,3];
// const arrayNum = [];

function arrCopy(arr) {
    arrayNum.push(arr);
    return console.log(arrayNum);
}
let arr1 = arrCopy([4,5]);

// #2

function arrToString(arr) { 
   return console.log(arr.join().split(','));
//    return console.log(arr.map(String));
}
let arr2 = arrToString([1,2,3]);

// #3

function getLength(arr){

    //   const newArr = arr.map(e => e.length);
   
const newArr = arr.forEach((element) => {
       let stringLength = element.length();
       return stringLength; 
    });
    return console.log(newArr);
}
const arr3 = getLength(['Ivan','Pavlo','Ira']);

// #4

