import {
    secondaryBtnContainer, Esc
} from './objectFromPage.js';

import {
    fildValid, validateSignUp,
    fildOption
    
} from './function.js';

import {
    numberedFildRegEx
} from './regexp.js';


export function tableEdder() {
  
    //////
    const tableProperty_Container = document.createElement('div');
    tableProperty_Container.classList.add('tableProperty');
    tableProperty_Container.style.cssText = 'width: 700px; height: 410px; border: 1px solid rgb(163, 163, 163); border-radius: 5px; background-color: rgb(223, 223, 223); position: absolute; top: 70px; left: -260px; ';
    secondaryBtnContainer.append(tableProperty_Container);
    // додали кнопочку закрити (Esc)
    tableProperty_Container.append(Esc);
    //
    const tableHeader = document.createElement('h1');
    tableHeader.innerText = 'Create table';
    tableHeader.style.cssText = 'margin: 15px; font-family: "Arial";';
    //
    const underLine = document.createElement('hr');
    tableProperty_Container.append(tableHeader, underLine);
    //////////
    const tableInner = document.createElement('div');
    tableInner.classList.add('tableInner');
    tableInner.style.cssText = ' width: 95%; display: flex; flex-direction: column; margin: 0 auto;';
    //
    const tableInnerFildsContainer = document.createElement('div');
    tableInnerFildsContainer.classList.add('tableFilds');
    tableInnerFildsContainer.style.cssText = ' width: 100%; height: 250px; margin: 20px 0; display: flex; border-radius: 5px; background-color: white; ';
    //
    const FildsLeft = document.createElement('div');
    FildsLeft.classList.add('FildsLeft');
    FildsLeft.style.cssText = ' width: 50%; height: 100%; padding-top: 10px;';
    
    const FildsRight = document.createElement('div');
    FildsRight.classList.add('FildsRight');
    FildsRight.style.cssText = ' width: 50%; height: 100%; padding-top: 10px;';
    //
    for (let i = 1; i <= 5; i++){
        const lable = document.createElement('lable');
        const input = document.createElement('input');
        
        lable.style.cssText = ' margin: 0 0 0 20px; font-size: 18px; ';
        input.placeholder = 'Type here ...';
        input.style.cssText = ' padding-left: 5px; margin: 5px 20px 20px 20px; font-size: 14px; height: 30px; width: 300px; border-radius: 5px; border: 1px solid gray;';
        
        input.addEventListener('blur', () => {
            fildValid(numberedFildRegEx, input);
        });

        if (i == 1) {
            input.setAttribute("id", 'countRow');
            input.classList.add('countRow');
            input.type = 'text';

            lable.for = 'countRow';
            lable.innerText = "Count TR:";

            FildsLeft.append(lable);
            FildsLeft.append(input);
        }
        if (i == 2) {
            input.setAttribute("id", 'countCell');
            input.classList.add('countCell');
            input.type = 'text';
            
            lable.for = 'countCell';
            lable.innerText = "Count TD:";

            FildsRight.append(lable);
            FildsRight.append(input);
        }
        if (i == 3) {
            input.setAttribute("id", 'widthCell');
            input.classList.add('widthCell');
            input.type = 'text';
            
            lable.for = 'widthCell';
            lable.innerText = "Width of TD:";

            FildsLeft.append(lable);
            FildsLeft.append(input);
        }
        if (i == 4) {
            input.setAttribute("id", 'heightCell');
            input.classList.add('heightCell');
            input.type = 'text';
            
            lable.for = 'heightCell';
            lable.innerText = "Height of TD:";

            FildsRight.append(lable);
            FildsRight.append(input);
        }
        if (i == 5) {
            input.setAttribute("id", 'borderWidth');
            input.classList.add('borderWidth');
            input.type = 'text';
            
            lable.for = 'borderWidth';
            lable.innerText = "Width of border:";

            FildsLeft.append(lable);
            FildsLeft.append(input);
        }
    }
    ///////////
    const rightSideBottomInner = document.createElement('div');
    rightSideBottomInner.classList.add('rightSideDroplistContainer');
    rightSideBottomInner.style.cssText = ' width: 100%; display: flex; justify-content: space-around;';
    ////
    const droplistBorderStyle = document.createElement('div');
    droplistBorderStyle.classList.add('droplistBorderStyle');
    droplistBorderStyle.style.width = '40%';
    ///
    const BorderStyleHeader = document.createElement('h3');
    BorderStyleHeader.innerText = 'Style of border:';
    BorderStyleHeader.style.cssText = 'font-weight: 400; font-size: 18px; ';
    ///
    const selectBS = document.createElement('select');
    selectBS.classList.add('selectBorderStyle');
    selectBS.style.cssText = ' height: 30px; width: 100%; background-color: white; border-radius: 5px; border: 1px solid gray;';
    //
    rightSideBottomInner.append(droplistBorderStyle);
    droplistBorderStyle.append(BorderStyleHeader);
    droplistBorderStyle.append(selectBS);
    // додаєм пункти в droplist BS
    const ArrayBS = ["choose style", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
        fildOption (ArrayBS, selectBS);
    ////
    const droplistBorderColor = document.createElement('div');
    droplistBorderColor.classList.add('droplistBorderColor');
    droplistBorderColor.style.width = '42%';
    ///
    const BorderColorHeader = document.createElement('h3');
    BorderColorHeader.innerText = 'Color of border:';
    BorderColorHeader.style.cssText = ' margin-left: 20px; font-weight: 400; font-size: 18px; ';
    ///
    const selectBC = document.createElement('select');
    selectBC.classList.add('selectBorderColor');
    selectBC.style.cssText = ' height: 30px; width: 90%; margin-left: 20px; background-color: white; border-radius: 5px; border: 1px solid gray; ';
    //
    rightSideBottomInner.append(droplistBorderColor);
    droplistBorderColor.append(BorderColorHeader);
    droplistBorderColor.append(selectBC);
    // додаєм пункти в droplist BC
    const ArrayBC = ["choose color", "black", "gray", "white", "yellow", "orange", "red", "broun", "blue", "green"];
    fildOption (ArrayBC, selectBC);
    ///////////
    const tableInnerBtn = document.createElement('div');
    tableInnerBtn.classList.add('tableBtnContainer');
    tableInnerBtn.style.cssText = ' width: 100%; display: flex; justify-content: space-between;';
    //
    const tableResetBtn = document.createElement('button');
    tableResetBtn.innerText = 'Reset values';
    tableResetBtn.classList.add('tableResetBtn');
    tableResetBtn.style.cssText = " cursor: pointer; width: 310px; height: 35px; border-radius: 5px; color: white; text-aligne: center; background-color: indianred; font-size: 16px; border: none;";
    //
    const tableCreateBtn = document.createElement('button');
    tableCreateBtn.innerText = 'Create table';
    tableCreateBtn.classList.add('tableCreateBtn');
    tableCreateBtn.style.cssText = " cursor: pointer; width: 310px; height: 35px; border-radius: 5px; color: white; text-aligne: center;background-color: green; font-size: 16px; border: none;";
    
    tableProperty_Container.append(tableInner);
    tableInner.append(tableInnerFildsContainer);
    tableInnerFildsContainer.append(FildsLeft);
    tableInnerFildsContainer.append(FildsRight);
    FildsRight.append(rightSideBottomInner);
    tableInner.append(tableInnerBtn);
    tableInnerBtn.append(tableResetBtn, tableCreateBtn);
    
    Esc.addEventListener('click', () => {
        tableProperty_Container.remove();
    });

    const countRow = document.querySelector('.countRow');
    const countCell = document.querySelector('.countCell');
    const widthCell = document.querySelector('.widthCell');
    const heightCell = document.querySelector('.heightCell');
    const borderWidth = document.querySelector('.countRow');

    tableCreateBtn;
    tableResetBtn;


    read_inputValues(countRow);
    read_inputValues(countCell);
    
    //    let cr = read_inputValues(countRow);
    function read_inputValues (input) {
            input.addEventListener('change', () => {
                console.log(input.value);
                return input.value;
        });
    }
    // return {cr};
}

