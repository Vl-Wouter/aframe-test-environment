// Create tables
const startPos = [0, 1, 0];
const startRot = [0, 0, 0];
const scene = document.querySelector("a-scene");
const gltfLoader = require("./gltfLoader");

for(let i = 0; i < 7; i++) {
  let rotationOffset = 90 / 7;
  let rotationModifier = 90;
  if (i == 3) rotationModifier = 0;
  const radius = 10;
  const offset = {
    x: -5,
    y: -8
  };
  gltfLoader(scene, 'table', {
    rotation: {
      x: 0,
      y: rotationOffset * i + rotationModifier,
      z: 0,
    },
    position: {
      x: offset.x + radius * Math.sin(rotationOffset * i * Math.PI / 180),
      y: 0,
      z: offset.y + radius * Math.cos(rotationOffset * i * Math.PI / 180),
    },
    scale: {
      x: 0.2,
      y: 0.2,
      z: 0.2,
    }
  })
}
