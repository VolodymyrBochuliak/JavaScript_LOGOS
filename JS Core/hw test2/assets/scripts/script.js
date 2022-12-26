import {
    mainBtnContainer, secondaryBtnContainer,
    editBtn, 
    bold, italic, under, cross,
    alignLeft, alignCenter, alignRight,
    fontStyle, fontSize, fontColor, pageBackground,
    signInBtn,
    TextArea, outputText, inputText, input,
    selectStyle, selectSize, selectFontColor, selectBG,
    BgColor, BgImage, BgLink,
    fontColorContainer, color,
    colorBG, imageBG, buttonLinkBG, inputLinkBG,
    closeGbContainer,
    transparentCover, page,
    fontSizeOption, fontStyleOption,
    formContainer, email, password, signIn, showPassBtn, closeForm,
    Esc
       
} from './objectFromPage.js';

import {
    BIUS_buttons, alignContent,
    press_Unpress,
    fildValid, validateSignUp, thePasswordIs
    
} from './function.js';

import {
    mailRegEx, passRegEx
  } from './regexp.js';
  
import {
    tableEdder
} from './createTable.js';

outputText.innerHTML = input.value;

// events

let boldText = ["bold", "normal"];
BIUS_buttons(bold, boldText);

let cursiveText = ["italic", "normal"];
BIUS_buttons(italic, cursiveText);

let underlineText = ["underline", "none"];
BIUS_buttons(under, underlineText);

let throughlineText = ["line-through", "none"];
BIUS_buttons(cross, throughlineText);

alignContent(alignLeft, "left");
alignContent(alignCenter, "center");
alignContent(alignRight, "right");

press_Unpress(fontStyle, selectStyle);
press_Unpress(fontSize, selectSize);
press_Unpress(fontColor, selectFontColor);
// press_Unpress(pageBackground, selectBG);

//
for (let item of fontSizeOption) {
    item.style.fontSize = item.value;
}
for (let item of fontStyleOption) {
    item.style.fontFamily = item.value;
}

for (let item of color) {
    item.style.backgroundColor = item.dataset.color;
    item.addEventListener("click", () => {
        outputText.style.color = item.dataset.color;
    });
}
for (let item of colorBG) {
    item.style.backgroundColor = item.dataset.color;
    item.addEventListener("click", () => {
        transparentCover.style.backgroundColor = item.dataset.color;
        transparentCover.style.backgroundImage = "";
    });
}
for (let item of imageBG) {
    item.addEventListener("click", () => {
        transparentCover.style.backgroundImage = "url(" + item.src + ")";
        transparentCover.style.backgroundColor = "";
    });
}

pageBackground.addEventListener('click', () => {
    selectBG.style.cssText = 'display: block;';
    // transparentCover.style.cssText = ' background-color: rgba(77, 76, 76, 0.541);';
});

buttonLinkBG.addEventListener('click', () => {
    transparentCover.style.backgroundImage = "url(" + inputLinkBG.value + ")";
});

closeGbContainer.addEventListener('click', () => {
    selectBG.style.cssText = 'display: none;';
    // transparentCover.style.backgroundColor = 'transparent';
});

// validate for filds
signInBtn.addEventListener('click', () => {
    formContainer.style.cssText = 'display: block;';
});

email.addEventListener('change', () => {
    fildValid(mailRegEx, email);
    validateSignUp ();
});

password.addEventListener ('change', () => {
    fildValid(passRegEx, password);
    validateSignUp ();
});

showPassBtn.addEventListener ('mousedown', () => {
    thePasswordIs();
});

closeForm.addEventListener('click', () => {
    formContainer.style.cssText = 'display: none;';
});

signIn.addEventListener('click', () => {
    console.log('good');
    formContainer.style.display = 'none';
    return editBtn.disabled = false;
});

///////////        Edit            //////////////

editBtn.addEventListener('click', () => {
    
    inputText.style.cssText = 'display: block;';
    outputText.style.cssText = 'display: none;';
    mainBtnContainer.style.cssText = 'display: none;';
    secondaryBtnContainer.style.cssText = 'display: block;';
    
    const saveBtn = document.querySelector('.save');
    const table = document.querySelector('.table');
    const OL = document.querySelector('.orderList');
    const UL = document.querySelector('.unorderedList');

    saveBtn.addEventListener('click', () => {
        mainBtnContainer.style.cssText = 'display: flex;';
        secondaryBtnContainer.style.cssText = 'display: none;';
        
        outputText.innerHTML = input.value;
        
        inputText.style.cssText = 'display: none;';
        outputText.style.cssText = 'display: block;';
    });

    ///////////        Table            //////////////

    table.addEventListener('click', () => {
        
        tableEdder (); // запускає окремий файл з таблицею

        // const countRow = document.querySelector('.countRow');
        // const countCell = document.querySelector('.countCell');
        // const widthCell = document.querySelector('.widthCell');
        // const heightCell = document.querySelector('.heightCell');
        // const borderWidth = document.querySelector('.countRow');
        // const tableCreateBtn = document.querySelector('tableCreateBtn');
        // const tableResetBtn = document.querySelector('tableResetBtn');

        // tableCreateBtn.addEventListener('click', () => {
        //     tableProperty_Container.style.display = 'none';
        //     console.log(
        //         countRow.value,
        //         countCell.value,
        //         widthCell.value,
        //         heightCell.value,
        //         borderWidth.value);
        // });
        
        // read_inputValues(countRow);
        // read_inputValues(countCell);

        // function read_inputValues (input) {
        //         input.addEventListener('change', () => {
        //             return input.value;
        //     });
        // }

        

    });

});

