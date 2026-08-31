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

/***/ "./js/script.js"
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.js */ \"./js/slide.js\");\n\nconst slide = new _slide_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".slide-wrapper\", \".slide\");\nslide.init();\nslide.changeSlide(2);\n// slide.activeNextSlide();\n// slide.activePrevSlide();\n\n//# sourceURL=webpack://Slide/./js/script.js?\n}");

/***/ },

/***/ "./js/slide.js"
/*!*********************!*\
  !*** ./js/slide.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slide)\n/* harmony export */ });\nclass Slide {\n  constructor(wrapper, slide) {\n    this.wrapper = document.querySelector(wrapper);\n    this.slide = document.querySelector(slide);\n    this.dist = {\n      finalPosition: 0,\n      startX: 0,\n      movement: 0\n    };\n  }\n  transition(active) {\n    this.slide.style.transition = active ? \"transform .3s\" : \"\";\n  }\n  moveSlide(distX) {\n    this.dist.movePosition = distX;\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;\n  }\n  updatePosition(clientX) {\n    this.dist.movement = (this.dist.startX - clientX) * 1.6;\n    return this.dist.finalPosition - this.dist.movement;\n  }\n  addSlideEvents() {\n    this.wrapper.addEventListener(\"mousedown\", this.onStart);\n    this.wrapper.addEventListener(\"touchstart\", this.onStart);\n    this.wrapper.addEventListener(\"mouseup\", this.onEnd);\n    this.wrapper.addEventListener(\"touchend\", this.onEnd);\n  }\n  onStart(event) {\n    let moveType;\n    if (event.type === \"mousedown\") {\n      event.preventDefault();\n      this.dist.startX = event.clientX;\n      moveType = \"mousemove\";\n    } else {\n      this.dist.startX = event.changedTouches[0].clientX;\n      moveType = \"touchmove\";\n    }\n    this.wrapper.addEventListener(moveType, this.onMove);\n    this.transition(false);\n  }\n  onMove(event) {\n    const pointerPosition = event.type === \"mousemove\" ? event.clientX : event.changedTouches[0].clientX;\n    const finalPosition = this.updatePosition(pointerPosition);\n    this.moveSlide(finalPosition);\n  }\n  onEnd(event) {\n    const moveType = event.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\n    this.wrapper.removeEventListener(moveType, this.onMove);\n    this.dist.finalPosition = this.dist.movePosition;\n    this.transition(true);\n    this.changeSlideOnEnd();\n  }\n  changeSlideOnEnd() {\n    if (this.dist.movement > 120 && this.index.next != undefined) {\n      this.activeNextSlide();\n    } else if (this.dist.movement < -120 && this.index.prev != undefined) {\n      this.activePrevSlide();\n    } else {\n      this.changeSlide(this.index.active);\n    }\n  }\n  bindEvents() {\n    this.onStart = this.onStart.bind(this);\n    this.onMove = this.onMove.bind(this);\n    this.onEnd = this.onEnd.bind(this);\n  }\n\n  //Slides Configuration\n\n  slidePosition(slide) {\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\n    return -(slide.offsetLeft - margin);\n  }\n  slidesConfig() {\n    this.slideArray = [...this.slide.children].map(element => {\n      const position = this.slidePosition(element);\n      return {\n        position,\n        element\n      };\n    });\n  }\n  slidesIndexNav(index) {\n    const last = this.slideArray.length - 1;\n    this.index = {\n      prev: index ? index - 1 : undefined,\n      active: index,\n      next: index === last ? undefined : index + 1\n    };\n  }\n  changeSlide(index) {\n    const activeSlide = this.slideArray[index];\n    this.moveSlide(activeSlide.position);\n    this.slidesIndexNav(index);\n    this.dist.finalPosition = activeSlide.position;\n  }\n  activePrevSlide() {\n    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);\n  }\n  activeNextSlide() {\n    if (this.index.next !== undefined) this.changeSlide(this.index.next);\n  }\n  init() {\n    this.bindEvents();\n    this.transition(true);\n    this.addSlideEvents();\n    this.slidesConfig();\n    return this;\n  }\n}\n\n//# sourceURL=webpack://Slide/./js/slide.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;