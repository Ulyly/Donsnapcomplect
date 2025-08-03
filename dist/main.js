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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `        * {\r\n            margin: 0;\r\n            padding: 0;\r\n            box-sizing: border-box;\r\n        }\r\n\r\n        body {\r\n            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n            background: linear-gradient(135deg, #8B5CF6, #A855F7, #9333EA);\r\n            min-height: 100vh;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            padding: 0;\r\n            height: 100%;\r\n        }\r\n        .login-form{\r\n            width: 100%;\r\n            height: 100%;\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            justify-content: center;\r\n        }\r\n        .container {\r\n            width: 100%;\r\n            max-width: 800px;\r\n            margin: auto;\r\n            background: white;\r\n            border-radius: 20px;\r\n            padding: 40px;\r\n            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\r\n            position: relative;\r\n            overflow: hidden;\r\n        }\r\n\r\n        .container::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            right: 0;\r\n            height: 4px;\r\n            background: linear-gradient(90deg, #01AA2C, #01AA2C, #01AA2C);\r\n        }\r\n\r\n        .logo {\r\n            width: 75%;\r\n            margin: 0 auto;\r\n            display: block;\r\n        }\r\n\r\n        .company-name {\r\n            color: #01AA2C;\r\n            font-size: 28px;\r\n            font-weight: bold;\r\n            text-align: center;\r\n            margin-bottom: 8px;\r\n            letter-spacing: 1px;\r\n        }\r\n\r\n        .company-subtitle {\r\n            color: #01AA2C;\r\n            font-size: 12px;\r\n            text-align: center;\r\n            margin-bottom: 40px;\r\n            font-weight: 500;\r\n            letter-spacing: 0.5px;\r\n        }\r\n\r\n        .login-title {\r\n            color: #4B5563;\r\n            font-size: 20px;\r\n            text-align: center;\r\n            margin-bottom: 30px;\r\n            font-weight: 500;\r\n        }\r\n\r\n        .form-group {\r\n            margin-bottom: 15px;\r\n        }\r\n\r\n        .form-input {\r\n            width: 100%;\r\n            padding: 15px 20px;\r\n            border: 2px solid #E5E7EB;\r\n            border-radius: 12px;\r\n            font-size: 16px;\r\n            transition: all 0.3s ease;\r\n            background: #F9FAFB;\r\n        }\r\n\r\n        .form-input:focus {\r\n            outline: none;\r\n            border-color: #01AA2C;\r\n            background: white;\r\n            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);\r\n        }\r\n\r\n        .login-btn {\r\n            width: 40%; /* Уменьшаем ширину до 40% */\r\n            margin: 0 auto; /* Выравнивание по центру */\r\n            display: block; /* Делаем блочным элементом для работы margin: auto */\r\n            padding: 12px 0; /* Сохраняем вертикальные отступы */\r\n            background-color: #01AA2C; /* Зеленый цвет, как в вашем дизайне */\r\n            color: white;\r\n            border: none;\r\n            border-radius: 8px;\r\n            font-size: 16px;\r\n            cursor: pointer;\r\n            transition: background-color 0.3s;\r\n        }        \r\n        .login-btn:hover {\r\n            background-color: #018822; /* Темно-зеленый при наведении */\r\n            transform: translateY(-2px);\r\n            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\r\n        }\r\n\r\n        .links {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            margin-bottom: 30px;\r\n        }\r\n\r\n        .link {\r\n            color: #6B7280;\r\n            text-decoration: underline;\r\n            font-size: 14px;\r\n            cursor: pointer;\r\n            transition: color 0.3s ease;\r\n        }\r\n\r\n        .link:hover {\r\n            color: #01AA2C;\r\n        }\r\n\r\n        .registration-form {\r\n            display: none;\r\n        }\r\n\r\n        .registration-form.active {\r\n            display: block;\r\n        }\r\n\r\n        .dashboard {\r\n            display: none;\r\n        }\r\n\r\n        .dashboard.active {\r\n            display: block;\r\n        }\r\n\r\n        .dashboard-header {\r\n            background: linear-gradient(135deg, #8B5CF6, #A855F7);\r\n            color: white;\r\n            padding: 20px;\r\n            border-radius: 12px;\r\n            margin-bottom: 30px;\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n        }\r\n\r\n        .contract-info {\r\n            font-size: 18px;\r\n            font-weight: 600;\r\n        }\r\n\r\n        .user-info {\r\n            font-size: 14px;\r\n            opacity: 0.9;\r\n        }\r\n\r\n        .dashboard-buttons {\r\n            display: grid;\r\n            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n            gap: 20px;\r\n            margin-bottom: 30px;\r\n        }\r\n\r\n        .dashboard-btn {\r\n            background: linear-gradient(135deg, #8B5CF6, #A855F7);\r\n            color: white;\r\n            border: none;\r\n            border-radius: 16px;\r\n            padding: 20px;\r\n            cursor: pointer;\r\n            transition: all 0.3s ease;\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 12px;\r\n            font-size: 14px;\r\n            font-weight: 500;\r\n        }\r\n\r\n        .dashboard-btn:hover {\r\n            transform: translateY(-3px);\r\n            box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);\r\n            background: linear-gradient(135deg, #7C3AED, #8B5CF6);\r\n        }\r\n\r\n        .dashboard-btn svg {\r\n            width: 24px;\r\n            height: 24px;\r\n            fill: white;\r\n        }\r\n\r\n        .service-selection {\r\n            display: none;\r\n        }\r\n\r\n        .service-selection.active {\r\n            display: block;\r\n        }\r\n\r\n        .service-form {\r\n            background: #F9FAFB;\r\n            padding: 30px;\r\n            border-radius: 16px;\r\n            border: 2px solid #E5E7EB;\r\n        }\r\n\r\n        .service-select {\r\n            width: 300px;\r\n            padding: 12px 16px;\r\n            border: 2px solid #E5E7EB;\r\n            border-radius: 8px;\r\n            font-size: 16px;\r\n            margin-bottom: 20px;\r\n        }\r\n\r\n        .address-input {\r\n            width: 300px;\r\n            padding: 12px 16px;\r\n            border: 2px solid #E5E7EB;\r\n            border-radius: 8px;\r\n            font-size: 16px;\r\n            margin-right: 10px;\r\n        }\r\n\r\n        .service-list {\r\n            list-style: none;\r\n            margin-top: 20px;\r\n        }\r\n\r\n        .service-item {\r\n            padding: 8px 0;\r\n            color: #4B5563;\r\n            font-size: 14px;\r\n        }\r\n\r\n        .captcha-container {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 10px;\r\n            margin: 20px 0;\r\n        }\r\n\r\n        .captcha-input {\r\n            width: 120px;\r\n            padding: 8px 12px;\r\n            border: 2px solid #E5E7EB;\r\n            border-radius: 8px;\r\n        }\r\n\r\n        .captcha-display {\r\n            background: #4B5563;\r\n            color: white;\r\n            padding: 8px 12px;\r\n            border-radius: 8px;\r\n            font-family: monospace;\r\n            font-weight: bold;\r\n        }\r\n\r\n        .refresh-btn {\r\n            background: #01AA2C;\r\n            color: white;\r\n            border: none;\r\n            border-radius: 50%;\r\n            width: 32px;\r\n            height: 32px;\r\n            cursor: pointer;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n        }\r\n\r\n        .register-btn {\r\n            background-color: #01AA2C;\r\n            color: white;\r\n            border: none;\r\n            padding: 12px 24px;\r\n            border-radius: 8px;\r\n            font-size: 16px;\r\n            cursor: pointer;\r\n            transition: background-color 0.3s;\r\n        }\r\n\r\n        .register-btn:hover {\r\n            background-color: #018822;\r\n        }\r\n        .registration-header {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            width: 100%;\r\n        }\r\n        .back-btn {\r\n            background: #6B7280;\r\n            color: white;\r\n            border: none;\r\n            border-radius: 12px;\r\n            padding: 12px 24px;\r\n            font-size: 16px;\r\n            cursor: pointer;\r\n        }\r\n\r\n        .back-btn:hover {\r\n            background: #4B5563;\r\n        }\r\n\r\n        @media (max-width: 768px) {\r\n            .container {\r\n                padding: 20px;\r\n            }\r\n            \r\n            .dashboard-buttons {\r\n                grid-template-columns: 1fr;\r\n            }\r\n            \r\n            .service-select,\r\n            .address-input {\r\n                width: 100%;\r\n            }\r\n        }\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://donsabkomplekt-form/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://donsabkomplekt-form/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://donsabkomplekt-form/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://donsabkomplekt-form/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://donsabkomplekt-form/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://donsabkomplekt-form/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://donsabkomplekt-form/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://donsabkomplekt-form/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://donsabkomplekt-form/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/logo.svg\";\n\n//# sourceURL=webpack://donsabkomplekt-form/./src/assets/logo.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.svg */ \"./src/assets/logo.svg\");\n\r\n\r\n\r\nconsole.log('Logo path:', _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__);\r\n\r\nfunction showLogin() {\r\n    document.getElementById('loginForm').style.display = 'block';\r\n    document.getElementById('registrationForm').classList.remove('active');\r\n    document.getElementById('dashboard').classList.remove('active');\r\n    document.getElementById('serviceSelection').classList.remove('active');\r\n}\r\n\r\nfunction showRegistration() {\r\n    document.getElementById('loginForm').style.display = 'none';\r\n    document.getElementById('registrationForm').classList.add('active');\r\n}\r\n\r\nfunction showDashboard() {\r\n    document.getElementById('loginForm').style.display = 'none';\r\n    document.getElementById('registrationForm').classList.remove('active');\r\n    document.getElementById('dashboard').classList.add('active');\r\n    document.getElementById('serviceSelection').classList.remove('active');\r\n}\r\n\r\nfunction showServiceSelection() {\r\n    document.getElementById('dashboard').classList.remove('active');\r\n    document.getElementById('serviceSelection').classList.add('active');\r\n}\r\n\r\nfunction login() {\r\n    const username = document.getElementById('loginInput').value;\r\n    const password = document.getElementById('passwordInput').value;\r\n    \r\n    if (username === 'Huck007' || username.includes('Huck')) {\r\n        showDashboard();\r\n    } else {\r\n        alert('Неверные данные для входа');\r\n    }\r\n}\r\n\r\nfunction forgotPassword() {\r\n    alert('Функция восстановления пароля');\r\n}\r\n\r\nfunction refreshCaptcha() {\r\n    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';\r\n    let result = '';\r\n    for (let i = 0; i < 11; i++) {\r\n        result += chars.charAt(Math.floor(Math.random() * chars.length));\r\n    }\r\n    document.getElementById('captchaDisplay').textContent = result;\r\n}\r\n\r\n// Инициализация\r\nshowLogin();\r\n\r\n// Способ 1: Экспорт в глобальную область\r\nwindow.login = login;\r\nwindow.showRegistration = showRegistration;\r\nwindow.showDashboard = showDashboard;\r\nwindow.showServiceSelection = showServiceSelection;\r\nwindow.forgotPassword = forgotPassword;\r\nwindow.refreshCaptcha = refreshCaptcha;\r\nwindow.showLogin = showLogin;\r\n\r\n// Способ 2: Делегирование событий (раскомментируйте если используете data-action)\r\n/*\r\ndocument.addEventListener('click', (e) => {\r\n  const btn = e.target.closest('[data-action]');\r\n  if (!btn) return;\r\n\r\n  const action = btn.dataset.action;\r\n  \r\n  switch(action) {\r\n    case 'login': login(); break;\r\n    case 'showRegistration': showRegistration(); break;\r\n    case 'showDashboard': showDashboard(); break;\r\n    case 'showServiceSelection': showServiceSelection(); break;\r\n    case 'forgotPassword': forgotPassword(); break;\r\n    case 'refreshCaptcha': refreshCaptcha(); break;\r\n    case 'showLogin': showLogin(); break;\r\n  }\r\n});\r\n*/\n\n//# sourceURL=webpack://donsabkomplekt-form/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://donsabkomplekt-form/./src/style.css?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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