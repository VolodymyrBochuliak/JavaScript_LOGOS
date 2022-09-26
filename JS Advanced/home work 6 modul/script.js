////////////////////////////////////////////////////////

function Sum (num) {
    return function inner (n) {
        // console.log(num);
        num += n;
        return num;
    };
}

let sum = Sum(4);

console.log(sum(15));
console.log(sum(20));
console.log(sum(25));
console.log('end of first task');


/////////////////////////////////////////////////////////////

const quantity_reg = /[0-9]{1,4}/;

const total_fild = document.querySelector('#total');
const beerCount_fild = document.querySelector('#beer');
const vineCount_fild = document.querySelector('#vine');
const pepsiCount_fild = document.querySelector('#pepsi');

const customer_fild = document.querySelector('#quantity');
const addBtn = document.querySelector('.add_btn');

const quantity_list = document.querySelector('.output_text_fild');
const buyBtn = document.querySelector('.buy_btn');

// const customerChoiceList = document.querySelectorAll('input[name="radioButton"]');

const customerChoiceBeer = document.querySelector('#beer_choice');
const customerChoiceVine = document.querySelector('#vine_choice');
const customerChoicePepsi = document.querySelector('#pepsi_choice');

const user_recept = document.querySelector('.receipt');

const shop = (function (){
/////////////////////////////////////////////////
    function fildValid () {
        if(!quantity_reg.test(customer_fild.value)) {
            customer_fild.style.cssText = 'border: 2px solid red;';
            return addBtn.disabled = true;
        } else {
            customer_fild.style.cssText = 'border: 2px solid green;';
            return addBtn.disabled = false;
        }
    }

    customer_fild.addEventListener ('change', () => {
        fildValid ();
    });
  
//////////////////////////////////////////////
    let total = 1000;
    let beerCount = 100;
    let vineCount = 100;
    let pepsiCount = 100;
    
    total_fild.innerHTML = `${total} грн.`;
    beerCount_fild.innerHTML = `${beerCount} шт.`;
    vineCount_fild.innerHTML = `${vineCount} шт.`;
    pepsiCount_fild.innerHTML = `${pepsiCount} шт.`;

    let beerPrice = 40;
    let vinePrice = 70;
    let pepsiPrice = 35;
    
    
    addBtn.addEventListener('click', () => {

        let quantity = customer_fild.value;
        
        if (customerChoiceBeer.checked) {
            
            // console.log(`before ${beerCount}`);
            let operation = sellItem( quantity, beerCount, beerPrice);
            console.log(operation);
            beerCount = operation.itemCount;
            // console.log(`after ${beerCount}`);

            beerItem = document.createElement('span');
            beerItem.innerText = `Пиво: ${quantity} шт.`;
            quantity_list.append(beerItem);

            buyBtn.addEventListener('click', () => {
                
                quantity_list.innerText = '';
                beerCount_fild.innerHTML = `${operation.itemCount} шт.`;
                total_fild.innerHTML = `${operation.total} грн.`;
            });        
        }
        if (customerChoiceVine.checked) {
            
            let operation = sellItem( quantity, vineCount, vinePrice);
            console.log(operation);
            vineCount = operation.itemCount;
            
            vineItem = document.createElement('span');
            vineItem.innerText = `Вино: ${quantity} шт.`;
            quantity_list.append(vineItem);
            // quantity_list.innerText += `Вино: ${quantity} шт.`;
            
            buyBtn.addEventListener('click', () => {

                quantity_list.innerText = '';
                total_fild.innerHTML = `${operation.total} грн.`;
                vineCount_fild.innerHTML = `${operation.itemCount} шт.`;
            });
                            
        }
        if (customerChoicePepsi.checked) {
        
            let operation = sellItem( quantity, pepsiCount, pepsiPrice);
            console.log(operation);
            pepsiCount = operation.itemCount;

            pepsiItem = document.createElement('span');
            pepsiItem.innerText = `Пепсі: ${quantity} шт.`;
            quantity_list.append(pepsiItem);
            
            buyBtn.addEventListener('click', () => {

                quantity_list.innerText = '';
                total_fild.innerHTML = `${operation.total} грн.`;
                pepsiCount_fild.innerHTML = `${operation.itemCount} шт.`;
            });
                            
        }

        customer_fild.value = '';
    });

    function checkBank() {
        return total_fild.innerHTML = total ;
    }
    
    function checkItemCount(itemCount) {
        return `Amount of item: ${itemCount}`;
    }
    
    function sellItem (customer_buying, itemCount, itemPrice) {
        
        if (itemCount > customer_buying) {
    
            itemCount -= customer_buying;
            // console.log(itemCount);
            total += customer_buying * itemPrice;
            
            return {itemCount: itemCount, total: total};
    
        } else {
            alert(`Вибачте на складі залишилось ${itemCount} шт.`);
        }
    }

}());



