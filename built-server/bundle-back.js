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

/***/ "./src/backend/server.ts":
/*!*******************************!*\
  !*** ./src/backend/server.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\r\nconst http_1 = __importDefault(__webpack_require__(/*! http */ \"http\"));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\n// import {clientConnection} from './clientConnection'\r\n//import mysql from 'mysql'\r\nconst app = express_1.default();\r\nconst port = process.env.PORT || 3000;\r\nconst server = http_1.default.createServer(app);\r\nconst io = __webpack_require__(/*! socket.io */ \"socket.io\")(server);\r\n// let db =  mysql.createPool({\r\n//     host: '',\r\n//     user: ',\r\n//     password: '',\r\n//     database: ''\r\n//   });\r\n//set up the routes that point web requests to the right files.\r\napp.use(express_1.default.static('/../public'));\r\napp.get(\"/\", (req, res) => {\r\n    res.sendFile(path_1.default.join(__dirname, \"/../public/index.html\"));\r\n});\r\napp.get(\"/mystyle.css\", (req, res) => {\r\n    res.sendFile(path_1.default.join(__dirname, \"/../public/mystyle.css\"));\r\n});\r\napp.get(\"/bundle-front.js\", (req, res) => {\r\n    res.sendFile(path_1.default.join(__dirname, \"/../public/bundle-front.js\"));\r\n});\r\napp.get(\"/assets/*\", (req, res) => {\r\n    res.sendFile(path_1.default.join(__dirname, \"/../public/\" + req.path));\r\n});\r\n//start the game communication server to handle player data\r\n// clientConnection(io);\r\n//start the web server to distribute the games files.\r\nserver.listen(port, () => {\r\n    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);\r\n});\r\n\n\n//# sourceURL=webpack://phaser3template/./src/backend/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/backend/server.ts");
/******/ })()
;