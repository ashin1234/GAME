const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const gameContainer = document.getElementById("game-container");

let dinoLeft = 0;
let cactusLeft = 500;

gameContainer.addEventListener("click", function() {
  dinoLeft += 50;
  dino.style.left = dinoLeft + "px";
});

setInterval(function() {
  if (cactusLeft < 50 && cactusLeft > -20 && dinoLeft > 30 && dinoLeft < 70) {
    alert("Game Over");
    dino.style.animationPlayState = "paused";
    cactus.style.animationPlayState = "paused";
  }
  cactusLeft -= 2;
  cactus.style.left = cactusLeft + "px";
}, 20);
