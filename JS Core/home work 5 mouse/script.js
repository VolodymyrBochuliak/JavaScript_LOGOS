// №1

const bgColorArray = ['red','yellow','green','blue'];
const square = document.querySelector('#square');
const defaultColor = 'purple';

let colorIndex = 0;

function mouseEnterHandler () {
    square.style.backgroundColor = bgColorArray[colorIndex];
    
    if (colorIndex === bgColorArray.length - 1) {
        colorIndex = 0;
    } else {
        console.log(colorIndex);
        colorIndex++;
    }
}
function mouseLeaveHandler () {
    square.style.backgroundColor = defaultColor ;
    // console.log(colorIndex);
    
}

// console.log(square);
square.addEventListener('mouseover', mouseEnterHandler);
square.addEventListener('mouseout', mouseLeaveHandler);

// #2

const mouseOver = () => {
    document.querySelector("#square2").style.cssText = 
      `background-color: orange; 
      font-size: 20px;`;
    document.body.children[1].children[0].innerHTML = '<p>Хочеш знати який ?</p>';
};
const mouseDown = () => {
    document.querySelector("#square2").style.cssText = 
      `background-color: yellow; 
      font-size: 30px;
      color: black; `;
    document.body.children[1].children[0].innerHTML = '<p>А я тобі не скажу :)</p>';
};
const mouseOut = () => {
    document.querySelector("#square2").style.cssText = 
      `background-color: purple; 
      font-size: 15px;
      color: white;`;
    document.body.children[1].children[0].innerHTML = '<p>У мене є секрет!</p>';
};

document.getElementById("square2").addEventListener('mouseover', mouseOver);
document.getElementById("square2").addEventListener('mousedown', mouseDown);
document.getElementById("square2").addEventListener('mouseup', mouseOver);
document.getElementById("square2").addEventListener('mouseout', mouseOut);

// #3

let car = document.querySelectorAll('.car');
console.log(car);

for (i = 0; i < car.length; i++) {
    car[i].addEventListener('click', backgroundClickChange);
  } 

function backgroundClickChange (event) {
    console.log(event);
    const newBGI = prompt("input url ",'');
    if (newBGI) {
    event.target.style.backgroundImage = `url(${newBGI})`;
    }
}

// №4

const listItems = document.querySelectorAll('.list-item');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        item.style.color = item.innerText;
    });

});