const quantity_reg = /[0-9]{1,10}/;



let total = document.querySelector('#total');
let beerCount = document.querySelector('#beer');
let vineCount = document.querySelector('#vine');
let pepsiCount = document.querySelector('#pepsi');

var customer_fild = document.querySelector('#quantity');
const addBtn = document.querySelector('.add_btn');
const buyBtn = document.querySelector('.buy_btn');

const shop = (function (){

    let total = 1000;
    let beerCount = 100;
    let vineCount = 100;
    let pepsiCount = 100;
    
    let beerPrice = 40;
    let vinePrice = 70;
    let pepsiPrice = 35;
    

    
    function checkBank() {
        return `Bank: ${total}`;
    }
    
    function checkItemCount(itemCount) {
        return `Amount of item: ${itemCount}`;
    }
    
    function sellItem (customer_buying, itemCount, itemPrice) {
        
        if (itemCount > customer_buying) {
    
            itemCount -= customer_buying;
            total.value += customer_buying * itemPrice;
            return `sold for ${customer_buying * itemPrice}`;
    
        } else {
            console.log('Selling error');
        }
    }
}());


