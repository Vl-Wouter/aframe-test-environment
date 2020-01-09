const { tableSlots } = require('./tableObjects');

const fillRandom = (objects, amount, parent) => {
  for (let i = 0; i < amount; i++) {
    const { rotation } = parent.object3D;
    const childId = Math.floor(Math.random() * objects.length);
    const child = document.createElement('a-entity');
    const positionOffset = 3 / amount;
    child.setAttribute('gltf-model', `#${objects[childId]}`);
    console.log(tableSlots[i])
    child.object3D.position.set(
      tableSlots[i],
      1.7,
      Math.random() * (0.3 - (-0.3)) + (-0.3),
    );
    child.object3D.rotation.set(
      0,
      rotation.y,
      0
    );
    child.object3D.scale.set(0.2, 0.2, 0.2);
  
    parent.appendChild(child);
  }
}

module.exports = {
  fillRandom
}