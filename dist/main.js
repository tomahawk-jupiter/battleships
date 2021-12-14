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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --grid-size: 300px;\\r\\n  --cell-size: 30px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  color: red;\\r\\n}\\r\\n.grid-container {\\r\\n  display: flex;\\r\\n}\\r\\n.home-grid {\\r\\n  margin-right: 10px;\\r\\n}\\r\\n.away-grid {\\r\\n}\\r\\n.grid-row {\\r\\n  display: flex;\\r\\n}\\r\\n.cell {\\r\\n  /* width: calc((var(--grid-size) / 5 ) - 5px);\\r\\n  height: calc((var(--grid-size) / 5 ) - 5px); */\\r\\n  width: var(--cell-size);\\r\\n  height: var(--cell-size);\\r\\n  border: solid 1px;\\r\\n  text-align: center;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleships/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleships/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/factories/board.js":
/*!********************************!*\
  !*** ./src/factories/board.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/factories/ship.js\");\n\r\n\r\nconst Board = (boardSize) => {\r\n  const gameBoard = [];\r\n  const shipArray = [];\r\n  let sunkShips = 0;\r\n\r\n  for (let i = 0; i < boardSize; i += 1) {\r\n    const row = [];\r\n    for (let j = 0; j < boardSize; j += 1) {\r\n      row.push('empty');\r\n    }\r\n    gameBoard.push(row);\r\n  }\r\n\r\n  const clearBoard = () => {\r\n    shipArray.splice(0);\r\n    gameBoard.splice(0);\r\n    for (let i = 0; i < boardSize; i += 1) {\r\n      const row = [];\r\n      for (let j = 0; j < boardSize; j += 1) {\r\n        row.push('empty');\r\n      }\r\n      gameBoard.push(row);\r\n    }\r\n  };\r\n\r\n  const placeShip = (shipSize, startCoord, direction) => {\r\n    const startX = startCoord[0];\r\n    const startY = startCoord[1];\r\n\r\n    if (direction === 'horizontal') {\r\n      if (startX + shipSize > boardSize) {\r\n        return 'Beyond board limits';\r\n      }\r\n    } else if (direction === 'vertical') {\r\n      if (startY + shipSize > boardSize) {\r\n        return 'Beyond board limits';\r\n      }\r\n    }\r\n\r\n    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shipSize, startCoord, direction);\r\n    let overlaps = false;\r\n    ship.shipCoords.forEach((cell) => {\r\n      const x = cell[0];\r\n      const y = cell[1];\r\n      if (gameBoard[y][x] === 'ship') {\r\n        overlaps = true;\r\n      } else {\r\n        gameBoard[y][x] = 'ship';\r\n      }\r\n    });\r\n\r\n    if (overlaps) {\r\n      return 'Overlaps with another ship';\r\n    }\r\n\r\n    shipArray.push(ship);\r\n    return gameBoard;\r\n  };\r\n\r\n  const receiveAttack = (attackCoord) => {\r\n    const x = attackCoord[0];\r\n    const y = attackCoord[1];\r\n    let resultString;\r\n    if (gameBoard[y][x] === 'empty') {\r\n      gameBoard[y][x] = 'miss';\r\n      resultString = 'miss';\r\n    } else if (gameBoard[y][x] === 'ship') {\r\n      gameBoard[y][x] = 'hit';\r\n      shipArray.forEach((currentShip) => {\r\n        if (currentShip.hit(attackCoord)) {\r\n          if (currentShip.isSunk()) {\r\n            sunkShips += 1;\r\n          }\r\n        }\r\n      });\r\n      resultString = 'hit';\r\n    } else {\r\n      resultString = 'already shot this cell';\r\n    }\r\n    return resultString;\r\n  };\r\n\r\n  const allSunk = () => {\r\n    if (sunkShips >= shipArray.length) {\r\n      return true;\r\n    }\r\n    return false;\r\n  };\r\n\r\n  return {\r\n    placeShip,\r\n    receiveAttack,\r\n    allSunk,\r\n    gameBoard,\r\n    clearBoard,\r\n    shipArray,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\r\n\n\n//# sourceURL=webpack://battleships/./src/factories/board.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/factories/board.js\");\n\r\n\r\nconst Player = (enterName, boardSize) => {\r\n  const board = (0,_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(boardSize);\r\n  const name = enterName;\r\n\r\n  const makeAttack = (coord, opponent) => opponent.board.receiveAttack(coord);\r\n\r\n  const autoAttack = (opponent) => {\r\n    const getRandomCoord = () => {\r\n      const randomX = Math.floor(Math.random() * boardSize);\r\n      const randomY = Math.floor(Math.random() * boardSize);\r\n      const ranCoord = [randomX, randomY];\r\n      console.log({ ranCoord });\r\n      return ranCoord;\r\n    };\r\n\r\n    let attResult = opponent.board.receiveAttack(getRandomCoord());\r\n    let count;\r\n    while (attResult === 'already shot this cell' && count < 100) {\r\n      attResult = opponent.board.receiveAttack(getRandomCoord());\r\n      count += 1;\r\n    }\r\n    return attResult;\r\n  };\r\n\r\n  return {\r\n    name,\r\n    board,\r\n    makeAttack,\r\n    autoAttack,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://battleships/./src/factories/player.js?");

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length, startPos, direction) => {\r\n  const shipCoords = [];\r\n  const damagedCoords = [];\r\n  const hits = [];\r\n  let lengthCount = length;\r\n  let xCoord = startPos[0];\r\n  let yCoord = startPos[1];\r\n\r\n  if (direction === 'horizontal') {\r\n    while (lengthCount > 0) {\r\n      const coord = [xCoord, yCoord];\r\n      shipCoords.push(coord);\r\n      xCoord += 1;\r\n      lengthCount -= 1;\r\n    }\r\n  } else if (direction === 'vertical') {\r\n    while (lengthCount > 0) {\r\n      const coord = [xCoord, yCoord];\r\n      shipCoords.push(coord);\r\n      yCoord += 1;\r\n      lengthCount -= 1;\r\n    }\r\n  }\r\n\r\n  const hit = (attackCoord) => {\r\n    if (JSON.stringify(shipCoords).includes(JSON.stringify(attackCoord))) {\r\n      hits.push(true);\r\n      damagedCoords.push(attackCoord);\r\n      return true;\r\n    }\r\n    return false;\r\n  };\r\n\r\n  const isSunk = () => {\r\n    if (hits.length === length) {\r\n      return true;\r\n    }\r\n    return false;\r\n  };\r\n\r\n  return {\r\n    shipCoords, damagedCoords, hit, isSunk,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n\n\n//# sourceURL=webpack://battleships/./src/factories/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/player */ \"./src/factories/player.js\");\n/* harmony import */ var _manipDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manipDOM */ \"./src/manipDOM.js\");\n\r\n\r\n\r\n// import clickEvent from './manipDOM';\r\n\r\nconst boardSize = 10;\r\nlet humanTurn = true;\r\nlet gameWon;\r\n\r\n// Make a player object\r\nconst defaultPlacement = [\r\n  {\r\n    length: 3,\r\n    place: [1, 1],\r\n    direction: 'horizontal',\r\n  }, {\r\n    length: 3,\r\n    place: [2, 8],\r\n    direction: 'horizontal',\r\n  }, {\r\n    length: 3,\r\n    place: [4, 4],\r\n    direction: 'horizontal',\r\n  }, {\r\n    length: 3,\r\n    place: [8, 5],\r\n    direction: 'vertical',\r\n  }, {\r\n    length: 3,\r\n    place: [1, 4],\r\n    direction: 'vertical',\r\n  },\r\n];\r\n\r\nconst humanPlayer = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('human', boardSize);\r\nconst computerPlayer = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('computer', boardSize);\r\n\r\ndefaultPlacement.forEach((ship) => {\r\n  humanPlayer.board.placeShip(ship.length, ship.place, ship.direction);\r\n  computerPlayer.board.placeShip(ship.length, ship.place, ship.direction);\r\n});\r\n\r\n// ############### DOM #################\r\n\r\nconst resetBoardBtn = document.querySelector('.reset-board-btn');\r\nconst directionBtn = document.querySelector('.direction-btn');\r\n\r\nconst computerTakeTurn = () => {\r\n  computerPlayer.autoAttack(humanPlayer);\r\n  _manipDOM__WEBPACK_IMPORTED_MODULE_2__.homeGrid.replaceChildren();\r\n  (0,_manipDOM__WEBPACK_IMPORTED_MODULE_2__.drawHomeBoard)(humanPlayer.board.gameBoard);\r\n  gameWon = humanPlayer.board.allSunk();\r\n  console.log({ gameWon });\r\n  if (gameWon) {\r\n    (0,_manipDOM__WEBPACK_IMPORTED_MODULE_2__.winMessage)('Computer Wins');\r\n  } else {\r\n    humanTurn = true;\r\n    (0,_manipDOM__WEBPACK_IMPORTED_MODULE_2__.displayTurn)('Your Turn');\r\n  }\r\n};\r\n\r\nconst takeTurn = (e) => {\r\n  if (humanTurn) {\r\n    const { id } = e.target;\r\n    const idArr = id.split('');\r\n    const coord = [Number(idArr[1]), Number(idArr[2])];\r\n    humanPlayer.makeAttack(coord, computerPlayer);\r\n    _manipDOM__WEBPACK_IMPORTED_MODULE_2__.awayGrid.replaceChildren();\r\n    (0,_manipDOM__WEBPACK_IMPORTED_MODULE_2__.drawAwayBoard)(computerPlayer.board.gameBoard);\r\n    gameWon = computerPlayer.board.allSunk();\r\n    console.log({ gameWon });\r\n    if (gameWon) {\r\n      (0,_manipDOM__WEBPACK_IMPORTED_MODULE_2__.winMessage)('Player Wins');\r\n    } else {\r\n      humanTurn = false;\r\n      (0,_manipDOM__WEBPACK_IMPORTED_MODULE_2__.displayTurn)('Opponent\\'s Turn');\r\n      // Computers turn:\r\n      setTimeout(computerTakeTurn, 2000);\r\n    }\r\n  }\r\n};\r\n\r\nconst playerPlacement = (e) => {\r\n  console.log('click');\r\n  if (humanPlayer.board.shipArray.length < 5) {\r\n    // eslint-disable-next-line\r\n    const id = e.target.id;\r\n    const coord = [Number(id.split('')[1]), Number(id.split('')[2])];\r\n    const dir = directionBtn.innerText;\r\n    const shipLen = 3;\r\n    console.log({\r\n      id, coord, dir, shipLen,\r\n    });\r\n    // add create ship and add to shipArray.\r\n    humanPlayer.board.placeShip(shipLen, coord, dir);\r\n    console.log(humanPlayer.board.placeShip(shipLen, coord, dir));\r\n    _manipDOM__WEBPACK_IMPORTED_MODULE_2__.homeGrid.replaceChildren();\r\n    (0,_manipDOM__WEBPACK_IMPORTED_MODULE_2__.drawHomeBoard)(humanPlayer.board.gameBoard);\r\n    console.log({ shipArray: humanPlayer.board.shipArray });\r\n    console.log({ homeBoard: humanPlayer.board.gameBoard });\r\n  }\r\n};\r\n\r\ndirectionBtn.addEventListener('click', _manipDOM__WEBPACK_IMPORTED_MODULE_2__.changeDirection);\r\n_manipDOM__WEBPACK_IMPORTED_MODULE_2__.homeGrid.addEventListener('click', playerPlacement);\r\n_manipDOM__WEBPACK_IMPORTED_MODULE_2__.awayGrid.addEventListener('click', takeTurn);\r\n\r\nresetBoardBtn.addEventListener('click', () => {\r\n  console.log('click!');\r\n  humanPlayer.board.clearBoard();\r\n  console.log({ gameBoard: humanPlayer.board.gameBoard });\r\n  console.log({ shipArray: humanPlayer.board.shipArray });\r\n  _manipDOM__WEBPACK_IMPORTED_MODULE_2__.homeGrid.replaceChildren();\r\n  (0,_manipDOM__WEBPACK_IMPORTED_MODULE_2__.drawHomeBoard)(humanPlayer.board.gameBoard);\r\n});\r\n\r\n(0,_manipDOM__WEBPACK_IMPORTED_MODULE_2__.drawHomeBoard)(humanPlayer.board.gameBoard);\r\n(0,_manipDOM__WEBPACK_IMPORTED_MODULE_2__.drawAwayBoard)(computerPlayer.board.gameBoard);\r\n\r\n// ########### TODO #######################\r\n\r\n// DRAW ATTACKS:\r\n// Player can attack \"away\" board and result is rendered.\r\n// Computer can attack and player can see outcome on home board.\r\n// showAttackResult(attackCoord, type=\"hit\"/\"miss\")\r\n\r\n// GAME loop:\r\n// Player and computer can take turns attacking.\r\n// Game can end when a player loses all ships.\r\n\r\n// SHIP SIZES:\r\n// display ship size options and have a user input for size.\r\n// eg. a list display: large, med, small.\r\n// as ships are placed they are removed from the list.\r\n\r\n// SEPERATE DOM AND GAME LOOP:\r\n// Put the DOM stuff in a seperate module.\r\n// Keep just the game loop in this file.\r\n// Any extra functions needed should go in one of the other modules.\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (takeTurn);\r\n\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/manipDOM.js":
/*!*************************!*\
  !*** ./src/manipDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawHomeBoard\": () => (/* binding */ drawHomeBoard),\n/* harmony export */   \"drawAwayBoard\": () => (/* binding */ drawAwayBoard),\n/* harmony export */   \"homeGrid\": () => (/* binding */ homeGrid),\n/* harmony export */   \"awayGrid\": () => (/* binding */ awayGrid),\n/* harmony export */   \"changeDirection\": () => (/* binding */ changeDirection),\n/* harmony export */   \"displayTurn\": () => (/* binding */ displayTurn),\n/* harmony export */   \"winMessage\": () => (/* binding */ winMessage)\n/* harmony export */ });\nconst homeGrid = document.querySelector('.home-grid');\r\nconst awayGrid = document.querySelector('.away-grid');\r\nconst directionBtn = document.querySelector('.direction-btn');\r\nconst messageDisplay = document.querySelector('.message');\r\n\r\nconst homeColorScheme = {\r\n  empty: 'blue',\r\n  ship: 'green',\r\n  hit: 'red',\r\n  miss: 'gray',\r\n};\r\n\r\nconst awayColorScheme = {\r\n  empty: 'blue',\r\n  ship: 'blue',\r\n  hit: 'red',\r\n  miss: 'gray',\r\n};\r\n\r\nconst drawHomeBoard = (board) => {\r\n  board.forEach((y, indexY) => {\r\n    const row = document.createElement('div');\r\n    row.setAttribute('class', 'grid-row');\r\n    y.forEach((x, indexX) => {\r\n      const col = document.createElement('div');\r\n      col.setAttribute('class', 'cell');\r\n      col.setAttribute('id', `l${indexX}${indexY}`);\r\n      row.appendChild(col);\r\n      col.style['background-color'] = homeColorScheme[x];\r\n    });\r\n    homeGrid.appendChild(row);\r\n  });\r\n};\r\n\r\nconst drawAwayBoard = (board) => {\r\n  board.forEach((y, indexY) => {\r\n    const row = document.createElement('div');\r\n    row.setAttribute('class', 'grid-row');\r\n    y.forEach((x, indexX) => {\r\n      const col = document.createElement('div');\r\n      col.setAttribute('class', 'cell');\r\n      col.setAttribute('id', `r${indexX}${indexY}`);\r\n      row.appendChild(col);\r\n      col.style['background-color'] = awayColorScheme[x];\r\n    });\r\n    awayGrid.appendChild(row);\r\n  });\r\n};\r\n\r\nconst changeDirection = () => {\r\n  const direction = directionBtn.innerText;\r\n  directionBtn.innerText = direction === 'horizontal' ? 'vertical'\r\n    : 'horizontal';\r\n};\r\n\r\nconst displayTurn = (turnMessage) => {\r\n  messageDisplay.innerText = turnMessage;\r\n};\r\n\r\nconst winMessage = (message) => {\r\n  messageDisplay.innerText = message;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleships/./src/manipDOM.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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