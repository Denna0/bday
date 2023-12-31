function clsHowtouse() {
    let divHowtouse = document.getElementById("howtouseContainer");
    divHowtouse.style.display = "none";
}
function openHowtouse() {
    let divHowtouse = document.getElementById("howtouseContainer");
    if (divHowtouse.style.display != "flex")
        divHowtouse.style.display = "flex";
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandomStyles() {
  let r = getRandomInt(1, 255);
  let g = getRandomInt(1, 255);
  let b = getRandomInt(1, 255);
  let mt = getRandomInt(1, 200);
  let ml = getRandomInt(1, 50);
  let dur = getRandomInt(1, 5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite;
  z-index: 1;
  `;
}
const balloonContainer = document.getElementById("balloon-container");
function createBalloons(num) {
  for (let i = num; i > 0; i--) {
    let balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}
function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove()
  }, 500)
}

const starsContainer = document.getElementById("starsContainer");
function createStars(num) {
  for (let i = 0; i < num; i++) {
      const star = document.createElement("div");
      star.className = `star fa fa-star ${i}`;
      starsContainer.appendChild(star);
  }
}

function openWishGallery() {
  window.location.href = "index.html";
}
window.addEventListener("load", () => {
  createBalloons(10);
  createStars(20);
});