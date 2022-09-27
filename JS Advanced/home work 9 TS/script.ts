////////////////////////////
let city :string;
city = 'Kyiv';
city = 'Lviv';
let address :string = city;
console.log(address);
///////////////////////////

let input = prompt('tape number');
let user_input :number = + input;

if (user_input % 2 === 0 ) {
    console.log('even num');
    // console.log(typeof user_input );
} else  if ( user_input === 0) {
    console.log('num equal null');
} else {
    console.log('odd num');
}

//////////////////////////////////////////
function maxArrValue (...args: Array<number>) : number | string {
    if (args.length < 1){ 
        alert ('Max of empty list'); 
    }
   let m: any = args[0];
    args.forEach(number => {
        if (number > m) {
            m = number
        }
    });
    return m;
}
console.log(maxArrValue(-8,5,30,8,1,10));
//////////////////////////////////////////

//////////////////////////////////////////

//////////////////////////////////////////