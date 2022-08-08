 
const list = document.querySelector('.list');
const inputField = document.querySelector('.input-field');
const btn = document.querySelector('.action-btn');

const listItems = [];

const addItem = () => {
    const value = inputField.value;
        console.log(value);
        if (!value) {
            alert("Please write something in field");
        } else {

            const item = document.createElement('li');
            
            const checkboxRemoveItem = document.createElement('input');
            checkboxRemoveItem.type = "checkbox";
                
            checkboxRemoveItem.addEventListener('click', () => removeElement(item));
            
            item.textContent = value.charAt(0).toUpperCase() + value.slice(1);
            
            item.prepend(checkboxRemoveItem);
                
            list.append(item);
            
            inputField.value = '';
        }
    
};

btn.addEventListener('click', addItem);
inputField.addEventListener('keypress', event => {
    if(event.keyCode == 13) {
        addItem();
    }
});

const removeElement = item => {
    
    if(list.childNodes.length > 1) {
        list.removeChild(item);
    } else {
        alert("You can't remove last task");
    }
};