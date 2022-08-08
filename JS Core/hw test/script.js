
const editBtn = document.querySelector('.edit__btn');
const styleBtn = document.querySelector('.style__btn');

const hideEditContainer = document.querySelector('.lower__container__hide');
const styleContainer = document.querySelector('.style__container');

editBtn.addEventListener('click', () => {
    
    hideEditContainer.style.cssText = 'display: block;';
    styleContainer.style.cssText = 'display: none;';
    
    const addBtn = document.querySelector('.add__btn');
    const saveBtn = document.querySelector('.save__btn');

    const 


    
});

styleBtn.addEventListener('click', () => {
    
    styleContainer.style.cssText = 'display: block;';
    hideEditContainer.style.cssText = 'display: none;';

});