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

/***/ "./assets/js/gltfLoader.js":
/*!*********************************!*\
  !*** ./assets/js/gltfLoader.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { fillRandom } = __webpack_require__(/*! ./tableFiller */ \"./assets/js/tableFiller.js\");\nconst {objects} = __webpack_require__(/*! ./tableObjects */ \"./assets/js/tableObjects.js\");\nmodule.exports = (scene, model, options) => {\n  const {position, rotation, scale} = options;\n  const el = document.createElement('a-entity');\n  // Set attributes\n  el.setAttribute('gltf-model', '#'+ model);\n  el.object3D.scale.set(\n    scale.x,\n    scale.y,\n    scale.z\n  );\n  el.object3D.rotation.set(\n    THREE.Math.degToRad(rotation.x),\n    THREE.Math.degToRad(rotation.y),\n    THREE.Math.degToRad(rotation.z)\n  );\n  el.object3D.position.set(position.x, position.y, position.z);\n  fillRandom(objects, 4, el);\n  scene.appendChild(el); \n};\n\n//# sourceURL=webpack:///./assets/js/gltfLoader.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Create tables\nconst startPos = [0, 1, 0];\nconst startRot = [0, 0, 0];\nconst scene = document.querySelector(\"a-scene\");\nconst gltfLoader = __webpack_require__(/*! ./gltfLoader */ \"./assets/js/gltfLoader.js\");\nconst tables = 9;\n\nfor(let i = 0; i < tables; i++) {\n  let rotationOffset = 90 / 7;\n  let rotationModifier = 90;\n  i === Math.floor(tables / 2) ? rotationModifier = 0 : \"\";\n  const radius = 10;\n  const offset = {\n    x: -5,\n    y: -8\n  };\n  gltfLoader(scene, 'base_table', {\n    rotation: {\n      x: 0,\n      y: rotationOffset * i + rotationModifier,\n      z: 0,\n    },\n    position: {\n      x: offset.x + radius * Math.sin(rotationOffset * i * Math.PI / 180),\n      y: 0,\n      z: offset.y + radius * Math.cos(rotationOffset * i * Math.PI / 180),\n    },\n    scale: {\n      x: 0.2,\n      y: 0.2,\n      z: 0.2,\n    }\n  })\n}\n\n\n//# sourceURL=webpack:///./assets/js/index.js?");

/***/ }),

/***/ "./assets/js/tableFiller.js":
/*!**********************************!*\
  !*** ./assets/js/tableFiller.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { tableSlots } = __webpack_require__(/*! ./tableObjects */ \"./assets/js/tableObjects.js\");\n\nconst fillRandom = (objects, amount, parent) => {\n  for (let i = 0; i < amount; i++) {\n    const { rotation } = parent.object3D;\n    const childId = Math.floor(Math.random() * objects.length);\n    const child = document.createElement('a-entity');\n    const positionOffset = 3 / amount;\n    child.setAttribute('gltf-model', `#${objects[childId]}`);\n    console.log(tableSlots[i])\n    child.object3D.position.set(\n      tableSlots[i],\n      1.7,\n      Math.random() * (0.3 - (-0.3)) + (-0.3),\n    );\n    child.object3D.rotation.set(\n      0,\n      rotation.y,\n      0\n    );\n    child.object3D.scale.set(0.2, 0.2, 0.2);\n  \n    parent.appendChild(child);\n  }\n}\n\nmodule.exports = {\n  fillRandom\n}\n\n//# sourceURL=webpack:///./assets/js/tableFiller.js?");

/***/ }),

/***/ "./assets/js/tableObjects.js":
/*!***********************************!*\
  !*** ./assets/js/tableObjects.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let objects = [];\nconst assets = document.querySelectorAll('a-asset-item');\n\nassets.forEach(asset => {\n  asset.id.split(\"_\")[0] === 'table' ? objects.push(asset.id)  :\"\";\n});\n\nconst tableSlots = [-1.5, -0.75, 0.75, 1.5];\n\nmodule.exports = {\n  objects,\n  tableSlots\n};\n\n//# sourceURL=webpack:///./assets/js/tableObjects.js?");

/***/ })

/******/ });