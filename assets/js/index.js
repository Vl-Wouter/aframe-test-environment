// Create tables
const scene = document.querySelector("a-scene");
const {
  initObjects
} = require("./tableObjects");
const gltfLoader = require("./gltfLoader");
const tables = 9;

const filterObjects = (objects) => {
  return objects.filter(object => object.max > 0);
}

const generateTablesWithData = () => {
  initObjects().then(objects => {
    // Display tables with data from database
    for (let i = 0; i < tables; i++) {
      const availableObjects = filterObjects(objects);
      let rotationOffset = 70 / tables;
      let rotationModifier = 90;
      i === Math.floor(tables / 2) ? rotationModifier = 0 : "";
      const radius = 10;
      const offset = {
        x: -4,
        y: -6
      };
      gltfLoader(scene, 'base_table', {
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
        },
        useData: true,
        children: availableObjects
      })
    }
  })
}

const generateRandomTables = () => {
  initObjects().then(objects => {
    for (let i = 0; i < tables; i++) {
      let rotationOffset = 90 / tables;
      let rotationModifier = 90;
      i === Math.floor(tables / 2) ? rotationModifier = 0 : "";
      const radius = 10;
      const offset = {
        x: -5,
        y: -8
      };
      gltfLoader(scene, 'base_table', {
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
        },
        useData: false,
        children: objects,
      })
    }
  })
}

generateRandomTables();
generateTablesWithData();