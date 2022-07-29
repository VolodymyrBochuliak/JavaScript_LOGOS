// №1

// mouseOver1 = document.querySelector("#square").style.backgroundColor = "red";
// mouseOver2 = document.querySelector("#square").style.backgroundColor = "yellow";
// mouseOver3 = document.querySelector("#square").style.backgroundColor = "green";

const bgColorArray = ['red','yellow','green'];

let e = bgColorArray[0];

for ( let i = 1; i <= bgColorArray.length; i++) {
    
    document.getElementById("square").addEventListener('mouseover', () => {
        document.querySelector("#square").style.backgroundColor = e;
    });
    document.getElementById("square").addEventListener("mouseout", () => {
        document.getElementById("square").style.backgroundColor = "purple";
    });
}


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
// document.getElementById("square2").removeEventListener('mouseout', mouseOver);  // чому з remove  не працює ?
// document.getElementById("square2").removeEventListener('mouseout', mouseOver);

// #3
let car1 = document.querySelector('.car1');
let car2 = document.querySelector('.car2');
let car3 = document.querySelector('.car3');

let carsArray = ['.car1', '.car2', '.car3'];


function backgroundClickChange () {
    
    let newBGI = prompt("input url ",'');

    for (i = 1; i <= carsArray.length; i++) {
        let e = carsArray[0];
        let BGI = document.querySelector(e).style.backgroundImage = `url(${newBGI})`;
        console.log(BGI);
    }
    // return BGI;
}

https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtj9Vri2ZroUgkZYg4K8nqJ8NXCnJdyndSWGHDFLDSSc544kW8aZH8f51yP9oUFJSYvA&usqp=CAU

car1.addEventListener('click', backgroundClickChange);
car2.addEventListener('click', backgroundClickChange);
car3.addEventListener('click', backgroundClickChange);


// №4

const listItems = document.querySelectorAll('.list-item');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        item.style.color = item.innerText;
    });

});