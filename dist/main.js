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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100vh;\n  width: 100vw;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  font-weight: 500;\n}\n\np {\n  margin: 0;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n@font-face {\n  font-family: \"circular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n}\n.container {\n  display: grid;\n  grid-template: [row1-start] \"header header header\" 60px [row1-end] [row2-start] \"nav main main\" 1fr [row2-end]/300px 1fr 1fr;\n  height: 100%;\n  font-family: \"circular\";\n}\n.container-header {\n  grid-area: header;\n  background-color: hsl(214deg, 79%, 13%);\n  z-index: 0;\n}\n.container-nav {\n  grid-area: nav;\n  background-color: hsl(0deg, 0%, 97%);\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n  padding: 20px 15px 0 50px;\n}\n.container-nav_project {\n  display: flex;\n  justify-content: space-between;\n  padding: 2px 8px;\n  border-radius: 12px;\n  transition: all 0.1s cubic-bezier(0.5, 1, 0.5, 1);\n}\n.container-nav_project--active {\n  background-color: hsl(0deg, 0%, 80%);\n}\n.container-nav_addProject {\n  font-size: 1rem;\n  height: min-content;\n}\n.container-nav_addProject::before {\n  content: \"+ \";\n}\n.container-nav-projectForm {\n  display: none;\n  flex-flow: column;\n}\n.container-nav-projectForm_title {\n  border: 2px solid hsl(0deg, 0%, 80%);\n  border-radius: 12px;\n  outline: none;\n  padding: 5px;\n  font-size: 1rem;\n  font-family: \"circular\";\n}\n.container-nav-projectForm-buttons {\n  display: flex;\n  justify-content: end;\n  margin-top: 5px;\n  gap: 10px;\n}\n.container-nav-projectForm-buttons_cancel, .container-nav-projectForm-buttons_submit {\n  background-color: white;\n  border: none;\n  box-shadow: none;\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-family: \"circular\";\n}\n.container-nav-projectForm-buttons_cancel {\n  background-color: hsl(0deg, 0%, 80%);\n}\n.container-nav-projectForm-buttons_submit {\n  background-color: hsl(0deg, 100%, 70%);\n}\n.container-main {\n  grid-area: main;\n  margin: 20px auto;\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.container-main_addTask {\n  font-size: 1.5rem;\n  height: min-content;\n}\n.container-main_addTask::before {\n  content: \"+ \";\n}\n.container-main-task {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 0 10px 0;\n  border: 0px solid hsl(0deg, 0%, 80%);\n  border-width: 0px 0px 1px 0px;\n}\n.container-main-task_checkbox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  flex: 0 0 auto;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid hsl(214deg, 79%, 13%);\n  background-color: hsla(213deg, 79%, 13%, 0.5);\n}\n.container-main-task_checkbox:hover img {\n  opacity: 50%;\n}\n.container-main-task-info_title {\n  font-size: 1.5rem;\n}\n.container-main-task-info_body {\n  font-size: 1rem;\n}\n.container-main-taskForm {\n  display: none;\n}\n.container-main-taskForm-inputs {\n  display: flex;\n  flex-direction: column;\n  border: 2px solid hsl(0deg, 0%, 80%);\n  border-radius: 12px;\n}\n.container-main-taskForm-inputs_title, .container-main-taskForm-inputs_description {\n  border: none;\n  outline: none;\n  border-radius: 12px;\n  padding: 5px;\n  font-size: 1rem;\n  font-family: \"circular\";\n}\n.container-main-taskForm-inputs_title {\n  font-size: 1.2rem;\n}\n.container-main-taskForm-inputs_description {\n  resize: none;\n  font-family: \"circular\";\n}\n.container-main-taskForm-buttons {\n  display: flex;\n  justify-content: end;\n  margin-top: 5px;\n  gap: 10px;\n}\n.container-main-taskForm-buttons_cancel, .container-main-taskForm-buttons_submit {\n  background-color: white;\n  border: none;\n  box-shadow: none;\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-family: \"circular\";\n}\n.container-main-taskForm-buttons_cancel {\n  background-color: hsl(0deg, 0%, 80%);\n}\n.container-main-taskForm-buttons_submit {\n  background-color: hsl(0deg, 100%, 70%);\n}", "",{"version":3,"sources":["webpack://./src/style_modules/_settings-reset.scss","webpack://./src/index.scss","webpack://./src/style_modules/_fonts.scss","webpack://./src/style_modules/_variables.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;ACCJ;;ADEA;;;EAGI,mBAAA;ACCJ;;ADEA;EACI,SAAA;EACA,UAAA;EACA,YAAA;ACCJ;;ADEA;;;EAGI,SAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,SAAA;ACCJ;;ADEA;;;EAGI,qBAAA;ACCJ;;ADEA;;EAEI,gBAAA;EACA,UAAA;EACA,SAAA;ACCJ;;ACzCA;EACI,uBAAA;EACA,4DAAA;AD4CJ;AA5CA;EACI,aAAA;EACA,4HACI;EACJ,YAAA;EACA,uBEFU;AF+Cd;AA3CI;EACI,iBAAA;EACA,uCEXK;EFYL,UAAA;AA6CR;AA1CI;EACI,cAAA;EACA,oCEfK;EFiBL,aAAA;EACA,iBAAA;EACA,SAAA;EACA,yBAAA;AA2CR;AAzCQ;EACI,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,mBEnBI;EFoBJ,iDAAA;AA2CZ;AAzCY;EACI,oCE7BE;AFwElB;AAvCQ;EACI,eE7BC;EF8BD,mBAAA;AAyCZ;AAvCY;EACI,aAAA;AAyChB;AArCQ;EACI,aAAA;EACA,iBAAA;AAuCZ;AArCY;EACI,oCAAA;EACA,mBE1CA;EF2CA,aAAA;EACA,YAAA;EACA,eE9CH;EF+CG,uBElDF;AFyFd;AApCY;EACI,aAAA;EACA,oBAAA;EACA,eAAA;EACA,SAAA;AAsChB;AApCgB;EAEI,uBAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBE7DJ;EF8DI,uBElEN;AFuGd;AAlCgB;EACI,oCExEF;AF4GlB;AAjCgB;EACI,sCE3ER;AF8GZ;AA7BI;EACI,eAAA;EACA,iBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AA+BR;AA5BQ;EACI,iBEzFD;EF0FC,mBAAA;AA8BZ;AA5BY;EACI,aAAA;AA8BhB;AA1BQ;EACI,aAAA;EACA,mBAAA;EACA,SAAA;EACA,mBAAA;EACA,oCAAA;EACA,6BAAA;AA4BZ;AA1BY;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,uCAAA;EACA,6CExHG;AFoJnB;AAzBoB;EACI,YAAA;AA2BxB;AArBgB;EACI,iBE9HT;AFqJX;AApBgB;EACI,eEhIP;AFsJb;AAfQ;EACI,aAAA;AAiBZ;AAfY;EACI,aAAA;EACA,sBAAA;EACA,oCAAA;EACA,mBE7IA;AF8JhB;AAfgB;EAEI,YAAA;EACA,aAAA;EACA,mBEnJJ;EFoJI,YAAA;EACA,eEtJP;EFuJO,uBE1JN;AF0Kd;AAbgB;EACI,iBE5JN;AF2Kd;AAZgB;EACI,YAAA;EACA,uBEnKN;AFiLd;AAVY;EACI,aAAA;EACA,oBAAA;EACA,eAAA;EACA,SAAA;AAYhB;AAVgB;EAEI,uBAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBE/KJ;EFgLI,uBEpLN;AF+Ld;AARgB;EACI,oCE1LF;AFoMlB;AAPgB;EACI,sCE7LR;AFsMZ","sourcesContent":["html {\r\n    box-sizing: border-box;\r\n    font-size: 100%;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n    margin: 0;\r\n    font-weight: 500;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n    text-decoration: none;\r\n}\r\n\r\nul,\r\nli {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}","@use 'style_modules' as *;\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template:\r\n        [row1-start] 'header header header' 60px [row1-end] [row2-start] 'nav main main' 1fr [row2-end] / 300px 1fr 1fr;\r\n    height: 100%;\r\n    font-family: $font-family;\r\n\r\n    &-header {\r\n        grid-area: header;\r\n        background-color: $blue-color;\r\n        z-index: 0;\r\n    }\r\n\r\n    &-nav {\r\n        grid-area: nav;\r\n        background-color: $grey-color;\r\n\r\n        display: flex;\r\n        flex-flow: column;\r\n        gap: 10px;\r\n        padding: 20px 15px 0 50px;\r\n\r\n        &_project {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            padding: 2px 8px;\r\n            border-radius: $border-radius;\r\n            transition: all .1s $transition-curve;\r\n\r\n            &--active {\r\n                background-color: $grey-dark-color;\r\n            }\r\n        }\r\n\r\n        &_addProject {\r\n            font-size: $font-small;\r\n            height: min-content;\r\n\r\n            &::before {\r\n                content: '+ ';\r\n            }\r\n        }\r\n\r\n        &-projectForm {\r\n            display: none;\r\n            flex-flow: column;\r\n\r\n            &_title {\r\n                border: 2px solid $grey-dark-color;\r\n                border-radius: $border-radius;\r\n                outline: none;\r\n                padding: 5px;\r\n                font-size: $font-small;\r\n                font-family: $font-family;\r\n            }\r\n\r\n            &-buttons {\r\n                display: flex;\r\n                justify-content: end;\r\n                margin-top: 5px;\r\n                gap: 10px;\r\n\r\n                &_cancel,\r\n                &_submit {\r\n                    background-color: white;\r\n                    border: none;\r\n                    box-shadow: none;\r\n                    padding: 5px 12px;\r\n                    border-radius: $border-radius;\r\n                    font-family: $font-family;\r\n                }\r\n\r\n                &_cancel {\r\n                    background-color: $grey-dark-color;\r\n                }\r\n\r\n                &_submit {\r\n                    background-color: $red-color;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    &-main {\r\n        grid-area: main;\r\n        margin: 20px auto;\r\n        width: 50vw;\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 10px;\r\n\r\n\r\n        &_addTask {\r\n            font-size: $font-big;\r\n            height: min-content;\r\n\r\n            &::before {\r\n                content: '+ ';\r\n            }\r\n        }\r\n\r\n        &-task {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 10px;\r\n            padding: 0 0 10px 0;\r\n            border: 0px solid $grey-dark-color;\r\n            border-width: 0px 0px 1px 0px;\r\n\r\n            &_checkbox {\r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n                position: relative;\r\n                flex: 0 0 auto;\r\n                width: 20px;\r\n                height: 20px;\r\n                border-radius: 50%;\r\n                border: 2px solid $blue-color;\r\n                background-color: $blue-color-trans;\r\n\r\n                &:hover {\r\n                    img {\r\n                        opacity: 50%;\r\n                    }\r\n                }\r\n            }\r\n\r\n            &-info {\r\n                &_title {\r\n                    font-size: $font-big;\r\n                }\r\n\r\n                &_body {\r\n                    font-size: $font-small;\r\n                }\r\n            }\r\n\r\n            &--done {}\r\n        }\r\n\r\n        &-taskForm {\r\n            display: none;\r\n\r\n            &-inputs {\r\n                display: flex;\r\n                flex-direction: column;\r\n                border: 2px solid $grey-dark-color;\r\n                border-radius: $border-radius;\r\n\r\n                &_title,\r\n                &_description {\r\n                    border: none;\r\n                    outline: none;\r\n                    border-radius: $border-radius;\r\n                    padding: 5px;\r\n                    font-size: $font-small;\r\n                    font-family: $font-family;\r\n                }\r\n\r\n                &_title {\r\n                    font-size: $font-medium;\r\n                }\r\n\r\n                &_description {\r\n                    resize: none;\r\n                    font-family: $font-family;\r\n                }\r\n            }\r\n\r\n            &-buttons {\r\n                display: flex;\r\n                justify-content: end;\r\n                margin-top: 5px;\r\n                gap: 10px;\r\n\r\n                &_cancel,\r\n                &_submit {\r\n                    background-color: white;\r\n                    border: none;\r\n                    box-shadow: none;\r\n                    padding: 5px 12px;\r\n                    border-radius: $border-radius;\r\n                    font-family: $font-family;\r\n                }\r\n\r\n                &_cancel {\r\n                    background-color: $grey-dark-color;\r\n                }\r\n\r\n                &_submit {\r\n                    background-color: $red-color;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}","@font-face {\r\n    font-family: 'circular';\r\n    src: url(./fonts/CircularAir-Light.woff2) format('woff2');\r\n}","$blue-color: hsl(214, 79%, 13%);\r\n$blue-color-trans: hsla(213, 79%, 13%, 0.5);\r\n$grey-color: hsl(0, 0%, 97%);\r\n$grey-dark-color: hsl(0, 0%, 80%);\r\n$red-color: hsl(0, 100%, 70%);\r\n$font-family: 'circular';\r\n$font-big: 1.5rem;\r\n$font-medium: 1.2rem;\r\n$font-small: 1rem;\r\n$border-radius: 12px;\r\n$transition-curve: cubic-bezier(.5, 1, .5, 1);"],"sourceRoot":""}]);
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
const nav = document.querySelector('.container-nav')

const UI = (() => {

    const myProjects = []

    function initProject() {
        const index = ProjectFactory('Index')
        const indexTaskForm = TaskFormFactory(index.myTasks)
        myProjects.push(index)
        UI.resetMain()
        index.displayProject()
        index.displayProjectTasks()
        indexTaskForm.buildAddTask()
    }

    function resetMain() {
        if (main.children.length != 0) {
            Array.from(main.children).forEach(child => {
                child.remove()
            })
        }
    }

    const addProject = (project) => {
        myProjects.push(project)
    }

    // const displayProjectList = () => {
    //     myProjects.forEach(project => {
    //         project.displayProject()
    //     })
    // }

    return {
        myProjects,
        resetMain,
        initProject,
        addProject,
        // displayProjectList,
    }
})()


const ProjectFactory = (titleValue) => {
    const myTasks = []
    const title = titleValue

    const projectCont = document.createElement('li')
    const projectTitle = document.createElement('span')
    const projectTaskCount = document.createElement('span')

    const addTask = (task) => {
        myTasks.push(task)
    }

    const removeTask = () => {

    }

    const displayProjectTasks = () => {
        myTasks.forEach(task => {
            task = TaskFactory(task.title, task.description)
            task.displayTask()
        });
    }

    const displayProject = () => {
        projectCont.classList = 'container-nav_project'
        projectTitle.textContent = title
        projectTaskCount.textContent = myTasks.length
        projectCont.append(projectTitle, projectTaskCount)
        nav.prepend(projectCont)
        initEventListeners()
    }

    const initEventListeners = () => {
        projectCont.addEventListener('click', () => {
            UI.resetMain()
            makeActive()
            initialize()
        })
    }

    const initialize = () => {
        displayProjectTasks()
        makeActive()
        const myForm = TaskFormFactory(myTasks)
        myForm.buildAddTask()
    }

    const makeActive = () => {
        Array.from(nav.children).forEach(project => { project.classList.remove('container-nav_project--active') });
        projectCont.classList.add('container-nav_project--active')
    }

    return {
        title,
        myTasks,
        initialize,
        addTask,
        removeTask,
        displayProjectTasks,
        displayProject,
    }
}


const TaskFactory = (titleVal, bodyVal, completionVal) => {
    const title = titleVal
    const body = bodyVal
    let completion = completionVal === undefined ? false : completionVal
    let clicked = false

    const taskContainer = document.createElement('div')
    const taskInfo = document.createElement('div')
    const checkbox = document.createElement('button')
    const checkImg = new Image(13, 13)
    const titleElem = document.createElement('h1')
    const bodyElem = document.createElement('p')

    const checkboxClick = () => {
        completion = !completion
        !clicked ? checkImg.style.display = 'block' : checkImg.style.display = 'none'
        clicked = !clicked
    }

    const checkboxMouseOver = (image) => {
        if (!clicked) image.style.display = 'block'
    }

    const checkboxMouseOut = (image) => {
        if (!clicked) image.style.display = 'none'
    }

    const initializeTaskEventListeners = (checkbox, image) => {
        checkbox.addEventListener('click', () => { checkboxClick() })
        checkbox.addEventListener('mouseover', () => { checkboxMouseOver(image) })
        checkbox.addEventListener('mouseout', () => { checkboxMouseOut(image) })
    }

    function displayTask() {
        taskContainer.classList = 'container-main-task'
        taskInfo.classList = 'container-main-task-info'
        checkbox.classList = 'container-main-task_checkbox'
        titleElem.classList = 'container-main-task-info_title'
        bodyElem.classList = 'container-main-task-info_body'
        checkImg.style.display = completion ? 'block' : 'none'
        titleElem.textContent = title ? title : 'No Title'
        bodyElem.textContent = body
        checkImg.src = _images_icons_check_svg__WEBPACK_IMPORTED_MODULE_1__


        initializeTaskEventListeners(checkbox, checkImg)
        checkbox.append(checkImg)
        taskInfo.append(titleElem, bodyElem)
        taskContainer.append(checkbox, taskInfo)
        main.prepend(taskContainer)
    }

    console.log(UI.myProjects);

    return {
        title,
        body,
        completion,
        displayTask,
        checkboxClick,
        checkboxMouseOver,
        checkboxMouseOut
    }
}


const TaskFormFactory = (projectTasks) => {

    const addTaskLine = document.createElement('div')
    const taskForm = document.createElement('form')
    const inputs = document.createElement('div')
    const title = document.createElement('input')
    const body = document.createElement('textarea')
    const buttons = document.createElement('div')
    const cancel = document.createElement('button')
    const submit = document.createElement('button')

    const buildAddTask = () => {
        addTaskLine.classList = 'container-main_addTask'
        taskForm.classList = 'container-main-taskForm'
        inputs.classList = 'container-main-taskForm-inputs'
        title.classList = 'container-main-taskForm-inputs_title'
        body.classList = 'container-main-taskForm-inputs_description'
        buttons.classList = 'container-main-taskForm-buttons'
        cancel.classList = 'container-main-taskForm-buttons_cancel'
        submit.classList = 'container-main-taskForm-buttons_submit'

        addTaskLine.textContent = 'add task'
        cancel.textContent = 'cancel'
        submit.textContent = 'submit'

        title.setAttribute('placeholder', 'Title')
        body.setAttribute('rows', '3')
        body.setAttribute('multiline', 'false')
        body.setAttribute('placeholder', 'Description')
        cancel.setAttribute('type', 'reset')
        submit.setAttribute('type', 'reset')

        buttons.append(cancel, submit)
        inputs.append(title, body)
        taskForm.append(inputs, buttons)
        main.append(addTaskLine, taskForm)
        initEventListeners()
    }

    const initEventListeners = () => {
        addTaskLine.addEventListener('click', () => { showAddTask() })
        cancel.addEventListener('click', () => { hideAddTask() })
        submit.addEventListener('click', () => { submitTask() })
    }

    const submitTask = () => {
        const newTask = TaskFactory(title.value, body.value, false)
        projectTasks.push(newTask)
        newTask.displayTask()
        hideAddTask()
    }

    const showAddTask = () => {
        addTaskLine.style.display = 'none'
        taskForm.style.display = 'block'
    }

    const hideAddTask = () => {
        addTaskLine.style.display = 'block'
        taskForm.style.display = 'none'
    }

    console.log(UI.myProjects);


    return {
        buildAddTask,
        hideAddTask,
        showAddTask,
        submitTask,
        initEventListeners,
    }
}


const navFormFactory = () => {
    const addProjectLine = document.createElement('div')
    const projectForm = document.createElement('form')
    const title = document.createElement('input')
    const buttons = document.createElement('div')
    const cancel = document.createElement('button')
    const submit = document.createElement('button')

    const buildNav = () => {
        addProjectLine.classList = 'container-nav_addProject'
        projectForm.classList = 'container-nav-projectForm'
        title.classList = 'container-nav-projectForm_title'
        buttons.classList = 'container-nav-projectForm-buttons'
        cancel.classList = 'container-nav-projectForm-buttons_cancel'
        submit.classList = 'container-nav-projectForm-buttons_submit'

        addProjectLine.textContent = 'add project'
        cancel.textContent = 'cancel'
        submit.textContent = 'submit'

        title.setAttribute('placeholder', 'Title')
        cancel.setAttribute('type', 'reset')
        submit.setAttribute('type', 'reset')

        buttons.append(cancel, submit)
        projectForm.append(title, buttons)
        nav.append(addProjectLine, projectForm)
        initEventListeners()
    }

    const initEventListeners = () => {
        addProjectLine.addEventListener('click', () => { showAddTask() })
        cancel.addEventListener('click', () => { hideAddTask() })
        submit.addEventListener('click', () => { submitTask() })
    }

    const submitTask = () => {
        const newProject = ProjectFactory(title.value)
        UI.addProject(newProject)
        newProject.displayProject()
        UI.resetMain()
        newProject.initialize()
        hideAddTask()
    }

    const showAddTask = () => {
        addProjectLine.style.display = 'none'
        projectForm.style.display = 'flex'
    }

    const hideAddTask = () => {
        addProjectLine.style.display = 'block'
        projectForm.style.display = 'none'
    }


    return {
        buildNav,
    }

}

//reset main
const navForm = navFormFactory()
navForm.buildNav()
UI.initProject()





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGVBQWU7QUFDeEUsaURBQWlELGVBQWU7QUFDaEUsaURBQWlELGNBQWM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LnNjc3M/NzIyMyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9DaXJjdWxhckFpci1MaWdodC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjaXJjdWxhclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBbcm93MS1zdGFydF0gXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIiA2MHB4IFtyb3cxLWVuZF0gW3JvdzItc3RhcnRdIFxcXCJuYXYgbWFpbiBtYWluXFxcIiAxZnIgW3JvdzItZW5kXS8zMDBweCAxZnIgMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjaXJjdWxhclxcXCI7XFxufVxcbi5jb250YWluZXItaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIxNGRlZywgNzklLCAxMyUpO1xcbiAgei1pbmRleDogMDtcXG59XFxuLmNvbnRhaW5lci1uYXYge1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMGRlZywgMCUsIDk3JSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDE1cHggMCA1MHB4O1xcbn1cXG4uY29udGFpbmVyLW5hdl9wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAycHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGN1YmljLWJlemllcigwLjUsIDEsIDAuNSwgMSk7XFxufVxcbi5jb250YWluZXItbmF2X3Byb2plY3QtLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMGRlZywgMCUsIDgwJSk7XFxufVxcbi5jb250YWluZXItbmF2X2FkZFByb2plY3Qge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuLmNvbnRhaW5lci1uYXZfYWRkUHJvamVjdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIrIFxcXCI7XFxufVxcbi5jb250YWluZXItbmF2LXByb2plY3RGb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuLmNvbnRhaW5lci1uYXYtcHJvamVjdEZvcm1fdGl0bGUge1xcbiAgYm9yZGVyOiAycHggc29saWQgaHNsKDBkZWcsIDAlLCA4MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXG59XFxuLmNvbnRhaW5lci1uYXYtcHJvamVjdEZvcm0tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5jb250YWluZXItbmF2LXByb2plY3RGb3JtLWJ1dHRvbnNfY2FuY2VsLCAuY29udGFpbmVyLW5hdi1wcm9qZWN0Rm9ybS1idXR0b25zX3N1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHggMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXG59XFxuLmNvbnRhaW5lci1uYXYtcHJvamVjdEZvcm0tYnV0dG9uc19jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcsIDAlLCA4MCUpO1xcbn1cXG4uY29udGFpbmVyLW5hdi1wcm9qZWN0Rm9ybS1idXR0b25zX3N1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMGRlZywgMTAwJSwgNzAlKTtcXG59XFxuLmNvbnRhaW5lci1tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmNvbnRhaW5lci1tYWluX2FkZFRhc2sge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG4uY29udGFpbmVyLW1haW5fYWRkVGFzazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIrIFxcXCI7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcXG4gIGJvcmRlcjogMHB4IHNvbGlkIGhzbCgwZGVnLCAwJSwgODAlKTtcXG4gIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMHB4O1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFza19jaGVja2JveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgyMTRkZWcsIDc5JSwgMTMlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjEzZGVnLCA3OSUsIDEzJSwgMC41KTtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tfY2hlY2tib3g6aG92ZXIgaW1nIHtcXG4gIG9wYWNpdHk6IDUwJTtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2staW5mb190aXRsZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2staW5mb19ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrRm9ybS1pbnB1dHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDJweCBzb2xpZCBoc2woMGRlZywgMCUsIDgwJSk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFza0Zvcm0taW5wdXRzX3RpdGxlLCAuY29udGFpbmVyLW1haW4tdGFza0Zvcm0taW5wdXRzX2Rlc2NyaXB0aW9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjaXJjdWxhclxcXCI7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrRm9ybS1pbnB1dHNfdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrRm9ybS1pbnB1dHNfZGVzY3JpcHRpb24ge1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjaXJjdWxhclxcXCI7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrRm9ybS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWJ1dHRvbnNfY2FuY2VsLCAuY29udGFpbmVyLW1haW4tdGFza0Zvcm0tYnV0dG9uc19zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjaXJjdWxhclxcXCI7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrRm9ybS1idXR0b25zX2NhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMGRlZywgMCUsIDgwJSk7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrRm9ybS1idXR0b25zX3N1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMGRlZywgMTAwJSwgNzAlKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlX21vZHVsZXMvX3NldHRpbmdzLXJlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9kdWxlcy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlX21vZHVsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTs7O0VBR0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBOzs7RUFHSSxTQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7QUNDSjs7QURFQTs7O0VBR0kscUJBQUE7QUNDSjs7QURFQTs7RUFFSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0o7O0FDekNBO0VBQ0ksdUJBQUE7RUFDQSw0REFBQTtBRDRDSjtBQTVDQTtFQUNJLGFBQUE7RUFDQSw0SEFDSTtFQUNKLFlBQUE7RUFDQSx1QkVGVTtBRitDZDtBQTNDSTtFQUNJLGlCQUFBO0VBQ0EsdUNFWEs7RUZZTCxVQUFBO0FBNkNSO0FBMUNJO0VBQ0ksY0FBQTtFQUNBLG9DRWZLO0VGaUJMLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQTJDUjtBQXpDUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJFbkJJO0VGb0JKLGlEQUFBO0FBMkNaO0FBekNZO0VBQ0ksb0NFN0JFO0FGd0VsQjtBQXZDUTtFQUNJLGVFN0JDO0VGOEJELG1CQUFBO0FBeUNaO0FBdkNZO0VBQ0ksYUFBQTtBQXlDaEI7QUFyQ1E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUF1Q1o7QUFyQ1k7RUFDSSxvQ0FBQTtFQUNBLG1CRTFDQTtFRjJDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVFOUNIO0VGK0NHLHVCRWxERjtBRnlGZDtBQXBDWTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBc0NoQjtBQXBDZ0I7RUFFSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJFN0RKO0VGOERJLHVCRWxFTjtBRnVHZDtBQWxDZ0I7RUFDSSxvQ0V4RUY7QUY0R2xCO0FBakNnQjtFQUNJLHNDRTNFUjtBRjhHWjtBQTdCSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBK0JSO0FBNUJRO0VBQ0ksaUJFekZEO0VGMEZDLG1CQUFBO0FBOEJaO0FBNUJZO0VBQ0ksYUFBQTtBQThCaEI7QUExQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBNEJaO0FBMUJZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSw2Q0V4SEc7QUZvSm5CO0FBekJvQjtFQUNJLFlBQUE7QUEyQnhCO0FBckJnQjtFQUNJLGlCRTlIVDtBRnFKWDtBQXBCZ0I7RUFDSSxlRWhJUDtBRnNKYjtBQWZRO0VBQ0ksYUFBQTtBQWlCWjtBQWZZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkU3SUE7QUY4SmhCO0FBZmdCO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkVuSko7RUZvSkksWUFBQTtFQUNBLGVFdEpQO0VGdUpPLHVCRTFKTjtBRjBLZDtBQWJnQjtFQUNJLGlCRTVKTjtBRjJLZDtBQVpnQjtFQUNJLFlBQUE7RUFDQSx1QkVuS047QUZpTGQ7QUFWWTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBWWhCO0FBVmdCO0VBRUksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CRS9LSjtFRmdMSSx1QkVwTE47QUYrTGQ7QUFSZ0I7RUFDSSxvQ0UxTEY7QUZvTWxCO0FBUGdCO0VBQ0ksc0NFN0xSO0FGc01aXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVwiLFwiQHVzZSAnc3R5bGVfbW9kdWxlcycgYXMgKjtcXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTpcXHJcXG4gICAgICAgIFtyb3cxLXN0YXJ0XSAnaGVhZGVyIGhlYWRlciBoZWFkZXInIDYwcHggW3JvdzEtZW5kXSBbcm93Mi1zdGFydF0gJ25hdiBtYWluIG1haW4nIDFmciBbcm93Mi1lbmRdIC8gMzAwcHggMWZyIDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xcclxcblxcclxcbiAgICAmLWhlYWRlciB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xcclxcbiAgICAgICAgei1pbmRleDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLW5hdiB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IG5hdjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LWNvbG9yO1xcclxcblxcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweCAxNXB4IDAgNTBweDtcXHJcXG5cXHJcXG4gICAgICAgICZfcHJvamVjdCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDhweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjFzICR0cmFuc2l0aW9uLWN1cnZlO1xcclxcblxcclxcbiAgICAgICAgICAgICYtLWFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LWRhcmstY29sb3I7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9hZGRQcm9qZWN0IHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDogJysgJztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLXByb2plY3RGb3JtIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcblxcclxcbiAgICAgICAgICAgICZfdGl0bGUge1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkZ3JleS1kYXJrLWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xcclxcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLWJ1dHRvbnMge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfY2FuY2VsLFxcclxcbiAgICAgICAgICAgICAgICAmX3N1Ym1pdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAmX2NhbmNlbCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS1kYXJrLWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfc3VibWl0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi1tYWluIHtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogbWFpbjtcXHJcXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6IDUwdnc7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGdhcDogMTBweDtcXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICZfYWRkVGFzayB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1iaWc7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnKyAnO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYtdGFzayB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMHB4IHNvbGlkICRncmV5LWRhcmstY29sb3I7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJl9jaGVja2JveCB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlLWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1jb2xvci10cmFucztcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLWluZm8ge1xcclxcbiAgICAgICAgICAgICAgICAmX3RpdGxlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtYmlnO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfYm9keSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICYtLWRvbmUge31cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYtdGFza0Zvcm0ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJi1pbnB1dHMge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkZ3JleS1kYXJrLWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJl90aXRsZSxcXHJcXG4gICAgICAgICAgICAgICAgJl9kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAmX3RpdGxlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtbWVkaXVtO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLWJ1dHRvbnMge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfY2FuY2VsLFxcclxcbiAgICAgICAgICAgICAgICAmX3N1Ym1pdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAmX2NhbmNlbCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS1kYXJrLWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfc3VibWl0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCIsXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdjaXJjdWxhcic7XFxyXFxuICAgIHNyYzogdXJsKC4vZm9udHMvQ2lyY3VsYXJBaXItTGlnaHQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG59XCIsXCIkYmx1ZS1jb2xvcjogaHNsKDIxNCwgNzklLCAxMyUpO1xcclxcbiRibHVlLWNvbG9yLXRyYW5zOiBoc2xhKDIxMywgNzklLCAxMyUsIDAuNSk7XFxyXFxuJGdyZXktY29sb3I6IGhzbCgwLCAwJSwgOTclKTtcXHJcXG4kZ3JleS1kYXJrLWNvbG9yOiBoc2woMCwgMCUsIDgwJSk7XFxyXFxuJHJlZC1jb2xvcjogaHNsKDAsIDEwMCUsIDcwJSk7XFxyXFxuJGZvbnQtZmFtaWx5OiAnY2lyY3VsYXInO1xcclxcbiRmb250LWJpZzogMS41cmVtO1xcclxcbiRmb250LW1lZGl1bTogMS4ycmVtO1xcclxcbiRmb250LXNtYWxsOiAxcmVtO1xcclxcbiRib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiR0cmFuc2l0aW9uLWN1cnZlOiBjdWJpYy1iZXppZXIoLjUsIDEsIC41LCAxKTtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguc2Nzcyc7XHJcbmltcG9ydCBjaGVja0ltZ1NyYyBmcm9tICcuL2ltYWdlcy9pY29ucy9jaGVjay5zdmcnXHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1tYWluJylcclxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1uYXYnKVxyXG5cclxuY29uc3QgVUkgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG15UHJvamVjdHMgPSBbXVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRQcm9qZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gUHJvamVjdEZhY3RvcnkoJ0luZGV4JylcclxuICAgICAgICBjb25zdCBpbmRleFRhc2tGb3JtID0gVGFza0Zvcm1GYWN0b3J5KGluZGV4Lm15VGFza3MpXHJcbiAgICAgICAgbXlQcm9qZWN0cy5wdXNoKGluZGV4KVxyXG4gICAgICAgIFVJLnJlc2V0TWFpbigpXHJcbiAgICAgICAgaW5kZXguZGlzcGxheVByb2plY3QoKVxyXG4gICAgICAgIGluZGV4LmRpc3BsYXlQcm9qZWN0VGFza3MoKVxyXG4gICAgICAgIGluZGV4VGFza0Zvcm0uYnVpbGRBZGRUYXNrKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldE1haW4oKSB7XHJcbiAgICAgICAgaWYgKG1haW4uY2hpbGRyZW4ubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShtYWluLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIG15UHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IGRpc3BsYXlQcm9qZWN0TGlzdCA9ICgpID0+IHtcclxuICAgIC8vICAgICBteVByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAvLyAgICAgICAgIHByb2plY3QuZGlzcGxheVByb2plY3QoKVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBteVByb2plY3RzLFxyXG4gICAgICAgIHJlc2V0TWFpbixcclxuICAgICAgICBpbml0UHJvamVjdCxcclxuICAgICAgICBhZGRQcm9qZWN0LFxyXG4gICAgICAgIC8vIGRpc3BsYXlQcm9qZWN0TGlzdCxcclxuICAgIH1cclxufSkoKVxyXG5cclxuXHJcbmNvbnN0IFByb2plY3RGYWN0b3J5ID0gKHRpdGxlVmFsdWUpID0+IHtcclxuICAgIGNvbnN0IG15VGFza3MgPSBbXVxyXG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZVZhbHVlXHJcblxyXG4gICAgY29uc3QgcHJvamVjdENvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIGNvbnN0IHByb2plY3RUYXNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuXHJcbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcclxuICAgICAgICBteVRhc2tzLnB1c2godGFzaylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKCkgPT4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdFRhc2tzID0gKCkgPT4ge1xyXG4gICAgICAgIG15VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgdGFzayA9IFRhc2tGYWN0b3J5KHRhc2sudGl0bGUsIHRhc2suZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgIHRhc2suZGlzcGxheVRhc2soKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RDb250LmNsYXNzTGlzdCA9ICdjb250YWluZXItbmF2X3Byb2plY3QnXHJcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVcclxuICAgICAgICBwcm9qZWN0VGFza0NvdW50LnRleHRDb250ZW50ID0gbXlUYXNrcy5sZW5ndGhcclxuICAgICAgICBwcm9qZWN0Q29udC5hcHBlbmQocHJvamVjdFRpdGxlLCBwcm9qZWN0VGFza0NvdW50KVxyXG4gICAgICAgIG5hdi5wcmVwZW5kKHByb2plY3RDb250KVxyXG4gICAgICAgIGluaXRFdmVudExpc3RlbmVycygpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5pdEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBVSS5yZXNldE1haW4oKVxyXG4gICAgICAgICAgICBtYWtlQWN0aXZlKClcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VGFza3MoKVxyXG4gICAgICAgIG1ha2VBY3RpdmUoKVxyXG4gICAgICAgIGNvbnN0IG15Rm9ybSA9IFRhc2tGb3JtRmFjdG9yeShteVRhc2tzKVxyXG4gICAgICAgIG15Rm9ybS5idWlsZEFkZFRhc2soKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ha2VBY3RpdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShuYXYuY2hpbGRyZW4pLmZvckVhY2gocHJvamVjdCA9PiB7IHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFpbmVyLW5hdl9wcm9qZWN0LS1hY3RpdmUnKSB9KTtcclxuICAgICAgICBwcm9qZWN0Q29udC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItbmF2X3Byb2plY3QtLWFjdGl2ZScpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBteVRhc2tzLFxyXG4gICAgICAgIGluaXRpYWxpemUsXHJcbiAgICAgICAgYWRkVGFzayxcclxuICAgICAgICByZW1vdmVUYXNrLFxyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VGFza3MsXHJcbiAgICAgICAgZGlzcGxheVByb2plY3QsXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBUYXNrRmFjdG9yeSA9ICh0aXRsZVZhbCwgYm9keVZhbCwgY29tcGxldGlvblZhbCkgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZVZhbFxyXG4gICAgY29uc3QgYm9keSA9IGJvZHlWYWxcclxuICAgIGxldCBjb21wbGV0aW9uID0gY29tcGxldGlvblZhbCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBjb21wbGV0aW9uVmFsXHJcbiAgICBsZXQgY2xpY2tlZCA9IGZhbHNlXHJcblxyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjb25zdCBjaGVja0ltZyA9IG5ldyBJbWFnZSgxMywgMTMpXHJcbiAgICBjb25zdCB0aXRsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBjb25zdCBib2R5RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cclxuICAgIGNvbnN0IGNoZWNrYm94Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29tcGxldGlvbiA9ICFjb21wbGV0aW9uXHJcbiAgICAgICAgIWNsaWNrZWQgPyBjaGVja0ltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyA6IGNoZWNrSW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBjbGlja2VkID0gIWNsaWNrZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja2JveE1vdXNlT3ZlciA9IChpbWFnZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2xpY2tlZCkgaW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja2JveE1vdXNlT3V0ID0gKGltYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjbGlja2VkKSBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbGl6ZVRhc2tFdmVudExpc3RlbmVycyA9IChjaGVja2JveCwgaW1hZ2UpID0+IHtcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgY2hlY2tib3hDbGljaygpIH0pXHJcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4geyBjaGVja2JveE1vdXNlT3ZlcihpbWFnZSkgfSlcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHsgY2hlY2tib3hNb3VzZU91dChpbWFnZSkgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5VGFzaygpIHtcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrJ1xyXG4gICAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrLWluZm8nXHJcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluLXRhc2tfY2hlY2tib3gnXHJcbiAgICAgICAgdGl0bGVFbGVtLmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrLWluZm9fdGl0bGUnXHJcbiAgICAgICAgYm9keUVsZW0uY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluLXRhc2staW5mb19ib2R5J1xyXG4gICAgICAgIGNoZWNrSW1nLnN0eWxlLmRpc3BsYXkgPSBjb21wbGV0aW9uID8gJ2Jsb2NrJyA6ICdub25lJ1xyXG4gICAgICAgIHRpdGxlRWxlbS50ZXh0Q29udGVudCA9IHRpdGxlID8gdGl0bGUgOiAnTm8gVGl0bGUnXHJcbiAgICAgICAgYm9keUVsZW0udGV4dENvbnRlbnQgPSBib2R5XHJcbiAgICAgICAgY2hlY2tJbWcuc3JjID0gY2hlY2tJbWdTcmNcclxuXHJcblxyXG4gICAgICAgIGluaXRpYWxpemVUYXNrRXZlbnRMaXN0ZW5lcnMoY2hlY2tib3gsIGNoZWNrSW1nKVxyXG4gICAgICAgIGNoZWNrYm94LmFwcGVuZChjaGVja0ltZylcclxuICAgICAgICB0YXNrSW5mby5hcHBlbmQodGl0bGVFbGVtLCBib2R5RWxlbSlcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChjaGVja2JveCwgdGFza0luZm8pXHJcbiAgICAgICAgbWFpbi5wcmVwZW5kKHRhc2tDb250YWluZXIpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coVUkubXlQcm9qZWN0cyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIGNvbXBsZXRpb24sXHJcbiAgICAgICAgZGlzcGxheVRhc2ssXHJcbiAgICAgICAgY2hlY2tib3hDbGljayxcclxuICAgICAgICBjaGVja2JveE1vdXNlT3ZlcixcclxuICAgICAgICBjaGVja2JveE1vdXNlT3V0XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBUYXNrRm9ybUZhY3RvcnkgPSAocHJvamVjdFRhc2tzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYWRkVGFza0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuICAgIGNvbnN0IGJ1aWxkQWRkVGFzayA9ICgpID0+IHtcclxuICAgICAgICBhZGRUYXNrTGluZS5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW5fYWRkVGFzaydcclxuICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW4tdGFza0Zvcm0nXHJcbiAgICAgICAgaW5wdXRzLmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrRm9ybS1pbnB1dHMnXHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluLXRhc2tGb3JtLWlucHV0c190aXRsZSdcclxuICAgICAgICBib2R5LmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrRm9ybS1pbnB1dHNfZGVzY3JpcHRpb24nXHJcbiAgICAgICAgYnV0dG9ucy5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW4tdGFza0Zvcm0tYnV0dG9ucydcclxuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluLXRhc2tGb3JtLWJ1dHRvbnNfY2FuY2VsJ1xyXG4gICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW4tdGFza0Zvcm0tYnV0dG9uc19zdWJtaXQnXHJcblxyXG4gICAgICAgIGFkZFRhc2tMaW5lLnRleHRDb250ZW50ID0gJ2FkZCB0YXNrJ1xyXG4gICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdjYW5jZWwnXHJcbiAgICAgICAgc3VibWl0LnRleHRDb250ZW50ID0gJ3N1Ym1pdCdcclxuXHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpXHJcbiAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMycpXHJcbiAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoJ211bHRpbGluZScsICdmYWxzZScpXHJcbiAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJylcclxuICAgICAgICBjYW5jZWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3Jlc2V0JylcclxuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3Jlc2V0JylcclxuXHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmQoY2FuY2VsLCBzdWJtaXQpXHJcbiAgICAgICAgaW5wdXRzLmFwcGVuZCh0aXRsZSwgYm9keSlcclxuICAgICAgICB0YXNrRm9ybS5hcHBlbmQoaW5wdXRzLCBidXR0b25zKVxyXG4gICAgICAgIG1haW4uYXBwZW5kKGFkZFRhc2tMaW5lLCB0YXNrRm9ybSlcclxuICAgICAgICBpbml0RXZlbnRMaXN0ZW5lcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBhZGRUYXNrTGluZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2hvd0FkZFRhc2soKSB9KVxyXG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgaGlkZUFkZFRhc2soKSB9KVxyXG4gICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc3VibWl0VGFzaygpIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VibWl0VGFzayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gVGFza0ZhY3RvcnkodGl0bGUudmFsdWUsIGJvZHkudmFsdWUsIGZhbHNlKVxyXG4gICAgICAgIHByb2plY3RUYXNrcy5wdXNoKG5ld1Rhc2spXHJcbiAgICAgICAgbmV3VGFzay5kaXNwbGF5VGFzaygpXHJcbiAgICAgICAgaGlkZUFkZFRhc2soKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dBZGRUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFRhc2tMaW5lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpZGVBZGRUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFRhc2tMaW5lLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFVJLm15UHJvamVjdHMpO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJ1aWxkQWRkVGFzayxcclxuICAgICAgICBoaWRlQWRkVGFzayxcclxuICAgICAgICBzaG93QWRkVGFzayxcclxuICAgICAgICBzdWJtaXRUYXNrLFxyXG4gICAgICAgIGluaXRFdmVudExpc3RlbmVycyxcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IG5hdkZvcm1GYWN0b3J5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWRkUHJvamVjdExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbiAgICBjb25zdCBidWlsZE5hdiA9ICgpID0+IHtcclxuICAgICAgICBhZGRQcm9qZWN0TGluZS5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW5hdl9hZGRQcm9qZWN0J1xyXG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdCA9ICdjb250YWluZXItbmF2LXByb2plY3RGb3JtJ1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdCA9ICdjb250YWluZXItbmF2LXByb2plY3RGb3JtX3RpdGxlJ1xyXG4gICAgICAgIGJ1dHRvbnMuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1uYXYtcHJvamVjdEZvcm0tYnV0dG9ucydcclxuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1uYXYtcHJvamVjdEZvcm0tYnV0dG9uc19jYW5jZWwnXHJcbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdCA9ICdjb250YWluZXItbmF2LXByb2plY3RGb3JtLWJ1dHRvbnNfc3VibWl0J1xyXG5cclxuICAgICAgICBhZGRQcm9qZWN0TGluZS50ZXh0Q29udGVudCA9ICdhZGQgcHJvamVjdCdcclxuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnY2FuY2VsJ1xyXG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdzdWJtaXQnXHJcblxyXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKVxyXG4gICAgICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmVzZXQnKVxyXG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmVzZXQnKVxyXG5cclxuICAgICAgICBidXR0b25zLmFwcGVuZChjYW5jZWwsIHN1Ym1pdClcclxuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmQodGl0bGUsIGJ1dHRvbnMpXHJcbiAgICAgICAgbmF2LmFwcGVuZChhZGRQcm9qZWN0TGluZSwgcHJvamVjdEZvcm0pXHJcbiAgICAgICAgaW5pdEV2ZW50TGlzdGVuZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkUHJvamVjdExpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNob3dBZGRUYXNrKCkgfSlcclxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGhpZGVBZGRUYXNrKCkgfSlcclxuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHN1Ym1pdFRhc2soKSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3RGYWN0b3J5KHRpdGxlLnZhbHVlKVxyXG4gICAgICAgIFVJLmFkZFByb2plY3QobmV3UHJvamVjdClcclxuICAgICAgICBuZXdQcm9qZWN0LmRpc3BsYXlQcm9qZWN0KClcclxuICAgICAgICBVSS5yZXNldE1haW4oKVxyXG4gICAgICAgIG5ld1Byb2plY3QuaW5pdGlhbGl6ZSgpXHJcbiAgICAgICAgaGlkZUFkZFRhc2soKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dBZGRUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFByb2plY3RMaW5lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGlkZUFkZFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkUHJvamVjdExpbmUuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYnVpbGROYXYsXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL3Jlc2V0IG1haW5cclxuY29uc3QgbmF2Rm9ybSA9IG5hdkZvcm1GYWN0b3J5KClcclxubmF2Rm9ybS5idWlsZE5hdigpXHJcblVJLmluaXRQcm9qZWN0KClcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==