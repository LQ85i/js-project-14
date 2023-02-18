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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/cross_box.svg */ "./src/icons/cross_box.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/circle.svg */ "./src/icons/circle.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/small-square-filled.svg */ "./src/icons/small-square-filled.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: rgb(0, 137, 196);\n  margin: 0;\n}\n\n#content {\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 5px auto 0 auto;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n\n#main-title {\n  font-size: 20px;\n  font-weight: bold;\n  text-shadow: black 1px 1px 3px;\n}\n\n.board {\n  background-color: rgb(202, 202, 202);\n  padding: 10px;\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 3px solid black;\n  border-radius: 10px;\n}\n\n.board-title {\n  margin-bottom: 10px;\n  font-size: 18px;\n  color: black;\n}\n\n.board-grid {\n  display: grid;\n  grid-template-rows: repeat(10, 31px);\n}\n\n.board-grid.blur-out {\n  filter: blur(1px);\n}\n.board-grid:not(.blur-out) {\n  outline: 5px solid rgba(255, 68, 0, 0.493);\n  border-radius: 5px;\n}\n\n.board-row {\n  display: grid;\n  grid-template-columns: repeat(10, 31px);\n  height: 31px;\n}\n\n.board-cell {\n  width: 31px;\n  border: 1px solid rgb(102, 102, 102);\n}\n\n.board-grid:not(.blur-out) .board-cell:hover {\n  background-color: rgba(131, 133, 134, 0.466);\n  border: 1px solid rgb(0, 0, 0);\n}\n\n.indicator-ship {\n  width: 31px;\n  height: 31px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(55%) sepia(94%) saturate(1011%) hue-rotate(95deg)\n    brightness(92%) contrast(97%);\n}\n\n.indicator-hit:not(.indicator-sunk) {\n  width: 31px;\n  height: 31px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(14%) sepia(83%) saturate(7448%) hue-rotate(6deg)\n    brightness(103%) contrast(119%);\n}\n.indicator-sunk {\n  width: 31px;\n  height: 31px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(14%) sepia(83%) saturate(7448%) hue-rotate(6deg)\n    brightness(103%) contrast(119%);\n}\n.indicator-miss {\n  width: 31px;\n  height: 31px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(46%) sepia(7%) saturate(2%) hue-rotate(338deg) brightness(91%)\n    contrast(85%);\n}\n.indicator-clear {\n  width: 31px;\n  height: 31px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(46%) sepia(7%) saturate(2%) hue-rotate(338deg) brightness(91%)\n    contrast(85%);\n}\n\n.win-layer {\n  position: absolute;\n  margin-top: 167px;\n  font-size: 30px;\n  font-weight: bold;\n  color: rgb(0, 0, 0);\n  text-shadow: #fff 0 0 5px, #fff 0 0 5px, #fff 0 0 5px, #fff 0 0 5px,\n    #fff 0 0 5px, #fff 0 0 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;EAClC,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,0CAA0C;EAC1C,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,YAAY;AACd;;AAEA;EACE,WAAW;EACX,oCAAoC;AACtC;;AAEA;EACE,4CAA4C;EAC5C,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yDAA2C;EAC3C,qBAAqB;EACrB,4BAA4B;EAC5B,2BAA2B;EAC3B;iCAC+B;AACjC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yDAA0C;EAC1C,qBAAqB;EACrB,4BAA4B;EAC5B,2BAA2B;EAC3B;mCACiC;AACnC;AACA;EACE,WAAW;EACX,YAAY;EACZ,yDAA8C;EAC9C,qBAAqB;EACrB,4BAA4B;EAC5B,2BAA2B;EAC3B;mCACiC;AACnC;AACA;EACE,WAAW;EACX,YAAY;EACZ,yDAA2C;EAC3C,qBAAqB;EACrB,4BAA4B;EAC5B,2BAA2B;EAC3B;iBACe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,yDAAwD;EACxD,qBAAqB;EACrB,4BAA4B;EAC5B,2BAA2B;EAC3B;iBACe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB;8BAC4B;AAC9B","sourcesContent":["body {\n  background-color: rgb(0, 137, 196);\n  margin: 0;\n}\n\n#content {\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 5px auto 0 auto;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n\n#main-title {\n  font-size: 20px;\n  font-weight: bold;\n  text-shadow: black 1px 1px 3px;\n}\n\n.board {\n  background-color: rgb(202, 202, 202);\n  padding: 10px;\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 3px solid black;\n  border-radius: 10px;\n}\n\n.board-title {\n  margin-bottom: 10px;\n  font-size: 18px;\n  color: black;\n}\n\n.board-grid {\n  display: grid;\n  grid-template-rows: repeat(10, 31px);\n}\n\n.board-grid.blur-out {\n  filter: blur(1px);\n}\n.board-grid:not(.blur-out) {\n  outline: 5px solid rgba(255, 68, 0, 0.493);\n  border-radius: 5px;\n}\n\n.board-row {\n  display: grid;\n  grid-template-columns: repeat(10, 31px);\n  height: 31px;\n}\n\n.board-cell {\n  width: 31px;\n  border: 1px solid rgb(102, 102, 102);\n}\n\n.board-grid:not(.blur-out) .board-cell:hover {\n  background-color: rgba(131, 133, 134, 0.466);\n  border: 1px solid rgb(0, 0, 0);\n}\n\n.indicator-ship {\n  width: 31px;\n  height: 31px;\n  background-image: url(\"./icons/square.svg\");\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(55%) sepia(94%) saturate(1011%) hue-rotate(95deg)\n    brightness(92%) contrast(97%);\n}\n\n.indicator-hit:not(.indicator-sunk) {\n  width: 31px;\n  height: 31px;\n  background-image: url(\"./icons/cross.svg\");\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(14%) sepia(83%) saturate(7448%) hue-rotate(6deg)\n    brightness(103%) contrast(119%);\n}\n.indicator-sunk {\n  width: 31px;\n  height: 31px;\n  background-image: url(\"./icons/cross_box.svg\");\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(14%) sepia(83%) saturate(7448%) hue-rotate(6deg)\n    brightness(103%) contrast(119%);\n}\n.indicator-miss {\n  width: 31px;\n  height: 31px;\n  background-image: url(\"./icons/circle.svg\");\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(46%) sepia(7%) saturate(2%) hue-rotate(338deg) brightness(91%)\n    contrast(85%);\n}\n.indicator-clear {\n  width: 31px;\n  height: 31px;\n  background-image: url(\"./icons/small-square-filled.svg\");\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: invert(46%) sepia(7%) saturate(2%) hue-rotate(338deg) brightness(91%)\n    contrast(85%);\n}\n\n.win-layer {\n  position: absolute;\n  margin-top: 167px;\n  font-size: 30px;\n  font-weight: bold;\n  color: rgb(0, 0, 0);\n  text-shadow: #fff 0 0 5px, #fff 0 0 5px, #fff 0 0 5px, #fff 0 0 5px,\n    #fff 0 0 5px, #fff 0 0 5px;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "drawComputerWin": () => (/* binding */ drawComputerWin),
/* harmony export */   "drawIndicators": () => (/* binding */ drawIndicators),
/* harmony export */   "drawPlayerWin": () => (/* binding */ drawPlayerWin),
/* harmony export */   "initializeDOM": () => (/* binding */ initializeDOM)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");


const initializeDOM = (player, computer) => {
  initializeGrids(player, computer);
  removeListeners();
  resetWinMsg();
};

const initializeGrids = (player, computer) => {
  let playerGrid = document.querySelector("#board-player .board-grid");
  let computerGrid = document.querySelector("#board-computer .board-grid");
  playerGrid.innerHTML = "";
  computerGrid.innerHTML = "";
  for (let j = 0; j < 10; j++) {
    //create row
    const row = document.createElement("div");
    row.classList.add("board-row");
    for (let i = 0; i < 10; i++) {
      //create cell
      const cell = document.createElement("div");
      cell.classList.add("board-cell");
      row.appendChild(cell);
    }
    playerGrid.appendChild(row);
  }
  for (let j = 0; j < 10; j++) {
    //create row
    const row = document.createElement("div");
    row.classList.add("board-row");
    for (let i = 0; i < 10; i++) {
      //create cell
      const cell = document.createElement("div");
      cell.classList.add("board-cell");
      row.appendChild(cell);
    }
    computerGrid.appendChild(row);
  }
};

const removeListeners = () => {
  document.querySelectorAll(".board-cell").forEach((e) => {
    //
  });
};

const resetWinMsg = () => {
  const board1Grid = document.querySelector("#board-computer .board-grid");
  const board2Grid = document.querySelector("#board-player .board-grid");
  board1Grid.classList.remove("blur-out");
  board2Grid.classList.remove("blur-out");
  document.querySelectorAll(".win-layer").forEach((e) => e.remove());
};

const drawIndicators = (player, computer) => {
  document.querySelectorAll(".cell-content").forEach((e) => e.remove());

  const playerBoard = document.getElementById("board-player");
  const computerBoard = document.getElementById("board-computer");
  const playerGrid = playerBoard.querySelector(".board-grid");
  const computerGrid = computerBoard.querySelector(".board-grid");

  for (let j = 0; j < 10; j++) {
    const row = playerGrid.children[j];
    for (let i = 0; i < 10; i++) {
      let cell = row.children[i];
      if (player.getBoard().shipInCoordinate([i, j]) !== null) {
        const content = document.createElement("div");
        content.classList.add("cell-content");
        if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(player.getBoard().getHits(), [i, j])) {
          content.classList.add("indicator-hit");
          if (player.getBoard().shipInCoordinate([i, j]).isSunk()) {
            content.classList.add("indicator-sunk");
          }
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
        } else if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(player.getBoard().getClears(), [i, j])) {
          const content = document.createElement("div");
          content.classList.add("cell-content");
          content.classList.add("indicator-clear");
          cell.appendChild(content);
        }
      }
    }
  }
  for (let j = 0; j < 10; j++) {
    const row = computerGrid.children[j];
    for (let i = 0; i < 10; i++) {
      let cell = row.children[i];
      if (computer.getBoard().shipInCoordinate([i, j]) !== null) {
        const content = document.createElement("div");
        content.classList.add("cell-content");
        if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(computer.getBoard().getHits(), [i, j])) {
          content.classList.add("indicator-hit");
          if (computer.getBoard().shipInCoordinate([i, j]).isSunk()) {
            content.classList.add("indicator-sunk");
          }
        }
        cell.appendChild(content);
      } else {
        if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(computer.getBoard().getMisses(), [i, j])) {
          const content = document.createElement("div");
          content.classList.add("cell-content");
          content.classList.add("indicator-miss");
          cell.appendChild(content);
        } else if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(computer.getBoard().getClears(), [i, j])) {
          const content = document.createElement("div");
          content.classList.add("cell-content");
          content.classList.add("indicator-clear");
          cell.appendChild(content);
        }
      }
    }
  }
};

const addAttackListeners = (board, eventHandler) => {
  let boardElem = null;
  let gridElem = null;

  if (board.getOwner() == "player") {
    boardElem = document.getElementById("board-player");
    gridElem = boardElem.querySelector(".board-grid");
  } else if (board.getOwner() == "computer") {
    boardElem = document.getElementById("board-computer");
    gridElem = boardElem.querySelector(".board-grid");
  }
  for (let j = 0; j < 10; j++) {
    const row = gridElem.children[j];
    for (let i = 0; i < 10; i++) {
      let cell = row.children[i];

      cell.addEventListener("click", () => {
        const data = {
          board,
          coord: [i, j],
        };
        eventHandler("attack", data);
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

const drawComputerWin = () => {
  const board = document.getElementById("board-player");
  const board1Grid = document.querySelector("#board-computer .board-grid");
  const board2Grid = document.querySelector("#board-player .board-grid");
  board1Grid.classList.add("blur-out");
  board2Grid.classList.add("blur-out");
  const winLayer = document.createElement("div");
  winLayer.classList.add("win-layer");
  winLayer.innerHTML = "Computer Wins!";
  board.appendChild(winLayer);
};

const drawPlayerWin = () => {
  const board = document.getElementById("board-computer");
  const board1Grid = document.querySelector("#board-computer .board-grid");
  const board2Grid = document.querySelector("#board-player .board-grid");
  board1Grid.classList.add("blur-out");
  board2Grid.classList.add("blur-out");
  const winLayer = document.createElement("div");
  winLayer.classList.add("win-layer");
  winLayer.innerHTML = "Player Wins!";
  board.appendChild(winLayer);
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
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameBoard */ "./src/GameBoard.js");




const Game = () => {
  let turn = undefined;
  let player = undefined;
  let computer = undefined;
  let winner = undefined;
  let gameRunning = undefined;

  const initialize = () => {
    player = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.Player)();
    computer = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.Player)();
    let board1 = (0,_GameBoard__WEBPACK_IMPORTED_MODULE_2__.GameBoard)();
    let board2 = (0,_GameBoard__WEBPACK_IMPORTED_MODULE_2__.GameBoard)();

    board1.initialize(10, 10, "player");
    board2.initialize(10, 10, "computer");
    player.setBoard(board1);
    computer.setBoard(board2);

    board1.addRandomShips(board1);
    board2.addRandomShips(board2);

    turn = 0; //players turn
    gameRunning = true;
    (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.initializeDOM)(player, computer);
    (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.drawIndicators)(player, computer);
    (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.addAttackListeners)(player.getBoard(), eventHandler);
    (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.addAttackListeners)(computer.getBoard(), eventHandler);
    (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.displayTurn)(turn);
  };

  const changeTurn = () => {
    if (turn == 0) {
      turn = 1;
    } else {
      turn = 0;
    }
    (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.displayTurn)(turn);
  };

  const playTurn = () => {
    (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.displayTurn)(turn);
    if (turn == 1) {
      // computer turn
      setTimeout(() => {
        const data = {
          board: player.getBoard(),
          coord: computer.AI.generateAttack(player.getBoard()),
        };
        eventHandler("attack", data);
      }, 250);
    }
  };

  const checkForWinner = () => {
    if (player.getBoard().areShipsSunk()) {
      return computer;
    } else if (computer.getBoard().areShipsSunk()) {
      return player;
    }
    return null;
  };

  const setWinner = (newWinner) => {
    winner = newWinner;
    gameRunning = false;
    if (winner == player) {
      (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.drawPlayerWin)();
    } else if (winner == computer) {
      (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.drawComputerWin)();
    }
  };

  const resetGame = () => {
    turn = null;
    player.reset();
    player = null;
    computer.reset();
    computer = null;
    winner = null;
    gameRunning = null;

    initialize();
  };

  const eventHandler = (event, data) => {
    if (event === "attack" && gameRunning) {
      if (
        (data.board.getOwner() === "player" && turn === 1) ||
        (data.board.getOwner() === "computer" && turn === 0)
      ) {
        const attack = data.board.receiveAttack(data.coord);
        if (attack !== "fail") {
          const winner = checkForWinner();
          if (winner == null) {
            (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.drawIndicators)(player, computer);
            if (attack == "miss") {
              changeTurn();
              playTurn();
            } else {
              playTurn();
            }
          } else {
            (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_0__.drawIndicators)(player, computer);
            setWinner(winner);
          }
        }
      }
    }
  };

  const playAgain = document.getElementById("play-again");
  playAgain.addEventListener("click", () => {
    resetGame();
  });
  return { initialize, eventHandler, setWinner, resetGame };
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
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");



const GameBoard = () => {
  let width = undefined;
  let height = undefined;
  let ships = undefined;
  let map = undefined;
  let hits = undefined;
  let misses = undefined;
  let owner = undefined;
  let clears = undefined;
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
      clears = [];
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

  const addDefaultShips = (board) => {
    const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    for (let i = 0; i < shipLengths.length; i++) {
      let ship = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)();
      ship.setLength(shipLengths[i]);
      if (i < 5) {
        board.addShip(ship, [i, i * 2, 0]);
      } else {
        board.addShip(ship, [i, (i - 5) * 2, 0]);
      }
    }
  };

  const addRandomShips = (board) => {
    const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    let x = undefined;
    let y = undefined;
    let dir = undefined;
    for (let i = 0; i < shipLengths.length; i++) {
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        dir = Math.floor(Math.random() * 2);
      } while (!board.shipPositionAvailable(shipLengths[i], [x, y, dir]));
      let ship = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)();
      ship.setLength(shipLengths[i]);
      board.addShip(ship, [x, y, dir]);
    }
  };

  const shipPositionAvailable = (length, pos) => {
    if (pos[2] === 0) {
      for (let i = 0; i < length; i++) {
        const coord = [pos[0] + i, pos[1]];
        if (!isWithinBoard(coord)) {
          return false;
        } else {
          if (shipInCoordinate(coord) !== null || isNextToShip(coord)) {
            return false;
          }
        }
      }
    } else if (pos[2] === 1) {
      for (let i = 0; i < length; i++) {
        const coord = [pos[0], pos[1] + i];
        if (!isWithinBoard(coord)) {
          return false;
        } else {
          if (shipInCoordinate(coord) !== null || isNextToShip(coord)) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const isNextToShip = (coord) => {
    const p1 = [coord[0] - 1, coord[1] - 1];
    const p2 = [coord[0] - 1, coord[1]];
    const p3 = [coord[0] - 1, coord[1] + 1];
    const p4 = [coord[0], coord[1] - 1];
    const p5 = [coord[0], coord[1] + 1];
    const p6 = [coord[0] + 1, coord[1] - 1];
    const p7 = [coord[0] + 1, coord[1]];
    const p8 = [coord[0] + 1, coord[1] + 1];
    const adjacents = [p1, p2, p3, p4, p5, p6, p7, p8];
    for (let i = 0; i < adjacents.length; i++) {
      const p = adjacents[i];
      if (isWithinBoard(p)) {
        if (shipInCoordinate(p) !== null) {
          return true;
        }
      }
    }
    return false;
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
  const getClears = () => {
    return clears;
  };
  const getOwner = () => {
    return owner;
  };
  const isWithinBoard = (coord) => {
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
    if (
      !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(hits, coord) &&
      !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(misses, coord) &&
      !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(clears, coord)
    ) {
      const ship = shipInCoordinate(coord);
      if (ship !== null) {
        ship.hit();
        hits.push(coord);
        markCornersClear(coord);
        if (ship.isSunk()) {
          markSurroundingsClear(ship);
        }
        return "hit";
      } else {
        misses.push(coord);
        return "miss";
      }
    }
    return "fail";
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
  const markSurroundingsClear = (ship) => {
    const pos = ship.getPosition();
    for (
      let x = pos[0] - 1;
      x <= pos[0] + Math.max(1, Math.abs(pos[2] - 1) * ship.getLength());
      x++
    ) {
      if (x < 0 || x > 9) {
        continue;
      }

      for (
        let y = pos[1] - 1;
        y <= pos[1] + Math.max(1, pos[2] * ship.getLength());
        y++
      ) {
        if (y < 0 || y > 9) {
          continue;
        }
        if (
          !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(misses, [x, y]) &&
          !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(hits, [x, y]) &&
          !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(clears, [x, y]) &&
          !shipInCoordinate([x, y])
        ) {
          clears.push([x, y]);
        }
      }
    }
  };

  const markCornersClear = (hitCoord) => {
    const p1 = [hitCoord[0] - 1, hitCoord[1] - 1];
    const p2 = [hitCoord[0] + 1, hitCoord[1] - 1];
    const p3 = [hitCoord[0] - 1, hitCoord[1] + 1];
    const p4 = [hitCoord[0] + 1, hitCoord[1] + 1];
    const corners = [p1, p2, p3, p4];
    corners.forEach((p) => {
      if (
        isWithinBoard(p) &&
        !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(misses, p) &&
        !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(clears, p)
      ) {
        clears.push(p);
      }
    });
  };

  const reset = () => {
    width = null;
    height = null;
    ships = null;
    map = null;
    hits = null;
    misses = null;
    owner = null;
  };

  return {
    initialize,
    addShip,
    addDefaultShips,
    addRandomShips,
    shipInCoordinate,
    shipPositionAvailable,
    isWithinBoard,
    getSize,
    getShips,
    getMap,
    getHits,
    getMisses,
    getClears,
    getOwner,
    receiveAttack,
    areShipsSunk,
    reset,
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

      // try attacking next to known hits first
      const sides = getHitSides(board);
      for (let i = 0; i < sides.length; i++) {
        const coord = sides[i];
        if (
          !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(board.getHits(), coord) &&
          !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(board.getMisses(), coord) &&
          !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(board.getClears(), coord)
        ) {
          return coord;
        }
      }
      // then randomize attack
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(board.getHits(), [x, y]) ||
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(board.getMisses(), [x, y]) ||
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.includesArray)(board.getClears(), [x, y])
      );
      return [x, y];
    };
    const getHitSides = (board) => {
      let allSides = [];

      const hits = board.getHits();
      for (let i = 0; i < hits.length; i++) {
        const hitCoord = hits[i];
        const p1 = [hitCoord[0] - 1, hitCoord[1]];
        const p2 = [hitCoord[0] + 1, hitCoord[1]];
        const p3 = [hitCoord[0], hitCoord[1] - 1];
        const p4 = [hitCoord[0], hitCoord[1] + 1];
        const sides = [p1, p2, p3, p4];
        sides.forEach((p) => {
          if (board.isWithinBoard(p)) {
            allSides.push(p);
          }
        });
      }
      return allSides;
    };
    return { generateAttack };
  })();
  const reset = () => {
    board = null;
  };
  return { setBoard, getBoard, AI, reset };
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

/***/ "./src/icons/cross_box.svg":
/*!*********************************!*\
  !*** ./src/icons/cross_box.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11685b6917036d3d28b8.svg";

/***/ }),

/***/ "./src/icons/small-square-filled.svg":
/*!*******************************************!*\
  !*** ./src/icons/small-square-filled.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcb3ca3184994ec6da45.svg";

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
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/Game.js");



let game = (0,_Game__WEBPACK_IMPORTED_MODULE_1__.Game)();
game.initialize();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNOekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ1E7O0FBRTlCLFdBQVcsMkNBQUk7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QtMTQvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanMtcHJvamVjdC0xNC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vanMtcHJvamVjdC0xNC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtcHJvamVjdC0xNC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0Ly4vc3JjL0RPTUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vanMtcHJvamVjdC0xNC8uL3NyYy9HYW1lLmpzIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvLi9zcmMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0Ly4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtcHJvamVjdC0xNC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtcHJvamVjdC0xNC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtcHJvamVjdC0xNC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qcy1wcm9qZWN0LTE0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2pzLXByb2plY3QtMTQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaWNvbnMvc3F1YXJlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaWNvbnMvY3Jvc3Muc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9jcm9zc19ib3guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9jaXJjbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9zbWFsbC1zcXVhcmUtZmlsbGVkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMzcsIDE5Nik7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDVweCBhdXRvIDAgYXV0bztcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbWFpbi10aXRsZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDNweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYm9hcmQtdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJvYXJkLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMXB4KTtcXG59XFxuXFxuLmJvYXJkLWdyaWQuYmx1ci1vdXQge1xcbiAgZmlsdGVyOiBibHVyKDFweCk7XFxufVxcbi5ib2FyZC1ncmlkOm5vdCguYmx1ci1vdXQpIHtcXG4gIG91dGxpbmU6IDVweCBzb2xpZCByZ2JhKDI1NSwgNjgsIDAsIDAuNDkzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmJvYXJkLXJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMxcHgpO1xcbiAgaGVpZ2h0OiAzMXB4O1xcbn1cXG5cXG4uYm9hcmQtY2VsbCB7XFxuICB3aWR0aDogMzFweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDIsIDEwMiwgMTAyKTtcXG59XFxuXFxuLmJvYXJkLWdyaWQ6bm90KC5ibHVyLW91dCkgLmJvYXJkLWNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzEsIDEzMywgMTM0LCAwLjQ2Nik7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5pbmRpY2F0b3Itc2hpcCB7XFxuICB3aWR0aDogMzFweDtcXG4gIGhlaWdodDogMzFweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZmlsdGVyOiBpbnZlcnQoNTUlKSBzZXBpYSg5NCUpIHNhdHVyYXRlKDEwMTElKSBodWUtcm90YXRlKDk1ZGVnKVxcbiAgICBicmlnaHRuZXNzKDkyJSkgY29udHJhc3QoOTclKTtcXG59XFxuXFxuLmluZGljYXRvci1oaXQ6bm90KC5pbmRpY2F0b3Itc3Vuaykge1xcbiAgd2lkdGg6IDMxcHg7XFxuICBoZWlnaHQ6IDMxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGZpbHRlcjogaW52ZXJ0KDE0JSkgc2VwaWEoODMlKSBzYXR1cmF0ZSg3NDQ4JSkgaHVlLXJvdGF0ZSg2ZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDExOSUpO1xcbn1cXG4uaW5kaWNhdG9yLXN1bmsge1xcbiAgd2lkdGg6IDMxcHg7XFxuICBoZWlnaHQ6IDMxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGZpbHRlcjogaW52ZXJ0KDE0JSkgc2VwaWEoODMlKSBzYXR1cmF0ZSg3NDQ4JSkgaHVlLXJvdGF0ZSg2ZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDExOSUpO1xcbn1cXG4uaW5kaWNhdG9yLW1pc3Mge1xcbiAgd2lkdGg6IDMxcHg7XFxuICBoZWlnaHQ6IDMxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGZpbHRlcjogaW52ZXJ0KDQ2JSkgc2VwaWEoNyUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDMzOGRlZykgYnJpZ2h0bmVzcyg5MSUpXFxuICAgIGNvbnRyYXN0KDg1JSk7XFxufVxcbi5pbmRpY2F0b3ItY2xlYXIge1xcbiAgd2lkdGg6IDMxcHg7XFxuICBoZWlnaHQ6IDMxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGZpbHRlcjogaW52ZXJ0KDQ2JSkgc2VwaWEoNyUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDMzOGRlZykgYnJpZ2h0bmVzcyg5MSUpXFxuICAgIGNvbnRyYXN0KDg1JSk7XFxufVxcblxcbi53aW4tbGF5ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXRvcDogMTY3cHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICB0ZXh0LXNoYWRvdzogI2ZmZiAwIDAgNXB4LCAjZmZmIDAgMCA1cHgsICNmZmYgMCAwIDVweCwgI2ZmZiAwIDAgNXB4LFxcbiAgICAjZmZmIDAgMCA1cHgsICNmZmYgMCAwIDVweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsMENBQTBDO0VBQzFDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDRDQUE0QztFQUM1Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUEyQztFQUMzQyxxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQjtpQ0FDK0I7QUFDakM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUEwQztFQUMxQyxxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQjttQ0FDaUM7QUFDbkM7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQThDO0VBQzlDLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCO21DQUNpQztBQUNuQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5REFBMkM7RUFDM0MscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0I7aUJBQ2U7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQXdEO0VBQ3hELHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCO2lCQUNlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQjs4QkFDNEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTM3LCAxOTYpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiA1cHggYXV0byAwIGF1dG87XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI21haW4tdGl0bGUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogYmxhY2sgMXB4IDFweCAzcHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyMDIsIDIwMik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJvYXJkLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5ib2FyZC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzFweCk7XFxufVxcblxcbi5ib2FyZC1ncmlkLmJsdXItb3V0IHtcXG4gIGZpbHRlcjogYmx1cigxcHgpO1xcbn1cXG4uYm9hcmQtZ3JpZDpub3QoLmJsdXItb3V0KSB7XFxuICBvdXRsaW5lOiA1cHggc29saWQgcmdiYSgyNTUsIDY4LCAwLCAwLjQ5Myk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5ib2FyZC1yb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMXB4KTtcXG4gIGhlaWdodDogMzFweDtcXG59XFxuXFxuLmJvYXJkLWNlbGwge1xcbiAgd2lkdGg6IDMxcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAyLCAxMDIsIDEwMik7XFxufVxcblxcbi5ib2FyZC1ncmlkOm5vdCguYmx1ci1vdXQpIC5ib2FyZC1jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCAxMzMsIDEzNCwgMC40NjYpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4uaW5kaWNhdG9yLXNoaXAge1xcbiAgd2lkdGg6IDMxcHg7XFxuICBoZWlnaHQ6IDMxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaWNvbnMvc3F1YXJlLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGZpbHRlcjogaW52ZXJ0KDU1JSkgc2VwaWEoOTQlKSBzYXR1cmF0ZSgxMDExJSkgaHVlLXJvdGF0ZSg5NWRlZylcXG4gICAgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDk3JSk7XFxufVxcblxcbi5pbmRpY2F0b3ItaGl0Om5vdCguaW5kaWNhdG9yLXN1bmspIHtcXG4gIHdpZHRoOiAzMXB4O1xcbiAgaGVpZ2h0OiAzMXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ljb25zL2Nyb3NzLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGZpbHRlcjogaW52ZXJ0KDE0JSkgc2VwaWEoODMlKSBzYXR1cmF0ZSg3NDQ4JSkgaHVlLXJvdGF0ZSg2ZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDExOSUpO1xcbn1cXG4uaW5kaWNhdG9yLXN1bmsge1xcbiAgd2lkdGg6IDMxcHg7XFxuICBoZWlnaHQ6IDMxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaWNvbnMvY3Jvc3NfYm94LnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGZpbHRlcjogaW52ZXJ0KDE0JSkgc2VwaWEoODMlKSBzYXR1cmF0ZSg3NDQ4JSkgaHVlLXJvdGF0ZSg2ZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDExOSUpO1xcbn1cXG4uaW5kaWNhdG9yLW1pc3Mge1xcbiAgd2lkdGg6IDMxcHg7XFxuICBoZWlnaHQ6IDMxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaWNvbnMvY2lyY2xlLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGZpbHRlcjogaW52ZXJ0KDQ2JSkgc2VwaWEoNyUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDMzOGRlZykgYnJpZ2h0bmVzcyg5MSUpXFxuICAgIGNvbnRyYXN0KDg1JSk7XFxufVxcbi5pbmRpY2F0b3ItY2xlYXIge1xcbiAgd2lkdGg6IDMxcHg7XFxuICBoZWlnaHQ6IDMxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaWNvbnMvc21hbGwtc3F1YXJlLWZpbGxlZC5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBmaWx0ZXI6IGludmVydCg0NiUpIHNlcGlhKDclKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgzMzhkZWcpIGJyaWdodG5lc3MoOTElKVxcbiAgICBjb250cmFzdCg4NSUpO1xcbn1cXG5cXG4ud2luLWxheWVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi10b3A6IDE2N3B4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgdGV4dC1zaGFkb3c6ICNmZmYgMCAwIDVweCwgI2ZmZiAwIDAgNXB4LCAjZmZmIDAgMCA1cHgsICNmZmYgMCAwIDVweCxcXG4gICAgI2ZmZiAwIDAgNXB4LCAjZmZmIDAgMCA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGluY2x1ZGVzQXJyYXkgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuY29uc3QgaW5pdGlhbGl6ZURPTSA9IChwbGF5ZXIsIGNvbXB1dGVyKSA9PiB7XG4gIGluaXRpYWxpemVHcmlkcyhwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gIHJlc2V0V2luTXNnKCk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplR3JpZHMgPSAocGxheWVyLCBjb21wdXRlcikgPT4ge1xuICBsZXQgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtcGxheWVyIC5ib2FyZC1ncmlkXCIpO1xuICBsZXQgY29tcHV0ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1jb21wdXRlciAuYm9hcmQtZ3JpZFwiKTtcbiAgcGxheWVyR3JpZC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb21wdXRlckdyaWQuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgLy9jcmVhdGUgcm93XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZChcImJvYXJkLXJvd1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIC8vY3JlYXRlIGNlbGxcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtY2VsbFwiKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gICAgcGxheWVyR3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG4gIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgIC8vY3JlYXRlIHJvd1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJib2FyZC1yb3dcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAvL2NyZWF0ZSBjZWxsXG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImJvYXJkLWNlbGxcIik7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICAgIGNvbXB1dGVyR3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59O1xuXG5jb25zdCByZW1vdmVMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmQtY2VsbFwiKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgLy9cbiAgfSk7XG59O1xuXG5jb25zdCByZXNldFdpbk1zZyA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQxR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtY29tcHV0ZXIgLmJvYXJkLWdyaWRcIik7XG4gIGNvbnN0IGJvYXJkMkdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLXBsYXllciAuYm9hcmQtZ3JpZFwiKTtcbiAgYm9hcmQxR3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ci1vdXRcIik7XG4gIGJvYXJkMkdyaWQuY2xhc3NMaXN0LnJlbW92ZShcImJsdXItb3V0XCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndpbi1sYXllclwiKS5mb3JFYWNoKChlKSA9PiBlLnJlbW92ZSgpKTtcbn07XG5cbmNvbnN0IGRyYXdJbmRpY2F0b3JzID0gKHBsYXllciwgY29tcHV0ZXIpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsLWNvbnRlbnRcIikuZm9yRWFjaCgoZSkgPT4gZS5yZW1vdmUoKSk7XG5cbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkLXBsYXllclwiKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmQtY29tcHV0ZXJcIik7XG4gIGNvbnN0IHBsYXllckdyaWQgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWdyaWRcIik7XG4gIGNvbnN0IGNvbXB1dGVyR3JpZCA9IGNvbXB1dGVyQm9hcmQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1ncmlkXCIpO1xuXG4gIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgIGNvbnN0IHJvdyA9IHBsYXllckdyaWQuY2hpbGRyZW5bal07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBsZXQgY2VsbCA9IHJvdy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChwbGF5ZXIuZ2V0Qm9hcmQoKS5zaGlwSW5Db29yZGluYXRlKFtpLCBqXSkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNlbGwtY29udGVudFwiKTtcbiAgICAgICAgaWYgKGluY2x1ZGVzQXJyYXkocGxheWVyLmdldEJvYXJkKCkuZ2V0SGl0cygpLCBbaSwgal0pKSB7XG4gICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaW5kaWNhdG9yLWhpdFwiKTtcbiAgICAgICAgICBpZiAocGxheWVyLmdldEJvYXJkKCkuc2hpcEluQ29vcmRpbmF0ZShbaSwgal0pLmlzU3VuaygpKSB7XG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJpbmRpY2F0b3Itc3Vua1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaW5kaWNhdG9yLXNoaXBcIik7XG4gICAgICAgIH1cbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpbmNsdWRlc0FycmF5KHBsYXllci5nZXRCb2FyZCgpLmdldE1pc3NlcygpLCBbaSwgal0pKSB7XG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY2VsbC1jb250ZW50XCIpO1xuICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImluZGljYXRvci1taXNzXCIpO1xuICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5jbHVkZXNBcnJheShwbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRDbGVhcnMoKSwgW2ksIGpdKSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNlbGwtY29udGVudFwiKTtcbiAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJpbmRpY2F0b3ItY2xlYXJcIik7XG4gICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICBjb25zdCByb3cgPSBjb21wdXRlckdyaWQuY2hpbGRyZW5bal07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBsZXQgY2VsbCA9IHJvdy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjb21wdXRlci5nZXRCb2FyZCgpLnNoaXBJbkNvb3JkaW5hdGUoW2ksIGpdKSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY2VsbC1jb250ZW50XCIpO1xuICAgICAgICBpZiAoaW5jbHVkZXNBcnJheShjb21wdXRlci5nZXRCb2FyZCgpLmdldEhpdHMoKSwgW2ksIGpdKSkge1xuICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImluZGljYXRvci1oaXRcIik7XG4gICAgICAgICAgaWYgKGNvbXB1dGVyLmdldEJvYXJkKCkuc2hpcEluQ29vcmRpbmF0ZShbaSwgal0pLmlzU3VuaygpKSB7XG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJpbmRpY2F0b3Itc3Vua1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpbmNsdWRlc0FycmF5KGNvbXB1dGVyLmdldEJvYXJkKCkuZ2V0TWlzc2VzKCksIFtpLCBqXSkpIHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjZWxsLWNvbnRlbnRcIik7XG4gICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaW5kaWNhdG9yLW1pc3NcIik7XG4gICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmNsdWRlc0FycmF5KGNvbXB1dGVyLmdldEJvYXJkKCkuZ2V0Q2xlYXJzKCksIFtpLCBqXSkpIHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjZWxsLWNvbnRlbnRcIik7XG4gICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaW5kaWNhdG9yLWNsZWFyXCIpO1xuICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGFkZEF0dGFja0xpc3RlbmVycyA9IChib2FyZCwgZXZlbnRIYW5kbGVyKSA9PiB7XG4gIGxldCBib2FyZEVsZW0gPSBudWxsO1xuICBsZXQgZ3JpZEVsZW0gPSBudWxsO1xuXG4gIGlmIChib2FyZC5nZXRPd25lcigpID09IFwicGxheWVyXCIpIHtcbiAgICBib2FyZEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkLXBsYXllclwiKTtcbiAgICBncmlkRWxlbSA9IGJvYXJkRWxlbS5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWdyaWRcIik7XG4gIH0gZWxzZSBpZiAoYm9hcmQuZ2V0T3duZXIoKSA9PSBcImNvbXB1dGVyXCIpIHtcbiAgICBib2FyZEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkLWNvbXB1dGVyXCIpO1xuICAgIGdyaWRFbGVtID0gYm9hcmRFbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtZ3JpZFwiKTtcbiAgfVxuICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICBjb25zdCByb3cgPSBncmlkRWxlbS5jaGlsZHJlbltqXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGxldCBjZWxsID0gcm93LmNoaWxkcmVuW2ldO1xuXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgYm9hcmQsXG4gICAgICAgICAgY29vcmQ6IFtpLCBqXSxcbiAgICAgICAgfTtcbiAgICAgICAgZXZlbnRIYW5kbGVyKFwiYXR0YWNrXCIsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5VHVybiA9ICh0dXJuKSA9PiB7XG4gIGNvbnN0IGJvYXJkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtcGxheWVyIC5ib2FyZC1ncmlkXCIpO1xuICBjb25zdCBib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLWNvbXB1dGVyIC5ib2FyZC1ncmlkXCIpO1xuICBpZiAodHVybiA9PSAwKSB7XG4gICAgYm9hcmQxLmNsYXNzTGlzdC5hZGQoXCJibHVyLW91dFwiKTtcbiAgICBib2FyZDIuY2xhc3NMaXN0LnJlbW92ZShcImJsdXItb3V0XCIpO1xuICB9IGVsc2Uge1xuICAgIGJvYXJkMS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ci1vdXRcIik7XG4gICAgYm9hcmQyLmNsYXNzTGlzdC5hZGQoXCJibHVyLW91dFwiKTtcbiAgfVxufTtcblxuY29uc3QgZHJhd0NvbXB1dGVyV2luID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmQtcGxheWVyXCIpO1xuICBjb25zdCBib2FyZDFHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1jb21wdXRlciAuYm9hcmQtZ3JpZFwiKTtcbiAgY29uc3QgYm9hcmQyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtcGxheWVyIC5ib2FyZC1ncmlkXCIpO1xuICBib2FyZDFHcmlkLmNsYXNzTGlzdC5hZGQoXCJibHVyLW91dFwiKTtcbiAgYm9hcmQyR3JpZC5jbGFzc0xpc3QuYWRkKFwiYmx1ci1vdXRcIik7XG4gIGNvbnN0IHdpbkxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2luTGF5ZXIuY2xhc3NMaXN0LmFkZChcIndpbi1sYXllclwiKTtcbiAgd2luTGF5ZXIuaW5uZXJIVE1MID0gXCJDb21wdXRlciBXaW5zIVwiO1xuICBib2FyZC5hcHBlbmRDaGlsZCh3aW5MYXllcik7XG59O1xuXG5jb25zdCBkcmF3UGxheWVyV2luID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmQtY29tcHV0ZXJcIik7XG4gIGNvbnN0IGJvYXJkMUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLWNvbXB1dGVyIC5ib2FyZC1ncmlkXCIpO1xuICBjb25zdCBib2FyZDJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1wbGF5ZXIgLmJvYXJkLWdyaWRcIik7XG4gIGJvYXJkMUdyaWQuY2xhc3NMaXN0LmFkZChcImJsdXItb3V0XCIpO1xuICBib2FyZDJHcmlkLmNsYXNzTGlzdC5hZGQoXCJibHVyLW91dFwiKTtcbiAgY29uc3Qgd2luTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3aW5MYXllci5jbGFzc0xpc3QuYWRkKFwid2luLWxheWVyXCIpO1xuICB3aW5MYXllci5pbm5lckhUTUwgPSBcIlBsYXllciBXaW5zIVwiO1xuICBib2FyZC5hcHBlbmRDaGlsZCh3aW5MYXllcik7XG59O1xuXG5leHBvcnQge1xuICBkcmF3SW5kaWNhdG9ycyxcbiAgYWRkQXR0YWNrTGlzdGVuZXJzLFxuICBkaXNwbGF5VHVybixcbiAgZHJhd1BsYXllcldpbixcbiAgZHJhd0NvbXB1dGVyV2luLFxuICBpbml0aWFsaXplRE9NLFxufTtcbiIsImltcG9ydCB7XG4gIGFkZEF0dGFja0xpc3RlbmVycyxcbiAgZGlzcGxheVR1cm4sXG4gIGRyYXdJbmRpY2F0b3JzLFxuICBkcmF3UGxheWVyV2luLFxuICBkcmF3Q29tcHV0ZXJXaW4sXG4gIGluaXRpYWxpemVET00sXG59IGZyb20gXCIuL0RPTUhhbmRsZXJcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vR2FtZUJvYXJkXCI7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIGxldCB0dXJuID0gdW5kZWZpbmVkO1xuICBsZXQgcGxheWVyID0gdW5kZWZpbmVkO1xuICBsZXQgY29tcHV0ZXIgPSB1bmRlZmluZWQ7XG4gIGxldCB3aW5uZXIgPSB1bmRlZmluZWQ7XG4gIGxldCBnYW1lUnVubmluZyA9IHVuZGVmaW5lZDtcblxuICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIHBsYXllciA9IFBsYXllcigpO1xuICAgIGNvbXB1dGVyID0gUGxheWVyKCk7XG4gICAgbGV0IGJvYXJkMSA9IEdhbWVCb2FyZCgpO1xuICAgIGxldCBib2FyZDIgPSBHYW1lQm9hcmQoKTtcblxuICAgIGJvYXJkMS5pbml0aWFsaXplKDEwLCAxMCwgXCJwbGF5ZXJcIik7XG4gICAgYm9hcmQyLmluaXRpYWxpemUoMTAsIDEwLCBcImNvbXB1dGVyXCIpO1xuICAgIHBsYXllci5zZXRCb2FyZChib2FyZDEpO1xuICAgIGNvbXB1dGVyLnNldEJvYXJkKGJvYXJkMik7XG5cbiAgICBib2FyZDEuYWRkUmFuZG9tU2hpcHMoYm9hcmQxKTtcbiAgICBib2FyZDIuYWRkUmFuZG9tU2hpcHMoYm9hcmQyKTtcblxuICAgIHR1cm4gPSAwOyAvL3BsYXllcnMgdHVyblxuICAgIGdhbWVSdW5uaW5nID0gdHJ1ZTtcbiAgICBpbml0aWFsaXplRE9NKHBsYXllciwgY29tcHV0ZXIpO1xuICAgIGRyYXdJbmRpY2F0b3JzKHBsYXllciwgY29tcHV0ZXIpO1xuICAgIGFkZEF0dGFja0xpc3RlbmVycyhwbGF5ZXIuZ2V0Qm9hcmQoKSwgZXZlbnRIYW5kbGVyKTtcbiAgICBhZGRBdHRhY2tMaXN0ZW5lcnMoY29tcHV0ZXIuZ2V0Qm9hcmQoKSwgZXZlbnRIYW5kbGVyKTtcbiAgICBkaXNwbGF5VHVybih0dXJuKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VUdXJuID0gKCkgPT4ge1xuICAgIGlmICh0dXJuID09IDApIHtcbiAgICAgIHR1cm4gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0dXJuID0gMDtcbiAgICB9XG4gICAgZGlzcGxheVR1cm4odHVybik7XG4gIH07XG5cbiAgY29uc3QgcGxheVR1cm4gPSAoKSA9PiB7XG4gICAgZGlzcGxheVR1cm4odHVybik7XG4gICAgaWYgKHR1cm4gPT0gMSkge1xuICAgICAgLy8gY29tcHV0ZXIgdHVyblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgYm9hcmQ6IHBsYXllci5nZXRCb2FyZCgpLFxuICAgICAgICAgIGNvb3JkOiBjb21wdXRlci5BSS5nZW5lcmF0ZUF0dGFjayhwbGF5ZXIuZ2V0Qm9hcmQoKSksXG4gICAgICAgIH07XG4gICAgICAgIGV2ZW50SGFuZGxlcihcImF0dGFja1wiLCBkYXRhKTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrRm9yV2lubmVyID0gKCkgPT4ge1xuICAgIGlmIChwbGF5ZXIuZ2V0Qm9hcmQoKS5hcmVTaGlwc1N1bmsoKSkge1xuICAgICAgcmV0dXJuIGNvbXB1dGVyO1xuICAgIH0gZWxzZSBpZiAoY29tcHV0ZXIuZ2V0Qm9hcmQoKS5hcmVTaGlwc1N1bmsoKSkge1xuICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY29uc3Qgc2V0V2lubmVyID0gKG5ld1dpbm5lcikgPT4ge1xuICAgIHdpbm5lciA9IG5ld1dpbm5lcjtcbiAgICBnYW1lUnVubmluZyA9IGZhbHNlO1xuICAgIGlmICh3aW5uZXIgPT0gcGxheWVyKSB7XG4gICAgICBkcmF3UGxheWVyV2luKCk7XG4gICAgfSBlbHNlIGlmICh3aW5uZXIgPT0gY29tcHV0ZXIpIHtcbiAgICAgIGRyYXdDb21wdXRlcldpbigpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XG4gICAgdHVybiA9IG51bGw7XG4gICAgcGxheWVyLnJlc2V0KCk7XG4gICAgcGxheWVyID0gbnVsbDtcbiAgICBjb21wdXRlci5yZXNldCgpO1xuICAgIGNvbXB1dGVyID0gbnVsbDtcbiAgICB3aW5uZXIgPSBudWxsO1xuICAgIGdhbWVSdW5uaW5nID0gbnVsbDtcblxuICAgIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBjb25zdCBldmVudEhhbmRsZXIgPSAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICBpZiAoZXZlbnQgPT09IFwiYXR0YWNrXCIgJiYgZ2FtZVJ1bm5pbmcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKGRhdGEuYm9hcmQuZ2V0T3duZXIoKSA9PT0gXCJwbGF5ZXJcIiAmJiB0dXJuID09PSAxKSB8fFxuICAgICAgICAoZGF0YS5ib2FyZC5nZXRPd25lcigpID09PSBcImNvbXB1dGVyXCIgJiYgdHVybiA9PT0gMClcbiAgICAgICkge1xuICAgICAgICBjb25zdCBhdHRhY2sgPSBkYXRhLmJvYXJkLnJlY2VpdmVBdHRhY2soZGF0YS5jb29yZCk7XG4gICAgICAgIGlmIChhdHRhY2sgIT09IFwiZmFpbFwiKSB7XG4gICAgICAgICAgY29uc3Qgd2lubmVyID0gY2hlY2tGb3JXaW5uZXIoKTtcbiAgICAgICAgICBpZiAod2lubmVyID09IG51bGwpIHtcbiAgICAgICAgICAgIGRyYXdJbmRpY2F0b3JzKHBsYXllciwgY29tcHV0ZXIpO1xuICAgICAgICAgICAgaWYgKGF0dGFjayA9PSBcIm1pc3NcIikge1xuICAgICAgICAgICAgICBjaGFuZ2VUdXJuKCk7XG4gICAgICAgICAgICAgIHBsYXlUdXJuKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwbGF5VHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkcmF3SW5kaWNhdG9ycyhwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICAgICAgICAgIHNldFdpbm5lcih3aW5uZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGF5QWdhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXktYWdhaW5cIik7XG4gIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0R2FtZSgpO1xuICB9KTtcbiAgcmV0dXJuIHsgaW5pdGlhbGl6ZSwgZXZlbnRIYW5kbGVyLCBzZXRXaW5uZXIsIHJlc2V0R2FtZSB9O1xufTtcblxuZXhwb3J0IHsgR2FtZSB9O1xuIiwiaW1wb3J0IHsgaW5jbHVkZXNBcnJheSB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcblxuY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuICBsZXQgd2lkdGggPSB1bmRlZmluZWQ7XG4gIGxldCBoZWlnaHQgPSB1bmRlZmluZWQ7XG4gIGxldCBzaGlwcyA9IHVuZGVmaW5lZDtcbiAgbGV0IG1hcCA9IHVuZGVmaW5lZDtcbiAgbGV0IGhpdHMgPSB1bmRlZmluZWQ7XG4gIGxldCBtaXNzZXMgPSB1bmRlZmluZWQ7XG4gIGxldCBvd25lciA9IHVuZGVmaW5lZDtcbiAgbGV0IGNsZWFycyA9IHVuZGVmaW5lZDtcbiAgY29uc3QgaW5pdGlhbGl6ZSA9ICh3LCBoLCBuZXdPd25lcikgPT4ge1xuICAgIGlmICh3ID49IDEgJiYgaCA+PSAxKSB7XG4gICAgICB3aWR0aCA9IHc7XG4gICAgICBoZWlnaHQgPSBoO1xuICAgICAgbWFwID0gQXJyYXkod2lkdGgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWFwW2ldID0gQXJyYXkoaGVpZ2h0KS5maWxsKG51bGwpO1xuICAgICAgfVxuICAgICAgaGl0cyA9IFtdO1xuICAgICAgbWlzc2VzID0gW107XG4gICAgICBzaGlwcyA9IFtdO1xuICAgICAgY2xlYXJzID0gW107XG4gICAgICBvd25lciA9IG5ld093bmVyO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRTaGlwID0gKHNoaXAsIHBvcykgPT4ge1xuICAgIC8vY2hlY2sgaWYgdGhlcmUgaXMgcm9vbSBmb3IgZnVsbCBzaGlwXG5cbiAgICBpZiAoc2hpcFBvc2l0aW9uQXZhaWxhYmxlKHNoaXAuZ2V0TGVuZ3RoKCksIHBvcykpIHtcbiAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICBzaGlwLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICBpZiAocG9zWzJdID09PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgbWFwW3Bvc1swXSArIGldW3Bvc1sxXV0gPSBzaGlwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBvc1syXSA9PT0gMSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgIG1hcFtwb3NbMF1dW3Bvc1sxXSArIGldID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGREZWZhdWx0U2hpcHMgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs0LCAzLCAzLCAyLCAyLCAyLCAxLCAxLCAxLCAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hpcCA9IFNoaXAoKTtcbiAgICAgIHNoaXAuc2V0TGVuZ3RoKHNoaXBMZW5ndGhzW2ldKTtcbiAgICAgIGlmIChpIDwgNSkge1xuICAgICAgICBib2FyZC5hZGRTaGlwKHNoaXAsIFtpLCBpICogMiwgMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9hcmQuYWRkU2hpcChzaGlwLCBbaSwgKGkgLSA1KSAqIDIsIDBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkUmFuZG9tU2hpcHMgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs0LCAzLCAzLCAyLCAyLCAyLCAxLCAxLCAxLCAxXTtcbiAgICBsZXQgeCA9IHVuZGVmaW5lZDtcbiAgICBsZXQgeSA9IHVuZGVmaW5lZDtcbiAgICBsZXQgZGlyID0gdW5kZWZpbmVkO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvIHtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgZGlyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICB9IHdoaWxlICghYm9hcmQuc2hpcFBvc2l0aW9uQXZhaWxhYmxlKHNoaXBMZW5ndGhzW2ldLCBbeCwgeSwgZGlyXSkpO1xuICAgICAgbGV0IHNoaXAgPSBTaGlwKCk7XG4gICAgICBzaGlwLnNldExlbmd0aChzaGlwTGVuZ3Roc1tpXSk7XG4gICAgICBib2FyZC5hZGRTaGlwKHNoaXAsIFt4LCB5LCBkaXJdKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2hpcFBvc2l0aW9uQXZhaWxhYmxlID0gKGxlbmd0aCwgcG9zKSA9PiB7XG4gICAgaWYgKHBvc1syXSA9PT0gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFtwb3NbMF0gKyBpLCBwb3NbMV1dO1xuICAgICAgICBpZiAoIWlzV2l0aGluQm9hcmQoY29vcmQpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzaGlwSW5Db29yZGluYXRlKGNvb3JkKSAhPT0gbnVsbCB8fCBpc05leHRUb1NoaXAoY29vcmQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwb3NbMl0gPT09IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbcG9zWzBdLCBwb3NbMV0gKyBpXTtcbiAgICAgICAgaWYgKCFpc1dpdGhpbkJvYXJkKGNvb3JkKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc2hpcEluQ29vcmRpbmF0ZShjb29yZCkgIT09IG51bGwgfHwgaXNOZXh0VG9TaGlwKGNvb3JkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBpc05leHRUb1NoaXAgPSAoY29vcmQpID0+IHtcbiAgICBjb25zdCBwMSA9IFtjb29yZFswXSAtIDEsIGNvb3JkWzFdIC0gMV07XG4gICAgY29uc3QgcDIgPSBbY29vcmRbMF0gLSAxLCBjb29yZFsxXV07XG4gICAgY29uc3QgcDMgPSBbY29vcmRbMF0gLSAxLCBjb29yZFsxXSArIDFdO1xuICAgIGNvbnN0IHA0ID0gW2Nvb3JkWzBdLCBjb29yZFsxXSAtIDFdO1xuICAgIGNvbnN0IHA1ID0gW2Nvb3JkWzBdLCBjb29yZFsxXSArIDFdO1xuICAgIGNvbnN0IHA2ID0gW2Nvb3JkWzBdICsgMSwgY29vcmRbMV0gLSAxXTtcbiAgICBjb25zdCBwNyA9IFtjb29yZFswXSArIDEsIGNvb3JkWzFdXTtcbiAgICBjb25zdCBwOCA9IFtjb29yZFswXSArIDEsIGNvb3JkWzFdICsgMV07XG4gICAgY29uc3QgYWRqYWNlbnRzID0gW3AxLCBwMiwgcDMsIHA0LCBwNSwgcDYsIHA3LCBwOF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGphY2VudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHAgPSBhZGphY2VudHNbaV07XG4gICAgICBpZiAoaXNXaXRoaW5Cb2FyZChwKSkge1xuICAgICAgICBpZiAoc2hpcEluQ29vcmRpbmF0ZShwKSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBzaGlwSW5Db29yZGluYXRlID0gKGNvb3JkKSA9PiB7XG4gICAgcmV0dXJuIG1hcFtjb29yZFswXV1bY29vcmRbMV1dO1xuICB9O1xuXG4gIGNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFt3aWR0aCwgaGVpZ2h0XTtcbiAgfTtcbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBzO1xuICB9O1xuICBjb25zdCBnZXRNYXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFwQ29weSA9IG1hcDtcbiAgICByZXR1cm4gbWFwQ29weTtcbiAgfTtcbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gaGl0cztcbiAgfTtcbiAgY29uc3QgZ2V0TWlzc2VzID0gKCkgPT4ge1xuICAgIHJldHVybiBtaXNzZXM7XG4gIH07XG4gIGNvbnN0IGdldENsZWFycyA9ICgpID0+IHtcbiAgICByZXR1cm4gY2xlYXJzO1xuICB9O1xuICBjb25zdCBnZXRPd25lciA9ICgpID0+IHtcbiAgICByZXR1cm4gb3duZXI7XG4gIH07XG4gIGNvbnN0IGlzV2l0aGluQm9hcmQgPSAoY29vcmQpID0+IHtcbiAgICBpZiAoXG4gICAgICBjb29yZFswXSA+PSAwICYmXG4gICAgICBjb29yZFswXSA8IHdpZHRoICYmXG4gICAgICBjb29yZFsxXSA+PSAwICYmXG4gICAgICBjb29yZFsxXSA8IGhlaWdodFxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZCkgPT4ge1xuICAgIGlmIChcbiAgICAgICFpbmNsdWRlc0FycmF5KGhpdHMsIGNvb3JkKSAmJlxuICAgICAgIWluY2x1ZGVzQXJyYXkobWlzc2VzLCBjb29yZCkgJiZcbiAgICAgICFpbmNsdWRlc0FycmF5KGNsZWFycywgY29vcmQpXG4gICAgKSB7XG4gICAgICBjb25zdCBzaGlwID0gc2hpcEluQ29vcmRpbmF0ZShjb29yZCk7XG4gICAgICBpZiAoc2hpcCAhPT0gbnVsbCkge1xuICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICBoaXRzLnB1c2goY29vcmQpO1xuICAgICAgICBtYXJrQ29ybmVyc0NsZWFyKGNvb3JkKTtcbiAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICBtYXJrU3Vycm91bmRpbmdzQ2xlYXIoc2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaXNzZXMucHVzaChjb29yZCk7XG4gICAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiZmFpbFwiO1xuICB9O1xuICBjb25zdCBhcmVTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzW2ldO1xuICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGNvbnN0IG1hcmtTdXJyb3VuZGluZ3NDbGVhciA9IChzaGlwKSA9PiB7XG4gICAgY29uc3QgcG9zID0gc2hpcC5nZXRQb3NpdGlvbigpO1xuICAgIGZvciAoXG4gICAgICBsZXQgeCA9IHBvc1swXSAtIDE7XG4gICAgICB4IDw9IHBvc1swXSArIE1hdGgubWF4KDEsIE1hdGguYWJzKHBvc1syXSAtIDEpICogc2hpcC5nZXRMZW5ndGgoKSk7XG4gICAgICB4KytcbiAgICApIHtcbiAgICAgIGlmICh4IDwgMCB8fCB4ID4gOSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChcbiAgICAgICAgbGV0IHkgPSBwb3NbMV0gLSAxO1xuICAgICAgICB5IDw9IHBvc1sxXSArIE1hdGgubWF4KDEsIHBvc1syXSAqIHNoaXAuZ2V0TGVuZ3RoKCkpO1xuICAgICAgICB5KytcbiAgICAgICkge1xuICAgICAgICBpZiAoeSA8IDAgfHwgeSA+IDkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWluY2x1ZGVzQXJyYXkobWlzc2VzLCBbeCwgeV0pICYmXG4gICAgICAgICAgIWluY2x1ZGVzQXJyYXkoaGl0cywgW3gsIHldKSAmJlxuICAgICAgICAgICFpbmNsdWRlc0FycmF5KGNsZWFycywgW3gsIHldKSAmJlxuICAgICAgICAgICFzaGlwSW5Db29yZGluYXRlKFt4LCB5XSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY2xlYXJzLnB1c2goW3gsIHldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBtYXJrQ29ybmVyc0NsZWFyID0gKGhpdENvb3JkKSA9PiB7XG4gICAgY29uc3QgcDEgPSBbaGl0Q29vcmRbMF0gLSAxLCBoaXRDb29yZFsxXSAtIDFdO1xuICAgIGNvbnN0IHAyID0gW2hpdENvb3JkWzBdICsgMSwgaGl0Q29vcmRbMV0gLSAxXTtcbiAgICBjb25zdCBwMyA9IFtoaXRDb29yZFswXSAtIDEsIGhpdENvb3JkWzFdICsgMV07XG4gICAgY29uc3QgcDQgPSBbaGl0Q29vcmRbMF0gKyAxLCBoaXRDb29yZFsxXSArIDFdO1xuICAgIGNvbnN0IGNvcm5lcnMgPSBbcDEsIHAyLCBwMywgcDRdO1xuICAgIGNvcm5lcnMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBpc1dpdGhpbkJvYXJkKHApICYmXG4gICAgICAgICFpbmNsdWRlc0FycmF5KG1pc3NlcywgcCkgJiZcbiAgICAgICAgIWluY2x1ZGVzQXJyYXkoY2xlYXJzLCBwKVxuICAgICAgKSB7XG4gICAgICAgIGNsZWFycy5wdXNoKHApO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIHdpZHRoID0gbnVsbDtcbiAgICBoZWlnaHQgPSBudWxsO1xuICAgIHNoaXBzID0gbnVsbDtcbiAgICBtYXAgPSBudWxsO1xuICAgIGhpdHMgPSBudWxsO1xuICAgIG1pc3NlcyA9IG51bGw7XG4gICAgb3duZXIgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdGlhbGl6ZSxcbiAgICBhZGRTaGlwLFxuICAgIGFkZERlZmF1bHRTaGlwcyxcbiAgICBhZGRSYW5kb21TaGlwcyxcbiAgICBzaGlwSW5Db29yZGluYXRlLFxuICAgIHNoaXBQb3NpdGlvbkF2YWlsYWJsZSxcbiAgICBpc1dpdGhpbkJvYXJkLFxuICAgIGdldFNpemUsXG4gICAgZ2V0U2hpcHMsXG4gICAgZ2V0TWFwLFxuICAgIGdldEhpdHMsXG4gICAgZ2V0TWlzc2VzLFxuICAgIGdldENsZWFycyxcbiAgICBnZXRPd25lcixcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFyZVNoaXBzU3VuayxcbiAgICByZXNldCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVCb2FyZCB9O1xuIiwiaW1wb3J0IHsgaW5jbHVkZXNBcnJheSB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gIGxldCBib2FyZCA9IG51bGw7XG4gIGNvbnN0IHNldEJvYXJkID0gKG5ld0JvYXJkKSA9PiB7XG4gICAgYm9hcmQgPSBuZXdCb2FyZDtcbiAgfTtcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuICBjb25zdCBBSSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZ2VuZXJhdGVBdHRhY2sgPSAoYm9hcmQpID0+IHtcbiAgICAgIGNvbnN0IGJvYXJkU2l6ZSA9IGJvYXJkLmdldFNpemUoKTtcbiAgICAgIGxldCB4ID0gdW5kZWZpbmVkO1xuICAgICAgbGV0IHkgPSB1bmRlZmluZWQ7XG5cbiAgICAgIC8vIHRyeSBhdHRhY2tpbmcgbmV4dCB0byBrbm93biBoaXRzIGZpcnN0XG4gICAgICBjb25zdCBzaWRlcyA9IGdldEhpdFNpZGVzKGJvYXJkKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBzaWRlc1tpXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFpbmNsdWRlc0FycmF5KGJvYXJkLmdldEhpdHMoKSwgY29vcmQpICYmXG4gICAgICAgICAgIWluY2x1ZGVzQXJyYXkoYm9hcmQuZ2V0TWlzc2VzKCksIGNvb3JkKSAmJlxuICAgICAgICAgICFpbmNsdWRlc0FycmF5KGJvYXJkLmdldENsZWFycygpLCBjb29yZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGNvb3JkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0aGVuIHJhbmRvbWl6ZSBhdHRhY2tcbiAgICAgIGRvIHtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIH0gd2hpbGUgKFxuICAgICAgICBpbmNsdWRlc0FycmF5KGJvYXJkLmdldEhpdHMoKSwgW3gsIHldKSB8fFxuICAgICAgICBpbmNsdWRlc0FycmF5KGJvYXJkLmdldE1pc3NlcygpLCBbeCwgeV0pIHx8XG4gICAgICAgIGluY2x1ZGVzQXJyYXkoYm9hcmQuZ2V0Q2xlYXJzKCksIFt4LCB5XSlcbiAgICAgICk7XG4gICAgICByZXR1cm4gW3gsIHldO1xuICAgIH07XG4gICAgY29uc3QgZ2V0SGl0U2lkZXMgPSAoYm9hcmQpID0+IHtcbiAgICAgIGxldCBhbGxTaWRlcyA9IFtdO1xuXG4gICAgICBjb25zdCBoaXRzID0gYm9hcmQuZ2V0SGl0cygpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGhpdENvb3JkID0gaGl0c1tpXTtcbiAgICAgICAgY29uc3QgcDEgPSBbaGl0Q29vcmRbMF0gLSAxLCBoaXRDb29yZFsxXV07XG4gICAgICAgIGNvbnN0IHAyID0gW2hpdENvb3JkWzBdICsgMSwgaGl0Q29vcmRbMV1dO1xuICAgICAgICBjb25zdCBwMyA9IFtoaXRDb29yZFswXSwgaGl0Q29vcmRbMV0gLSAxXTtcbiAgICAgICAgY29uc3QgcDQgPSBbaGl0Q29vcmRbMF0sIGhpdENvb3JkWzFdICsgMV07XG4gICAgICAgIGNvbnN0IHNpZGVzID0gW3AxLCBwMiwgcDMsIHA0XTtcbiAgICAgICAgc2lkZXMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgIGlmIChib2FyZC5pc1dpdGhpbkJvYXJkKHApKSB7XG4gICAgICAgICAgICBhbGxTaWRlcy5wdXNoKHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsU2lkZXM7XG4gICAgfTtcbiAgICByZXR1cm4geyBnZW5lcmF0ZUF0dGFjayB9O1xuICB9KSgpO1xuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBib2FyZCA9IG51bGw7XG4gIH07XG4gIHJldHVybiB7IHNldEJvYXJkLCBnZXRCb2FyZCwgQUksIHJlc2V0IH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNvbnN0IFNoaXAgPSAoKSA9PiB7XG4gIGxldCBsZW5ndGggPSB1bmRlZmluZWQ7XG4gIGxldCBwb3NpdGlvbiA9IHVuZGVmaW5lZDsgLy8geCwgeSwgZGlyZWN0aW9uezA6IGhvcml6b250YWwsIDE6IHZlcnRpY2FsfVxuICBsZXQgaGl0cyA9IDA7XG4gIGNvbnN0IHNldExlbmd0aCA9IChsZW4pID0+IHtcbiAgICBpZiAobGVuID49IDEgJiYgbGVuIDw9IDQpIHtcbiAgICAgIGxlbmd0aCA9IGxlbjtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNldFBvc2l0aW9uID0gKHBvcykgPT4ge1xuICAgIHBvc2l0aW9uID0gcG9zO1xuICB9O1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfTtcbiAgY29uc3QgZ2V0UG9zaXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuICBjb25zdCBnZXRIaXRzID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRzO1xuICB9O1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cysrO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGhpdHMgPj0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBzZXRMZW5ndGgsXG4gICAgc2V0UG9zaXRpb24sXG4gICAgZ2V0TGVuZ3RoLFxuICAgIGdldFBvc2l0aW9uLFxuICAgIGdldEhpdHMsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsImNvbnN0IGluY2x1ZGVzQXJyYXkgPSAoZGF0YSwgYXJyKSA9PiB7XG4gIHJldHVybiBkYXRhLnNvbWUoXG4gICAgKGUpID0+IEFycmF5LmlzQXJyYXkoZSkgJiYgZS5ldmVyeSgobywgaSkgPT4gT2JqZWN0LmlzKGFycltpXSwgbykpXG4gICk7XG59O1xuXG5leHBvcnQgeyBpbmNsdWRlc0FycmF5IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vR2FtZVwiO1xuXG5sZXQgZ2FtZSA9IEdhbWUoKTtcbmdhbWUuaW5pdGlhbGl6ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9