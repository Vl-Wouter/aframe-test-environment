const { db } = require("./firebase");
// let objects = [];
// const assets = document.querySelectorAll('a-asset-item');

// db.ref('/store/amounts/').once('value').then(snapshot => {
//   console.log(snapshot.val());
// })

// assets.forEach(asset => {
//   if(asset.id.split("_")[0] === "table") {
//     const type = asset.id.split("_")[1];
//     objects.push(asset.id);

//   }
// });

const tableSlots = [-1.5, -0.75, 0.75, 1.5];

const initObjects = async () => {
  let objects = [];
  const assets = document.querySelectorAll('a-asset-item');
  const snapshot = await db.ref('/store/amounts/').once('value').then(snapshot => snapshot.val());
  assets.forEach(asset => {
    if (asset.id.split("_")[0] === 'table') {
      const type = asset.id.split("_")[1];
      objects.push({
        id: asset.id,
        max: snapshot[type],
      });
    }
  })
  return objects;
}

initObjects();

module.exports = {
  initObjects,
  tableSlots
};