const tableFiller = require('./tableFiller');
module.exports = (scene, model, options) => {
  const {position, rotation, scale} = options;
  const el = document.createElement('a-entity');
  // Set attributes
  el.setAttribute('gltf-model', '#'+ model);
  el.object3D.scale.set(
    scale.x,
    scale.y,
    scale.z
  );
  el.object3D.rotation.set(
    THREE.Math.degToRad(rotation.x),
    THREE.Math.degToRad(rotation.y),
    THREE.Math.degToRad(rotation.z)
  );
  el.object3D.position.set(position.x, position.y, position.z);
  tableFiller(['mug', 'chips'], 6, el);
  scene.appendChild(el); 
};