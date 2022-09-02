const body = document.querySelector(".body");
const clickColor = document.querySelector(".clickColor");
const clickImg = document.querySelector(".clickImg");
const visible = document.querySelector(".hidenContentColor");
const visibleImg = document.querySelector(".hidenContentImg");
const colors = document.querySelector(".colorsContainer");
const images = document.querySelector(".imagesContainer");
const color = document.querySelectorAll(".color");
const imgItem = document.querySelectorAll(".image");

clickColor.addEventListener("click", () => {
  visible.style.display = "block";
  visibleImg.style.display = "none";
});
clickColor.addEventListener("dblclick", () => {
  visible.style.display = "none";
  visibleImg.style.display = "none";
});

  for (let item of color) {
    item.style.backgroundColor = item.innerText;
  }

  for (let item of color) {
    item.addEventListener("click", () => {
      body.style.backgroundColor = item.innerText;
      body.style.backgroundImage = 'none';
      if (item.innerText == 'black') {
          clickColor.style.color = 'white';
        } else {
          clickColor.style.color = 'black';
        }
    });
  }

clickImg.addEventListener("click", () => {
  visibleImg.style.display = "block";
  visible.style.display = "none";
});
clickImg.addEventListener("dblclick", () => {
  visible.style.display = "none";
  visibleImg.style.display = "none";
});

  for (let item of imgItem) {
    item.addEventListener("click", () => {
      body.style.backgroundImage = "url(" + item.src + ")";
      body.style.backgroundSize = "100%";
    });
  }
