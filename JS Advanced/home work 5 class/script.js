
class Worker {
    constructor( firstName, lastName, rate, days) {
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.rate = rate; 
        this.days = days; 
    }
    getSelary() {
       let sum = this.rate * this.days;
        return sum;
    }
}

const worker_1 = new Worker('Ihor', 'Petrenko', 400, 15);
const worker_2 = new Worker('Stephan', 'Siryi', 250, 21);

console.log(worker_1.firstName);
console.log(worker_1.lastName);
console.log(worker_1.getSelary());

console.log(worker_2.firstName);
console.log(worker_2.lastName);
console.log(worker_2.getSelary());

let workersSelary = worker_1.getSelary() + worker_2.getSelary();
console.log(`Sum of workers salary is: ${workersSelary} hrn`);

///////////////////////////////////////////////////

class MyString {
    // constructor (string) {
    //     this.string = string;
    // }
    reverse (string){
       const reversed = string.split("").reverse().join("");
       return reversed;
    }
    ucFirst (string){
        const capitalizeFL = string.charAt(0).toUpperCase() + string.slice(1);
        return capitalizeFL;
    }
    ucWords (string){
        return string
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    
}

const str1 = new MyString ();
console.log(str1.reverse("hello"));
console.log(str1.ucFirst("hello"));
console.log(str1.ucWords("hello hello hello"));

/////////////////////////////////////////////////////////

class CoffeeMaker {
    
    constructor(name) {
        this.name = name;
    }
    on() {
        console.log('coffee is making, wait');
    }

    off() {
        console.log('coffee is done, take it');
    }
}

class DripCoffeeMaker extends CoffeeMaker {
    constructor (name, ingredient) {
        super(name);
        this.ingredient = ingredient;
    }
    eddMilk () {
        console.log(`${this.ingredient} was added`);
    }
}

class HornCoffeeMaker extends CoffeeMaker {
    constructor (name, technology) {
        super(name);
        this.technology = technology;
    }
    makeCream () {
        console.log(`${this.technology} technology make your coffee so creamy`);
    }
}

class AutoCoffeeMaker extends CoffeeMaker {
    constructor (name, ingredient_1, ingredient_2, ingredient_3) {
        super(name);
        this.ingredient_1 = ingredient_1;
        this.ingredient_2 = ingredient_2;
        this.ingredient_3 = ingredient_3;
    }
    eddIngredient () {
        console.log('milk was added');
    }
}

const CM1 = new DripCoffeeMaker ('Delongee', 'milk');

CM1.on();
setTimeout (()=> {
    CM1.eddMilk();
}, 2500);
setTimeout (()=> {
    CM1.off();
}, 5000);

const CM2 = new HornCoffeeMaker ("RTT", 'hot steam');
setTimeout (()=> {
    CM2.on();
    CM2.makeCream();
    CM2.off();
    console.log(CM2.technology);
}, 6000);

const CM3 = new AutoCoffeeMaker ("Saecco", 'instant coffee', 'chocolate', 'sugar');
setTimeout (()=> {
    CM3.on();
    // CM3.makeCream();
    CM3.off();
    console.log(CM3.ingredient_2);
}, 7000);






