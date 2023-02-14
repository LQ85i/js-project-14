/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/square.svg */ "./src/icons/square.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/cross.svg */ "./src/icons/cross.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/circle.svg */ "./src/icons/circle.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: rgb(0, 137, 196);\n  margin: 0;\n}\n\n#content {\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px auto 0 auto;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n\n#main-title {\n  font-size: 20px;\n  font-weight: bold;\n  text-shadow: black 1px 1px 3px;\n}\n\n.board {\n  background-color: rgb(202, 202, 202);\n  padding: 10px;\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 3px solid black;\n  border-radius: 10px;\n}\n\n.board-title {\n  margin-bottom: 10px;\n  font-size: 18px;\n  color: black;\n}\n\n.board-grid {\n  display: grid;\n  grid-template-rows: repeat(10, 31px);\n}\n\n.board-grid.blur-out {\n  filter: blur(1px);\n}\n.board-grid:not(.blur-out) {\n  outline: 5px solid rgba(255, 68, 0, 0.493);\n  border-radius: 5px;\n}\n\n.board-row {\n  display: grid;\n  grid-template-columns: repeat(10, 31px);\n  height: 31px;\n}\n\n.board-cell {\n  width: 31px;\n  border: 1px solid rgb(102, 102, 102);\n}\n\n.board-grid:not(.blur-out) .board-cell:hover {\n  background-color: rgba(131, 133, 134, 0.466);\n  border: 1px solid rgb(0, 0, 0);\n}\n\n.indicator-ship {\n  width: 31px;\n  height: 31px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(55%) sepia(94%) saturate(1011%) hue-rotate(95deg)\n    brightness(92%) contrast(97%);\n}\n\n.indicator-hit {\n  width: 31px;\n  height: 31px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(14%) sepia(83%) saturate(7448%) hue-rotate(6deg)\n    brightness(103%) contrast(119%);\n}\n.indicator-miss {\n  width: 31px;\n  height: 31px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(46%) sepia(7%) saturate(2%) hue-rotate(338deg) brightness(91%)\n    contrast(85%);\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;EAClC,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wBAAwB;EACxB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,0CAA0C;EAC1C,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,YAAY;AACd;;AAEA;EACE,WAAW;EACX,oCAAoC;AACtC;;AAEA;EACE,4CAA4C;EAC5C,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yDAA2C;EAC3C,qBAAqB;EACrB,4BAA4B;EAC5B,2BAA2B;EAC3B;iCAC+B;AACjC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yDAA0C;EAC1C,qBAAqB;EACrB,4BAA4B;EAC5B,2BAA2B;EAC3B;mCACiC;AACnC;AACA;EACE,WAAW;EACX,YAAY;EACZ,yDAA2C;EAC3C,qBAAqB;EACrB,4BAA4B;EAC5B,2BAA2B;EAC3B;iBACe;AACjB","sourcesContent":["body {\n  background-color: rgb(0, 137, 196);\n  margin: 0;\n}\n\n#content {\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px auto 0 auto;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n\n#main-title {\n  font-size: 20px;\n  font-weight: bold;\n  text-shadow: black 1px 1px 3px;\n}\n\n.board {\n  background-color: rgb(202, 202, 202);\n  padding: 10px;\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 3px solid black;\n  border-radius: 10px;\n}\n\n.board-title {\n  margin-bottom: 10px;\n  font-size: 18px;\n  color: black;\n}\n\n.board-grid {\n  display: grid;\n  grid-template-rows: repeat(10, 31px);\n}\n\n.board-grid.blur-out {\n  filter: blur(1px);\n}\n.board-grid:not(.blur-out) {\n  outline: 5px solid rgba(255, 68, 0, 0.493);\n  border-radius: 5px;\n}\n\n.board-row {\n  display: grid;\n  grid-template-columns: repeat(10, 31px);\n  height: 31px;\n}\n\n.board-cell {\n  width: 31px;\n  border: 1px solid rgb(102, 102, 102);\n}\n\n.board-grid:not(.blur-out) .board-cell:hover {\n  background-color: rgba(131, 133, 134, 0.466);\n  border: 1px solid rgb(0, 0, 0);\n}\n\n.indicator-ship {\n  width: 31px;\n  height: 31px;\n  background-image: url(\"./icons/square.svg\");\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(55%) sepia(94%) saturate(1011%) hue-rotate(95deg)\n    brightness(92%) contrast(97%);\n}\n\n.indicator-hit {\n  width: 31px;\n  height: 31px;\n  background-image: url(\"./icons/cross.svg\");\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(14%) sepia(83%) saturate(7448%) hue-rotate(6deg)\n    brightness(103%) contrast(119%);\n}\n.indicator-miss {\n  width: 31px;\n  height: 31px;\n  background-image: url(\"./icons/circle.svg\");\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(46%) sepia(7%) saturate(2%) hue-rotate(338deg) brightness(91%)\n    contrast(85%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMHandler.js":
/*!***************************!*\
  !*** ./src/DOMHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAttackListeners": () => (/* binding */ addAttackListeners),
/* harmony export */   "displayTurn": () => (/* binding */ displayTurn),
/* harmony export */   "drawIndicators": () => (/* binding */ drawIndicators)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");


const drawIndicators = (player, computer) => {
  document.querySelectorAll(".cell-content").forEach((e) => e.remove());

  const playerBoard = document.getElementById("board-player");
  const computerBoard = document.getElementById("board-computer");
  const playerGrid = playerBoard.querySelector(".board-grid");
  const computerGrid = computerBoard.querySelector(".board-grid");

  for (let j = 0; j < player.getBoard().getSize()[1]; j++) {
    const row = playerGrid.children[j];
    for (let i = 0; i < player.getBoard().getSize()[0]; i++) {
      let cell = row.children[i];
      if (player.getBoard().shipInCoordinate([i, j]) !== null) {
        const content = document.createElement("div");
        content.classList.add("cell-content");
        if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(player.getBoard().getHits(), [i, j])) {
          content.classList.add("indicator-hit");
        } else {
          content.classList.add("indicator-ship");
        }
        cell.appendChild(content);
      } else {
        if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(player.getBoard().getMisses(), [i, j])) {
          const content = document.createElement("div");
          content.classList.add("cell-content");
          content.classList.add("indicator-miss");
          cell.appendChild(content);
        }
      }
    }
  }
  for (let j = 0; j < computer.getBoard().getSize()[1]; j++) {
    const row = computerGrid.children[j];
    for (let i = 0; i < computer.getBoard().getSize()[0]; i++) {
      let cell = row.children[i];
      if (computer.getBoard().shipInCoordinate([i, j]) !== null) {
        const content = document.createElement("div");
        content.classList.add("cell-content");
        if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(computer.getBoard().getHits(), [i, j])) {
          content.classList.add("indicator-hit");
        }
        cell.appendChild(content);
      } else {
        if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(computer.getBoard().getMisses(), [i, j])) {
          const content = document.createElement("div");
          content.classList.add("cell-content");
          content.classList.add("indicator-miss");
          cell.appendChild(content);
        }
      }
    }
  }
};

const addAttackListeners = (board, eventHandler) => {
  let boardElem = undefined;
  let gridElem = undefined;

  if (board.getOwner() == "player") {
    boardElem = document.getElementById("board-player");
    gridElem = boardElem.querySelector(".board-grid");
  } else if (board.getOwner() == "computer") {
    boardElem = document.getElementById("board-computer");
    gridElem = boardElem.querySelector(".board-grid");
  }
  for (let j = 0; j < board.getSize()[1]; j++) {
    const row = gridElem.children[j];
    for (let i = 0; i < board.getSize()[0]; i++) {
      let cell = row.children[i];
      cell.addEventListener("click", () => {
        eventAttack(board, [i, j], eventHandler);
      });
    }
  }
};

const displayTurn = (turn) => {
  const board1 = document.querySelector("#board-player .board-grid");
  const board2 = document.querySelector("#board-computer .board-grid");
  if (turn == 0) {
    board1.classList.add("blur-out");
    board2.classList.remove("blur-out");
  } else {
    board1.classList.remove("blur-out");
    board2.classList.add("blur-out");
  }
};

const eventAttack = (board, coord, eventHandler) => {
  const data = { board, coord };
  eventHandler("attack", data);
};




/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMHandler */ "./src/DOMHandler.js");


const Game = () => {
  let turn = undefined;
  let player = undefined;
  let computer = undefined;

  const initialize = (newPlayer, newComputer) => {
    turn = 0; //players turn
    player = newPlayer;
    computer = newComputer;
    (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.addAttackListeners)(player.getBoard(), eventHandler);
    (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.addAttackListeners)(computer.getBoard(), eventHandler);
    (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.displayTurn)(turn);
  };

  const changeTurn = () => {
    if (turn == 0) {
      // set turn to computer
      turn = 1;

      setTimeout(() => {
        const data = {
          board: player.getBoard(),
          coord: computer.AI.generateAttack(player.getBoard()),
        };
        eventHandler("attack", data);
      }, 1000);
    } else {
      // set turn to player
      turn = 0;
    }
    (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.displayTurn)(turn);
    (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.drawIndicators)(player, computer);
  };

  const eventHandler = (event, data) => {
    if (event === "attack") {
      if (
        (data.board.getOwner() === "player" && turn === 1) ||
        (data.board.getOwner() === "computer" && turn === 0)
      ) {
        if (data.board.receiveAttack(data.coord)) {
          changeTurn();
          return;
        }
      }
    }
  };

  return { initialize, eventHandler };
};




/***/ }),

/***/ "./src/GameBoard.js":
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameBoard": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");


const GameBoard = () => {
  let width = undefined;
  let height = undefined;
  let ships = undefined;
  let map = undefined;
  let hits = undefined;
  let misses = undefined;
  let owner = undefined;
  const initialize = (w, h, newOwner) => {
    if (w >= 1 && h >= 1) {
      width = w;
      height = h;
      map = Array(width);
      for (let i = 0; i < map.length; i++) {
        map[i] = Array(height).fill(null);
      }
      hits = [];
      misses = [];
      ships = [];
      owner = newOwner;
    }
  };

  const addShip = (ship, pos) => {
    //check if there is room for full ship

    if (shipPositionAvailable(ship.getLength(), pos)) {
      ships.push(ship);
      ship.setPosition(pos);
      if (pos[2] === 0) {
        for (let i = 0; i < ship.getLength(); i++) {
          map[pos[0] + i][pos[1]] = ship;
        }
      } else if (pos[2] === 1) {
        for (let i = 0; i < ship.getLength(); i++) {
          map[pos[0]][pos[1] + i] = ship;
        }
      }
    }
  };

  const shipPositionAvailable = (length, pos) => {
    if (pos[2] === 0) {
      for (let i = 0; i < length; i++) {
        const coord = [pos[0] + i, pos[1]];
        if (shipInCoordinate(coord) !== null || !_isWithinBoard(coord)) {
          return false;
        }
      }
    } else if (pos[2] === 1) {
      for (let i = 0; i < length; i++) {
        const coord = [pos[0], pos[1] + i];
        if (shipInCoordinate(coord) !== null || !_isWithinBoard(coord)) {
          return false;
        }
      }
    }
    return true;
  };

  const shipInCoordinate = (coord) => {
    return map[coord[0]][coord[1]];
  };

  const getSize = () => {
    return [width, height];
  };
  const getShips = () => {
    return ships;
  };
  const getMap = () => {
    const mapCopy = map;
    return mapCopy;
  };
  const getHits = () => {
    return hits;
  };
  const getMisses = () => {
    return misses;
  };
  const getOwner = () => {
    return owner;
  };
  const _isWithinBoard = (coord) => {
    if (
      coord[0] >= 0 &&
      coord[0] < width &&
      coord[1] >= 0 &&
      coord[1] < height
    ) {
      return true;
    }
    return false;
  };
  const receiveAttack = (coord) => {
    if (!(0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(hits, coord) && !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(misses, coord)) {
      const ship = shipInCoordinate(coord);
      if (ship !== null) {
        ship.hit();
        hits.push(coord);
      } else {
        misses.push(coord);
      }
      return true;
    }
    return false;
  };
  const areShipsSunk = () => {
    for (let i = 0; i < ships.length; i++) {
      const ship = ships[i];
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  };

  return {
    initialize,
    addShip,
    shipInCoordinate,
    getSize,
    getShips,
    getMap,
    getHits,
    getMisses,
    getOwner,
    receiveAttack,
    areShipsSunk,
  };
};




/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");


const Player = () => {
  let board = null;
  const setBoard = (newBoard) => {
    board = newBoard;
  };
  const getBoard = () => {
    return board;
  };
  const AI = (() => {
    const generateAttack = (board) => {
      const boardSize = board.getSize();
      let x = undefined;
      let y = undefined;
      do {
        x = Math.floor(Math.random() * boardSize[0]);
        y = Math.floor(Math.random() * boardSize[1]);
      } while (
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(board.getHits(), [x, y]) ||
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(board.getMisses(), [x, y])
      );
      return [x, y];
    };
    return { generateAttack };
  })();
  return { setBoard, getBoard, AI };
};




/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = () => {
  let length = undefined;
  let position = undefined; // x, y, direction{0: horizontal, 1: vertical}
  let hits = 0;
  const setLength = (len) => {
    if (len >= 1 && len <= 4) {
      length = len;
    }
  };
  const setPosition = (pos) => {
    position = pos;
  };
  const getLength = () => {
    return length;
  };
  const getPosition = () => {
    return position;
  };
  const getHits = () => {
    return hits;
  };
  const hit = () => {
    hits++;
  };
  const isSunk = () => {
    if (hits >= length) {
      return true;
    } else {
      return false;
    }
  };
  return {
    setLength,
    setPosition,
    getLength,
    getPosition,
    getHits,
    hit,
    isSunk,
  };
};




/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "includesArray": () => (/* binding */ includesArray)
/* harmony export */ });
const includesArray = (data, arr) => {
  return data.some(
    (e) => Array.isArray(e) && e.every((o, i) => Object.is(arr[i], o))
  );
};




/***/ }),

/***/ "./src/icons/circle.svg":
/*!******************************!*\
  !*** ./src/icons/circle.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db880e01a83d878a9455.svg";

/***/ }),

/***/ "./src/icons/cross.svg":
/*!*****************************!*\
  !*** ./src/icons/cross.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08233535a9321b39bf5f.svg";

/***/ }),

/***/ "./src/icons/square.svg":
/*!******************************!*\
  !*** ./src/icons/square.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc56e227c4fc331c8af4.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameBoard */ "./src/GameBoard.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Game */ "./src/Game.js");
/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMHandler */ "./src/DOMHandler.js");







const initializeGame = () => {
  let player = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.Player)();
  let computer = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.Player)();
  let board1 = (0,_GameBoard__WEBPACK_IMPORTED_MODULE_2__.GameBoard)();
  let board2 = (0,_GameBoard__WEBPACK_IMPORTED_MODULE_2__.GameBoard)();

  board1.initialize(10, 10, "player");
  board2.initialize(10, 10, "computer");
  player.setBoard(board1);
  computer.setBoard(board2);

  const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

  for (let i = 0; i < shipLengths.length; i++) {
    let ship1 = (0,_Ship__WEBPACK_IMPORTED_MODULE_3__.Ship)();
    let ship2 = (0,_Ship__WEBPACK_IMPORTED_MODULE_3__.Ship)();
    ship1.setLength(shipLengths[i]);
    ship2.setLength(shipLengths[i]);
    if (i < 5) {
      board1.addShip(ship1, [i, i * 2, 0]);
      board2.addShip(ship2, [i, i * 2, 0]);
    } else {
      board1.addShip(ship1, [i, (i - 5) * 2, 0]);
      board2.addShip(ship2, [i, (i - 5) * 2, 0]);
    }
  }

  let game = (0,_Game__WEBPACK_IMPORTED_MODULE_4__.Game)();
  game.initialize(player, computer);

  (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_5__.drawIndicators)(player, computer);
  return { player, computer };
};

let players = initializeGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQWUscURBQVM7QUFDeEIsZUFBZSxxREFBUzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQyxnQkFBZ0IsMkNBQUk7QUFDcEIsZ0JBQWdCLDJDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSwyQ0FBSTtBQUNqQjs7QUFFQSxFQUFFLDJEQUFjO0FBQ2hCLFdBQVc7QUFDWDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QtMTQvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanMtcHJvamVjdC0xNC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vanMtcHJvamVjdC0xNC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtcHJvamVjdC0xNC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0Ly4vc3JjL0RPTUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vanMtcHJvamVjdC0xNC8uL3NyYy9HYW1lLmpzIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvLi9zcmMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0Ly4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtcHJvamVjdC0xNC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtcHJvamVjdC0xNC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtcHJvamVjdC0xNC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaWNvbnMvc3F1YXJlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaWNvbnMvY3Jvc3Muc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9jaXJjbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMzcsIDE5Nik7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI21haW4tdGl0bGUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogYmxhY2sgMXB4IDFweCAzcHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyMDIsIDIwMik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJvYXJkLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5ib2FyZC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzFweCk7XFxufVxcblxcbi5ib2FyZC1ncmlkLmJsdXItb3V0IHtcXG4gIGZpbHRlcjogYmx1cigxcHgpO1xcbn1cXG4uYm9hcmQtZ3JpZDpub3QoLmJsdXItb3V0KSB7XFxuICBvdXRsaW5lOiA1cHggc29saWQgcmdiYSgyNTUsIDY4LCAwLCAwLjQ5Myk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5ib2FyZC1yb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMXB4KTtcXG4gIGhlaWdodDogMzFweDtcXG59XFxuXFxuLmJvYXJkLWNlbGwge1xcbiAgd2lkdGg6IDMxcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAyLCAxMDIsIDEwMik7XFxufVxcblxcbi5ib2FyZC1ncmlkOm5vdCguYmx1ci1vdXQpIC5ib2FyZC1jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCAxMzMsIDEzNCwgMC40NjYpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4uaW5kaWNhdG9yLXNoaXAge1xcbiAgd2lkdGg6IDMxcHg7XFxuICBoZWlnaHQ6IDMxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGZpbHRlcjogaW52ZXJ0KDU1JSkgc2VwaWEoOTQlKSBzYXR1cmF0ZSgxMDExJSkgaHVlLXJvdGF0ZSg5NWRlZylcXG4gICAgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDk3JSk7XFxufVxcblxcbi5pbmRpY2F0b3ItaGl0IHtcXG4gIHdpZHRoOiAzMXB4O1xcbiAgaGVpZ2h0OiAzMXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBmaWx0ZXI6IGludmVydCgxNCUpIHNlcGlhKDgzJSkgc2F0dXJhdGUoNzQ0OCUpIGh1ZS1yb3RhdGUoNmRlZylcXG4gICAgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMTklKTtcXG59XFxuLmluZGljYXRvci1taXNzIHtcXG4gIHdpZHRoOiAzMXB4O1xcbiAgaGVpZ2h0OiAzMXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBmaWx0ZXI6IGludmVydCg0NiUpIHNlcGlhKDclKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgzMzhkZWcpIGJyaWdodG5lc3MoOTElKVxcbiAgICBjb250cmFzdCg4NSUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQTJDO0VBQzNDLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCO2lDQUMrQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQTBDO0VBQzFDLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCO21DQUNpQztBQUNuQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5REFBMkM7RUFDM0MscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0I7aUJBQ2U7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTM3LCAxOTYpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMCBhdXRvO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNtYWluLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggM3B4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjAyLCAyMDIpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5ib2FyZC10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYm9hcmQtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMxcHgpO1xcbn1cXG5cXG4uYm9hcmQtZ3JpZC5ibHVyLW91dCB7XFxuICBmaWx0ZXI6IGJsdXIoMXB4KTtcXG59XFxuLmJvYXJkLWdyaWQ6bm90KC5ibHVyLW91dCkge1xcbiAgb3V0bGluZTogNXB4IHNvbGlkIHJnYmEoMjU1LCA2OCwgMCwgMC40OTMpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYm9hcmQtcm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzFweCk7XFxuICBoZWlnaHQ6IDMxcHg7XFxufVxcblxcbi5ib2FyZC1jZWxsIHtcXG4gIHdpZHRoOiAzMXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMiwgMTAyLCAxMDIpO1xcbn1cXG5cXG4uYm9hcmQtZ3JpZDpub3QoLmJsdXItb3V0KSAuYm9hcmQtY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMSwgMTMzLCAxMzQsIDAuNDY2KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmluZGljYXRvci1zaGlwIHtcXG4gIHdpZHRoOiAzMXB4O1xcbiAgaGVpZ2h0OiAzMXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ljb25zL3NxdWFyZS5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBmaWx0ZXI6IGludmVydCg1NSUpIHNlcGlhKDk0JSkgc2F0dXJhdGUoMTAxMSUpIGh1ZS1yb3RhdGUoOTVkZWcpXFxuICAgIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCg5NyUpO1xcbn1cXG5cXG4uaW5kaWNhdG9yLWhpdCB7XFxuICB3aWR0aDogMzFweDtcXG4gIGhlaWdodDogMzFweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pY29ucy9jcm9zcy5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBmaWx0ZXI6IGludmVydCgxNCUpIHNlcGlhKDgzJSkgc2F0dXJhdGUoNzQ0OCUpIGh1ZS1yb3RhdGUoNmRlZylcXG4gICAgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMTklKTtcXG59XFxuLmluZGljYXRvci1taXNzIHtcXG4gIHdpZHRoOiAzMXB4O1xcbiAgaGVpZ2h0OiAzMXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ljb25zL2NpcmNsZS5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBmaWx0ZXI6IGludmVydCg0NiUpIHNlcGlhKDclKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgzMzhkZWcpIGJyaWdodG5lc3MoOTElKVxcbiAgICBjb250cmFzdCg4NSUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBpbmNsdWRlc0FycmF5IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbmNvbnN0IGRyYXdJbmRpY2F0b3JzID0gKHBsYXllciwgY29tcHV0ZXIpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsLWNvbnRlbnRcIikuZm9yRWFjaCgoZSkgPT4gZS5yZW1vdmUoKSk7XG5cbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkLXBsYXllclwiKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmQtY29tcHV0ZXJcIik7XG4gIGNvbnN0IHBsYXllckdyaWQgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWdyaWRcIik7XG4gIGNvbnN0IGNvbXB1dGVyR3JpZCA9IGNvbXB1dGVyQm9hcmQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1ncmlkXCIpO1xuXG4gIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyLmdldEJvYXJkKCkuZ2V0U2l6ZSgpWzFdOyBqKyspIHtcbiAgICBjb25zdCByb3cgPSBwbGF5ZXJHcmlkLmNoaWxkcmVuW2pdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLmdldEJvYXJkKCkuZ2V0U2l6ZSgpWzBdOyBpKyspIHtcbiAgICAgIGxldCBjZWxsID0gcm93LmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKHBsYXllci5nZXRCb2FyZCgpLnNoaXBJbkNvb3JkaW5hdGUoW2ksIGpdKSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY2VsbC1jb250ZW50XCIpO1xuICAgICAgICBpZiAoaW5jbHVkZXNBcnJheShwbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRIaXRzKCksIFtpLCBqXSkpIHtcbiAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJpbmRpY2F0b3ItaGl0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImluZGljYXRvci1zaGlwXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaW5jbHVkZXNBcnJheShwbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRNaXNzZXMoKSwgW2ksIGpdKSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNlbGwtY29udGVudFwiKTtcbiAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJpbmRpY2F0b3ItbWlzc1wiKTtcbiAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGogPSAwOyBqIDwgY29tcHV0ZXIuZ2V0Qm9hcmQoKS5nZXRTaXplKClbMV07IGorKykge1xuICAgIGNvbnN0IHJvdyA9IGNvbXB1dGVyR3JpZC5jaGlsZHJlbltqXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyLmdldEJvYXJkKCkuZ2V0U2l6ZSgpWzBdOyBpKyspIHtcbiAgICAgIGxldCBjZWxsID0gcm93LmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNvbXB1dGVyLmdldEJvYXJkKCkuc2hpcEluQ29vcmRpbmF0ZShbaSwgal0pICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjZWxsLWNvbnRlbnRcIik7XG4gICAgICAgIGlmIChpbmNsdWRlc0FycmF5KGNvbXB1dGVyLmdldEJvYXJkKCkuZ2V0SGl0cygpLCBbaSwgal0pKSB7XG4gICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaW5kaWNhdG9yLWhpdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGluY2x1ZGVzQXJyYXkoY29tcHV0ZXIuZ2V0Qm9hcmQoKS5nZXRNaXNzZXMoKSwgW2ksIGpdKSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNlbGwtY29udGVudFwiKTtcbiAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJpbmRpY2F0b3ItbWlzc1wiKTtcbiAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBhZGRBdHRhY2tMaXN0ZW5lcnMgPSAoYm9hcmQsIGV2ZW50SGFuZGxlcikgPT4ge1xuICBsZXQgYm9hcmRFbGVtID0gdW5kZWZpbmVkO1xuICBsZXQgZ3JpZEVsZW0gPSB1bmRlZmluZWQ7XG5cbiAgaWYgKGJvYXJkLmdldE93bmVyKCkgPT0gXCJwbGF5ZXJcIikge1xuICAgIGJvYXJkRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmQtcGxheWVyXCIpO1xuICAgIGdyaWRFbGVtID0gYm9hcmRFbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtZ3JpZFwiKTtcbiAgfSBlbHNlIGlmIChib2FyZC5nZXRPd25lcigpID09IFwiY29tcHV0ZXJcIikge1xuICAgIGJvYXJkRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmQtY29tcHV0ZXJcIik7XG4gICAgZ3JpZEVsZW0gPSBib2FyZEVsZW0ucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1ncmlkXCIpO1xuICB9XG4gIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmQuZ2V0U2l6ZSgpWzFdOyBqKyspIHtcbiAgICBjb25zdCByb3cgPSBncmlkRWxlbS5jaGlsZHJlbltqXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmdldFNpemUoKVswXTsgaSsrKSB7XG4gICAgICBsZXQgY2VsbCA9IHJvdy5jaGlsZHJlbltpXTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZXZlbnRBdHRhY2soYm9hcmQsIFtpLCBqXSwgZXZlbnRIYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZGlzcGxheVR1cm4gPSAodHVybikgPT4ge1xuICBjb25zdCBib2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLXBsYXllciAuYm9hcmQtZ3JpZFwiKTtcbiAgY29uc3QgYm9hcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1jb21wdXRlciAuYm9hcmQtZ3JpZFwiKTtcbiAgaWYgKHR1cm4gPT0gMCkge1xuICAgIGJvYXJkMS5jbGFzc0xpc3QuYWRkKFwiYmx1ci1vdXRcIik7XG4gICAgYm9hcmQyLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyLW91dFwiKTtcbiAgfSBlbHNlIHtcbiAgICBib2FyZDEuY2xhc3NMaXN0LnJlbW92ZShcImJsdXItb3V0XCIpO1xuICAgIGJvYXJkMi5jbGFzc0xpc3QuYWRkKFwiYmx1ci1vdXRcIik7XG4gIH1cbn07XG5cbmNvbnN0IGV2ZW50QXR0YWNrID0gKGJvYXJkLCBjb29yZCwgZXZlbnRIYW5kbGVyKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7IGJvYXJkLCBjb29yZCB9O1xuICBldmVudEhhbmRsZXIoXCJhdHRhY2tcIiwgZGF0YSk7XG59O1xuXG5leHBvcnQgeyBkcmF3SW5kaWNhdG9ycywgYWRkQXR0YWNrTGlzdGVuZXJzLCBkaXNwbGF5VHVybiB9O1xuIiwiaW1wb3J0IHsgYWRkQXR0YWNrTGlzdGVuZXJzLCBkaXNwbGF5VHVybiwgZHJhd0luZGljYXRvcnMgfSBmcm9tIFwiLi9ET01IYW5kbGVyXCI7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIGxldCB0dXJuID0gdW5kZWZpbmVkO1xuICBsZXQgcGxheWVyID0gdW5kZWZpbmVkO1xuICBsZXQgY29tcHV0ZXIgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3QgaW5pdGlhbGl6ZSA9IChuZXdQbGF5ZXIsIG5ld0NvbXB1dGVyKSA9PiB7XG4gICAgdHVybiA9IDA7IC8vcGxheWVycyB0dXJuXG4gICAgcGxheWVyID0gbmV3UGxheWVyO1xuICAgIGNvbXB1dGVyID0gbmV3Q29tcHV0ZXI7XG4gICAgYWRkQXR0YWNrTGlzdGVuZXJzKHBsYXllci5nZXRCb2FyZCgpLCBldmVudEhhbmRsZXIpO1xuICAgIGFkZEF0dGFja0xpc3RlbmVycyhjb21wdXRlci5nZXRCb2FyZCgpLCBldmVudEhhbmRsZXIpO1xuICAgIGRpc3BsYXlUdXJuKHR1cm4pO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVR1cm4gPSAoKSA9PiB7XG4gICAgaWYgKHR1cm4gPT0gMCkge1xuICAgICAgLy8gc2V0IHR1cm4gdG8gY29tcHV0ZXJcbiAgICAgIHR1cm4gPSAxO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBib2FyZDogcGxheWVyLmdldEJvYXJkKCksXG4gICAgICAgICAgY29vcmQ6IGNvbXB1dGVyLkFJLmdlbmVyYXRlQXR0YWNrKHBsYXllci5nZXRCb2FyZCgpKSxcbiAgICAgICAgfTtcbiAgICAgICAgZXZlbnRIYW5kbGVyKFwiYXR0YWNrXCIsIGRhdGEpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNldCB0dXJuIHRvIHBsYXllclxuICAgICAgdHVybiA9IDA7XG4gICAgfVxuICAgIGRpc3BsYXlUdXJuKHR1cm4pO1xuICAgIGRyYXdJbmRpY2F0b3JzKHBsYXllciwgY29tcHV0ZXIpO1xuICB9O1xuXG4gIGNvbnN0IGV2ZW50SGFuZGxlciA9IChldmVudCwgZGF0YSkgPT4ge1xuICAgIGlmIChldmVudCA9PT0gXCJhdHRhY2tcIikge1xuICAgICAgaWYgKFxuICAgICAgICAoZGF0YS5ib2FyZC5nZXRPd25lcigpID09PSBcInBsYXllclwiICYmIHR1cm4gPT09IDEpIHx8XG4gICAgICAgIChkYXRhLmJvYXJkLmdldE93bmVyKCkgPT09IFwiY29tcHV0ZXJcIiAmJiB0dXJuID09PSAwKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChkYXRhLmJvYXJkLnJlY2VpdmVBdHRhY2soZGF0YS5jb29yZCkpIHtcbiAgICAgICAgICBjaGFuZ2VUdXJuKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGluaXRpYWxpemUsIGV2ZW50SGFuZGxlciB9O1xufTtcblxuZXhwb3J0IHsgR2FtZSB9O1xuIiwiaW1wb3J0IHsgaW5jbHVkZXNBcnJheSB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuXG5jb25zdCBHYW1lQm9hcmQgPSAoKSA9PiB7XG4gIGxldCB3aWR0aCA9IHVuZGVmaW5lZDtcbiAgbGV0IGhlaWdodCA9IHVuZGVmaW5lZDtcbiAgbGV0IHNoaXBzID0gdW5kZWZpbmVkO1xuICBsZXQgbWFwID0gdW5kZWZpbmVkO1xuICBsZXQgaGl0cyA9IHVuZGVmaW5lZDtcbiAgbGV0IG1pc3NlcyA9IHVuZGVmaW5lZDtcbiAgbGV0IG93bmVyID0gdW5kZWZpbmVkO1xuICBjb25zdCBpbml0aWFsaXplID0gKHcsIGgsIG5ld093bmVyKSA9PiB7XG4gICAgaWYgKHcgPj0gMSAmJiBoID49IDEpIHtcbiAgICAgIHdpZHRoID0gdztcbiAgICAgIGhlaWdodCA9IGg7XG4gICAgICBtYXAgPSBBcnJheSh3aWR0aCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBtYXBbaV0gPSBBcnJheShoZWlnaHQpLmZpbGwobnVsbCk7XG4gICAgICB9XG4gICAgICBoaXRzID0gW107XG4gICAgICBtaXNzZXMgPSBbXTtcbiAgICAgIHNoaXBzID0gW107XG4gICAgICBvd25lciA9IG5ld093bmVyO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRTaGlwID0gKHNoaXAsIHBvcykgPT4ge1xuICAgIC8vY2hlY2sgaWYgdGhlcmUgaXMgcm9vbSBmb3IgZnVsbCBzaGlwXG5cbiAgICBpZiAoc2hpcFBvc2l0aW9uQXZhaWxhYmxlKHNoaXAuZ2V0TGVuZ3RoKCksIHBvcykpIHtcbiAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICBzaGlwLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICBpZiAocG9zWzJdID09PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgbWFwW3Bvc1swXSArIGldW3Bvc1sxXV0gPSBzaGlwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBvc1syXSA9PT0gMSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgIG1hcFtwb3NbMF1dW3Bvc1sxXSArIGldID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzaGlwUG9zaXRpb25BdmFpbGFibGUgPSAobGVuZ3RoLCBwb3MpID0+IHtcbiAgICBpZiAocG9zWzJdID09PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gW3Bvc1swXSArIGksIHBvc1sxXV07XG4gICAgICAgIGlmIChzaGlwSW5Db29yZGluYXRlKGNvb3JkKSAhPT0gbnVsbCB8fCAhX2lzV2l0aGluQm9hcmQoY29vcmQpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwb3NbMl0gPT09IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbcG9zWzBdLCBwb3NbMV0gKyBpXTtcbiAgICAgICAgaWYgKHNoaXBJbkNvb3JkaW5hdGUoY29vcmQpICE9PSBudWxsIHx8ICFfaXNXaXRoaW5Cb2FyZChjb29yZCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2hpcEluQ29vcmRpbmF0ZSA9IChjb29yZCkgPT4ge1xuICAgIHJldHVybiBtYXBbY29vcmRbMF1dW2Nvb3JkWzFdXTtcbiAgfTtcblxuICBjb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICAgIHJldHVybiBbd2lkdGgsIGhlaWdodF07XG4gIH07XG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwcztcbiAgfTtcbiAgY29uc3QgZ2V0TWFwID0gKCkgPT4ge1xuICAgIGNvbnN0IG1hcENvcHkgPSBtYXA7XG4gICAgcmV0dXJuIG1hcENvcHk7XG4gIH07XG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhpdHM7XG4gIH07XG4gIGNvbnN0IGdldE1pc3NlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gbWlzc2VzO1xuICB9O1xuICBjb25zdCBnZXRPd25lciA9ICgpID0+IHtcbiAgICByZXR1cm4gb3duZXI7XG4gIH07XG4gIGNvbnN0IF9pc1dpdGhpbkJvYXJkID0gKGNvb3JkKSA9PiB7XG4gICAgaWYgKFxuICAgICAgY29vcmRbMF0gPj0gMCAmJlxuICAgICAgY29vcmRbMF0gPCB3aWR0aCAmJlxuICAgICAgY29vcmRbMV0gPj0gMCAmJlxuICAgICAgY29vcmRbMV0gPCBoZWlnaHRcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICBpZiAoIWluY2x1ZGVzQXJyYXkoaGl0cywgY29vcmQpICYmICFpbmNsdWRlc0FycmF5KG1pc3NlcywgY29vcmQpKSB7XG4gICAgICBjb25zdCBzaGlwID0gc2hpcEluQ29vcmRpbmF0ZShjb29yZCk7XG4gICAgICBpZiAoc2hpcCAhPT0gbnVsbCkge1xuICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICBoaXRzLnB1c2goY29vcmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWlzc2VzLnB1c2goY29vcmQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgYXJlU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBzaGlwc1tpXTtcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdGlhbGl6ZSxcbiAgICBhZGRTaGlwLFxuICAgIHNoaXBJbkNvb3JkaW5hdGUsXG4gICAgZ2V0U2l6ZSxcbiAgICBnZXRTaGlwcyxcbiAgICBnZXRNYXAsXG4gICAgZ2V0SGl0cyxcbiAgICBnZXRNaXNzZXMsXG4gICAgZ2V0T3duZXIsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhcmVTaGlwc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYW1lQm9hcmQgfTtcbiIsImltcG9ydCB7IGluY2x1ZGVzQXJyYXkgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuICBsZXQgYm9hcmQgPSBudWxsO1xuICBjb25zdCBzZXRCb2FyZCA9IChuZXdCb2FyZCkgPT4ge1xuICAgIGJvYXJkID0gbmV3Qm9hcmQ7XG4gIH07XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBib2FyZDtcbiAgfTtcbiAgY29uc3QgQUkgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGdlbmVyYXRlQXR0YWNrID0gKGJvYXJkKSA9PiB7XG4gICAgICBjb25zdCBib2FyZFNpemUgPSBib2FyZC5nZXRTaXplKCk7XG4gICAgICBsZXQgeCA9IHVuZGVmaW5lZDtcbiAgICAgIGxldCB5ID0gdW5kZWZpbmVkO1xuICAgICAgZG8ge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplWzBdKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZVsxXSk7XG4gICAgICB9IHdoaWxlIChcbiAgICAgICAgaW5jbHVkZXNBcnJheShib2FyZC5nZXRIaXRzKCksIFt4LCB5XSkgfHxcbiAgICAgICAgaW5jbHVkZXNBcnJheShib2FyZC5nZXRNaXNzZXMoKSwgW3gsIHldKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfTtcbiAgICByZXR1cm4geyBnZW5lcmF0ZUF0dGFjayB9O1xuICB9KSgpO1xuICByZXR1cm4geyBzZXRCb2FyZCwgZ2V0Qm9hcmQsIEFJIH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNvbnN0IFNoaXAgPSAoKSA9PiB7XG4gIGxldCBsZW5ndGggPSB1bmRlZmluZWQ7XG4gIGxldCBwb3NpdGlvbiA9IHVuZGVmaW5lZDsgLy8geCwgeSwgZGlyZWN0aW9uezA6IGhvcml6b250YWwsIDE6IHZlcnRpY2FsfVxuICBsZXQgaGl0cyA9IDA7XG4gIGNvbnN0IHNldExlbmd0aCA9IChsZW4pID0+IHtcbiAgICBpZiAobGVuID49IDEgJiYgbGVuIDw9IDQpIHtcbiAgICAgIGxlbmd0aCA9IGxlbjtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNldFBvc2l0aW9uID0gKHBvcykgPT4ge1xuICAgIHBvc2l0aW9uID0gcG9zO1xuICB9O1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfTtcbiAgY29uc3QgZ2V0UG9zaXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuICBjb25zdCBnZXRIaXRzID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRzO1xuICB9O1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cysrO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGhpdHMgPj0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBzZXRMZW5ndGgsXG4gICAgc2V0UG9zaXRpb24sXG4gICAgZ2V0TGVuZ3RoLFxuICAgIGdldFBvc2l0aW9uLFxuICAgIGdldEhpdHMsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsImNvbnN0IGluY2x1ZGVzQXJyYXkgPSAoZGF0YSwgYXJyKSA9PiB7XG4gIHJldHVybiBkYXRhLnNvbWUoXG4gICAgKGUpID0+IEFycmF5LmlzQXJyYXkoZSkgJiYgZS5ldmVyeSgobywgaSkgPT4gT2JqZWN0LmlzKGFycltpXSwgbykpXG4gICk7XG59O1xuXG5leHBvcnQgeyBpbmNsdWRlc0FycmF5IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL0dhbWVCb2FyZFwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9HYW1lXCI7XG5pbXBvcnQgeyBkcmF3SW5kaWNhdG9ycyB9IGZyb20gXCIuL0RPTUhhbmRsZXJcIjtcblxuY29uc3QgaW5pdGlhbGl6ZUdhbWUgPSAoKSA9PiB7XG4gIGxldCBwbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgbGV0IGNvbXB1dGVyID0gUGxheWVyKCk7XG4gIGxldCBib2FyZDEgPSBHYW1lQm9hcmQoKTtcbiAgbGV0IGJvYXJkMiA9IEdhbWVCb2FyZCgpO1xuXG4gIGJvYXJkMS5pbml0aWFsaXplKDEwLCAxMCwgXCJwbGF5ZXJcIik7XG4gIGJvYXJkMi5pbml0aWFsaXplKDEwLCAxMCwgXCJjb21wdXRlclwiKTtcbiAgcGxheWVyLnNldEJvYXJkKGJvYXJkMSk7XG4gIGNvbXB1dGVyLnNldEJvYXJkKGJvYXJkMik7XG5cbiAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNCwgMywgMywgMiwgMiwgMiwgMSwgMSwgMSwgMV07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Rocy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBzaGlwMSA9IFNoaXAoKTtcbiAgICBsZXQgc2hpcDIgPSBTaGlwKCk7XG4gICAgc2hpcDEuc2V0TGVuZ3RoKHNoaXBMZW5ndGhzW2ldKTtcbiAgICBzaGlwMi5zZXRMZW5ndGgoc2hpcExlbmd0aHNbaV0pO1xuICAgIGlmIChpIDwgNSkge1xuICAgICAgYm9hcmQxLmFkZFNoaXAoc2hpcDEsIFtpLCBpICogMiwgMF0pO1xuICAgICAgYm9hcmQyLmFkZFNoaXAoc2hpcDIsIFtpLCBpICogMiwgMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2FyZDEuYWRkU2hpcChzaGlwMSwgW2ksIChpIC0gNSkgKiAyLCAwXSk7XG4gICAgICBib2FyZDIuYWRkU2hpcChzaGlwMiwgW2ksIChpIC0gNSkgKiAyLCAwXSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGdhbWUgPSBHYW1lKCk7XG4gIGdhbWUuaW5pdGlhbGl6ZShwbGF5ZXIsIGNvbXB1dGVyKTtcblxuICBkcmF3SW5kaWNhdG9ycyhwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgcmV0dXJuIHsgcGxheWVyLCBjb21wdXRlciB9O1xufTtcblxubGV0IHBsYXllcnMgPSBpbml0aWFsaXplR2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9