let objects = [];
const assets = document.querySelectorAll('a-asset-item');

assets.forEach(asset => {
  asset.id.split("_")[0] === 'table' ? objects.push(asset.id)  :"";
});

const tableSlots = [-1.5, -0.75, 0.75, 1.5];

module.exports = {
  objects,
  tableSlots
};