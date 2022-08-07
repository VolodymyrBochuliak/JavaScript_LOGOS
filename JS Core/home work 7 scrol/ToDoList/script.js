 
const list = document.querySelector('.list');
const inputField = document.querySelector('.input-field');
const btn = document.querySelector('.action-btn');

const listItems = [];

const addItem = () => {
    // const value = `- ${inputField.value}`;
    const value = inputField.value;
        console.log(value);
        if (value === null) {
            alert("Please write something in field");
        }
    
    const item = document.createElement('li');
    
    const checkboxRemoveItem = document.createElement('input');
    checkboxRemoveItem.type = "checkbox";
    // const removeBtn = document.createElement('span');
    // removeBtn.textContent = '# ';
    // removeBtn.classList.add("removing__item");

    // const removingItem = document.querySelector('.removing__item');
    // removingItem.style.cssText = "cursor: pointer; ";
    
    checkboxRemoveItem.addEventListener('click', () => removeElement(item));
    // removeBtn.addEventListener('click', () => removeElement(item));
    // item.textContent = value;
  
    item.textContent = value.charAt(0).toUpperCase() + value.slice(1);
    
    item.prepend(checkboxRemoveItem);
    // item.prepend(removeBtn);
    
    list.append(item);
    
    inputField.value = '';
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