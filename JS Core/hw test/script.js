

const upperContainer = document.querySelector(".upper__container");
const lowerContainer = document.querySelector('.lower__container');
const btnContainer = document.querySelector('.buttons__container');
const inputText = document.querySelector('#textarea');
upperContainer.innerHTML = inputText.textContent;

const editBtn = document.querySelector('.edit__btn');
const styleBtn = document.querySelector('.style__btn');

const hideEditContainer = document.querySelector('.lower__container__hide');
const styleContainer = document.querySelector('.style__container-hiden');

// функціонал редагування даних
editBtn.addEventListener('click', () => {
    
    hideEditContainer.style.cssText = 'display: block;';
    styleContainer.style.cssText = 'display: none;';
    
    const addBtn = document.querySelector('.add__btn');
    const saveBtn = document.querySelector('.save__btn');
    
    saveBtn.addEventListener('click', () => {
        upperContainer.innerHTML = inputText.value;
    });
    
    const addBlock = document.querySelector('.upper__container-hiden');
    addBtn.addEventListener('click', () => {
        addBlock.style.display = 'block';
        upperContainer.style.display = 'none';
        lowerContainer.style.display = 'none';
        btnContainer.style.display = 'none';

    });
    // Вибір елемента який додаєм
    const containerShow = document.querySelector('.container__inner');
    const createBtn = document.querySelector('.create_btn');

    const tableAddButton = document.querySelector('#radioTable');
    tableAddButton.addEventListener('click', () => {        
        addBlock.style.height = '60%';
        containerShow.style.display = 'block';
    });
    
    const listAddButton = document.querySelector('#radioList');
    listAddButton.addEventListener('click', () => {        
        addBlock.style.height = '40%';
        containerShow.style.display = 'block';
    });
    


    
});
// Функціонал зміни стилів
styleBtn.addEventListener('click', () => {
    
    styleContainer.style.cssText = 'display: block;';
    hideEditContainer.style.cssText = 'display: none;';

    // const upperContainer = document.querySelector(".upper__container");
    const textColor = document.querySelector(".text__color");
    const backgroundColor = document.querySelector(".background__color");
    const visible = document.querySelector(".style__container__rightSide-hiden");
    
    
// Розміри шрифта тексту
    const fontSizeButtons = document.querySelectorAll('input[name="fontSize"]');
    // console.log (fontSizeButtons);
    for (let fontSizeButton of fontSizeButtons) {
        
        fontSizeButton.addEventListener('click', () => {        
            upperContainer.style.fontSize = fontSizeButton.value;
        });
    }
// Вибір стилю шрифта 
    function getSelectType (params) {
        const chooseOption = document.querySelector("#choose-option").value;
        upperContainer.style.fontFamily = chooseOption;
    }

    
// Стилі тексту
    const boldText = document.querySelector('#boldText');
    boldText.addEventListener('click', () => {
        // console.log (boldText);
        if (boldText.checked == true) {
            upperContainer.style.fontWeight = 'bold';
        } else {
            upperContainer.style.fontWeight = 'normal';
        }
    });
    const cursiveText = document.querySelector('#cursiveText');
    cursiveText.addEventListener('click', () => {
        if (cursiveText.checked == true) {
            upperContainer.style.fontStyle = 'italic';
        } else {
            upperContainer.style.fontStyle = 'normal';
        }
    });

// Кольори тексту та фону
    textColor.addEventListener("click", () => {
        visible.style.display = "block";
        const colorT = document.querySelectorAll(".text-color");
        
        for (let item of colorT) {
            item.style.backgroundColor = item.innerText;
            item.addEventListener("click", () => {
                upperContainer.style.color = item.innerText;
                visible.style.display = "none";
            });
        }
    });
    backgroundColor.addEventListener("click", () => {
        visible.style.display = "block";
        const colorBG = document.querySelectorAll(".bg-color");

        for (let item of colorBG) {
            item.style.backgroundColor = item.innerText;
            item.addEventListener("click", () => {
                upperContainer.style.backgroundColor = item.innerText;
                visible.style.display = "none";
            });
        }
    });


});