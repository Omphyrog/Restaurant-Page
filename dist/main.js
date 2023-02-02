/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _webpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage.js */ \"./src/webpage.js\");\n\n\nfunction displayHome() {\n  const main = document.createElement(\"main\");\n  const section = document.createElement(\"section\");\n  section.className = \"about\";\n\n  main.appendChild(section);\n  section.appendChild((0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.createH1)(\"Lorem ipsum\"));\n  section.appendChild(\n    (0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.createPara)(\n      \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequatur repellat maiores nostrum maxime magni rerum perspiciatis adipisci consequuntur soluta?\"\n    )\n  );\n\n  return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);\n\n\n//# sourceURL=webpack://odin-projects/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n\n\n\n\nconst content = document.querySelector(\".content\");\ncontent.appendChild((0,_webpage__WEBPACK_IMPORTED_MODULE_2__.createHeader)());\n// content.appendChild(displayHome());\ncontent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\ncontent.appendChild((0,_webpage__WEBPACK_IMPORTED_MODULE_2__.createFooter)());\n\n\n//# sourceURL=webpack://odin-projects/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n\n\nfunction createMenuItem(src, text) {\n  const plate = document.createElement(\"div\");\n  plate.className = \"plate\";\n\n  const image = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createImg)(src);\n  const header = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createH1)(text);\n\n  plate.appendChild(image);\n  plate.appendChild(header);\n\n  return plate;\n}\n\nfunction displayMenu() {\n  const main = document.createElement(\"main\");\n  main.className = \"menu-container\";\n\n  const section = document.createElement(\"section\");\n  section.className = \"menu\";\n\n  const menuHeader = document.createElement(\"div\");\n  menuHeader.className = \"menu-header\";\n\n  const menuContainer = document.createElement(\"div\");\n  menuContainer.className = \"menu-picks\";\n\n  const menuGrid = document.createElement(\"div\");\n  menuGrid.className = \"menu-grid\";\n\n  main.appendChild(section);\n\n  section.appendChild(menuHeader);\n  section.appendChild(menuContainer);\n  menuHeader.appendChild((0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createH1)(\"Choose your McMenú®\"));\n  menuContainer.appendChild(menuGrid);\n\n  menuGrid.appendChild(createMenuItem(\"images/mcpollo.png\", \"McPollo\"));\n  menuGrid.appendChild(createMenuItem(\"images/mcpollo.png\", \"McPollo\"));\n  menuGrid.appendChild(createMenuItem(\"images/mcpollo.png\", \"McPollo\"));\n  menuGrid.appendChild(createMenuItem(\"images/mcpollo.png\", \"McPollo\"));\n  menuGrid.appendChild(createMenuItem(\"images/mcpollo.png\", \"McPollo\"));\n  menuGrid.appendChild(createMenuItem(\"images/mcpollo.png\", \"McPollo\"));\n\n  return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n\n//# sourceURL=webpack://odin-projects/./src/menu.js?");

/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter),\n/* harmony export */   \"createH1\": () => (/* binding */ createH1),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"createImg\": () => (/* binding */ createImg),\n/* harmony export */   \"createPara\": () => (/* binding */ createPara)\n/* harmony export */ });\nfunction createPara(text) {\n  const p = document.createElement(\"p\");\n  p.textContent = text;\n  return p;\n}\n\nfunction createH1(text) {\n  const h1 = document.createElement(\"h1\");\n  h1.textContent = text;\n  return h1;\n}\n\nfunction createHeader() {\n  const header = document.createElement(\"header\");\n  header.className = \"header\";\n\n  const div = document.createElement(\"div\");\n\n  const img = document.createElement(\"img\");\n  img.src = \"/dist/images/mcdonalds-logo.svg\";\n\n  const nav = document.createElement(\"nav\");\n  nav.className = \"navbar\";\n\n  const homeBtn = document.createElement(\"button\");\n  const menuBtn = document.createElement(\"button\");\n  const contactBtn = document.createElement(\"button\");\n\n  homeBtn.id = \"home\";\n  menuBtn.id = \"menu\";\n  contactBtn.id = \"contact\";\n\n  homeBtn.textContent = \"Home\";\n  menuBtn.textContent = \"Menu\";\n  contactBtn.textContent = \"Contact\";\n\n  header.appendChild(div);\n  header.appendChild(nav);\n\n  nav.appendChild(homeBtn);\n  nav.appendChild(menuBtn);\n  nav.appendChild(contactBtn);\n\n  div.appendChild(img);\n\n  return header;\n}\n\nfunction createFooter() {\n  const footer = document.createElement(\"footer\");\n  footer.className = \"footer\";\n  footer.textContent = \"Made by Omphyrog\";\n\n  return footer;\n}\n\nfunction createImg(src) {\n  const img = document.createElement(\"img\");\n  img.src = src;\n  return img;\n}\n\n\n\n\n//# sourceURL=webpack://odin-projects/./src/webpage.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;