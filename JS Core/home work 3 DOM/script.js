
function userCustomStyle () {

    let pageBackground = prompt('фон для сторінки', '');
    let pageTextFont = prompt('тип шпифта на сторінці', '');
    let alignForHeaderH1 = prompt('вирівнювання для заголовка h1', '');
    let headerBackground = prompt('фон для параграфа зі посиланнями на сайти', '');
    let headerLinkColor = prompt('колір тексту параграфа зі посиланнями на сайти', '');
    let textColorInBlock = prompt('колір тексту у елементі div', '');
    let fontSizeInBlock = prompt('розмір тексту у елементі div', '');
    let fontWeightInBlock = prompt('товщину тексту у елементі div', '');
 
    let liststyle = prompt('напишіть тип маркера для списку', '');
    let link1 = prompt('вкажіть назву першого сайту', '');
    let link2 = prompt('вкажіть назву другого сайту', '');
    let link3 = prompt('вкажіть назву третього сайту', '');

    // let customButton = document.querySelector('.buttonStyle');
    // customButton = inputField.style.cssText = 'margin: 20px; background: red; color: white; font-sixe: 14px;';

    document.body.style.background = pageBackground;
    document.body.style.fontFamily = pageTextFont;
    document.body.firstElementChild.style.textAlign = alignForHeaderH1;
    document.body.children[2].style.background = headerBackground;
    document.body.children[3].style.color = textColorInBlock;
    document.body.children[3].style.fontSize = fontSizeInBlock;
    document.body.children[3].style.fontWeight = fontWeightInBlock;
    document.body.children[3].children[0].style.listStyleType = liststyle;

    document.body.children[2].children[0].innerHTML = link1;
    document.body.children[2].children[0].href ='http://' + link1;
    document.body.children[2].children[0].target = '_blank';
    document.body.children[2].children[1].innerHTML = link2;
    document.body.children[2].children[1].href ='http://' + link2;
    document.body.children[2].children[1].target = '_blank';
    document.body.children[2].children[2].innerHTML = link3;
    document.body.children[2].children[2].href ='http://' + link3;
    document.body.children[2].children[2].target = '_blank';

    let lincColor = document.getElementsByTagName("a");
        for(let i = 0; i < lincColor.length; i++ ){
            lincColor[i].style.color = headerLinkColor ;
        }

    
}

// console.log(document.body.children[2].children[0]);
// console.log(document.body.children[3].children[0]);
// console.log(document.body.children[2]);
