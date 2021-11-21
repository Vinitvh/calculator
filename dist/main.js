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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const operationsBtn = document.querySelectorAll(\"[data-operation]\");\r\nconst numbersBtn = document.querySelectorAll(\"[data-number]\");\r\nconst allClearBtn = document.querySelector(\"[data-all-clear]\");\r\nconst deleteBtn = document.querySelector(\"[data-delete]\");\r\nconst equalsBtn = document.querySelector(\"[data-equals\");\r\nconst previousOperandTextElement = document.querySelector(\"previous-operand\");\r\nconst currentOperandTextElement = document.querySelector(\".current-operand\");\r\n\r\nlet previous = 0;\r\nlet current = 0;\r\n\r\nallClearBtn.addEventListener(\"click\", () => {\r\n  currentOperandTextElement.textContent = \"\";\r\n  previousOperandTextElement.textContent = \"\";\r\n});\r\n\r\nconst compute = () => {\r\n  let computation;\r\n  switch (operation) {\r\n    case \"+\":\r\n      computation = previous + current;\r\n  }\r\n};\r\n\r\nnumbersBtn.forEach((button) => {\r\n  button.addEventListener(\"click\", () => {\r\n    previous += button.textContent;\r\n    currentOperandTextElement.textContent += button.textContent;\r\n  });\r\n});\r\n\r\noperationsBtn.forEach((button) => {\r\n  button.addEventListener(\"click\", () => {\r\n    currentOperandTextElement.textContent += button.textContent;\r\n    current += button.textContent;\r\n  });\r\n});\r\n\r\nequalsBtn.addEventListener(\"click\", () => {\r\n  compute();\r\n})\r\n\n\n//# sourceURL=webpack://calculator/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;