/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/CircularAir-Light.woff2 */ "./src/fonts/CircularAir-Light.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100vh;\n  width: 100vw;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  font-weight: 500;\n}\n\np {\n  margin: 0;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n@font-face {\n  font-family: \"circular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n}\n.container {\n  display: grid;\n  grid-template: [row1-start] \"header header header\" 60px [row1-end] [row2-start] \"nav main main\" 1fr [row2-end]/300px 1fr 1fr;\n  height: 100%;\n  font-family: \"circular\";\n}\n.container-header {\n  grid-area: header;\n  background-color: hsl(214deg, 79%, 13%);\n  z-index: 0;\n}\n.container-nav {\n  grid-area: nav;\n  background-color: hsl(0deg, 0%, 97%);\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n  padding: 20px 15px 0 50px;\n}\n.container-nav_project {\n  display: flex;\n  justify-content: space-between;\n}\n.container-nav_addProject {\n  font-size: 1rem;\n  height: min-content;\n}\n.container-nav_addProject::before {\n  content: \"+ \";\n}\n.container-nav-projectForm {\n  display: none;\n  flex-flow: column;\n}\n.container-nav-projectForm_title {\n  border: 2px solid hsl(0deg, 0%, 80%);\n  border-radius: 12px;\n  outline: none;\n  padding: 5px;\n  font-size: 1rem;\n  font-family: \"circular\";\n}\n.container-nav-projectForm-buttons {\n  display: flex;\n  justify-content: end;\n  margin-top: 5px;\n  gap: 10px;\n}\n.container-nav-projectForm-buttons_cancel, .container-nav-projectForm-buttons_submit {\n  background-color: white;\n  border: none;\n  box-shadow: none;\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-family: \"circular\";\n}\n.container-nav-projectForm-buttons_cancel {\n  background-color: hsl(0deg, 0%, 80%);\n}\n.container-nav-projectForm-buttons_submit {\n  background-color: hsl(0deg, 100%, 70%);\n}\n.container-main {\n  grid-area: main;\n  margin: 10px auto;\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.container-main_addTask {\n  font-size: 1.5rem;\n  height: min-content;\n}\n.container-main_addTask::before {\n  content: \"+ \";\n}\n.container-main-task {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 0 10px 0;\n  border: 0px solid hsl(0deg, 0%, 80%);\n  border-width: 0px 0px 1px 0px;\n}\n.container-main-task_checkbox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: 2px solid hsl(214deg, 79%, 13%);\n  background-color: hsla(213deg, 79%, 13%, 0.5);\n}\n.container-main-task_checkbox:hover img {\n  opacity: 50%;\n}\n.container-main-task-info_title {\n  font-size: 1.5rem;\n}\n.container-main-task-info_body {\n  font-size: 1rem;\n}\n.container-main-taskForm {\n  display: none;\n}\n.container-main-taskForm-inputs {\n  display: flex;\n  flex-direction: column;\n  border: 2px solid hsl(0deg, 0%, 80%);\n  border-radius: 12px;\n}\n.container-main-taskForm-inputs_title, .container-main-taskForm-inputs_description {\n  border: none;\n  outline: none;\n  border-radius: 12px;\n  padding: 5px;\n  font-size: 1rem;\n  font-family: \"circular\";\n}\n.container-main-taskForm-inputs_title {\n  font-size: 1.2rem;\n}\n.container-main-taskForm-inputs_description {\n  resize: none;\n  font-family: \"circular\";\n}\n.container-main-taskForm-buttons {\n  display: flex;\n  justify-content: end;\n  margin-top: 5px;\n  gap: 10px;\n}\n.container-main-taskForm-buttons_cancel, .container-main-taskForm-buttons_submit {\n  background-color: white;\n  border: none;\n  box-shadow: none;\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-family: \"circular\";\n}\n.container-main-taskForm-buttons_cancel {\n  background-color: hsl(0deg, 0%, 80%);\n}\n.container-main-taskForm-buttons_submit {\n  background-color: hsl(0deg, 100%, 70%);\n}", "",{"version":3,"sources":["webpack://./src/style_modules/_settings-reset.scss","webpack://./src/index.scss","webpack://./src/style_modules/_fonts.scss","webpack://./src/style_modules/_variables.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;ACCJ;;ADEA;;;EAGI,mBAAA;ACCJ;;ADEA;EACI,SAAA;EACA,UAAA;EACA,YAAA;ACCJ;;ADEA;;;EAGI,SAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,SAAA;ACCJ;;ADEA;;;EAGI,qBAAA;ACCJ;;ADEA;;EAEI,gBAAA;EACA,UAAA;EACA,SAAA;ACCJ;;ACzCA;EACI,uBAAA;EACA,4DAAA;AD4CJ;AA5CA;EACI,aAAA;EACA,4HACI;EACJ,YAAA;EACA,uBEFU;AF+Cd;AA3CI;EACI,iBAAA;EACA,uCEXK;EFYL,UAAA;AA6CR;AA1CI;EACI,cAAA;EACA,oCEfK;EFiBL,aAAA;EACA,iBAAA;EACA,SAAA;EACA,yBAAA;AA2CR;AAzCQ;EACI,aAAA;EACA,8BAAA;AA2CZ;AAxCQ;EACI,eEtBC;EFuBD,mBAAA;AA0CZ;AAxCY;EACI,aAAA;AA0ChB;AAtCQ;EACI,aAAA;EACA,iBAAA;AAwCZ;AAtCY;EACI,oCAAA;EACA,mBEnCA;EFoCA,aAAA;EACA,YAAA;EACA,eEvCH;EFwCG,uBE3CF;AFmFd;AArCY;EACI,aAAA;EACA,oBAAA;EACA,eAAA;EACA,SAAA;AAuChB;AArCgB;EAEI,uBAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBEtDJ;EFuDI,uBE3DN;AFiGd;AAnCgB;EACI,oCEjEF;AFsGlB;AAlCgB;EACI,sCEpER;AFwGZ;AA9BI;EACI,eAAA;EACA,iBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAgCR;AA7BQ;EACI,iBElFD;EFmFC,mBAAA;AA+BZ;AA7BY;EACI,aAAA;AA+BhB;AA3BQ;EACI,aAAA;EACA,mBAAA;EACA,SAAA;EACA,sBAAA;EACA,oCAAA;EACA,6BAAA;AA6BZ;AA3BY;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,uCAAA;EACA,6CEhHG;AF6InB;AA1BoB;EACI,YAAA;AA4BxB;AAtBgB;EACI,iBEtHT;AF8IX;AArBgB;EACI,eExHP;AF+Ib;AAhBQ;EACI,aAAA;AAkBZ;AAhBY;EACI,aAAA;EACA,sBAAA;EACA,oCAAA;EACA,mBErIA;AFuJhB;AAhBgB;EAEI,YAAA;EACA,aAAA;EACA,mBE3IJ;EF4II,YAAA;EACA,eE9IP;EF+IO,uBElJN;AFmKd;AAdgB;EACI,iBEpJN;AFoKd;AAbgB;EACI,YAAA;EACA,uBE3JN;AF0Kd;AAXY;EACI,aAAA;EACA,oBAAA;EACA,eAAA;EACA,SAAA;AAahB;AAXgB;EAEI,uBAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBEvKJ;EFwKI,uBE5KN;AFwLd;AATgB;EACI,oCElLF;AF6LlB;AARgB;EACI,sCErLR;AF+LZ","sourcesContent":["html {\r\n    box-sizing: border-box;\r\n    font-size: 100%;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n    margin: 0;\r\n    font-weight: 500;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n    text-decoration: none;\r\n}\r\n\r\nul,\r\nli {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}","@use 'style_modules' as *;\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template:\r\n        [row1-start] 'header header header' 60px [row1-end] [row2-start] 'nav main main' 1fr [row2-end] / 300px 1fr 1fr;\r\n    height: 100%;\r\n    font-family: $font-family;\r\n\r\n    &-header {\r\n        grid-area: header;\r\n        background-color: $blue-color;\r\n        z-index: 0;\r\n    }\r\n\r\n    &-nav {\r\n        grid-area: nav;\r\n        background-color: $grey-color;\r\n\r\n        display: flex;\r\n        flex-flow: column;\r\n        gap: 10px;\r\n        padding: 20px 15px 0 50px;\r\n\r\n        &_project {\r\n            display: flex;\r\n            justify-content: space-between;\r\n        }\r\n\r\n        &_addProject {\r\n            font-size: $font-small;\r\n            height: min-content;\r\n\r\n            &::before {\r\n                content: '+ ';\r\n            }\r\n        }\r\n\r\n        &-projectForm {\r\n            display: none;\r\n            flex-flow: column;\r\n\r\n            &_title {\r\n                border: 2px solid $grey-dark-color;\r\n                border-radius: $border-radius;\r\n                outline: none;\r\n                padding: 5px;\r\n                font-size: $font-small;\r\n                font-family: $font-family;\r\n            }\r\n\r\n            &-buttons {\r\n                display: flex;\r\n                justify-content: end;\r\n                margin-top: 5px;\r\n                gap: 10px;\r\n\r\n                &_cancel,\r\n                &_submit {\r\n                    background-color: white;\r\n                    border: none;\r\n                    box-shadow: none;\r\n                    padding: 5px 12px;\r\n                    border-radius: $border-radius;\r\n                    font-family: $font-family;\r\n                }\r\n\r\n                &_cancel {\r\n                    background-color: $grey-dark-color;\r\n                }\r\n\r\n                &_submit {\r\n                    background-color: $red-color;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    &-main {\r\n        grid-area: main;\r\n        margin: 10px auto;\r\n        width: 50vw;\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 10px;\r\n\r\n\r\n        &_addTask {\r\n            font-size: $font-big;\r\n            height: min-content;\r\n\r\n            &::before {\r\n                content: '+ ';\r\n            }\r\n        }\r\n\r\n        &-task {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 10px;\r\n            padding: 10px 0 10px 0;\r\n            border: 0px solid $grey-dark-color;\r\n            border-width: 0px 0px 1px 0px;\r\n\r\n            &_checkbox {\r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n                flex: 0 0 auto;\r\n                width: 25px;\r\n                height: 25px;\r\n                border-radius: 50%;\r\n                border: 2px solid $blue-color;\r\n                background-color: $blue-color-trans;\r\n\r\n                &:hover {\r\n                    img {\r\n                        opacity: 50%;\r\n                    }\r\n                }\r\n            }\r\n\r\n            &-info {\r\n                &_title {\r\n                    font-size: $font-big;\r\n                }\r\n\r\n                &_body {\r\n                    font-size: $font-small;\r\n                }\r\n            }\r\n\r\n            &--done {}\r\n        }\r\n\r\n        &-taskForm {\r\n            display: none;\r\n\r\n            &-inputs {\r\n                display: flex;\r\n                flex-direction: column;\r\n                border: 2px solid $grey-dark-color;\r\n                border-radius: $border-radius;\r\n\r\n                &_title,\r\n                &_description {\r\n                    border: none;\r\n                    outline: none;\r\n                    border-radius: $border-radius;\r\n                    padding: 5px;\r\n                    font-size: $font-small;\r\n                    font-family: $font-family;\r\n                }\r\n\r\n                &_title {\r\n                    font-size: $font-medium;\r\n                }\r\n\r\n                &_description {\r\n                    resize: none;\r\n                    font-family: $font-family;\r\n                }\r\n            }\r\n\r\n            &-buttons {\r\n                display: flex;\r\n                justify-content: end;\r\n                margin-top: 5px;\r\n                gap: 10px;\r\n\r\n                &_cancel,\r\n                &_submit {\r\n                    background-color: white;\r\n                    border: none;\r\n                    box-shadow: none;\r\n                    padding: 5px 12px;\r\n                    border-radius: $border-radius;\r\n                    font-family: $font-family;\r\n                }\r\n\r\n                &_cancel {\r\n                    background-color: $grey-dark-color;\r\n                }\r\n\r\n                &_submit {\r\n                    background-color: $red-color;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}","@font-face {\r\n    font-family: 'circular';\r\n    src: url(./fonts/CircularAir-Light.woff2) format('woff2');\r\n}","$blue-color: hsl(214, 79%, 13%);\r\n$blue-color-trans: hsla(213, 79%, 13%, 0.5);\r\n$grey-color: hsl(0, 0%, 97%);\r\n$grey-dark-color: hsl(0, 0%, 80%);\r\n$red-color: hsl(0, 100%, 70%);\r\n$font-family: 'circular';\r\n$font-big: 1.5rem;\r\n$font-medium: 1.2rem;\r\n$font-small: 1rem;\r\n$border-radius: 12px;"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/fonts/CircularAir-Light.woff2":
/*!*******************************************!*\
  !*** ./src/fonts/CircularAir-Light.woff2 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cd0ed25a4f8f4b3ac54.woff2";

/***/ }),

/***/ "./src/images/icons/check.svg":
/*!************************************!*\
  !*** ./src/images/icons/check.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf00c125cd6011d82b39.svg";

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
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _images_icons_check_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icons/check.svg */ "./src/images/icons/check.svg");



const main = document.querySelector('.container-main')
const addTaskButton = document.querySelector('.container-main_addTask')
const taskForm = document.querySelector('.container-main-taskForm')
const submitTaskButton = document.querySelector('.container-main-taskForm-buttons_submit')
const closeTaskButton = document.querySelector('.container-main-taskForm-buttons_cancel')
const taskTitle = document.querySelector('.container-main-taskForm-inputs_title')
const taskDescr = document.querySelector('.container-main-taskForm-inputs_description')
const task = document.querySelector('.container-main-task')

const nav = document.querySelector('.container-nav')
const addProjectButton = document.querySelector('.container-nav_addProject')
const projectForm = document.querySelector('.container-nav-projectForm')
const submitProjectButton = document.querySelector('.container-nav-projectForm-buttons_submit')
const closeProjectButton = document.querySelector('.container-nav-projectForm-buttons_cancel')
const projectTitle = document.querySelector('.container-nav-projectForm_title')


const TaskDOMManipulation = (() => {
    const closeTaskInput = () => {
        taskForm.style.display = 'none'
        addTaskButton.style.display = 'block'
    }

    const displayTaskInput = () => {
        taskForm.style.display = 'block'
        addTaskButton.style.display = 'none'
    }

    const checkboxClick = (task, image, clicked) => {

    }

    const checkboxMouseOver = (image) => {
        if (image.style.display = 'none') image.style.display = 'block'
    }

    const checkboxMouseOut = (image, clicked) => {
        if (!clicked) image.style.display = 'none'
    }

    const initializeTaskEventListeners = (task, checkbox, image) => {
        //get rid of clicked
        let clicked = false
        checkbox.addEventListener('click', () => {
            TaskDataManipulation.changeCompletion(task)
            console.log(TaskDataManipulation.myTasks);
            !clicked ? image.style.display = 'block' : image.style.display = 'none'
            clicked = !clicked
        })
        checkbox.addEventListener('mouseover', () => { TaskDOMManipulation.checkboxMouseOver(image) })
        checkbox.addEventListener('mouseout', () => { TaskDOMManipulation.checkboxMouseOut(image, clicked) })
    }

    const displayTask = (task) => {
        const taskContainer = document.createElement('div')
        taskContainer.classList = 'container-main-task'

        const taskInfo = document.createElement('div')
        taskInfo.classList = 'container-main-task-info'

        const checkbox = document.createElement('button')
        checkbox.classList = 'container-main-task_checkbox'

        const checkImg = new Image(13, 13)
        checkImg.src = _images_icons_check_svg__WEBPACK_IMPORTED_MODULE_1__
        checkImg.style.display = 'none'

        const titleElem = document.createElement('h1')
        titleElem.classList = 'container-main-task_title'
        titleElem.textContent = task.title

        const bodyElem = document.createElement('p')
        bodyElem.classList = 'container-main-task_body'
        bodyElem.textContent = task.body

        TaskDOMManipulation.initializeTaskEventListeners(task, checkbox, checkImg)
        checkbox.append(checkImg)
        taskInfo.append(titleElem, bodyElem)
        taskContainer.append(checkbox, taskInfo)
        main.prepend(taskContainer)
    }

    return {
        displayTaskInput,
        closeTaskInput,
        displayTask,
        initializeTaskEventListeners,
        checkboxClick,
        checkboxMouseOver,
        checkboxMouseOut
    }

})()


const TaskDataManipulation = (() => {
    const myTasks = []

    const addTask = (task) => {
        myTasks.push(task)
    }

    const changeCompletion = (task) => {
        task.completion = !task.completion
    }

    //do not return mytasks
    return { myTasks, addTask, changeCompletion }
})()



const TaskFactory = (titleVal, bodyVal) => {
    const title = titleVal
    const body = bodyVal
    const completion = false

    return { title, body, completion }
}



addTaskButton.addEventListener('click', () => {
    TaskDOMManipulation.displayTaskInput()
})

submitTaskButton.addEventListener('click', () => {
    const newTask = TaskFactory(taskTitle.value, taskDescr.value)
    TaskDOMManipulation.displayTask(newTask)
    TaskDataManipulation.addTask(newTask)
    TaskDOMManipulation.closeTaskInput()
})

closeTaskButton.addEventListener('click', () => {
    TaskDOMManipulation.closeTaskInput()
})




const ProjectFactory = (titleValue) => {
    const myTasks = [] //implement this
    const title = titleValue
    return { title }
}

const ProjectDOMManipulation = (() => {
    const closeProjectInput = () => {
        projectForm.style.display = 'none'
        addProjectButton.style.display = 'block'
    }

    const displayProjectInput = () => {
        projectForm.style.display = 'flex'
        addProjectButton.style.display = 'none'
    }

    const displayProject = (project) => {
        const projectCont = document.createElement('li')
        projectCont.classList = 'container-nav_project'

        const title = document.createElement('span')
        title.textContent = project.title

        projectCont.append(title)
        nav.insertBefore(projectCont, addProjectButton)
    }

    return {
        closeProjectInput,
        displayProjectInput,
        displayProject
    }

})()

const ProjectDataManipulation = (() => {
    const myProjects = []

    const addProject = (project) => {
        myProjects.push(project)
    }

    return { addProject }
})()


addProjectButton.addEventListener('click', () => {
    ProjectDOMManipulation.displayProjectInput()
})

closeTaskButton.addEventListener('click', () => {
    ProjectDOMManipulation.closeProjectInput()
})


submitProjectButton.addEventListener('click', () => {
    const newProject = ProjectFactory(projectTitle.value)
    ProjectDOMManipulation.displayProject(newProject)
    ProjectDataManipulation.addProject(newProject)
    ProjectDOMManipulation.closeProjectInput()
})





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguc2Nzcz83MjIzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0NpcmN1bGFyQWlyLUxpZ2h0LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IFtyb3cxLXN0YXJ0XSBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiIDYwcHggW3JvdzEtZW5kXSBbcm93Mi1zdGFydF0gXFxcIm5hdiBtYWluIG1haW5cXFwiIDFmciBbcm93Mi1lbmRdLzMwMHB4IDFmciAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXG59XFxuLmNvbnRhaW5lci1oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjE0ZGVnLCA3OSUsIDEzJSk7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4uY29udGFpbmVyLW5hdiB7XFxuICBncmlkLWFyZWE6IG5hdjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwZGVnLCAwJSwgOTclKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHggMTVweCAwIDUwcHg7XFxufVxcbi5jb250YWluZXItbmF2X3Byb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmNvbnRhaW5lci1uYXZfYWRkUHJvamVjdCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG4uY29udGFpbmVyLW5hdl9hZGRQcm9qZWN0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIisgXFxcIjtcXG59XFxuLmNvbnRhaW5lci1uYXYtcHJvamVjdEZvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG4uY29udGFpbmVyLW5hdi1wcm9qZWN0Rm9ybV90aXRsZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBoc2woMGRlZywgMCUsIDgwJSk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2lyY3VsYXJcXFwiO1xcbn1cXG4uY29udGFpbmVyLW5hdi1wcm9qZWN0Rm9ybS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmNvbnRhaW5lci1uYXYtcHJvamVjdEZvcm0tYnV0dG9uc19jYW5jZWwsIC5jb250YWluZXItbmF2LXByb2plY3RGb3JtLWJ1dHRvbnNfc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2lyY3VsYXJcXFwiO1xcbn1cXG4uY29udGFpbmVyLW5hdi1wcm9qZWN0Rm9ybS1idXR0b25zX2NhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMGRlZywgMCUsIDgwJSk7XFxufVxcbi5jb250YWluZXItbmF2LXByb2plY3RGb3JtLWJ1dHRvbnNfc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwZGVnLCAxMDAlLCA3MCUpO1xcbn1cXG4uY29udGFpbmVyLW1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB3aWR0aDogNTB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uY29udGFpbmVyLW1haW5fYWRkVGFzayB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcbi5jb250YWluZXItbWFpbl9hZGRUYXNrOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIisgXFxcIjtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xcbiAgYm9yZGVyOiAwcHggc29saWQgaHNsKDBkZWcsIDAlLCA4MCUpO1xcbiAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwcHg7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrX2NoZWNrYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgaHNsKDIxNGRlZywgNzklLCAxMyUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMTNkZWcsIDc5JSwgMTMlLCAwLjUpO1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFza19jaGVja2JveDpob3ZlciBpbWcge1xcbiAgb3BhY2l0eTogNTAlO1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFzay1pbmZvX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFzay1pbmZvX2JvZHkge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFza0Zvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWlucHV0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgwZGVnLCAwJSwgODAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrRm9ybS1pbnB1dHNfdGl0bGUsIC5jb250YWluZXItbWFpbi10YXNrRm9ybS1pbnB1dHNfZGVzY3JpcHRpb24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWlucHV0c190aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWlucHV0c19kZXNjcmlwdGlvbiB7XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFza0Zvcm0tYnV0dG9uc19jYW5jZWwsIC5jb250YWluZXItbWFpbi10YXNrRm9ybS1idXR0b25zX3N1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHggMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWJ1dHRvbnNfY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwZGVnLCAwJSwgODAlKTtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWJ1dHRvbnNfc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwZGVnLCAxMDAlLCA3MCUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9kdWxlcy9fc2V0dGluZ3MtcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9tb2R1bGVzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9kdWxlcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBOzs7RUFHSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7OztFQUdJLFNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtBQ0NKOztBREVBOzs7RUFHSSxxQkFBQTtBQ0NKOztBREVBOztFQUVJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNDSjs7QUN6Q0E7RUFDSSx1QkFBQTtFQUNBLDREQUFBO0FENENKO0FBNUNBO0VBQ0ksYUFBQTtFQUNBLDRIQUNJO0VBQ0osWUFBQTtFQUNBLHVCRUZVO0FGK0NkO0FBM0NJO0VBQ0ksaUJBQUE7RUFDQSx1Q0VYSztFRllMLFVBQUE7QUE2Q1I7QUExQ0k7RUFDSSxjQUFBO0VBQ0Esb0NFZks7RUZpQkwsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBMkNSO0FBekNRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBMkNaO0FBeENRO0VBQ0ksZUV0QkM7RUZ1QkQsbUJBQUE7QUEwQ1o7QUF4Q1k7RUFDSSxhQUFBO0FBMENoQjtBQXRDUTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQXdDWjtBQXRDWTtFQUNJLG9DQUFBO0VBQ0EsbUJFbkNBO0VGb0NBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUV2Q0g7RUZ3Q0csdUJFM0NGO0FGbUZkO0FBckNZO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUF1Q2hCO0FBckNnQjtFQUVJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkV0REo7RUZ1REksdUJFM0ROO0FGaUdkO0FBbkNnQjtFQUNJLG9DRWpFRjtBRnNHbEI7QUFsQ2dCO0VBQ0ksc0NFcEVSO0FGd0daO0FBOUJJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFnQ1I7QUE3QlE7RUFDSSxpQkVsRkQ7RUZtRkMsbUJBQUE7QUErQlo7QUE3Qlk7RUFDSSxhQUFBO0FBK0JoQjtBQTNCUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUE2Qlo7QUEzQlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSw2Q0VoSEc7QUY2SW5CO0FBMUJvQjtFQUNJLFlBQUE7QUE0QnhCO0FBdEJnQjtFQUNJLGlCRXRIVDtBRjhJWDtBQXJCZ0I7RUFDSSxlRXhIUDtBRitJYjtBQWhCUTtFQUNJLGFBQUE7QUFrQlo7QUFoQlk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CRXJJQTtBRnVKaEI7QUFoQmdCO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkUzSUo7RUY0SUksWUFBQTtFQUNBLGVFOUlQO0VGK0lPLHVCRWxKTjtBRm1LZDtBQWRnQjtFQUNJLGlCRXBKTjtBRm9LZDtBQWJnQjtFQUNJLFlBQUE7RUFDQSx1QkUzSk47QUYwS2Q7QUFYWTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBYWhCO0FBWGdCO0VBRUksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CRXZLSjtFRndLSSx1QkU1S047QUZ3TGQ7QUFUZ0I7RUFDSSxvQ0VsTEY7QUY2TGxCO0FBUmdCO0VBQ0ksc0NFckxSO0FGK0xaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVwiLFwiQHVzZSAnc3R5bGVfbW9kdWxlcycgYXMgKjtcXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTpcXHJcXG4gICAgICAgIFtyb3cxLXN0YXJ0XSAnaGVhZGVyIGhlYWRlciBoZWFkZXInIDYwcHggW3JvdzEtZW5kXSBbcm93Mi1zdGFydF0gJ25hdiBtYWluIG1haW4nIDFmciBbcm93Mi1lbmRdIC8gMzAwcHggMWZyIDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xcclxcblxcclxcbiAgICAmLWhlYWRlciB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xcclxcbiAgICAgICAgei1pbmRleDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLW5hdiB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IG5hdjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LWNvbG9yO1xcclxcblxcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweCAxNXB4IDAgNTBweDtcXHJcXG5cXHJcXG4gICAgICAgICZfcHJvamVjdCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmX2FkZFByb2plY3Qge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc21hbGw7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnKyAnO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYtcHJvamVjdEZvcm0ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgICAgICAgJl90aXRsZSB7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRncmV5LWRhcmstY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcclxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc21hbGw7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICYtYnV0dG9ucyB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIGdhcDogMTBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJl9jYW5jZWwsXFxyXFxuICAgICAgICAgICAgICAgICZfc3VibWl0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfY2FuY2VsIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LWRhcmstY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJl9zdWJtaXQge1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLW1haW4ge1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiBtYWluO1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICAgICAgICB3aWR0aDogNTB2dztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcblxcclxcblxcclxcbiAgICAgICAgJl9hZGRUYXNrIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LWJpZztcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcblxcclxcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcrICc7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJi10YXNrIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAwcHggc29saWQgJGdyZXktZGFyay1jb2xvcjtcXHJcXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmX2NoZWNrYm94IHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlLWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1jb2xvci10cmFucztcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLWluZm8ge1xcclxcbiAgICAgICAgICAgICAgICAmX3RpdGxlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtYmlnO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfYm9keSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICYtLWRvbmUge31cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYtdGFza0Zvcm0ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJi1pbnB1dHMge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkZ3JleS1kYXJrLWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJl90aXRsZSxcXHJcXG4gICAgICAgICAgICAgICAgJl9kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAmX3RpdGxlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtbWVkaXVtO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLWJ1dHRvbnMge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfY2FuY2VsLFxcclxcbiAgICAgICAgICAgICAgICAmX3N1Ym1pdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAmX2NhbmNlbCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS1kYXJrLWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfc3VibWl0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCIsXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdjaXJjdWxhcic7XFxyXFxuICAgIHNyYzogdXJsKC4vZm9udHMvQ2lyY3VsYXJBaXItTGlnaHQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG59XCIsXCIkYmx1ZS1jb2xvcjogaHNsKDIxNCwgNzklLCAxMyUpO1xcclxcbiRibHVlLWNvbG9yLXRyYW5zOiBoc2xhKDIxMywgNzklLCAxMyUsIDAuNSk7XFxyXFxuJGdyZXktY29sb3I6IGhzbCgwLCAwJSwgOTclKTtcXHJcXG4kZ3JleS1kYXJrLWNvbG9yOiBoc2woMCwgMCUsIDgwJSk7XFxyXFxuJHJlZC1jb2xvcjogaHNsKDAsIDEwMCUsIDcwJSk7XFxyXFxuJGZvbnQtZmFtaWx5OiAnY2lyY3VsYXInO1xcclxcbiRmb250LWJpZzogMS41cmVtO1xcclxcbiRmb250LW1lZGl1bTogMS4ycmVtO1xcclxcbiRmb250LXNtYWxsOiAxcmVtO1xcclxcbiRib3JkZXItcmFkaXVzOiAxMnB4O1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5zY3NzJztcclxuaW1wb3J0IGNoZWNrSW1nU3JjIGZyb20gJy4vaW1hZ2VzL2ljb25zL2NoZWNrLnN2ZydcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLW1haW4nKVxyXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1tYWluX2FkZFRhc2snKVxyXG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItbWFpbi10YXNrRm9ybScpXHJcbmNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLW1haW4tdGFza0Zvcm0tYnV0dG9uc19zdWJtaXQnKVxyXG5jb25zdCBjbG9zZVRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLW1haW4tdGFza0Zvcm0tYnV0dG9uc19jYW5jZWwnKVxyXG5jb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLW1haW4tdGFza0Zvcm0taW5wdXRzX3RpdGxlJylcclxuY29uc3QgdGFza0Rlc2NyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWlucHV0c19kZXNjcmlwdGlvbicpXHJcbmNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLW1haW4tdGFzaycpXHJcblxyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLW5hdicpXHJcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLW5hdl9hZGRQcm9qZWN0JylcclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLW5hdi1wcm9qZWN0Rm9ybScpXHJcbmNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLW5hdi1wcm9qZWN0Rm9ybS1idXR0b25zX3N1Ym1pdCcpXHJcbmNvbnN0IGNsb3NlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItbmF2LXByb2plY3RGb3JtLWJ1dHRvbnNfY2FuY2VsJylcclxuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1uYXYtcHJvamVjdEZvcm1fdGl0bGUnKVxyXG5cclxuXHJcbmNvbnN0IFRhc2tET01NYW5pcHVsYXRpb24gPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY2xvc2VUYXNrSW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaXNwbGF5VGFza0lucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tib3hDbGljayA9ICh0YXNrLCBpbWFnZSwgY2xpY2tlZCkgPT4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja2JveE1vdXNlT3ZlciA9IChpbWFnZSkgPT4ge1xyXG4gICAgICAgIGlmIChpbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKSBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrYm94TW91c2VPdXQgPSAoaW1hZ2UsIGNsaWNrZWQpID0+IHtcclxuICAgICAgICBpZiAoIWNsaWNrZWQpIGltYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplVGFza0V2ZW50TGlzdGVuZXJzID0gKHRhc2ssIGNoZWNrYm94LCBpbWFnZSkgPT4ge1xyXG4gICAgICAgIC8vZ2V0IHJpZCBvZiBjbGlja2VkXHJcbiAgICAgICAgbGV0IGNsaWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBUYXNrRGF0YU1hbmlwdWxhdGlvbi5jaGFuZ2VDb21wbGV0aW9uKHRhc2spXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFRhc2tEYXRhTWFuaXB1bGF0aW9uLm15VGFza3MpO1xyXG4gICAgICAgICAgICAhY2xpY2tlZCA/IGltYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snIDogaW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICBjbGlja2VkID0gIWNsaWNrZWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHsgVGFza0RPTU1hbmlwdWxhdGlvbi5jaGVja2JveE1vdXNlT3ZlcihpbWFnZSkgfSlcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHsgVGFza0RPTU1hbmlwdWxhdGlvbi5jaGVja2JveE1vdXNlT3V0KGltYWdlLCBjbGlja2VkKSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlUYXNrID0gKHRhc2spID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrJ1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGFza0luZm8uY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluLXRhc2staW5mbydcclxuXHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrX2NoZWNrYm94J1xyXG5cclxuICAgICAgICBjb25zdCBjaGVja0ltZyA9IG5ldyBJbWFnZSgxMywgMTMpXHJcbiAgICAgICAgY2hlY2tJbWcuc3JjID0gY2hlY2tJbWdTcmNcclxuICAgICAgICBjaGVja0ltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgICAgICB0aXRsZUVsZW0uY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluLXRhc2tfdGl0bGUnXHJcbiAgICAgICAgdGl0bGVFbGVtLnRleHRDb250ZW50ID0gdGFzay50aXRsZVxyXG5cclxuICAgICAgICBjb25zdCBib2R5RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIGJvZHlFbGVtLmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrX2JvZHknXHJcbiAgICAgICAgYm9keUVsZW0udGV4dENvbnRlbnQgPSB0YXNrLmJvZHlcclxuXHJcbiAgICAgICAgVGFza0RPTU1hbmlwdWxhdGlvbi5pbml0aWFsaXplVGFza0V2ZW50TGlzdGVuZXJzKHRhc2ssIGNoZWNrYm94LCBjaGVja0ltZylcclxuICAgICAgICBjaGVja2JveC5hcHBlbmQoY2hlY2tJbWcpXHJcbiAgICAgICAgdGFza0luZm8uYXBwZW5kKHRpdGxlRWxlbSwgYm9keUVsZW0pXHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmQoY2hlY2tib3gsIHRhc2tJbmZvKVxyXG4gICAgICAgIG1haW4ucHJlcGVuZCh0YXNrQ29udGFpbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlzcGxheVRhc2tJbnB1dCxcclxuICAgICAgICBjbG9zZVRhc2tJbnB1dCxcclxuICAgICAgICBkaXNwbGF5VGFzayxcclxuICAgICAgICBpbml0aWFsaXplVGFza0V2ZW50TGlzdGVuZXJzLFxyXG4gICAgICAgIGNoZWNrYm94Q2xpY2ssXHJcbiAgICAgICAgY2hlY2tib3hNb3VzZU92ZXIsXHJcbiAgICAgICAgY2hlY2tib3hNb3VzZU91dFxyXG4gICAgfVxyXG5cclxufSkoKVxyXG5cclxuXHJcbmNvbnN0IFRhc2tEYXRhTWFuaXB1bGF0aW9uID0gKCgpID0+IHtcclxuICAgIGNvbnN0IG15VGFza3MgPSBbXVxyXG5cclxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xyXG4gICAgICAgIG15VGFza3MucHVzaCh0YXNrKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUNvbXBsZXRpb24gPSAodGFzaykgPT4ge1xyXG4gICAgICAgIHRhc2suY29tcGxldGlvbiA9ICF0YXNrLmNvbXBsZXRpb25cclxuICAgIH1cclxuXHJcbiAgICAvL2RvIG5vdCByZXR1cm4gbXl0YXNrc1xyXG4gICAgcmV0dXJuIHsgbXlUYXNrcywgYWRkVGFzaywgY2hhbmdlQ29tcGxldGlvbiB9XHJcbn0pKClcclxuXHJcblxyXG5cclxuY29uc3QgVGFza0ZhY3RvcnkgPSAodGl0bGVWYWwsIGJvZHlWYWwpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVWYWxcclxuICAgIGNvbnN0IGJvZHkgPSBib2R5VmFsXHJcbiAgICBjb25zdCBjb21wbGV0aW9uID0gZmFsc2VcclxuXHJcbiAgICByZXR1cm4geyB0aXRsZSwgYm9keSwgY29tcGxldGlvbiB9XHJcbn1cclxuXHJcblxyXG5cclxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIFRhc2tET01NYW5pcHVsYXRpb24uZGlzcGxheVRhc2tJbnB1dCgpXHJcbn0pXHJcblxyXG5zdWJtaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFzayA9IFRhc2tGYWN0b3J5KHRhc2tUaXRsZS52YWx1ZSwgdGFza0Rlc2NyLnZhbHVlKVxyXG4gICAgVGFza0RPTU1hbmlwdWxhdGlvbi5kaXNwbGF5VGFzayhuZXdUYXNrKVxyXG4gICAgVGFza0RhdGFNYW5pcHVsYXRpb24uYWRkVGFzayhuZXdUYXNrKVxyXG4gICAgVGFza0RPTU1hbmlwdWxhdGlvbi5jbG9zZVRhc2tJbnB1dCgpXHJcbn0pXHJcblxyXG5jbG9zZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBUYXNrRE9NTWFuaXB1bGF0aW9uLmNsb3NlVGFza0lucHV0KClcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2plY3RGYWN0b3J5ID0gKHRpdGxlVmFsdWUpID0+IHtcclxuICAgIGNvbnN0IG15VGFza3MgPSBbXSAvL2ltcGxlbWVudCB0aGlzXHJcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlVmFsdWVcclxuICAgIHJldHVybiB7IHRpdGxlIH1cclxufVxyXG5cclxuY29uc3QgUHJvamVjdERPTU1hbmlwdWxhdGlvbiA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBjbG9zZVByb2plY3RJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0SW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgICAgICBwcm9qZWN0Q29udC5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW5hdl9wcm9qZWN0J1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZVxyXG5cclxuICAgICAgICBwcm9qZWN0Q29udC5hcHBlbmQodGl0bGUpXHJcbiAgICAgICAgbmF2Lmluc2VydEJlZm9yZShwcm9qZWN0Q29udCwgYWRkUHJvamVjdEJ1dHRvbilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsb3NlUHJvamVjdElucHV0LFxyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0SW5wdXQsXHJcbiAgICAgICAgZGlzcGxheVByb2plY3RcclxuICAgIH1cclxuXHJcbn0pKClcclxuXHJcbmNvbnN0IFByb2plY3REYXRhTWFuaXB1bGF0aW9uID0gKCgpID0+IHtcclxuICAgIGNvbnN0IG15UHJvamVjdHMgPSBbXVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIG15UHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGFkZFByb2plY3QgfVxyXG59KSgpXHJcblxyXG5cclxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIFByb2plY3RET01NYW5pcHVsYXRpb24uZGlzcGxheVByb2plY3RJbnB1dCgpXHJcbn0pXHJcblxyXG5jbG9zZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBQcm9qZWN0RE9NTWFuaXB1bGF0aW9uLmNsb3NlUHJvamVjdElucHV0KClcclxufSlcclxuXHJcblxyXG5zdWJtaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3RGYWN0b3J5KHByb2plY3RUaXRsZS52YWx1ZSlcclxuICAgIFByb2plY3RET01NYW5pcHVsYXRpb24uZGlzcGxheVByb2plY3QobmV3UHJvamVjdClcclxuICAgIFByb2plY3REYXRhTWFuaXB1bGF0aW9uLmFkZFByb2plY3QobmV3UHJvamVjdClcclxuICAgIFByb2plY3RET01NYW5pcHVsYXRpb24uY2xvc2VQcm9qZWN0SW5wdXQoKVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9