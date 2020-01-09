const { initObjects, tableSlots } = require('./tableObjects');

const fillRandom = (objects, amount, parent) => {
    for (let i = 0; i < amount; i++) {
      const { rotation } = parent.object3D;
      const childId = Math.floor(Math.random() * objects.length);
      const child = document.createElement('a-entity');
      child.setAttribute('gltf-model', `#${objects[childId].id}`);
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

const fillWithData = (objects, amount, parent) => {
    for (let i = 0; i < amount; i++) {
      const { rotation } = parent.object3D;
      const childId = Math.floor(Math.random() * objects.length);
      // Reduce object max by 1
      objects[childId].max -= 1;
      const child = document.createElement('a-entity');
      child.setAttribute('gltf-model', `#${objects[childId].id}`);
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
  fillRandom,
  fillWithData
}