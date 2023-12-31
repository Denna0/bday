const heart = document.querySelector('.heart');

// Change the animation duration to speed up/slow down the beating
function changeSpeed(speed) {
  heart.style.animationDuration = `${speed}s`;
}

function cake() {
    window.location.href = "cake.html";
}
function letter() {
    window.location.href = "letter.html";
}