
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

