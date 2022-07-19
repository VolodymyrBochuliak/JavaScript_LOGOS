
let str = "string";

str.charAt(0); //отримуємо певну літеру
str.charCodeAt(3); // отримуємо код літери з стрічки
str.concat('string', 'concat'); //об'єднання стрічок
str.endsWith('ing'); // перевіряє закінчення на true or false
str.startsWith();
str.indexOf('n'); // виводить порядковий номер у стрічці (знаходить лише першу літеру в масиві стрінги)
str.lastIndexOf('n'); // верта останню літеру в стрічці яка співпадає з аргументом
str.substring()/str.slice(1,2); // обрізає початок і кінець стрічки
str.split(''); // розділяє текст за розділовими знаками (+ - * / , . a b c d...) або пробілом
str.toUpperCase/str.toLowerCase();
str.trim(); // обрізає краї (пробіли) одного слова (стрічки)



let user = {
    userName: 'Igor',
    age: 15,
    town: 'Lviv',
}

Object.entries(user); // перетворює властивість об'єкта в масиви 
Object.freeze(user); // можна заморожувати властивості об'єкта, вони не перезапишуться при пресвоєнні нового зачення



