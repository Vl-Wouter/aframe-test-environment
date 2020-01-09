/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/firebase.js":
/*!*******************************!*\
  !*** ./assets/js/firebase.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const firebaseConfig = {\n  apiKey: \"AIzaSyCIEi_QxG_hGVRD05ajobZqE69l8dz6TeE\",\n  authDomain: \"storecms-ff5f8.firebaseapp.com\",\n  databaseURL: \"https://storecms-ff5f8.firebaseio.com\",\n  projectId: \"storecms-ff5f8\",\n  storageBucket: \"storecms-ff5f8.appspot.com\",\n  messagingSenderId: \"173022818895\",\n  appId: \"1:173022818895:web:260f56148454cdebddb03a\"\n};\n\nfirebase.initializeApp(firebaseConfig);\nconst db = firebase.database();\n\nmodule.exports = {\n  firebase,\n  db\n}\n\n\n//# sourceURL=webpack:///./assets/js/firebase.js?");

/***/ }),

/***/ "./assets/js/gltfLoader.js":
/*!*********************************!*\
  !*** ./assets/js/gltfLoader.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { fillWithData, fillRandom } = __webpack_require__(/*! ./tableFiller */ \"./assets/js/tableFiller.js\");\nconst {objects} = __webpack_require__(/*! ./tableObjects */ \"./assets/js/tableObjects.js\");\nmodule.exports = (scene, model, options) => {\n  const {position, rotation, scale, useData} = options;\n  const el = document.createElement('a-entity');\n  // Set attributes\n  el.setAttribute('gltf-model', '#'+ model);\n  el.object3D.scale.set(\n    scale.x,\n    scale.y,\n    scale.z\n  );\n  el.object3D.rotation.set(\n    THREE.Math.degToRad(rotation.x),\n    THREE.Math.degToRad(rotation.y),\n    THREE.Math.degToRad(rotation.z)\n  );\n  el.object3D.position.set(position.x, position.y, position.z);\n  if (useData === true) {\n    fillWithData(options.children, 4, el);\n  } else {\n    fillRandom(options.children, 4, el);\n  }\n  scene.appendChild(el); \n};\n\n//# sourceURL=webpack:///./assets/js/gltfLoader.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Create tables\nconst scene = document.querySelector(\"a-scene\");\nconst {\n  initObjects\n} = __webpack_require__(/*! ./tableObjects */ \"./assets/js/tableObjects.js\");\nconst gltfLoader = __webpack_require__(/*! ./gltfLoader */ \"./assets/js/gltfLoader.js\");\nconst tables = 9;\n\nconst filterObjects = (objects) => {\n  return objects.filter(object => object.max > 0);\n}\n\nconst generateTablesWithData = () => {\n  initObjects().then(objects => {\n    // Display tables with data from database\n    for (let i = 0; i < tables; i++) {\n      const availableObjects = filterObjects(objects);\n      let rotationOffset = 70 / tables;\n      let rotationModifier = 90;\n      i === Math.floor(tables / 2) ? rotationModifier = 0 : \"\";\n      const radius = 10;\n      const offset = {\n        x: -4,\n        y: -6\n      };\n      gltfLoader(scene, 'base_table', {\n        rotation: {\n          x: 0,\n          y: rotationOffset * i + rotationModifier,\n          z: 0,\n        },\n        position: {\n          x: offset.x + radius * Math.sin(rotationOffset * i * Math.PI / 180),\n          y: 0,\n          z: offset.y + radius * Math.cos(rotationOffset * i * Math.PI / 180),\n        },\n        scale: {\n          x: 0.2,\n          y: 0.2,\n          z: 0.2,\n        },\n        useData: true,\n        children: availableObjects\n      })\n    }\n  })\n}\n\nconst generateRandomTables = () => {\n  initObjects().then(objects => {\n    for (let i = 0; i < tables; i++) {\n      let rotationOffset = 90 / tables;\n      let rotationModifier = 90;\n      i === Math.floor(tables / 2) ? rotationModifier = 0 : \"\";\n      const radius = 10;\n      const offset = {\n        x: -5,\n        y: -8\n      };\n      gltfLoader(scene, 'base_table', {\n        rotation: {\n          x: 0,\n          y: rotationOffset * i + rotationModifier,\n          z: 0,\n        },\n        position: {\n          x: offset.x + radius * Math.sin(rotationOffset * i * Math.PI / 180),\n          y: 0,\n          z: offset.y + radius * Math.cos(rotationOffset * i * Math.PI / 180),\n        },\n        scale: {\n          x: 0.2,\n          y: 0.2,\n          z: 0.2,\n        },\n        useData: false,\n        children: objects,\n      })\n    }\n  })\n}\n\ngenerateRandomTables();\ngenerateTablesWithData();\n\n//# sourceURL=webpack:///./assets/js/index.js?");

/***/ }),

/***/ "./assets/js/tableFiller.js":
/*!**********************************!*\
  !*** ./assets/js/tableFiller.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { initObjects, tableSlots } = __webpack_require__(/*! ./tableObjects */ \"./assets/js/tableObjects.js\");\n\nconst fillRandom = (objects, amount, parent) => {\n    for (let i = 0; i < amount; i++) {\n      const { rotation } = parent.object3D;\n      const childId = Math.floor(Math.random() * objects.length);\n      const child = document.createElement('a-entity');\n      child.setAttribute('gltf-model', `#${objects[childId].id}`);\n      console.log(tableSlots[i])\n      child.object3D.position.set(\n        tableSlots[i],\n        1.7,\n        Math.random() * (0.3 - (-0.3)) + (-0.3),\n      );\n      child.object3D.rotation.set(\n        0,\n        rotation.y,\n        0\n      );\n      child.object3D.scale.set(0.2, 0.2, 0.2);\n    \n      parent.appendChild(child);\n    }\n}\n\nconst fillWithData = (objects, amount, parent) => {\n    for (let i = 0; i < amount; i++) {\n      const { rotation } = parent.object3D;\n      const childId = Math.floor(Math.random() * objects.length);\n      // Reduce object max by 1\n      objects[childId].max -= 1;\n      const child = document.createElement('a-entity');\n      child.setAttribute('gltf-model', `#${objects[childId].id}`);\n      child.object3D.position.set(\n        tableSlots[i],\n        1.7,\n        Math.random() * (0.3 - (-0.3)) + (-0.3),\n      );\n      child.object3D.rotation.set(\n        0,\n        rotation.y,\n        0\n      );\n      child.object3D.scale.set(0.2, 0.2, 0.2);\n    \n      parent.appendChild(child);\n    }\n}\n\nmodule.exports = {\n  fillRandom,\n  fillWithData\n}\n\n//# sourceURL=webpack:///./assets/js/tableFiller.js?");

/***/ }),

/***/ "./assets/js/tableObjects.js":
/*!***********************************!*\
  !*** ./assets/js/tableObjects.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { db } = __webpack_require__(/*! ./firebase */ \"./assets/js/firebase.js\");\n// let objects = [];\n// const assets = document.querySelectorAll('a-asset-item');\n\n// db.ref('/store/amounts/').once('value').then(snapshot => {\n//   console.log(snapshot.val());\n// })\n\n// assets.forEach(asset => {\n//   if(asset.id.split(\"_\")[0] === \"table\") {\n//     const type = asset.id.split(\"_\")[1];\n//     objects.push(asset.id);\n\n//   }\n// });\n\nconst tableSlots = [-1.5, -0.75, 0.75, 1.5];\n\nconst initObjects = async () => {\n  let objects = [];\n  const assets = document.querySelectorAll('a-asset-item');\n  const snapshot = await db.ref('/store/amounts/').once('value').then(snapshot => snapshot.val());\n  assets.forEach(asset => {\n    if (asset.id.split(\"_\")[0] === 'table') {\n      const type = asset.id.split(\"_\")[1];\n      objects.push({\n        id: asset.id,\n        max: snapshot[type],\n      });\n    }\n  })\n  return objects;\n}\n\ninitObjects();\n\nmodule.exports = {\n  initObjects,\n  tableSlots\n};\n\n//# sourceURL=webpack:///./assets/js/tableObjects.js?");

/***/ })

/******/ });