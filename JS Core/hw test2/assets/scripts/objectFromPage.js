
// get elements
const page = document.getElementsByTagName('body');
const transparentCover = document.querySelector('.transparentCover');

const mainBtnContainer = document.querySelector('.header_main_btn');
const secondaryBtnContainer = document.querySelector('.header_secondary_btn');

const editBtn = document.querySelector('.edit');

const bold = document.querySelector('.bold');
const italic = document.querySelector('.italic');
const under = document.querySelector('.underline');
const cross = document.querySelector('.linecross');

const alignLeft = document.querySelector('.left');
const alignCenter = document.querySelector('.center');
const alignRight = document.querySelector('.right');

const fontStyle = document.querySelector('.fontStyle');
const dropdownListStyle = document.querySelector('.selectStyle');

const fontSize = document.querySelector('.fontSize');
const dropdownListSize = document.querySelector('.selectSize');

const fontColor = document.querySelector('.fontColor');
const pageBackground = document.querySelector('.background');

const signInBtn = document.querySelector('.signIn');

const TextArea = document.querySelector('.text');
const outputText = document.querySelector('.user_text');
const inputText = document.querySelector('.user_text_input');
const input = document.querySelector('.text_input');

const selectStyle = document.querySelector('.selectStyle');
const selectSize = document.querySelector('.selectSize');
const selectFontColor = document.querySelector('.selectFontColor');
const selectBG = document.querySelector('.selectBG');

const fontSizeOption = document.querySelectorAll('.optionFS');
const fontStyleOption = document.querySelectorAll('.styleOption');

const BgColor = document.querySelector('.BG_color_container');
const BgImage = document.querySelector('.BG_image_container');
const BgLink = document.querySelector('.BG_link');

const fontColorContainer = document.querySelector('.font_color');
const color = document.querySelectorAll('.color');

const colorBG = document.querySelectorAll('.colorBg');
const imageBG = document.querySelectorAll('.image');
const buttonLinkBG = document.querySelector('.BG_link_btn');
const inputLinkBG = document.querySelector('.BG_link_input');

const closeGbContainer = document.querySelector('#closeBG');

const form = document.getElementById('form');
const formContainer = document.querySelector('.validateFormContainer');
const email = document.querySelector('#login');
const password = document.querySelector('#pass');
const error_message = document.querySelector('.error_message');
const signIn = document.querySelector('.actionBtn');
const showPassBtn = document.querySelector('.showPass');
const closeForm = document.querySelector('.closeForm');

const Esc = document.createElement('img');
    Esc.src = './assets/img/dismiss-svgrepo-com.svg';
    Esc.classList.add('close');
    Esc.style.cssText = 'width: 15px; height: 15px; margin: 10px; cursor: pointer;';
    Esc.style.float = 'right';


export {
    mainBtnContainer, secondaryBtnContainer,
    editBtn,
    bold, italic,    under,    cross,
    alignLeft,    alignCenter,    alignRight,
    fontStyle,    fontSize,    fontColor,
    pageBackground,
    signInBtn,
    TextArea,    outputText,
    inputText,    input,
    selectStyle, selectSize, selectFontColor, selectBG,
    BgColor, BgImage, BgLink,
    fontColorContainer, color,
    colorBG, imageBG,
    buttonLinkBG, inputLinkBG,
    closeGbContainer,
    transparentCover,
    page,
    dropdownListStyle, dropdownListSize,
    fontSizeOption, fontStyleOption,
    email, password, formContainer, form, error_message, signIn, showPassBtn, closeForm,
    Esc
};