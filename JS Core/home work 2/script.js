// __________ Arrays__________
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

    const newArr = arr.map(e => e.length);

    // const newArr = [];
    // arr.forEach((element) => 
    // {
    //    newArr.push(element.length);
    // });
    return console.log(newArr);
}
const arr3 = getLength(['Ivan','Pavlo','Ira']);

// #4

function removeDuplicates(arr){
   
    // const filteredArr = [...new Set(arr)]; // з інтернету

    const filteredArr = [];
    arr.forEach((element) => {
        if (!filteredArr.includes(element)) {
            filteredArr.push(element);
        }
    });
    return console.log(filteredArr);
}
const arr4 = removeDuplicates(['html','css','js','html','js','python','js','scss']);

// __________ Numbers__________
// #1

function getArea(circleArea) { // через кнопку на сторінці
    circleArea = +prompt("radius is...",'');

    if (circleArea) {
        
        let area = Math.PI * Math.pow(circleArea,2);
        return alert(`Площа дорівнює ${area} квадратних одиниць`);
       
    } else if (circleArea == '') {
        
        return alert('Будь ласка, введіть радіус!');
        
    } else if (circleArea = String) {
        
        return alert('Повинно бути числове значення');
    } 
}

// №2

function getSqrt(number) { // через кнопку на сторінці
    number = +prompt("input num...",'');
    
    if (number && number > 0) {
        let numSgrt = Math.sqrt(number);
        return alert(`Корінь квадратний з числа ${number} дорівнює ${numSgrt}`);
        
    } else if (number == '') {
        
        return alert('Будь ласка, введіть число!');
        
    } else if (number < 0) {

        return alert('Будь ласка, введіть додатнє число');

    } else if (number !== NaN) {
        
        return alert('Повинно бути числове значення');
    } 
}

// №3

let MyMath = {

    PI: function PI() { 
        return numberPi = 3.14159265358979;
    },
    pow: function pow(number, degree) {
        if ((isNaN(number) !== true) || (isNaN(degree) !== true)) {
           return console.log(result = number ** degree);
        } else {
            return console.log('Повинно бути числове значення');
        }
    },
    abs: function abs(number) {
        if (isNaN(number) !== true) {
            if( number >= 0) {
                return console.log(result = number);
            } else if (number < 0) {
                return console.log(result = - number);
            }
        } else {
            return console.log('Повинно бути числове значення');
        }
    },
    max: function max(...numbers) {
        m = numbers[0];
        if (isNaN(m) !== true) {
            numbers.forEach(a => {if (a > m) {m = a}});
            return console.log(m);
        } else {
            return console.log('Повинно бути числове значення');
        }    
    },
    min: function min(...numbers) {
        m = numbers[0];
        if (isNaN(m) !== true) {
            numbers.forEach(a => {if (a < m) {m = a}});
            return console.log(m);
        } else {
            return console.log('Повинно бути числове значення');
        }    
    }
};

// let number = MyMath.pow('fhfh',2);
// let number = MyMath.pow(3,2);
// let number = MyMath.PI();
// let number = MyMath.abs(-5);
// let number = MyMath.abs('abcd');
// let number = MyMath.max(-5,5,7,1,0,-3);
let number = MyMath.max(-5,'abcd',7,1,0,-3); // от тут не спрацьовує
// let number = MyMath.min(-5,5,7,1,0,-3);

