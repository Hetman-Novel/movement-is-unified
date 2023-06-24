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

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isWebp\": () => (/* binding */ isWebp),\n/* harmony export */   \"nLazyLoading\": () => (/* binding */ nLazyLoading)\n/* harmony export */ });\nfunction isWebp() {\r\n   function testWebP(callback) {\r\n      let webP = new Image();\r\n      webP.onload = webP.onerror = function () {\r\n         callback(webP.height == 2);\r\n      };\r\n      webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n   };\r\n   testWebP(function (support) {\r\n      let className = support === true ? 'webp' : 'no-webp';\r\n      document.documentElement.classList.add(className);\r\n   });\r\n} isWebp();\r\nfunction nLazyLoading() {\r\n   const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]');\r\n   const windowHeight = document.documentElement.clientHeight;\r\n \r\n   let lazyImagesPositions = [];\r\n   if (lazyImages.length > 0) {\r\n      lazyImages.forEach(img => {\r\n         if (img.dataset.src || img.dataset.srcset) {\r\n            lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);\r\n            lazyScrollCheck();\r\n         }\r\n      });\r\n   }\r\n \r\n\twindow.addEventListener(\"scroll\", lazyScroll);\r\n \r\n   function lazyScroll() {\r\n      if (document.querySelectorAll('img[data-src],source[data-srcset]')) {\r\n         lazyScrollCheck();\r\n      }\r\n   }\r\n \r\n   // data-src=\"images/image.jpg\"\r\n   // src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"\r\n   function lazyScrollCheck() {\r\n      let imgIndex = lazyImagesPositions.findIndex(item => pageYOffset > item - windowHeight);\r\n      if (imgIndex >= 0) {\r\n         if (lazyImages[imgIndex].dataset.src) {\r\n            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;\r\n            lazyImages[imgIndex].removeAttribute('data-src');\r\n            lazyImages[imgIndex].addEventListener(\"load\", event => {\r\n               lazyImages[imgIndex].parentNode.parentNode.classList.add('loaded');\r\n            });\r\n         } else if (lazyImages[imgIndex].dataset.src) {\r\n            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.srcset;\r\n            lazyImages[imgIndex].removeAttribute('data-srcset');\r\n            lazyImages[imgIndex].addEventListener(\"load\", event => {\r\n               lazyImages[imgIndex].parentNode.parentNode.classList.add('loaded');\r\n            });\r\n         }\r\n         delete lazyImagesPositions[imgIndex];\r\n      }\r\n   }\r\n} nLazyLoading();\r\n\r\nfunction handleButtonClick(event) {\r\n   event.preventDefault();\r\n   const button = event.target;\r\n   const price = button.dataset.donatprice;\r\n   const numberField = document.getElementById('section-eleven-form-number');\r\n   const buttonContainer = button.parentElement;\r\n   numberField.value = price;\r\n   const buttons = buttonContainer.getElementsByClassName('sectionElevenForm__button');\r\n   for (let i = 0; i < buttons.length; i++) {\r\n      const currentButton = buttons[i];\r\n      if (currentButton === button) {\r\n         currentButton.classList.add('la-doortay');\r\n      } else {\r\n         currentButton.classList.remove('la-doortay');\r\n      }\r\n   }\r\n}\r\n\r\nconst buttons = document.getElementsByClassName('sectionElevenForm__button');\r\nfor (let i = 0; i < buttons.length; i++) {\r\n   const button = buttons[i];\r\n   button.addEventListener('click', handleButtonClick);\r\n}\r\nconst if_btn_bottom = document.querySelector('#go-to-section-donate');\r\nif (if_btn_bottom) {\r\n      const hiddenElement = document.getElementById(\"section-donate\");\r\n      const n_btn_bottom = if_btn_bottom;\r\n      function handleButtonClick() {\r\n         hiddenElement.scrollIntoView({\r\n            top: 0,\r\n            behavior: \"smooth\"\r\n         });\r\n      }\r\n      n_btn_bottom.addEventListener('click', handleButtonClick);\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;