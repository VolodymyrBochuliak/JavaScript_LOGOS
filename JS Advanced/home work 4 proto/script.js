
// const CoffeeMakerMachine = {

//     component_1: 'water',
//     component_2: 'coffee',
//     current: "220V",

//     on: function (){
//         console.log('Your coffee making, starts');
//     },

//     off: function (){
//         console.log('your coffee is ready');
//     }
// };

// const drip = {

//     defusion: "drops",
//     filter: 'paper',
//     __proto__: CoffeeMakerMachine,
// };

// const horn = {

//     handle: 'iron_copper',
//     __proto__: CoffeeMakerMachine,
// };

// const automatic = {

//     component_3: 'milk',
//     component_4: 'sugar',
// };
// Object.setPrototypeOf(automatic, CoffeeMakerMachine);


function CoffeeMakerMachine (name){
    this.name = name;
    
}

CoffeeMakerMachine.prototype.on = function (){
    console.log(`Your coffee making is starts by ${this.name} coffee maker`);
};
CoffeeMakerMachine.prototype.off = function (){
    console.log('Your coffee is ready');
};



const drip = new CoffeeMakerMachine('drip');

document.querySelector('.CM1').addEventListener('click', ()=> {
    console.log(drip.name);
    drip.on.call();
    
});

const automatic = new CoffeeMakerMachine('auto');
document.querySelector('.CM3').addEventListener('click', ()=> {
    automatic.off.call();
    console.log(automatic);
    
});

