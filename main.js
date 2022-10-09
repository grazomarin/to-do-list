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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100vh;\n  width: 100vw;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  font-weight: 500;\n}\n\np {\n  margin: 0;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n@font-face {\n  font-family: \"circular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n}\n.container {\n  display: grid;\n  grid-template: [row1-start] \"header header header\" 60px [row1-end] [row2-start] \"nav main main\" 1fr [row2-end]/300px 1fr 1fr;\n  height: 100%;\n  font-family: \"circular\";\n}\n.container-header {\n  grid-area: header;\n  background-color: hsl(214deg, 79%, 13%);\n  z-index: 0;\n}\n.container-nav {\n  grid-area: nav;\n  background-color: hsl(0deg, 0%, 97%);\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n  padding: 20px 15px 0 50px;\n}\n.container-nav_project {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 16px;\n  border-radius: 8px;\n  transition: all 0.1s cubic-bezier(0.5, 1, 0.5, 1);\n}\n.container-nav_project--active {\n  background-color: hsl(0deg, 0%, 80%);\n}\n.container-nav_addProject {\n  text-align: center;\n  font-size: 1rem;\n  height: min-content;\n}\n.container-nav_addProject::before {\n  content: \"+ \";\n}\n.container-nav-projectForm {\n  display: none;\n  flex-flow: column;\n}\n.container-nav-projectForm_title {\n  border: 2px solid hsl(0deg, 0%, 80%);\n  border-radius: 12px;\n  outline: none;\n  padding: 5px;\n  font-size: 1rem;\n  font-family: \"circular\";\n}\n.container-nav-projectForm-buttons {\n  display: flex;\n  justify-content: end;\n  margin-top: 5px;\n  gap: 10px;\n}\n.container-nav-projectForm-buttons_cancel, .container-nav-projectForm-buttons_submit {\n  background-color: white;\n  border: none;\n  box-shadow: none;\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-family: \"circular\";\n}\n.container-nav-projectForm-buttons_cancel {\n  background-color: hsl(0deg, 0%, 80%);\n}\n.container-nav-projectForm-buttons_submit {\n  background-color: hsl(0deg, 100%, 70%);\n}\n.container-main {\n  grid-area: main;\n  margin: 20px auto;\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.container-main_addTask {\n  text-align: center;\n  font-size: 1.5rem;\n  height: min-content;\n}\n.container-main_addTask::before {\n  content: \"+ \";\n}\n.container-main-task {\n  width: 50vw;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 0 10px 0;\n  border: 0px solid hsl(0deg, 0%, 80%);\n  border-width: 0px 0px 1px 0px;\n}\n.container-main-task-info-titleCont {\n  width: 50vw;\n  display: grid;\n  grid-template-columns: min-content min-content 1fr;\n  gap: 8px;\n  align-items: center;\n}\n.container-main-task-info-titleCont > img, .container-main-task-info-titleCont_checkbox {\n  margin-top: 5px;\n}\n.container-main-task-info-titleCont > img {\n  cursor: pointer;\n  justify-self: end;\n}\n.container-main-task-info-titleCont_checkbox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid hsl(214deg, 79%, 13%);\n  background-color: hsla(213deg, 79%, 13%, 0.5);\n  cursor: pointer;\n}\n.container-main-task-info-titleCont_checkbox:hover img {\n  opacity: 50%;\n}\n.container-main-task-info-titleCont_title {\n  font-size: 1.5rem;\n}\n.container-main-task-info_body {\n  font-size: 1rem;\n}\n.container-main-taskForm {\n  display: none;\n}\n.container-main-taskForm-inputs {\n  display: flex;\n  flex-direction: column;\n  border: 2px solid hsl(0deg, 0%, 80%);\n  border-radius: 12px;\n}\n.container-main-taskForm-inputs_title, .container-main-taskForm-inputs_description {\n  border: none;\n  outline: none;\n  border-radius: 12px;\n  padding: 5px;\n  font-size: 1rem;\n  font-family: \"circular\";\n}\n.container-main-taskForm-inputs_title {\n  display: flex;\n  align-items: center;\n  font-size: 1.2rem;\n}\n.container-main-taskForm-inputs_description {\n  resize: none;\n  font-family: \"circular\";\n}\n.container-main-taskForm-buttons {\n  display: flex;\n  justify-content: end;\n  margin-top: 5px;\n  gap: 10px;\n}\n.container-main-taskForm-buttons_cancel, .container-main-taskForm-buttons_submit {\n  background-color: white;\n  border: none;\n  box-shadow: none;\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-family: \"circular\";\n}\n.container-main-taskForm-buttons_cancel {\n  background-color: hsl(0deg, 0%, 80%);\n}\n.container-main-taskForm-buttons_submit {\n  background-color: hsl(0deg, 100%, 70%);\n}", "",{"version":3,"sources":["webpack://./src/style_modules/_settings-reset.scss","webpack://./src/index.scss","webpack://./src/style_modules/_fonts.scss","webpack://./src/style_modules/_variables.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;ACCJ;;ADEA;;;EAGI,mBAAA;ACCJ;;ADEA;EACI,SAAA;EACA,UAAA;EACA,YAAA;ACCJ;;ADEA;;;EAGI,SAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,SAAA;ACCJ;;ADEA;;;EAGI,qBAAA;ACCJ;;ADEA;;EAEI,gBAAA;EACA,UAAA;EACA,SAAA;ACCJ;;ACzCA;EACI,uBAAA;EACA,4DAAA;AD4CJ;AA5CA;EACI,aAAA;EACA,4HACI;EACJ,YAAA;EACA,uBEFU;AF+Cd;AA3CI;EACI,iBAAA;EACA,uCEXK;EFYL,UAAA;AA6CR;AA1CI;EACI,cAAA;EACA,oCEfK;EFiBL,aAAA;EACA,iBAAA;EACA,SAAA;EACA,yBAAA;AA2CR;AAzCQ;EACI,aAAA;EACA,8BAAA;EACA,iBAAA;EACA,kBElBU;EFmBV,iDAAA;AA2CZ;AAzCY;EACI,oCE7BE;AFwElB;AAvCQ;EACI,kBAAA;EACA,eE9BC;EF+BD,mBAAA;AAyCZ;AAvCY;EACI,aAAA;AAyChB;AArCQ;EACI,aAAA;EACA,iBAAA;AAuCZ;AArCY;EACI,oCAAA;EACA,mBE3CI;EF4CJ,aAAA;EACA,YAAA;EACA,eE/CH;EFgDG,uBEnDF;AF0Fd;AApCY;EACI,aAAA;EACA,oBAAA;EACA,eAAA;EACA,SAAA;AAsChB;AApCgB;EAEI,uBAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBE9DA;EF+DA,uBEnEN;AFwGd;AAlCgB;EACI,oCEzEF;AF6GlB;AAjCgB;EACI,sCE5ER;AF+GZ;AA7BI;EACI,eAAA;EACA,iBAAA;EACA,WE7EK;EF8EL,aAAA;EACA,sBAAA;EACA,SAAA;AA+BR;AA5BQ;EACI,kBAAA;EACA,iBE3FD;EF4FC,mBAAA;AA8BZ;AA5BY;EACI,aAAA;AA8BhB;AA1BQ;EACI,WE9FC;EF+FD,aAAA;EACA,mBAAA;EACA,SAAA;EACA,mBAAA;EACA,oCAAA;EACA,6BAAA;AA4BZ;AAxBgB;EACI,WEzGP;EF0GO,aAAA;EACA,kDAAA;EACA,QAAA;EACA,mBAAA;AA0BpB;AAxBoB;EAEI,eAAA;AAyBxB;AAtBoB;EACI,eAAA;EACA,iBAAA;AAwBxB;AArBoB;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,uCAAA;EACA,6CE7IL;EF8IK,eAAA;AAuBxB;AApB4B;EACI,YAAA;AAsBhC;AAjBoB;EACI,iBEnJb;AFsKX;AAfgB;EACI,eEtJP;AFuKb;AAVQ;EACI,aAAA;AAYZ;AAVY;EACI,aAAA;EACA,sBAAA;EACA,oCAAA;EACA,mBEnKI;AF+KpB;AAVgB;EAEI,YAAA;EACA,aAAA;EACA,mBEzKA;EF0KA,YAAA;EACA,eE5KP;EF6KO,uBEhLN;AF2Ld;AARgB;EACI,aAAA;EACA,mBAAA;EACA,iBEpLN;AF8Ld;AAPgB;EACI,YAAA;EACA,uBE3LN;AFoMd;AALY;EACI,aAAA;EACA,oBAAA;EACA,eAAA;EACA,SAAA;AAOhB;AALgB;EAEI,uBAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBEvMA;EFwMA,uBE5MN;AFkNd;AAHgB;EACI,oCElNF;AFuNlB;AAFgB;EACI,sCErNR;AFyNZ","sourcesContent":["html {\r\n    box-sizing: border-box;\r\n    font-size: 100%;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n    margin: 0;\r\n    font-weight: 500;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n    text-decoration: none;\r\n}\r\n\r\nul,\r\nli {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}","@use 'style_modules' as *;\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template:\r\n        [row1-start] 'header header header' 60px [row1-end] [row2-start] 'nav main main' 1fr [row2-end] / 300px 1fr 1fr;\r\n    height: 100%;\r\n    font-family: $font-family;\r\n\r\n    &-header {\r\n        grid-area: header;\r\n        background-color: $blue-color;\r\n        z-index: 0;\r\n    }\r\n\r\n    &-nav {\r\n        grid-area: nav;\r\n        background-color: $grey-color;\r\n\r\n        display: flex;\r\n        flex-flow: column;\r\n        gap: 10px;\r\n        padding: 20px 15px 0 50px;\r\n\r\n        &_project {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            padding: 5px 16px;\r\n            border-radius: $border-radius-small;\r\n            transition: all .1s $transition-curve;\r\n\r\n            &--active {\r\n                background-color: $grey-dark-color;\r\n            }\r\n        }\r\n\r\n        &_addProject {\r\n            text-align: center;\r\n            font-size: $font-small;\r\n            height: min-content;\r\n\r\n            &::before {\r\n                content: '+ ';\r\n            }\r\n        }\r\n\r\n        &-projectForm {\r\n            display: none;\r\n            flex-flow: column;\r\n\r\n            &_title {\r\n                border: 2px solid $grey-dark-color;\r\n                border-radius: $border-radius-big;\r\n                outline: none;\r\n                padding: 5px;\r\n                font-size: $font-small;\r\n                font-family: $font-family;\r\n            }\r\n\r\n            &-buttons {\r\n                display: flex;\r\n                justify-content: end;\r\n                margin-top: 5px;\r\n                gap: 10px;\r\n\r\n                &_cancel,\r\n                &_submit {\r\n                    background-color: white;\r\n                    border: none;\r\n                    box-shadow: none;\r\n                    padding: 5px 12px;\r\n                    border-radius: $border-radius-big;\r\n                    font-family: $font-family;\r\n                }\r\n\r\n                &_cancel {\r\n                    background-color: $grey-dark-color;\r\n                }\r\n\r\n                &_submit {\r\n                    background-color: $red-color;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    &-main {\r\n        grid-area: main;\r\n        margin: 20px auto;\r\n        width: $task-width;\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 10px;\r\n\r\n\r\n        &_addTask {\r\n            text-align: center;\r\n            font-size: $font-big;\r\n            height: min-content;\r\n\r\n            &::before {\r\n                content: '+ ';\r\n            }\r\n        }\r\n\r\n        &-task {\r\n            width: $task-width;\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 10px;\r\n            padding: 0 0 10px 0;\r\n            border: 0px solid $grey-dark-color;\r\n            border-width: 0px 0px 1px 0px;\r\n\r\n\r\n            &-info {\r\n                &-titleCont {\r\n                    width: $task-width;\r\n                    display: grid;\r\n                    grid-template-columns: min-content min-content 1fr;\r\n                    gap: 8px;\r\n                    align-items: center;\r\n\r\n                    &>img,\r\n                    &_checkbox {\r\n                        margin-top: 5px;\r\n                    }\r\n\r\n                    &>img {\r\n                        cursor: pointer;\r\n                        justify-self: end;\r\n                    }\r\n\r\n                    &_checkbox {\r\n                        display: flex;\r\n                        align-items: center;\r\n                        justify-content: center;\r\n                        flex: 0 0 auto;\r\n                        width: 20px;\r\n                        height: 20px;\r\n                        border-radius: 50%;\r\n                        border: 2px solid $blue-color;\r\n                        background-color: $blue-color-trans;\r\n                        cursor: pointer;\r\n\r\n                        &:hover {\r\n                            img {\r\n                                opacity: 50%;\r\n                            }\r\n                        }\r\n                    }\r\n\r\n                    &_title {\r\n                        font-size: $font-big;\r\n                    }\r\n                }\r\n\r\n                &_body {\r\n                    font-size: $font-small;\r\n                }\r\n            }\r\n\r\n            &--done {}\r\n        }\r\n\r\n        &-taskForm {\r\n            display: none;\r\n\r\n            &-inputs {\r\n                display: flex;\r\n                flex-direction: column;\r\n                border: 2px solid $grey-dark-color;\r\n                border-radius: $border-radius-big;\r\n\r\n                &_title,\r\n                &_description {\r\n                    border: none;\r\n                    outline: none;\r\n                    border-radius: $border-radius-big;\r\n                    padding: 5px;\r\n                    font-size: $font-small;\r\n                    font-family: $font-family;\r\n                }\r\n\r\n                &_title {\r\n                    display: flex;\r\n                    align-items: center;\r\n                    font-size: $font-medium;\r\n                }\r\n\r\n                &_description {\r\n                    resize: none;\r\n                    font-family: $font-family;\r\n                }\r\n            }\r\n\r\n            &-buttons {\r\n                display: flex;\r\n                justify-content: end;\r\n                margin-top: 5px;\r\n                gap: 10px;\r\n\r\n                &_cancel,\r\n                &_submit {\r\n                    background-color: white;\r\n                    border: none;\r\n                    box-shadow: none;\r\n                    padding: 5px 12px;\r\n                    border-radius: $border-radius-big;\r\n                    font-family: $font-family;\r\n                }\r\n\r\n                &_cancel {\r\n                    background-color: $grey-dark-color;\r\n                }\r\n\r\n                &_submit {\r\n                    background-color: $red-color;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}","@font-face {\r\n    font-family: 'circular';\r\n    src: url(./fonts/CircularAir-Light.woff2) format('woff2');\r\n}","$blue-color: hsl(214, 79%, 13%);\r\n$blue-color-trans: hsla(213, 79%, 13%, 0.5);\r\n$grey-color: hsl(0, 0%, 97%);\r\n$grey-dark-color: hsl(0, 0%, 80%);\r\n$red-color: hsl(0, 100%, 70%);\r\n$font-family: 'circular';\r\n$font-big: 1.5rem;\r\n$font-medium: 1.2rem;\r\n$font-small: 1rem;\r\n$border-radius-big: 12px;\r\n$border-radius-small: 8px;\r\n$transition-curve: cubic-bezier(.5, 1, .5, 1);\r\n$task-width: 50vw;"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/images/icons/close.svg":
/*!************************************!*\
  !*** ./src/images/icons/close.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7509525b37f6bdfd290.svg";

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
/* harmony import */ var _images_icons_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icons/close.svg */ "./src/images/icons/close.svg");




const main = document.querySelector('.container-main')
const nav = document.querySelector('.container-nav')

const UI = (() => {

    const myProjects = []

    function initProject() {
        const index = ProjectFactory('Index')
        myProjects.push(index)
        UI.resetMain()
        index.displayProject()
        index.initialize()
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
            task = TaskFactory(task.title, task.description, task.completion, myTasks)
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


const TaskFactory = (titleVal, bodyVal, completionVal, projectTasks) => {
    const title = titleVal
    const body = bodyVal
    let completion = completionVal
    let clicked = false

    const taskContainer = document.createElement('div')
    const taskInfo = document.createElement('div')
    const checkbox = document.createElement('button')
    const checkImg = new Image(11, 11)
    const closeImg = new Image(18, 18)
    const titleCont = document.createElement('div')
    const titleElem = document.createElement('p')
    const bodyElem = document.createElement('p')

    const changeCompletion = () => {
        projectTasks.find(task => { if (task.title === title && task.body === body) task.completion = !task.completion })
        completion = !completion
        !clicked ? checkImg.style.display = 'block' : checkImg.style.display = 'none'
        clicked = !clicked
    }

    const remove = () => {
        taskContainer.remove()
        projectTasks.find(task => { if (task.title === title && task.body === body) projectTasks.splice(projectTasks.indexOf(task), 1) })
    }

    const checkboxMouseOver = () => {
        if (!clicked) checkImg.style.display = 'block'
    }

    const checkboxMouseOut = () => {
        if (!clicked) checkImg.style.display = 'none'
    }

    const initializeTaskEventListeners = () => {
        checkbox.addEventListener('click', () => { changeCompletion() })
        checkbox.addEventListener('mouseover', () => { checkboxMouseOver() })
        checkbox.addEventListener('mouseout', () => { checkboxMouseOut() })
        closeImg.addEventListener('click', () => { remove() })
    }

    function displayTask() {
        taskContainer.classList = 'container-main-task'
        taskInfo.classList = 'container-main-task-info'
        checkbox.classList = 'container-main-task-info-titleCont_checkbox'
        closeImg.classList = 'container-main-task-title_close'
        titleCont.classList = 'container-main-task-info-titleCont'
        titleElem.classList = 'container-main-task-info-titleCont_title'
        bodyElem.classList = 'container-main-task-info_body'

        checkImg.style.display = completion ? 'block' : 'none'
        titleElem.textContent = title ? title : 'No Title'
        bodyElem.textContent = body

        closeImg.src = _images_icons_close_svg__WEBPACK_IMPORTED_MODULE_2__
        checkImg.src = _images_icons_check_svg__WEBPACK_IMPORTED_MODULE_1__


        initializeTaskEventListeners(checkbox, checkImg)
        checkbox.append(checkImg)
        titleCont.append(checkbox, titleElem, closeImg)
        taskInfo.append(titleCont, bodyElem)
        taskContainer.append(taskInfo)
        main.prepend(taskContainer)
    }

    console.log(UI.myProjects);

    return {
        title,
        body,
        completion,
        displayTask,
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
        const newTask = TaskFactory(title.value, body.value, false, projectTasks)
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
        UI.resetMain()
        newProject.displayProject()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9EQUFXO0FBQ2xDLHVCQUF1QixvREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxlQUFlO0FBQ3JFLGlEQUFpRCxlQUFlO0FBQ2hFLGlEQUFpRCxjQUFjO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxlQUFlO0FBQ3hFLGlEQUFpRCxlQUFlO0FBQ2hFLGlEQUFpRCxjQUFjO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ2lyY3VsYXJBaXItTGlnaHQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2lyY3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogW3JvdzEtc3RhcnRdIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCIgNjBweCBbcm93MS1lbmRdIFtyb3cyLXN0YXJ0XSBcXFwibmF2IG1haW4gbWFpblxcXCIgMWZyIFtyb3cyLWVuZF0vMzAwcHggMWZyIDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2lyY3VsYXJcXFwiO1xcbn1cXG4uY29udGFpbmVyLWhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTRkZWcsIDc5JSwgMTMlKTtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5jb250YWluZXItbmF2IHtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcsIDAlLCA5NyUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweCAxNXB4IDAgNTBweDtcXG59XFxuLmNvbnRhaW5lci1uYXZfcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNXB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBjdWJpYy1iZXppZXIoMC41LCAxLCAwLjUsIDEpO1xcbn1cXG4uY29udGFpbmVyLW5hdl9wcm9qZWN0LS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcsIDAlLCA4MCUpO1xcbn1cXG4uY29udGFpbmVyLW5hdl9hZGRQcm9qZWN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcbi5jb250YWluZXItbmF2X2FkZFByb2plY3Q6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiKyBcXFwiO1xcbn1cXG4uY29udGFpbmVyLW5hdi1wcm9qZWN0Rm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcbi5jb250YWluZXItbmF2LXByb2plY3RGb3JtX3RpdGxlIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgwZGVnLCAwJSwgODAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjaXJjdWxhclxcXCI7XFxufVxcbi5jb250YWluZXItbmF2LXByb2plY3RGb3JtLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uY29udGFpbmVyLW5hdi1wcm9qZWN0Rm9ybS1idXR0b25zX2NhbmNlbCwgLmNvbnRhaW5lci1uYXYtcHJvamVjdEZvcm0tYnV0dG9uc19zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjaXJjdWxhclxcXCI7XFxufVxcbi5jb250YWluZXItbmF2LXByb2plY3RGb3JtLWJ1dHRvbnNfY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwZGVnLCAwJSwgODAlKTtcXG59XFxuLmNvbnRhaW5lci1uYXYtcHJvamVjdEZvcm0tYnV0dG9uc19zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcsIDEwMCUsIDcwJSk7XFxufVxcbi5jb250YWluZXItbWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcbi5jb250YWluZXItbWFpbl9hZGRUYXNrIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuLmNvbnRhaW5lci1tYWluX2FkZFRhc2s6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiKyBcXFwiO1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFzayB7XFxuICB3aWR0aDogNTB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcXG4gIGJvcmRlcjogMHB4IHNvbGlkIGhzbCgwZGVnLCAwJSwgODAlKTtcXG4gIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMHB4O1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFzay1pbmZvLXRpdGxlQ29udCB7XFxuICB3aWR0aDogNTB2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IDFmcjtcXG4gIGdhcDogOHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2staW5mby10aXRsZUNvbnQgPiBpbWcsIC5jb250YWluZXItbWFpbi10YXNrLWluZm8tdGl0bGVDb250X2NoZWNrYm94IHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2staW5mby10aXRsZUNvbnQgPiBpbWcge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrLWluZm8tdGl0bGVDb250X2NoZWNrYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgaHNsKDIxNGRlZywgNzklLCAxMyUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMTNkZWcsIDc5JSwgMTMlLCAwLjUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFzay1pbmZvLXRpdGxlQ29udF9jaGVja2JveDpob3ZlciBpbWcge1xcbiAgb3BhY2l0eTogNTAlO1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFzay1pbmZvLXRpdGxlQ29udF90aXRsZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2staW5mb19ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrRm9ybS1pbnB1dHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDJweCBzb2xpZCBoc2woMGRlZywgMCUsIDgwJSk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFza0Zvcm0taW5wdXRzX3RpdGxlLCAuY29udGFpbmVyLW1haW4tdGFza0Zvcm0taW5wdXRzX2Rlc2NyaXB0aW9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjaXJjdWxhclxcXCI7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrRm9ybS1pbnB1dHNfdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWlucHV0c19kZXNjcmlwdGlvbiB7XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFza0Zvcm0tYnV0dG9uc19jYW5jZWwsIC5jb250YWluZXItbWFpbi10YXNrRm9ybS1idXR0b25zX3N1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHggMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWJ1dHRvbnNfY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwZGVnLCAwJSwgODAlKTtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWJ1dHRvbnNfc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwZGVnLCAxMDAlLCA3MCUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9kdWxlcy9fc2V0dGluZ3MtcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9tb2R1bGVzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9kdWxlcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBOzs7RUFHSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7OztFQUdJLFNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtBQ0NKOztBREVBOzs7RUFHSSxxQkFBQTtBQ0NKOztBREVBOztFQUVJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNDSjs7QUN6Q0E7RUFDSSx1QkFBQTtFQUNBLDREQUFBO0FENENKO0FBNUNBO0VBQ0ksYUFBQTtFQUNBLDRIQUNJO0VBQ0osWUFBQTtFQUNBLHVCRUZVO0FGK0NkO0FBM0NJO0VBQ0ksaUJBQUE7RUFDQSx1Q0VYSztFRllMLFVBQUE7QUE2Q1I7QUExQ0k7RUFDSSxjQUFBO0VBQ0Esb0NFZks7RUZpQkwsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBMkNSO0FBekNRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkVsQlU7RUZtQlYsaURBQUE7QUEyQ1o7QUF6Q1k7RUFDSSxvQ0U3QkU7QUZ3RWxCO0FBdkNRO0VBQ0ksa0JBQUE7RUFDQSxlRTlCQztFRitCRCxtQkFBQTtBQXlDWjtBQXZDWTtFQUNJLGFBQUE7QUF5Q2hCO0FBckNRO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBdUNaO0FBckNZO0VBQ0ksb0NBQUE7RUFDQSxtQkUzQ0k7RUY0Q0osYUFBQTtFQUNBLFlBQUE7RUFDQSxlRS9DSDtFRmdERyx1QkVuREY7QUYwRmQ7QUFwQ1k7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQXNDaEI7QUFwQ2dCO0VBRUksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CRTlEQTtFRitEQSx1QkVuRU47QUZ3R2Q7QUFsQ2dCO0VBQ0ksb0NFekVGO0FGNkdsQjtBQWpDZ0I7RUFDSSxzQ0U1RVI7QUYrR1o7QUE3Qkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXRTdFSztFRjhFTCxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBK0JSO0FBNUJRO0VBQ0ksa0JBQUE7RUFDQSxpQkUzRkQ7RUY0RkMsbUJBQUE7QUE4Qlo7QUE1Qlk7RUFDSSxhQUFBO0FBOEJoQjtBQTFCUTtFQUNJLFdFOUZDO0VGK0ZELGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUE0Qlo7QUF4QmdCO0VBQ0ksV0V6R1A7RUYwR08sYUFBQTtFQUNBLGtEQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBMEJwQjtBQXhCb0I7RUFFSSxlQUFBO0FBeUJ4QjtBQXRCb0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUF3QnhCO0FBckJvQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLDZDRTdJTDtFRjhJSyxlQUFBO0FBdUJ4QjtBQXBCNEI7RUFDSSxZQUFBO0FBc0JoQztBQWpCb0I7RUFDSSxpQkVuSmI7QUZzS1g7QUFmZ0I7RUFDSSxlRXRKUDtBRnVLYjtBQVZRO0VBQ0ksYUFBQTtBQVlaO0FBVlk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CRW5LSTtBRitLcEI7QUFWZ0I7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CRXpLQTtFRjBLQSxZQUFBO0VBQ0EsZUU1S1A7RUY2S08sdUJFaExOO0FGMkxkO0FBUmdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJFcExOO0FGOExkO0FBUGdCO0VBQ0ksWUFBQTtFQUNBLHVCRTNMTjtBRm9NZDtBQUxZO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFPaEI7QUFMZ0I7RUFFSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJFdk1BO0VGd01BLHVCRTVNTjtBRmtOZDtBQUhnQjtFQUNJLG9DRWxORjtBRnVObEI7QUFGZ0I7RUFDSSxzQ0VyTlI7QUZ5TlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTp2aXNpdGVkLFxcclxcbmE6YWN0aXZlIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCxcXHJcXG5saSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XCIsXCJAdXNlICdzdHlsZV9tb2R1bGVzJyBhcyAqO1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOlxcclxcbiAgICAgICAgW3JvdzEtc3RhcnRdICdoZWFkZXIgaGVhZGVyIGhlYWRlcicgNjBweCBbcm93MS1lbmRdIFtyb3cyLXN0YXJ0XSAnbmF2IG1haW4gbWFpbicgMWZyIFtyb3cyLWVuZF0gLyAzMDBweCAxZnIgMWZyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XFxyXFxuXFxyXFxuICAgICYtaGVhZGVyIHtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XFxyXFxuICAgICAgICB6LWluZGV4OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtbmF2IHtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktY29sb3I7XFxyXFxuXFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHggMCA1MHB4O1xcclxcblxcclxcbiAgICAgICAgJl9wcm9qZWN0IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbWFsbDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjFzICR0cmFuc2l0aW9uLWN1cnZlO1xcclxcblxcclxcbiAgICAgICAgICAgICYtLWFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LWRhcmstY29sb3I7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9hZGRQcm9qZWN0IHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zbWFsbDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcblxcclxcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcrICc7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJi1wcm9qZWN0Rm9ybSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmX3RpdGxlIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGdyZXktZGFyay1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmlnO1xcclxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc21hbGw7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICYtYnV0dG9ucyB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIGdhcDogMTBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJl9jYW5jZWwsXFxyXFxuICAgICAgICAgICAgICAgICZfc3VibWl0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmlnO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAmX2NhbmNlbCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS1kYXJrLWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfc3VibWl0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi1tYWluIHtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogbWFpbjtcXHJcXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6ICR0YXNrLXdpZHRoO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAmX2FkZFRhc2sge1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LWJpZztcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcblxcclxcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcrICc7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJi10YXNrIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogJHRhc2std2lkdGg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMHB4IHNvbGlkICRncmV5LWRhcmstY29sb3I7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwcHg7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgJi1pbmZvIHtcXHJcXG4gICAgICAgICAgICAgICAgJi10aXRsZUNvbnQge1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR0YXNrLXdpZHRoO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgMWZyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiA4cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJj5pbWcsXFxyXFxuICAgICAgICAgICAgICAgICAgICAmX2NoZWNrYm94IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmPmltZyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJl9jaGVja2JveCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGJsdWUtY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3ItdHJhbnM7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogNTAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJl90aXRsZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1iaWc7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJl9ib2R5IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc21hbGw7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJi0tZG9uZSB7fVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJi10YXNrRm9ybSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmLWlucHV0cyB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRncmV5LWRhcmstY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJpZztcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJl90aXRsZSxcXHJcXG4gICAgICAgICAgICAgICAgJl9kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmlnO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zbWFsbDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJl90aXRsZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtbWVkaXVtO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLWJ1dHRvbnMge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfY2FuY2VsLFxcclxcbiAgICAgICAgICAgICAgICAmX3N1Ym1pdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJpZztcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJl9jYW5jZWwge1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktZGFyay1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAmX3N1Ym1pdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiLFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnY2lyY3VsYXInO1xcclxcbiAgICBzcmM6IHVybCguL2ZvbnRzL0NpcmN1bGFyQWlyLUxpZ2h0LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxyXFxufVwiLFwiJGJsdWUtY29sb3I6IGhzbCgyMTQsIDc5JSwgMTMlKTtcXHJcXG4kYmx1ZS1jb2xvci10cmFuczogaHNsYSgyMTMsIDc5JSwgMTMlLCAwLjUpO1xcclxcbiRncmV5LWNvbG9yOiBoc2woMCwgMCUsIDk3JSk7XFxyXFxuJGdyZXktZGFyay1jb2xvcjogaHNsKDAsIDAlLCA4MCUpO1xcclxcbiRyZWQtY29sb3I6IGhzbCgwLCAxMDAlLCA3MCUpO1xcclxcbiRmb250LWZhbWlseTogJ2NpcmN1bGFyJztcXHJcXG4kZm9udC1iaWc6IDEuNXJlbTtcXHJcXG4kZm9udC1tZWRpdW06IDEuMnJlbTtcXHJcXG4kZm9udC1zbWFsbDogMXJlbTtcXHJcXG4kYm9yZGVyLXJhZGl1cy1iaWc6IDEycHg7XFxyXFxuJGJvcmRlci1yYWRpdXMtc21hbGw6IDhweDtcXHJcXG4kdHJhbnNpdGlvbi1jdXJ2ZTogY3ViaWMtYmV6aWVyKC41LCAxLCAuNSwgMSk7XFxyXFxuJHRhc2std2lkdGg6IDUwdnc7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgY2hlY2tJbWdTcmMgZnJvbSAnLi9pbWFnZXMvaWNvbnMvY2hlY2suc3ZnJ1xyXG5pbXBvcnQgY2xvc2VJbWdTcmMgZnJvbSAnLi9pbWFnZXMvaWNvbnMvY2xvc2Uuc3ZnJ1xyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItbWFpbicpXHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItbmF2JylcclxuXHJcbmNvbnN0IFVJID0gKCgpID0+IHtcclxuXHJcbiAgICBjb25zdCBteVByb2plY3RzID0gW11cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0UHJvamVjdCgpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IFByb2plY3RGYWN0b3J5KCdJbmRleCcpXHJcbiAgICAgICAgbXlQcm9qZWN0cy5wdXNoKGluZGV4KVxyXG4gICAgICAgIFVJLnJlc2V0TWFpbigpXHJcbiAgICAgICAgaW5kZXguZGlzcGxheVByb2plY3QoKVxyXG4gICAgICAgIGluZGV4LmluaXRpYWxpemUoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0TWFpbigpIHtcclxuICAgICAgICBpZiAobWFpbi5jaGlsZHJlbi5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKG1haW4uY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgbXlQcm9qZWN0cy5wdXNoKHByb2plY3QpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgZGlzcGxheVByb2plY3RMaXN0ID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIG15UHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgIC8vICAgICAgICAgcHJvamVjdC5kaXNwbGF5UHJvamVjdCgpXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG15UHJvamVjdHMsXHJcbiAgICAgICAgcmVzZXRNYWluLFxyXG4gICAgICAgIGluaXRQcm9qZWN0LFxyXG4gICAgICAgIGFkZFByb2plY3QsXHJcbiAgICAgICAgLy8gZGlzcGxheVByb2plY3RMaXN0LFxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5cclxuY29uc3QgUHJvamVjdEZhY3RvcnkgPSAodGl0bGVWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgbXlUYXNrcyA9IFtdXHJcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlVmFsdWVcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0Q29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgY29uc3QgcHJvamVjdFRhc2tDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG5cclxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xyXG4gICAgICAgIG15VGFza3MucHVzaCh0YXNrKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0VGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgbXlUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICB0YXNrID0gVGFza0ZhY3RvcnkodGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5jb21wbGV0aW9uLCBteVRhc2tzKVxyXG4gICAgICAgICAgICB0YXNrLmRpc3BsYXlUYXNrKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdCA9ICgpID0+IHtcclxuICAgICAgICBwcm9qZWN0Q29udC5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW5hdl9wcm9qZWN0J1xyXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlXHJcbiAgICAgICAgcHJvamVjdFRhc2tDb3VudC50ZXh0Q29udGVudCA9IG15VGFza3MubGVuZ3RoXHJcbiAgICAgICAgcHJvamVjdENvbnQuYXBwZW5kKHByb2plY3RUaXRsZSwgcHJvamVjdFRhc2tDb3VudClcclxuICAgICAgICBuYXYucHJlcGVuZChwcm9qZWN0Q29udClcclxuICAgICAgICBpbml0RXZlbnRMaXN0ZW5lcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBwcm9qZWN0Q29udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgVUkucmVzZXRNYWluKClcclxuICAgICAgICAgICAgbWFrZUFjdGl2ZSgpXHJcbiAgICAgICAgICAgIGluaXRpYWxpemUoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICBkaXNwbGF5UHJvamVjdFRhc2tzKClcclxuICAgICAgICBtYWtlQWN0aXZlKClcclxuICAgICAgICBjb25zdCBteUZvcm0gPSBUYXNrRm9ybUZhY3RvcnkobXlUYXNrcylcclxuICAgICAgICBteUZvcm0uYnVpbGRBZGRUYXNrKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYWtlQWN0aXZlID0gKCkgPT4ge1xyXG4gICAgICAgIEFycmF5LmZyb20obmF2LmNoaWxkcmVuKS5mb3JFYWNoKHByb2plY3QgPT4geyBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhaW5lci1uYXZfcHJvamVjdC0tYWN0aXZlJykgfSk7XHJcbiAgICAgICAgcHJvamVjdENvbnQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLW5hdl9wcm9qZWN0LS1hY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgbXlUYXNrcyxcclxuICAgICAgICBpbml0aWFsaXplLFxyXG4gICAgICAgIGFkZFRhc2ssXHJcbiAgICAgICAgcmVtb3ZlVGFzayxcclxuICAgICAgICBkaXNwbGF5UHJvamVjdFRhc2tzLFxyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0LFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgVGFza0ZhY3RvcnkgPSAodGl0bGVWYWwsIGJvZHlWYWwsIGNvbXBsZXRpb25WYWwsIHByb2plY3RUYXNrcykgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZVZhbFxyXG4gICAgY29uc3QgYm9keSA9IGJvZHlWYWxcclxuICAgIGxldCBjb21wbGV0aW9uID0gY29tcGxldGlvblZhbFxyXG4gICAgbGV0IGNsaWNrZWQgPSBmYWxzZVxyXG5cclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3QgY2hlY2tJbWcgPSBuZXcgSW1hZ2UoMTEsIDExKVxyXG4gICAgY29uc3QgY2xvc2VJbWcgPSBuZXcgSW1hZ2UoMTgsIDE4KVxyXG4gICAgY29uc3QgdGl0bGVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHRpdGxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgYm9keUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDb21wbGV0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RUYXNrcy5maW5kKHRhc2sgPT4geyBpZiAodGFzay50aXRsZSA9PT0gdGl0bGUgJiYgdGFzay5ib2R5ID09PSBib2R5KSB0YXNrLmNvbXBsZXRpb24gPSAhdGFzay5jb21wbGV0aW9uIH0pXHJcbiAgICAgICAgY29tcGxldGlvbiA9ICFjb21wbGV0aW9uXHJcbiAgICAgICAgIWNsaWNrZWQgPyBjaGVja0ltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyA6IGNoZWNrSW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBjbGlja2VkID0gIWNsaWNrZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmUoKVxyXG4gICAgICAgIHByb2plY3RUYXNrcy5maW5kKHRhc2sgPT4geyBpZiAodGFzay50aXRsZSA9PT0gdGl0bGUgJiYgdGFzay5ib2R5ID09PSBib2R5KSBwcm9qZWN0VGFza3Muc3BsaWNlKHByb2plY3RUYXNrcy5pbmRleE9mKHRhc2spLCAxKSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrYm94TW91c2VPdmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghY2xpY2tlZCkgY2hlY2tJbWcuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja2JveE1vdXNlT3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghY2xpY2tlZCkgY2hlY2tJbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemVUYXNrRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNoYW5nZUNvbXBsZXRpb24oKSB9KVxyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHsgY2hlY2tib3hNb3VzZU92ZXIoKSB9KVxyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4geyBjaGVja2JveE1vdXNlT3V0KCkgfSlcclxuICAgICAgICBjbG9zZUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgcmVtb3ZlKCkgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5VGFzaygpIHtcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrJ1xyXG4gICAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrLWluZm8nXHJcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluLXRhc2staW5mby10aXRsZUNvbnRfY2hlY2tib3gnXHJcbiAgICAgICAgY2xvc2VJbWcuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluLXRhc2stdGl0bGVfY2xvc2UnXHJcbiAgICAgICAgdGl0bGVDb250LmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrLWluZm8tdGl0bGVDb250J1xyXG4gICAgICAgIHRpdGxlRWxlbS5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW4tdGFzay1pbmZvLXRpdGxlQ29udF90aXRsZSdcclxuICAgICAgICBib2R5RWxlbS5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW4tdGFzay1pbmZvX2JvZHknXHJcblxyXG4gICAgICAgIGNoZWNrSW1nLnN0eWxlLmRpc3BsYXkgPSBjb21wbGV0aW9uID8gJ2Jsb2NrJyA6ICdub25lJ1xyXG4gICAgICAgIHRpdGxlRWxlbS50ZXh0Q29udGVudCA9IHRpdGxlID8gdGl0bGUgOiAnTm8gVGl0bGUnXHJcbiAgICAgICAgYm9keUVsZW0udGV4dENvbnRlbnQgPSBib2R5XHJcblxyXG4gICAgICAgIGNsb3NlSW1nLnNyYyA9IGNsb3NlSW1nU3JjXHJcbiAgICAgICAgY2hlY2tJbWcuc3JjID0gY2hlY2tJbWdTcmNcclxuXHJcblxyXG4gICAgICAgIGluaXRpYWxpemVUYXNrRXZlbnRMaXN0ZW5lcnMoY2hlY2tib3gsIGNoZWNrSW1nKVxyXG4gICAgICAgIGNoZWNrYm94LmFwcGVuZChjaGVja0ltZylcclxuICAgICAgICB0aXRsZUNvbnQuYXBwZW5kKGNoZWNrYm94LCB0aXRsZUVsZW0sIGNsb3NlSW1nKVxyXG4gICAgICAgIHRhc2tJbmZvLmFwcGVuZCh0aXRsZUNvbnQsIGJvZHlFbGVtKVxyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRhc2tJbmZvKVxyXG4gICAgICAgIG1haW4ucHJlcGVuZCh0YXNrQ29udGFpbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFVJLm15UHJvamVjdHMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgYm9keSxcclxuICAgICAgICBjb21wbGV0aW9uLFxyXG4gICAgICAgIGRpc3BsYXlUYXNrLFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgVGFza0Zvcm1GYWN0b3J5ID0gKHByb2plY3RUYXNrcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGFkZFRhc2tMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbiAgICBjb25zdCBidWlsZEFkZFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkVGFza0xpbmUuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluX2FkZFRhc2snXHJcbiAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluLXRhc2tGb3JtJ1xyXG4gICAgICAgIGlucHV0cy5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW4tdGFza0Zvcm0taW5wdXRzJ1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrRm9ybS1pbnB1dHNfdGl0bGUnXHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW4tdGFza0Zvcm0taW5wdXRzX2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgIGJ1dHRvbnMuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluLXRhc2tGb3JtLWJ1dHRvbnMnXHJcbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrRm9ybS1idXR0b25zX2NhbmNlbCdcclxuICAgICAgICBzdWJtaXQuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluLXRhc2tGb3JtLWJ1dHRvbnNfc3VibWl0J1xyXG5cclxuICAgICAgICBhZGRUYXNrTGluZS50ZXh0Q29udGVudCA9ICdhZGQgdGFzaydcclxuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnY2FuY2VsJ1xyXG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdzdWJtaXQnXHJcblxyXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKVxyXG4gICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCdyb3dzJywgJzMnKVxyXG4gICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCdtdWx0aWxpbmUnLCAnZmFsc2UnKVxyXG4gICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpXHJcbiAgICAgICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgndHlwZScsICdyZXNldCcpXHJcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyZXNldCcpXHJcblxyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kKGNhbmNlbCwgc3VibWl0KVxyXG4gICAgICAgIGlucHV0cy5hcHBlbmQodGl0bGUsIGJvZHkpXHJcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kKGlucHV0cywgYnV0dG9ucylcclxuICAgICAgICBtYWluLmFwcGVuZChhZGRUYXNrTGluZSwgdGFza0Zvcm0pXHJcbiAgICAgICAgaW5pdEV2ZW50TGlzdGVuZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkVGFza0xpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNob3dBZGRUYXNrKCkgfSlcclxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGhpZGVBZGRUYXNrKCkgfSlcclxuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHN1Ym1pdFRhc2soKSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IFRhc2tGYWN0b3J5KHRpdGxlLnZhbHVlLCBib2R5LnZhbHVlLCBmYWxzZSwgcHJvamVjdFRhc2tzKVxyXG4gICAgICAgIHByb2plY3RUYXNrcy5wdXNoKG5ld1Rhc2spXHJcbiAgICAgICAgbmV3VGFzay5kaXNwbGF5VGFzaygpXHJcbiAgICAgICAgaGlkZUFkZFRhc2soKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dBZGRUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFRhc2tMaW5lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpZGVBZGRUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFRhc2tMaW5lLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFVJLm15UHJvamVjdHMpO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJ1aWxkQWRkVGFzayxcclxuICAgICAgICBoaWRlQWRkVGFzayxcclxuICAgICAgICBzaG93QWRkVGFzayxcclxuICAgICAgICBzdWJtaXRUYXNrLFxyXG4gICAgICAgIGluaXRFdmVudExpc3RlbmVycyxcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IG5hdkZvcm1GYWN0b3J5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWRkUHJvamVjdExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbiAgICBjb25zdCBidWlsZE5hdiA9ICgpID0+IHtcclxuICAgICAgICBhZGRQcm9qZWN0TGluZS5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW5hdl9hZGRQcm9qZWN0J1xyXG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdCA9ICdjb250YWluZXItbmF2LXByb2plY3RGb3JtJ1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdCA9ICdjb250YWluZXItbmF2LXByb2plY3RGb3JtX3RpdGxlJ1xyXG4gICAgICAgIGJ1dHRvbnMuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1uYXYtcHJvamVjdEZvcm0tYnV0dG9ucydcclxuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1uYXYtcHJvamVjdEZvcm0tYnV0dG9uc19jYW5jZWwnXHJcbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdCA9ICdjb250YWluZXItbmF2LXByb2plY3RGb3JtLWJ1dHRvbnNfc3VibWl0J1xyXG5cclxuICAgICAgICBhZGRQcm9qZWN0TGluZS50ZXh0Q29udGVudCA9ICdhZGQgcHJvamVjdCdcclxuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnY2FuY2VsJ1xyXG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdzdWJtaXQnXHJcblxyXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKVxyXG4gICAgICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmVzZXQnKVxyXG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmVzZXQnKVxyXG5cclxuICAgICAgICBidXR0b25zLmFwcGVuZChjYW5jZWwsIHN1Ym1pdClcclxuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmQodGl0bGUsIGJ1dHRvbnMpXHJcbiAgICAgICAgbmF2LmFwcGVuZChhZGRQcm9qZWN0TGluZSwgcHJvamVjdEZvcm0pXHJcbiAgICAgICAgaW5pdEV2ZW50TGlzdGVuZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkUHJvamVjdExpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNob3dBZGRUYXNrKCkgfSlcclxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGhpZGVBZGRUYXNrKCkgfSlcclxuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHN1Ym1pdFRhc2soKSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3RGYWN0b3J5KHRpdGxlLnZhbHVlKVxyXG4gICAgICAgIFVJLmFkZFByb2plY3QobmV3UHJvamVjdClcclxuICAgICAgICBVSS5yZXNldE1haW4oKVxyXG4gICAgICAgIG5ld1Byb2plY3QuZGlzcGxheVByb2plY3QoKVxyXG4gICAgICAgIG5ld1Byb2plY3QuaW5pdGlhbGl6ZSgpXHJcbiAgICAgICAgaGlkZUFkZFRhc2soKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dBZGRUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFByb2plY3RMaW5lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGlkZUFkZFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkUHJvamVjdExpbmUuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYnVpbGROYXYsXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL3Jlc2V0IG1haW5cclxuY29uc3QgbmF2Rm9ybSA9IG5hdkZvcm1GYWN0b3J5KClcclxubmF2Rm9ybS5idWlsZE5hdigpXHJcblVJLmluaXRQcm9qZWN0KClcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==