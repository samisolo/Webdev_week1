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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("\r\nconst celciusInput = document.getElementById(\"celcius\");\r\nconst fahrenheitInput = document.getElementById(\"fahrenheit\");\r\nif (!(celciusInput instanceof HTMLInputElement)) {\r\n    throw new Error(\"No input element with id 'celcius' found\");\r\n}\r\nif (!(fahrenheitInput instanceof HTMLInputElement)) {\r\n    throw new Error(\"No input element with id 'fahrenheit' found'\");\r\n}\r\nfunction convert(value, unit = \"f\") {\r\n    if (unit === \"f\") {\r\n        return (value - 32) * 5 / 9;\r\n    }\r\n    else if (unit === \"c\") {\r\n        return (value * 9 / 5 + 32);\r\n    }\r\n    else {\r\n        return NaN;\r\n    }\r\n}\r\ncelciusInput.addEventListener(\"input\", () => {\r\n    const result = convert(parseInt(celciusInput.value), \"c\");\r\n    fahrenheitInput.value = result.toString();\r\n});\r\nfahrenheitInput.addEventListener(\"input\", () => {\r\n    console.log(\"New fahrenheit value: \" + fahrenheitInput.value);\r\n});\r\n\n\n//# sourceURL=webpack://04-addition/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;