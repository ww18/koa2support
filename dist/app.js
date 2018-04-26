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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/xPraise.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/PraiseButton.js":
/*!***********************************!*\
  !*** ./public/js/PraiseButton.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Created by ww on 2018/3/27.\n */\n//import xtag from 'x-tag';\nclass PraiseButton extends XTagElement{\n    constructor(){\n        super();\n        this.html = '';\n        this.createEle();\n    }\n    createEle(){\n        const arr = ['support-thumb','support-indexfinger','support-middlefinger','support-ringfinger','support-litterfinger','support-hand','support-arm'];\n        let divContainer = document.createElement('div');\n        divContainer.className = 'support-container';\n        arr.forEach((item, index)=>{\n            let ele = document.createElement('div');\n            ele.className = item;\n            divContainer.appendChild(ele);\n        });\n        this.html = divContainer;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PraiseButton);\n\n\n\n//# sourceURL=webpack:///./public/js/PraiseButton.js?");

/***/ }),

/***/ "./public/js/Thumb.js":
/*!****************************!*\
  !*** ./public/js/Thumb.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PraiseButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PraiseButton.js */ \"./public/js/PraiseButton.js\");\n\n\nclass Thumb extends _PraiseButton_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor(opt){\n        super();\n        this.opt = opt;\n        this.clickNum = 0;\n        this.container = '';\n        this.numHtml = document.createElement('div');\n        this.numHtml.className = 'support-number';\n        //this.numHtml.innerHTML = this.clickNum;\n        this.init();\n    }\n    init(){\n        const container = document.createElement('div');\n        if(container){\n            container.appendChild(this.numHtml);\n            container.appendChild(this.html);\n            this.html.addEventListener('click',()=>{\n                this.opt.callback();\n            })\n        }\n        this.container = container;\n    }\n    addAnimation(){\n        let ani = document.createElement('div');\n        ani.className = 'support-ani';\n        ani.innerHTML = '+1';\n        this.html.appendChild(ani);\n        //this.clickNum++;\n        //this.numHtml.innerHTML = this.clickNum;\n        setTimeout(()=>{\n            this.html.removeChild(ani);\n        },1000)\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thumb);\n\n//# sourceURL=webpack:///./public/js/Thumb.js?");

/***/ }),

/***/ "./public/js/xPraise.js":
/*!******************************!*\
  !*** ./public/js/xPraise.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Thumb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Thumb.js */ \"./public/js/Thumb.js\");\n/**\n * Created by ww on 2018/4/26.\n */\n\n//import css from '../css/index.css';\nxtag.create('x-praise', class CC extends _Thumb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    connectedCallback () {\n        this.start();\n    }\n    start (){\n        this.appendChild(this.container);\n    }\n    stop (){\n\n    }\n    update (){\n\n    }\n    'click::event' (){\n        this.addAnimation();\n    }\n});\n\n//# sourceURL=webpack:///./public/js/xPraise.js?");

/***/ })

/******/ });