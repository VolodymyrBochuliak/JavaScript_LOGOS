
function seasonSwicher () {
    let userNum = prompt('input your favorite month number', 'input range 1 - 12');
    switch (userNum) {
        case '12': 
        case '1': 
        case '2': 
            alert('Your favorite season is Winter');
            break;
        case '3': 
        case '4': 
        case '5': 
            alert('Your favorite season is Spring');
            break;
        case '6': 
        case '7': 
        case '8': 
            alert('Your favorite season is Summer');
            break;
        case '9': 
        case '10': 
        case '11': 
            alert('Your favorite season is Autumn');
            break;
        default: 
            alert('Your number out of range');
            break;
    }
}

function monthSwicher () {

    let userNum = prompt('input your favorite month number', 'input range 1 - 12');

    switch (userNum) {
        case '1': 
            alert('January');
            break;
        case '2': 
            alert('February');
            break;
        case '3': 
            alert('March');
            break;
        case '4': 
            alert('April');
            break;
        case '5': 
            alert('May');
            break;
        case '6': 
            alert('June');
            break;
        case '7': 
            alert('July');
            break;
        case '8': 
            alert('August');
            break;
        case '9': 
            alert('September');
            break;
        case '10': 
            alert('October');
            break;
        case '11': 
            alert('November');
            break;
        case '12': 
            alert('December');
            break;
        default: 
            alert('your number out of range');
            break;
    }
    
}



function userPrimeNum (num) {
    num = document.getElementById("inputNum").value;
    for (let i = 2; i < num; i++) {

        if(num % i == 0) {
            alert('is not a prime number');
            // console.log('is not a prime number');
            break;
        } else if(i == num -1) {
            alert('is a prime number');
            // console.log('is a prime number');
        }
    }
}



// function maxArgValue(...args) {

//     if (args.length < 1){ 
//         alert ('Max of empty list'); 
//     }
//     let a = args[0];
//     args.forEach ( function(i) {
        
//         if (i > a) {
//             i = a;
//         }
//     });
//     return a;
// }
// console.log(maxArgValue(2,5,3,8,1,10));

function bigint_max(...args){
    if (args.length < 1){ 
        alert ('Max of empty list'); 
    }
    m = args[0];
    args.forEach(a => {if (a > m) {m = a}});
    return m;
}

console.log(bigint_max(2,5,3,8,1,10));

