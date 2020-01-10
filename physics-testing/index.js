//require('aframe');
console.log("Hello there")
const playerEl = document.querySelector('[camera]');
console.log(playerEl);
playerEl.addEventListener('collide', function(e) {
  console.log("player has collided with body #" + e.detail.body.id);
})