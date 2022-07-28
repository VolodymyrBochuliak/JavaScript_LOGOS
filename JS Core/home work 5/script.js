
let mouseOver1 = document.querySelector("#square").style.backgroundColor = "red";
let mouseOver2 = document.querySelector("#square").style.backgroundColor = "yellow";
let mouseOver3 = document.querySelector("#square").style.backgroundColor = "green";

for (let i = 1; i <= 3; i++) {

}
document.getElementById("square").addEventListener("mouseover", () => {
    document.getElementById("square").style.backgroundColor = "red";
});
document.getElementById("square").addEventListener("mouseout", () => {
    document.getElementById("square").style.backgroundColor = "purple";
});


document.getElementById("square").addEventListener("mouseover", () => {
    document.getElementById("square").style.backgroundColor = "yellow";
});
document.getElementById("square").addEventListener("mouseout", () => {
    document.getElementById("square").style.backgroundColor = "purple";
});


document.getElementById("square").addEventListener("mouseover", () => {
    document.getElementById("square").style.backgroundColor = "green";
});
document.getElementById("square").addEventListener("mouseout", () => {
    document.getElementById("square").style.backgroundColor = "purple";
});