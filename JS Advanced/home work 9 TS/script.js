let city;
city = 'Kyiv';
city = 'Lviv';
let address = city;
console.log(address);
let input = prompt('tape number');
let user_input = +input;
if (user_input % 2 === 0) {
    console.log('even num');
}
else if (user_input === 0) {
    console.log('num equal null');
}
else {
    console.log('odd num');
}
function maxArrValue(...args) {
    if (args.length < 1) {
        alert('Max of empty list');
    }
    let m = args[0];
    args.forEach(number => {
        if (number > m) {
            m = number;
        }
    });
    return m;
}
console.log(maxArrValue(-8, 5, 30, 8, 1, 10));
