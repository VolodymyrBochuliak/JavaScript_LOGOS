// hw1

// let city = 'Kyiv';
// city = 'Lviv';
// let address = city;
// // alert(address);

// let n = 3;
// let result = Math.pow(n, 3);
// result = 3**3;
// console.log(result);

// let penNumber = 4;
// let pencilNumber = 6;
// let penPrice = 5.25;
// let pancilPrice = 3.5;
// let summ = ((4*5.25)+(6*3.5));

// // console.log(summ);
// // document.write(summ);

// function newContent() {
//     document.open();
//     document.write("<p> Resalt = </p>" + summ);
//     document.close();
// }

// HW2

// #1

let totalTestResalt = 0;
let test1 = prompt("Яке число є більшим (напишіть правильну відповідь порядковою цифрою): 1) 5; 2) 5.0; 3) 5.01 ? ", '');
 if (test1 == 3) {
    totalTestResalt = +1;
 }
 let test2 = prompt("Який газ є лекшим за кисень (напишіть правильну відповідь порядковою цифрою): 1) Вуглекислий; 2) Гелій; 3) Водень ? ", '');
 if (test2 == 2) {
    totalTestResalt = totalTestResalt+1;
 }
 let test3 = prompt(" Яка пташка малих розмірів має чорно-біле забарвлення (напишіть правильну відповідь порядковою цифрою): 1) Ворон; 2) Сорока; 3) Сойка ? ", '');
 if (test3 == 2) {
    totalTestResalt = totalTestResalt+1;
 }
 let test4 = prompt(" Яка тварина у фолькльорі приносить дітей (напишіть правильну відповідь порядковою цифрою): 1) Лелека; 2) Пелікан; 3) Синиця ? ", '');
 if (test4 == 1) {
    totalTestResalt = totalTestResalt+1;
 }
 let test5 = prompt(" Чого бракує москалям (напишіть правильну відповідь порядковою цифрою): 1) Мізків; 2) Здорового глузду; 3) Відірваної сраки разом з головою ? ", '');
 if (test5 == 3) {
    totalTestResalt = totalTestResalt+1;
 } else {
    alert('Правильна відповідь № 3');
 }
 let test6 = prompt(" Коли ревуть воли (напишіть правильну відповідь порядковою цифрою): 1) Як ясла повні; 2) Хочуть їсти; 3) Побачили Телицю ? ", '');
 if (test6 == 1) {
    totalTestResalt = totalTestResalt+1;
 }
 let test7 = prompt(" Найвища гора України (напишіть правильну відповідь порядковою цифрою): 1) Пікуй; 2) Парашка; 3) Говерла ? ", '');
 if (test7 == 3) {
    totalTestResalt = totalTestResalt+1;
 }
 let test8 = prompt(" Найбільше гірськ озеро України (напишіть правильну відповідь порядковою цифрою): 1) Синевир; 2) Винниківьке; 3) Свитязь ? ", '');
 if (test8 == 1) {
    totalTestResalt = totalTestResalt+1;
 }
 let test9 = prompt(" Найглибще озеро України (напишіть правильну відповідь порядковою цифрою): 1) Свитязь; 2) Морське око; 3) Синевир ? ", '');
 if (test9 == 1) {
    totalTestResalt = totalTestResalt+1;
 }
 let test10 = prompt(" Якою є площа України (напишіть правильну відповідь порядковою цифрою): 1) 407 856 км²; 2) 603 548 км²; 3) 504 863 км² ? ", '');
 if (test10 == 2) {
    totalTestResalt = totalTestResalt+1;
 }
console.log('Ваш результат = '+ totalTestResalt);
// #2

// let userName = prompt("ENTER - name", '');
// let userPass;

// if (userName == "name") {
//     userPass = prompt("Enter password LOGOS", '');

// } else if (userName == null) {
//     alert('Enter cancelled');
    
// } else {
//     alert("I don't know you ");
// }
// if (userPass == "LOGOS") {
//     alert('Wellcome in');

// } else if (userPass == null) {
//     alert('Enter cancelled');
    
// } else {
//     alert('Password incorrect');
// }

// #3

// let montheNum = prompt('Enter monthe position number', '');

// if (montheNum >= 1 && montheNum <= 12) {
//     if (montheNum == 1) {
//         alert('January');
//     }
//     if (montheNum == 2) {
//         alert('February');
//     }
//     if (montheNum == 3) {
//         alert('March');
//     }
//     if (montheNum == 4) {
//         alert('April');
//     }
//     if (montheNum == 5) {
//         alert('May');
//     }
//     if (montheNum == 6) {
//         alert('June');
//     }
//     if (montheNum == 7) {
//         alert('July');
//     }
//     if (montheNum == 8) {
//         alert('August');
//     }
//     if (montheNum == 9) {
//         alert('September');
//     }
//     if (montheNum == 10) {
//         alert('October');
//     }
//     if (montheNum == 11) {
//         alert('November');
//     }
//     if (montheNum == 12) {
//         alert('December');
//     }
// } else {
//     alert('incorect');
// }