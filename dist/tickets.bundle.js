/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/tickets.js":
/*!******************************!*\
  !*** ./assets/js/tickets.js ***!
  \******************************/
/***/ ((module) => {

eval("function createEl(htmlString, attrs, ...children) {\n    if (typeof htmlString !== \"string\") {\n      throw Error(\"Argument 'htmlString' is required and must be a string\");\n    }\n  \n    const el = document.createElement(htmlString);\n  \n    if (typeof attrs === \"object\") {\n      for (let key in attrs) {\n        if (key.substring(0, 2) === \"on\") {\n          el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);\n        } else if (key === \"style\") {\n          for (let rule in attrs[key]) {\n            el.style[rule] = attrs[key][rule];\n          }\n        } else {\n          el.setAttribute(key, attrs[key]);\n        }\n      }\n    }\n  \n    children.forEach(function(child) {\n      let node;\n  \n      if (child.constructor.name.includes(\"Element\")) {\n        node = child;\n      } else {\n        node = document.createTextNode(child);\n      }\n  \n      el.appendChild(node);\n    });\n  \n    return el;\n  }\n  \n  module.exports = createEl;\n\n//# sourceURL=webpack://food-festival/./assets/js/tickets.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/tickets.js");
/******/ 	
/******/ })()
;