

const upperContainer = document.querySelector('.upper__container');
const outputText = document.querySelector('.upper__container__content');
const lowerContainer = document.querySelector('.lower__container');
const btnContainer = document.querySelector('.buttons__container');
const inputCodeHTML = document.querySelector('#textarea');
outputText.innerHTML = inputCodeHTML.textContent;

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
    
    // saveBtn.addEventListener('click', () => {
    //     outputText.innerHTML = inputCodeHTML.value;
    // });
    
    const addBlock = document.querySelector('.upper__container-hiden');
        addBtn.addEventListener('click', () => {
        addBlock.style.display = 'block';
        upperContainer.style.display = 'none';
        lowerContainer.style.display = 'none';
        btnContainer.style.display = 'none';

    });
    // Вибір елемента який додаєм
    const containerShow = document.querySelector('.container__inner');
    // const createBtn = document.querySelector('.create__btn');
    const createTableBtn = document.querySelector('.createTable');
    const createListBtn = document.querySelector('.createList');
    
    const tableBlock = document.querySelector('.table'); 
    const listBlock = document.querySelector('.list');
    
    // Параметри таблиці
    const tableChecked = document.querySelector('#radioTable');
        tableChecked.addEventListener('click', () => {        
        addBlock.style.height = '60%';
        listBlock.style.display = 'none';
        tableBlock.style.display = 'block';
        createTableBtn.style.display = 'block';
        createListBtn.style.display = 'none';
            
        const countRow = document.querySelector('.countTR');
        const countCell = document.querySelector('.countTD');
        const widthTD = document.querySelector(".widthTD").value;
        const heightTD = document.querySelector(".heightTD").value;
        const borderWidth = document.querySelector(".borderWidth").value;
        const selectedBorderType = document.querySelector(".borderType").value;
        const selectedBorderColor = document.querySelector(".borderColors").value;
        
        // Додаєм таблицю в textarea
        createTableBtn.addEventListener('click', () => {        
            addBlock.style.display = 'none';
            upperContainer.style.display = 'block';
            lowerContainer.style.display = 'block';
            btnContainer.style.display = 'block';

            
            const table = document.createElement("table");
            inputCodeHTML.append(table);
            table.classList.add('tableStyle');
            
            let numberRows = countRow.value;
            let numberCells = countCell.value;

            table.setAttribute("border", borderWidth);
                        
            for (let i = 0; i <= numberRows; i++) {
                const tableRow = document.createElement("tr");
                table.appendChild(tableRow);
                console.log(selectedBorderColor);

                for (let j = 0; j <= numberCells; j++) {
                    const tableCell = document.createElement("td");
                    tableRow.appendChild(tableCell);
                    
                    tableCell.setAttribute("width", widthTD);
                    tableCell.setAttribute("height", heightTD);
                    tableCell.style.borderColor = selectedBorderColor;
                    tableCell.style.borderStyle = selectedBorderType;
                }
            }

            const tableHTML = document.querySelector('.tableStyle').innerHTML;
            inputCodeHTML.append(tableHTML);
           
        });
    
    });

    // Параметр списку
    const listChecked = document.querySelector('#radioList');
        listChecked.addEventListener('click', () => {        
        addBlock.style.height = '30%';
        listBlock.style.display = 'block';
        tableBlock.style.display = 'none';
        createListBtn.style.display = 'block';
        createTableBtn.style.display = 'none';
    });
    
    // Додаєм список в textarea
    createListBtn.addEventListener('click', () => {        
        addBlock.style.display = 'none';
        upperContainer.style.display = 'block';
        lowerContainer.style.display = 'block';
        btnContainer.style.display = 'block';

        const marks = document.querySelector('.marksList').value;
        const listRowsCount = document.querySelector(".countLI").value;
        
        const listUl = document.createElement("ul");
        inputCodeHTML.append(listUl);
        listUl.classList.add('listStyle');

        for (let i = 0; i < listRowsCount; i++) {
            const listLi = document.createElement("li");
        
            listLi.style.listStyleType = marks;
            listLi.textContent = "list";
            listUl.append(listLi);
        }
        const listHTML = document.querySelector('.listStyle').innerHTML;
            inputCodeHTML.append(listHTML);
    
    });

    saveBtn.addEventListener('click', () => {
        outputText.innerHTML = inputCodeHTML.value;
    
    });
    
});
// Функціонал зміни стилів
styleBtn.addEventListener('click', () => {
    
    styleContainer.style.cssText = 'display: block;';
    hideEditContainer.style.cssText = 'display: none;';

    const textColor = document.querySelector(".text__color");
    const backgroundColor = document.querySelector(".background__color");
    const visible = document.querySelector(".style__container__rightSide-hiden");
    
    
// Розміри шрифта тексту
    const fontSizeButtons = document.querySelectorAll('input[name="fontSize"]');
    // console.log (fontSizeButtons);
    for (let fontSizeButton of fontSizeButtons) {
        
        fontSizeButton.addEventListener('click', () => {        
            outputText.style.fontSize = fontSizeButton.value;
        });
    }
// Вибір стилю шрифта !!!! Не працює
    function getSelectType (params) {
        const chooseOption = document.querySelector("#choose-option").value;
        outputText.style.fontFamily = chooseOption;
    }

    
// Стилі тексту
    const boldText = document.querySelector('#boldText');
    boldText.addEventListener('click', () => {
        // console.log (boldText);
        if (boldText.checked == true) {
            outputText.style.fontWeight = 'bold';
        } else {
            outputText.style.fontWeight = 'normal';
        }
    });
    const cursiveText = document.querySelector('#cursiveText');
    cursiveText.addEventListener('click', () => {
        if (cursiveText.checked == true) {
            outputText.style.fontStyle = 'italic';
        } else {
            outputText.style.fontStyle = 'normal';
        }
    });

// Кольори тексту та фону
    textColor.addEventListener("click", () => {
        visible.style.display = "block";
        const colorT = document.querySelectorAll(".text-color");
        
        for (let item of colorT) {
            item.style.backgroundColor = item.innerText;
            item.addEventListener("click", () => {
                outputText.style.color = item.innerText;
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
                outputText.style.backgroundColor = item.innerText;
                visible.style.display = "none";
            });
        }
    });


});