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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100vh;\n  width: 100vw;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  font-weight: 500;\n}\n\np {\n  margin: 0;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n@font-face {\n  font-family: \"circular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n}\n.container {\n  display: grid;\n  grid-template: [row1-start] \"header header header\" 60px [row1-end] [row2-start] \"nav main main\" 1fr [row2-end]/300px 1fr 1fr;\n  height: 100%;\n  font-family: \"circular\";\n}\n.container-header {\n  grid-area: header;\n  background-color: hsl(214deg, 79%, 13%);\n  z-index: 0;\n}\n.container-nav {\n  grid-area: nav;\n  background-color: hsl(0deg, 0%, 97%);\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n  padding: 20px 30px 0 30px;\n}\n.container-nav_project {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 16px;\n  border-radius: 8px;\n  transition: all 0.1s cubic-bezier(0.5, 1, 0.5, 1);\n}\n.container-nav_project--active {\n  background-color: hsl(0deg, 0%, 80%);\n}\n.container-nav_addProject {\n  text-align: center;\n  font-size: 1rem;\n  height: min-content;\n}\n.container-nav_addProject::before {\n  content: \"+ \";\n}\n.container-nav-projectForm {\n  display: none;\n  flex-flow: column;\n}\n.container-nav-projectForm_title {\n  border: 2px solid hsl(0deg, 0%, 80%);\n  border-radius: 12px;\n  outline: none;\n  padding: 5px;\n  font-size: 1rem;\n  font-family: \"circular\";\n}\n.container-nav-projectForm-buttons {\n  display: flex;\n  justify-content: end;\n  margin-top: 5px;\n  gap: 10px;\n}\n.container-nav-projectForm-buttons_cancel, .container-nav-projectForm-buttons_submit {\n  background-color: white;\n  border: none;\n  box-shadow: none;\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-family: \"circular\";\n}\n.container-nav-projectForm-buttons_cancel {\n  background-color: hsl(0deg, 0%, 80%);\n}\n.container-nav-projectForm-buttons_submit {\n  background-color: hsl(0deg, 100%, 70%);\n}\n.container-main {\n  grid-area: main;\n  margin: 20px auto;\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.container-main_addTask {\n  text-align: center;\n  font-size: 1.5rem;\n  height: min-content;\n}\n.container-main_addTask::before {\n  content: \"+ \";\n}\n.container-main-task {\n  width: 50vw;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 0 10px 0;\n  border: 0px solid hsl(0deg, 0%, 80%);\n  border-width: 0px 0px 1px 0px;\n}\n.container-main-task-info-titleCont {\n  width: 50vw;\n  display: grid;\n  grid-template-columns: min-content min-content 1fr min-content;\n  gap: 10px;\n  align-items: center;\n}\n.container-main-task-info-titleCont > img, .container-main-task-info-titleCont_checkbox {\n  margin-top: 5px;\n}\n.container-main-task-info-titleCont > img {\n  display: none;\n  cursor: pointer;\n  justify-self: end;\n}\n.container-main-task-info-titleCont_arrowDown, .container-main-task-info-titleCont_close {\n  justify-self: end;\n}\n.container-main-task-info-titleCont_checkbox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid hsl(214deg, 79%, 13%);\n  background-color: hsla(213deg, 79%, 13%, 0.5);\n  cursor: pointer;\n}\n.container-main-task-info-titleCont_checkbox:hover img {\n  opacity: 50%;\n}\n.container-main-task-info-titleCont_title {\n  font-size: 1.5rem;\n}\n.container-main-task-info_body {\n  display: none;\n  font-size: 1rem;\n  margin-left: 30px;\n}\n.container-main-taskForm {\n  display: none;\n}\n.container-main-taskForm-inputs {\n  display: flex;\n  flex-direction: column;\n  border: 2px solid hsl(0deg, 0%, 80%);\n  border-radius: 12px;\n}\n.container-main-taskForm-inputs_title, .container-main-taskForm-inputs_description {\n  border: none;\n  outline: none;\n  border-radius: 12px;\n  padding: 5px;\n  font-size: 1rem;\n  font-family: \"circular\";\n}\n.container-main-taskForm-inputs_title {\n  display: flex;\n  align-items: center;\n  font-size: 1.2rem;\n}\n.container-main-taskForm-inputs_description {\n  resize: none;\n  font-family: \"circular\";\n}\n.container-main-taskForm-buttons {\n  display: flex;\n  justify-content: end;\n  margin-top: 5px;\n  gap: 10px;\n}\n.container-main-taskForm-buttons_cancel, .container-main-taskForm-buttons_submit {\n  background-color: white;\n  border: none;\n  box-shadow: none;\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-family: \"circular\";\n}\n.container-main-taskForm-buttons_cancel {\n  background-color: hsl(0deg, 0%, 80%);\n}\n.container-main-taskForm-buttons_submit {\n  background-color: hsl(0deg, 100%, 70%);\n}", "",{"version":3,"sources":["webpack://./src/style_modules/_settings-reset.scss","webpack://./src/index.scss","webpack://./src/style_modules/_fonts.scss","webpack://./src/style_modules/_variables.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;ACCJ;;ADEA;;;EAGI,mBAAA;ACCJ;;ADEA;EACI,SAAA;EACA,UAAA;EACA,YAAA;ACCJ;;ADEA;;;EAGI,SAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,SAAA;ACCJ;;ADEA;;;EAGI,qBAAA;ACCJ;;ADEA;;EAEI,gBAAA;EACA,UAAA;EACA,SAAA;ACCJ;;ACzCA;EACI,uBAAA;EACA,4DAAA;AD4CJ;AA5CA;EACI,aAAA;EACA,4HACI;EACJ,YAAA;EACA,uBEFU;AF+Cd;AA3CI;EACI,iBAAA;EACA,uCEXK;EFYL,UAAA;AA6CR;AA1CI;EACI,cAAA;EACA,oCEfK;EFiBL,aAAA;EACA,iBAAA;EACA,SAAA;EACA,yBAAA;AA2CR;AAzCQ;EACI,aAAA;EACA,8BAAA;EACA,iBAAA;EACA,kBElBU;EFmBV,iDAAA;AA2CZ;AAzCY;EACI,oCE7BE;AFwElB;AAvCQ;EACI,kBAAA;EACA,eE9BC;EF+BD,mBAAA;AAyCZ;AAvCY;EACI,aAAA;AAyChB;AArCQ;EACI,aAAA;EACA,iBAAA;AAuCZ;AArCY;EACI,oCAAA;EACA,mBE3CI;EF4CJ,aAAA;EACA,YAAA;EACA,eE/CH;EFgDG,uBEnDF;AF0Fd;AApCY;EACI,aAAA;EACA,oBAAA;EACA,eAAA;EACA,SAAA;AAsChB;AApCgB;EAEI,uBAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBE9DA;EF+DA,uBEnEN;AFwGd;AAlCgB;EACI,oCEzEF;AF6GlB;AAjCgB;EACI,sCE5ER;AF+GZ;AA7BI;EACI,eAAA;EACA,iBAAA;EACA,WE7EK;EF8EL,aAAA;EACA,sBAAA;EACA,SAAA;AA+BR;AA5BQ;EACI,kBAAA;EACA,iBE3FD;EF4FC,mBAAA;AA8BZ;AA5BY;EACI,aAAA;AA8BhB;AA1BQ;EACI,WE9FC;EF+FD,aAAA;EACA,mBAAA;EACA,SAAA;EACA,mBAAA;EACA,oCAAA;EACA,6BAAA;AA4BZ;AAvBgB;EACI,WE1GP;EF2GO,aAAA;EACA,8DAAA;EACA,SAAA;EACA,mBAAA;AAyBpB;AAvBoB;EAEI,eAAA;AAwBxB;AArBoB;EACI,aAAA;EACA,eAAA;EACA,iBAAA;AAuBxB;AApBoB;EAEI,iBAAA;AAqBxB;AAjBoB;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,uCAAA;EACA,6CErJL;EFsJK,eAAA;AAmBxB;AAhB4B;EACI,YAAA;AAkBhC;AAboB;EACI,iBE3Jb;AF0KX;AAXgB;EACI,aAAA;EACA,eE/JP;EFgKO,iBAAA;AAapB;AANQ;EACI,aAAA;AAQZ;AANY;EACI,aAAA;EACA,sBAAA;EACA,oCAAA;EACA,mBE7KI;AFqLpB;AANgB;EAEI,YAAA;EACA,aAAA;EACA,mBEnLA;EFoLA,YAAA;EACA,eEtLP;EFuLO,uBE1LN;AFiMd;AAJgB;EACI,aAAA;EACA,mBAAA;EACA,iBE9LN;AFoMd;AAHgB;EACI,YAAA;EACA,uBErMN;AF0Md;AADY;EACI,aAAA;EACA,oBAAA;EACA,eAAA;EACA,SAAA;AAGhB;AADgB;EAEI,uBAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBEjNA;EFkNA,uBEtNN;AFwNd;AACgB;EACI,oCE5NF;AF6NlB;AAEgB;EACI,sCE/NR;AF+NZ","sourcesContent":["html {\r\n    box-sizing: border-box;\r\n    font-size: 100%;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n    margin: 0;\r\n    font-weight: 500;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n    text-decoration: none;\r\n}\r\n\r\nul,\r\nli {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}","@use 'style_modules' as *;\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template:\r\n        [row1-start] 'header header header' 60px [row1-end] [row2-start] 'nav main main' 1fr [row2-end] / 300px 1fr 1fr;\r\n    height: 100%;\r\n    font-family: $font-family;\r\n\r\n    &-header {\r\n        grid-area: header;\r\n        background-color: $blue-color;\r\n        z-index: 0;\r\n    }\r\n\r\n    &-nav {\r\n        grid-area: nav;\r\n        background-color: $grey-color;\r\n\r\n        display: flex;\r\n        flex-flow: column;\r\n        gap: 10px;\r\n        padding: 20px 30px 0 30px;\r\n\r\n        &_project {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            padding: 5px 16px;\r\n            border-radius: $border-radius-small;\r\n            transition: all .1s $transition-curve;\r\n\r\n            &--active {\r\n                background-color: $grey-dark-color;\r\n            }\r\n        }\r\n\r\n        &_addProject {\r\n            text-align: center;\r\n            font-size: $font-small;\r\n            height: min-content;\r\n\r\n            &::before {\r\n                content: '+ ';\r\n            }\r\n        }\r\n\r\n        &-projectForm {\r\n            display: none;\r\n            flex-flow: column;\r\n\r\n            &_title {\r\n                border: 2px solid $grey-dark-color;\r\n                border-radius: $border-radius-big;\r\n                outline: none;\r\n                padding: 5px;\r\n                font-size: $font-small;\r\n                font-family: $font-family;\r\n            }\r\n\r\n            &-buttons {\r\n                display: flex;\r\n                justify-content: end;\r\n                margin-top: 5px;\r\n                gap: 10px;\r\n\r\n                &_cancel,\r\n                &_submit {\r\n                    background-color: white;\r\n                    border: none;\r\n                    box-shadow: none;\r\n                    padding: 5px 12px;\r\n                    border-radius: $border-radius-big;\r\n                    font-family: $font-family;\r\n                }\r\n\r\n                &_cancel {\r\n                    background-color: $grey-dark-color;\r\n                }\r\n\r\n                &_submit {\r\n                    background-color: $red-color;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    &-main {\r\n        grid-area: main;\r\n        margin: 20px auto;\r\n        width: $task-width;\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 10px;\r\n\r\n\r\n        &_addTask {\r\n            text-align: center;\r\n            font-size: $font-big;\r\n            height: min-content;\r\n\r\n            &::before {\r\n                content: '+ ';\r\n            }\r\n        }\r\n\r\n        &-task {\r\n            width: $task-width;\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 10px;\r\n            padding: 0 0 10px 0;\r\n            border: 0px solid $grey-dark-color;\r\n            border-width: 0px 0px 1px 0px;\r\n\r\n\r\n            &-info {\r\n\r\n                &-titleCont {\r\n                    width: $task-width;\r\n                    display: grid;\r\n                    grid-template-columns: min-content min-content 1fr min-content;\r\n                    gap: 10px;\r\n                    align-items: center;\r\n\r\n                    &>img,\r\n                    &_checkbox {\r\n                        margin-top: 5px;\r\n                    }\r\n\r\n                    &>img {\r\n                        display: none;\r\n                        cursor: pointer;\r\n                        justify-self: end;\r\n                    }\r\n\r\n                    &_arrowDown,\r\n                    &_close {\r\n                        justify-self: end;\r\n                    }\r\n\r\n\r\n                    &_checkbox {\r\n                        display: flex;\r\n                        align-items: center;\r\n                        justify-content: center;\r\n                        flex: 0 0 auto;\r\n                        width: 20px;\r\n                        height: 20px;\r\n                        border-radius: 50%;\r\n                        border: 2px solid $blue-color;\r\n                        background-color: $blue-color-trans;\r\n                        cursor: pointer;\r\n\r\n                        &:hover {\r\n                            img {\r\n                                opacity: 50%;\r\n                            }\r\n                        }\r\n                    }\r\n\r\n                    &_title {\r\n                        font-size: $font-big;\r\n                    }\r\n                }\r\n\r\n                &_body {\r\n                    display: none;\r\n                    font-size: $font-small;\r\n                    margin-left: 30px;\r\n                }\r\n            }\r\n\r\n            &--done {}\r\n        }\r\n\r\n        &-taskForm {\r\n            display: none;\r\n\r\n            &-inputs {\r\n                display: flex;\r\n                flex-direction: column;\r\n                border: 2px solid $grey-dark-color;\r\n                border-radius: $border-radius-big;\r\n\r\n                &_title,\r\n                &_description {\r\n                    border: none;\r\n                    outline: none;\r\n                    border-radius: $border-radius-big;\r\n                    padding: 5px;\r\n                    font-size: $font-small;\r\n                    font-family: $font-family;\r\n                }\r\n\r\n                &_title {\r\n                    display: flex;\r\n                    align-items: center;\r\n                    font-size: $font-medium;\r\n                }\r\n\r\n                &_description {\r\n                    resize: none;\r\n                    font-family: $font-family;\r\n                }\r\n            }\r\n\r\n            &-buttons {\r\n                display: flex;\r\n                justify-content: end;\r\n                margin-top: 5px;\r\n                gap: 10px;\r\n\r\n                &_cancel,\r\n                &_submit {\r\n                    background-color: white;\r\n                    border: none;\r\n                    box-shadow: none;\r\n                    padding: 5px 12px;\r\n                    border-radius: $border-radius-big;\r\n                    font-family: $font-family;\r\n                }\r\n\r\n                &_cancel {\r\n                    background-color: $grey-dark-color;\r\n                }\r\n\r\n                &_submit {\r\n                    background-color: $red-color;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}","@font-face {\r\n    font-family: 'circular';\r\n    src: url(./fonts/CircularAir-Light.woff2) format('woff2');\r\n}","$blue-color: hsl(214, 79%, 13%);\r\n$blue-color-trans: hsla(213, 79%, 13%, 0.5);\r\n$grey-color: hsl(0, 0%, 97%);\r\n$grey-dark-color: hsl(0, 0%, 80%);\r\n$red-color: hsl(0, 100%, 70%);\r\n$font-family: 'circular';\r\n$font-big: 1.5rem;\r\n$font-medium: 1.2rem;\r\n$font-small: 1rem;\r\n$border-radius-big: 12px;\r\n$border-radius-small: 8px;\r\n$transition-curve: cubic-bezier(.5, 1, .5, 1);\r\n$task-width: 50vw;"],"sourceRoot":""}]);
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

/***/ "./src/images/icons/arrow-down.svg":
/*!*****************************************!*\
  !*** ./src/images/icons/arrow-down.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c357a94be5c60ff75761.svg";

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

module.exports = __webpack_require__.p + "d37c67c354164bba927d.svg";

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
/* harmony import */ var _images_icons_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icons/arrow-down.svg */ "./src/images/icons/arrow-down.svg");





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
    const arrowDownImg = new Image(18, 18)
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
        projectTasks.find(task => { if (task.title === title || task.body === body) projectTasks.splice(projectTasks.indexOf(task), 1) })
    }

    const checkboxMouseOver = () => {
        if (!clicked) checkImg.style.display = 'block'
    }

    const checkboxMouseOut = () => {
        if (!clicked) checkImg.style.display = 'none'
    }

    const displayIcons = () => {
        closeImg.style.display = 'block'
        arrowDownImg.style.display = 'block'
    }

    const hideIcons = () => {
        closeImg.style.display = 'none'
        arrowDownImg.style.display = 'none'
    }

    const changeBodyVisibility = () => {
        bodyElem.style.display === 'block' ? bodyElem.style.display = 'none' : bodyElem.style.display = 'block'
    }

    const initializeTaskEventListeners = () => {
        taskContainer.addEventListener('mouseover', () => { displayIcons() })
        taskContainer.addEventListener('mouseout', () => { hideIcons() })
        checkbox.addEventListener('click', () => { changeCompletion() })
        checkbox.addEventListener('mouseover', () => { checkboxMouseOver() })
        checkbox.addEventListener('mouseout', () => { checkboxMouseOut() })
        closeImg.addEventListener('click', () => { remove() })
        arrowDownImg.addEventListener('click', () => { changeBodyVisibility() })
    }

    function displayTask() {
        taskContainer.classList = 'container-main-task'
        taskInfo.classList = 'container-main-task-info'
        checkbox.classList = 'container-main-task-info-titleCont_checkbox'
        closeImg.classList = 'container-main-task-info-titleCont_close'
        arrowDownImg.classList = 'container-main-task-info-titleCont_arrowDown'
        titleCont.classList = 'container-main-task-info-titleCont'
        titleElem.classList = 'container-main-task-info-titleCont_title'
        bodyElem.classList = 'container-main-task-info_body'

        checkImg.style.display = completion ? 'block' : 'none'
        titleElem.textContent = title ? title : 'No Title'
        bodyElem.textContent = body

        closeImg.src = _images_icons_close_svg__WEBPACK_IMPORTED_MODULE_2__
        checkImg.src = _images_icons_check_svg__WEBPACK_IMPORTED_MODULE_1__
        arrowDownImg.src = _images_icons_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__


        initializeTaskEventListeners(checkbox, checkImg)
        checkbox.append(checkImg)
        titleCont.append(checkbox, titleElem, arrowDownImg, closeImg)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJJQUFrRDtBQUM5Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxnREFBZ0QsMkJBQTJCLG9CQUFvQixrQkFBa0IsaUJBQWlCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLFVBQVUsY0FBYyxlQUFlLGlCQUFpQixHQUFHLGtCQUFrQixjQUFjLHFCQUFxQixHQUFHLE9BQU8sY0FBYyxHQUFHLDhCQUE4QiwwQkFBMEIsR0FBRyxhQUFhLHFCQUFxQixlQUFlLGNBQWMsR0FBRyxnQkFBZ0IsOEJBQThCLDJFQUEyRSxHQUFHLGNBQWMsa0JBQWtCLHFJQUFxSSxpQkFBaUIsOEJBQThCLEdBQUcscUJBQXFCLHNCQUFzQiw0Q0FBNEMsZUFBZSxHQUFHLGtCQUFrQixtQkFBbUIseUNBQXlDLGtCQUFrQixzQkFBc0IsY0FBYyw4QkFBOEIsR0FBRywwQkFBMEIsa0JBQWtCLG1DQUFtQyxzQkFBc0IsdUJBQXVCLHNEQUFzRCxHQUFHLGtDQUFrQyx5Q0FBeUMsR0FBRyw2QkFBNkIsdUJBQXVCLG9CQUFvQix3QkFBd0IsR0FBRyxxQ0FBcUMsb0JBQW9CLEdBQUcsOEJBQThCLGtCQUFrQixzQkFBc0IsR0FBRyxvQ0FBb0MseUNBQXlDLHdCQUF3QixrQkFBa0IsaUJBQWlCLG9CQUFvQiw4QkFBOEIsR0FBRyxzQ0FBc0Msa0JBQWtCLHlCQUF5QixvQkFBb0IsY0FBYyxHQUFHLHdGQUF3Riw0QkFBNEIsaUJBQWlCLHFCQUFxQixzQkFBc0Isd0JBQXdCLDhCQUE4QixHQUFHLDZDQUE2Qyx5Q0FBeUMsR0FBRyw2Q0FBNkMsMkNBQTJDLEdBQUcsbUJBQW1CLG9CQUFvQixzQkFBc0IsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLDJCQUEyQix1QkFBdUIsc0JBQXNCLHdCQUF3QixHQUFHLG1DQUFtQyxvQkFBb0IsR0FBRyx3QkFBd0IsZ0JBQWdCLGtCQUFrQix3QkFBd0IsY0FBYyx3QkFBd0IseUNBQXlDLGtDQUFrQyxHQUFHLHVDQUF1QyxnQkFBZ0Isa0JBQWtCLG1FQUFtRSxjQUFjLHdCQUF3QixHQUFHLDJGQUEyRixvQkFBb0IsR0FBRyw2Q0FBNkMsa0JBQWtCLG9CQUFvQixzQkFBc0IsR0FBRyw0RkFBNEYsc0JBQXNCLEdBQUcsZ0RBQWdELGtCQUFrQix3QkFBd0IsNEJBQTRCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLHVCQUF1Qiw0Q0FBNEMsa0RBQWtELG9CQUFvQixHQUFHLDBEQUEwRCxpQkFBaUIsR0FBRyw2Q0FBNkMsc0JBQXNCLEdBQUcsa0NBQWtDLGtCQUFrQixvQkFBb0Isc0JBQXNCLEdBQUcsNEJBQTRCLGtCQUFrQixHQUFHLG1DQUFtQyxrQkFBa0IsMkJBQTJCLHlDQUF5Qyx3QkFBd0IsR0FBRyxzRkFBc0YsaUJBQWlCLGtCQUFrQix3QkFBd0IsaUJBQWlCLG9CQUFvQiw4QkFBOEIsR0FBRyx5Q0FBeUMsa0JBQWtCLHdCQUF3QixzQkFBc0IsR0FBRywrQ0FBK0MsaUJBQWlCLDhCQUE4QixHQUFHLG9DQUFvQyxrQkFBa0IseUJBQXlCLG9CQUFvQixjQUFjLEdBQUcsb0ZBQW9GLDRCQUE0QixpQkFBaUIscUJBQXFCLHNCQUFzQix3QkFBd0IsOEJBQThCLEdBQUcsMkNBQTJDLHlDQUF5QyxHQUFHLDJDQUEyQywyQ0FBMkMsR0FBRyxPQUFPLGtPQUFrTyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLGFBQWEsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxhQUFhLE1BQU0sT0FBTyxZQUFZLE9BQU8sT0FBTyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsYUFBYSxNQUFNLE1BQU0sVUFBVSxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksZ0NBQWdDLCtCQUErQix3QkFBd0Isc0JBQXNCLHFCQUFxQixLQUFLLHNDQUFzQyw0QkFBNEIsS0FBSyxjQUFjLGtCQUFrQixtQkFBbUIscUJBQXFCLEtBQUssMEJBQTBCLGtCQUFrQix5QkFBeUIsS0FBSyxXQUFXLGtCQUFrQixLQUFLLHNDQUFzQyw4QkFBOEIsS0FBSyxtQkFBbUIseUJBQXlCLG1CQUFtQixrQkFBa0IsS0FBSyw2QkFBNkIsb0JBQW9CLHNCQUFzQixrSkFBa0oscUJBQXFCLGtDQUFrQyxzQkFBc0IsOEJBQThCLDBDQUEwQyx1QkFBdUIsU0FBUyxtQkFBbUIsMkJBQTJCLDBDQUEwQyw4QkFBOEIsOEJBQThCLHNCQUFzQixzQ0FBc0MsMkJBQTJCLDhCQUE4QiwrQ0FBK0Msa0NBQWtDLG9EQUFvRCxzREFBc0QsK0JBQStCLHVEQUF1RCxpQkFBaUIsYUFBYSw4QkFBOEIsbUNBQW1DLHVDQUF1QyxvQ0FBb0MsK0JBQStCLGtDQUFrQyxpQkFBaUIsYUFBYSwrQkFBK0IsOEJBQThCLGtDQUFrQyw2QkFBNkIsdURBQXVELHNEQUFzRCxrQ0FBa0MsaUNBQWlDLDJDQUEyQyw4Q0FBOEMsaUJBQWlCLCtCQUErQixrQ0FBa0MseUNBQXlDLG9DQUFvQyw4QkFBOEIsK0RBQStELGdEQUFnRCxxQ0FBcUMseUNBQXlDLDBDQUEwQywwREFBMEQsa0RBQWtELHFCQUFxQixrQ0FBa0MsMkRBQTJELHFCQUFxQixrQ0FBa0MscURBQXFELHFCQUFxQixpQkFBaUIsYUFBYSxTQUFTLG9CQUFvQiw0QkFBNEIsOEJBQThCLCtCQUErQiwwQkFBMEIsbUNBQW1DLHNCQUFzQiwrQkFBK0IsbUNBQW1DLHFDQUFxQyxvQ0FBb0MsK0JBQStCLGtDQUFrQyxpQkFBaUIsYUFBYSx3QkFBd0IsbUNBQW1DLDhCQUE4QixvQ0FBb0MsMEJBQTBCLG9DQUFvQyxtREFBbUQsOENBQThDLGdDQUFnQyxxQ0FBcUMsMkNBQTJDLHNDQUFzQyx1RkFBdUYsa0NBQWtDLDRDQUE0QyxzRUFBc0UsNENBQTRDLHlCQUF5QixtQ0FBbUMsMENBQTBDLDRDQUE0Qyw4Q0FBOEMseUJBQXlCLHlFQUF5RSw4Q0FBOEMseUJBQXlCLDRDQUE0QywwQ0FBMEMsZ0RBQWdELG9EQUFvRCwyQ0FBMkMsd0NBQXdDLHlDQUF5QywrQ0FBK0MsMERBQTBELGdFQUFnRSw0Q0FBNEMseUNBQXlDLHFDQUFxQyxpREFBaUQsaUNBQWlDLDZCQUE2Qix5QkFBeUIscUNBQXFDLGlEQUFpRCx5QkFBeUIscUJBQXFCLGdDQUFnQyxzQ0FBc0MsK0NBQStDLDBDQUEwQyxxQkFBcUIsaUJBQWlCLDhCQUE4QixhQUFhLDRCQUE0Qiw4QkFBOEIsOEJBQThCLGtDQUFrQywyQ0FBMkMsdURBQXVELHNEQUFzRCxtRUFBbUUscUNBQXFDLHNDQUFzQywwREFBMEQscUNBQXFDLCtDQUErQyxrREFBa0QscUJBQXFCLGlDQUFpQyxzQ0FBc0MsNENBQTRDLGdEQUFnRCxxQkFBcUIsdUNBQXVDLHFDQUFxQyxrREFBa0QscUJBQXFCLGlCQUFpQiwrQkFBK0Isa0NBQWtDLHlDQUF5QyxvQ0FBb0MsOEJBQThCLCtEQUErRCxnREFBZ0QscUNBQXFDLHlDQUF5QywwQ0FBMEMsMERBQTBELGtEQUFrRCxxQkFBcUIsa0NBQWtDLDJEQUEyRCxxQkFBcUIsa0NBQWtDLHFEQUFxRCxxQkFBcUIsaUJBQWlCLGFBQWEsU0FBUyxLQUFLLGVBQWUsZ0NBQWdDLGtFQUFrRSxLQUFLLG1DQUFtQyxnREFBZ0QsaUNBQWlDLHNDQUFzQyxrQ0FBa0MsNkJBQTZCLHNCQUFzQix5QkFBeUIsc0JBQXNCLDZCQUE2Qiw4QkFBOEIsa0RBQWtELHNCQUFzQixtQkFBbUI7QUFDaHJkO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTRJO0FBQzVJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJc0Y7QUFDOUcsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLG1JQUFjLEdBQUcsbUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDNEI7QUFDQTtBQUNTO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDJEQUEyRDtBQUNqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9GQUFvRjtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvR0FBb0c7QUFDeEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsZ0JBQWdCO0FBQzVFLDJEQUEyRCxhQUFhO0FBQ3hFLG1EQUFtRCxvQkFBb0I7QUFDdkUsdURBQXVELHFCQUFxQjtBQUM1RSxzREFBc0Qsb0JBQW9CO0FBQzFFLG1EQUFtRCxVQUFVO0FBQzdELHVEQUF1RCx3QkFBd0I7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0RBQVc7QUFDbEMsdUJBQXVCLG9EQUFXO0FBQ2xDLDJCQUEyQix5REFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxlQUFlO0FBQ3JFLGlEQUFpRCxlQUFlO0FBQ2hFLGlEQUFpRCxjQUFjO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxlQUFlO0FBQ3hFLGlEQUFpRCxlQUFlO0FBQ2hFLGlEQUFpRCxjQUFjO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ2lyY3VsYXJBaXItTGlnaHQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2lyY3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogW3JvdzEtc3RhcnRdIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCIgNjBweCBbcm93MS1lbmRdIFtyb3cyLXN0YXJ0XSBcXFwibmF2IG1haW4gbWFpblxcXCIgMWZyIFtyb3cyLWVuZF0vMzAwcHggMWZyIDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2lyY3VsYXJcXFwiO1xcbn1cXG4uY29udGFpbmVyLWhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTRkZWcsIDc5JSwgMTMlKTtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5jb250YWluZXItbmF2IHtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcsIDAlLCA5NyUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweCAzMHB4IDAgMzBweDtcXG59XFxuLmNvbnRhaW5lci1uYXZfcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNXB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBjdWJpYy1iZXppZXIoMC41LCAxLCAwLjUsIDEpO1xcbn1cXG4uY29udGFpbmVyLW5hdl9wcm9qZWN0LS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcsIDAlLCA4MCUpO1xcbn1cXG4uY29udGFpbmVyLW5hdl9hZGRQcm9qZWN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcbi5jb250YWluZXItbmF2X2FkZFByb2plY3Q6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiKyBcXFwiO1xcbn1cXG4uY29udGFpbmVyLW5hdi1wcm9qZWN0Rm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcbi5jb250YWluZXItbmF2LXByb2plY3RGb3JtX3RpdGxlIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgwZGVnLCAwJSwgODAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjaXJjdWxhclxcXCI7XFxufVxcbi5jb250YWluZXItbmF2LXByb2plY3RGb3JtLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uY29udGFpbmVyLW5hdi1wcm9qZWN0Rm9ybS1idXR0b25zX2NhbmNlbCwgLmNvbnRhaW5lci1uYXYtcHJvamVjdEZvcm0tYnV0dG9uc19zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjaXJjdWxhclxcXCI7XFxufVxcbi5jb250YWluZXItbmF2LXByb2plY3RGb3JtLWJ1dHRvbnNfY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwZGVnLCAwJSwgODAlKTtcXG59XFxuLmNvbnRhaW5lci1uYXYtcHJvamVjdEZvcm0tYnV0dG9uc19zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcsIDEwMCUsIDcwJSk7XFxufVxcbi5jb250YWluZXItbWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcbi5jb250YWluZXItbWFpbl9hZGRUYXNrIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuLmNvbnRhaW5lci1tYWluX2FkZFRhc2s6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiKyBcXFwiO1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFzayB7XFxuICB3aWR0aDogNTB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcXG4gIGJvcmRlcjogMHB4IHNvbGlkIGhzbCgwZGVnLCAwJSwgODAlKTtcXG4gIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMHB4O1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFzay1pbmZvLXRpdGxlQ29udCB7XFxuICB3aWR0aDogNTB2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrLWluZm8tdGl0bGVDb250ID4gaW1nLCAuY29udGFpbmVyLW1haW4tdGFzay1pbmZvLXRpdGxlQ29udF9jaGVja2JveCB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrLWluZm8tdGl0bGVDb250ID4gaW1nIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2staW5mby10aXRsZUNvbnRfYXJyb3dEb3duLCAuY29udGFpbmVyLW1haW4tdGFzay1pbmZvLXRpdGxlQ29udF9jbG9zZSB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2staW5mby10aXRsZUNvbnRfY2hlY2tib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBoc2woMjE0ZGVnLCA3OSUsIDEzJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIxM2RlZywgNzklLCAxMyUsIDAuNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrLWluZm8tdGl0bGVDb250X2NoZWNrYm94OmhvdmVyIGltZyB7XFxuICBvcGFjaXR5OiA1MCU7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrLWluZm8tdGl0bGVDb250X3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFzay1pbmZvX2JvZHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFza0Zvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWlucHV0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgwZGVnLCAwJSwgODAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrRm9ybS1pbnB1dHNfdGl0bGUsIC5jb250YWluZXItbWFpbi10YXNrRm9ybS1pbnB1dHNfZGVzY3JpcHRpb24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXG59XFxuLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWlucHV0c190aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFza0Zvcm0taW5wdXRzX2Rlc2NyaXB0aW9uIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2lyY3VsYXJcXFwiO1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFza0Zvcm0tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5jb250YWluZXItbWFpbi10YXNrRm9ybS1idXR0b25zX2NhbmNlbCwgLmNvbnRhaW5lci1tYWluLXRhc2tGb3JtLWJ1dHRvbnNfc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2lyY3VsYXJcXFwiO1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFza0Zvcm0tYnV0dG9uc19jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcsIDAlLCA4MCUpO1xcbn1cXG4uY29udGFpbmVyLW1haW4tdGFza0Zvcm0tYnV0dG9uc19zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcsIDEwMCUsIDcwJSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9tb2R1bGVzL19zZXR0aW5ncy1yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlX21vZHVsZXMvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9tb2R1bGVzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7OztFQUdJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTs7O0VBR0ksU0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0FDQ0o7O0FERUE7OztFQUdJLHFCQUFBO0FDQ0o7O0FERUE7O0VBRUksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NKOztBQ3pDQTtFQUNJLHVCQUFBO0VBQ0EsNERBQUE7QUQ0Q0o7QUE1Q0E7RUFDSSxhQUFBO0VBQ0EsNEhBQ0k7RUFDSixZQUFBO0VBQ0EsdUJFRlU7QUYrQ2Q7QUEzQ0k7RUFDSSxpQkFBQTtFQUNBLHVDRVhLO0VGWUwsVUFBQTtBQTZDUjtBQTFDSTtFQUNJLGNBQUE7RUFDQSxvQ0VmSztFRmlCTCxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUEyQ1I7QUF6Q1E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCRWxCVTtFRm1CVixpREFBQTtBQTJDWjtBQXpDWTtFQUNJLG9DRTdCRTtBRndFbEI7QUF2Q1E7RUFDSSxrQkFBQTtFQUNBLGVFOUJDO0VGK0JELG1CQUFBO0FBeUNaO0FBdkNZO0VBQ0ksYUFBQTtBQXlDaEI7QUFyQ1E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUF1Q1o7QUFyQ1k7RUFDSSxvQ0FBQTtFQUNBLG1CRTNDSTtFRjRDSixhQUFBO0VBQ0EsWUFBQTtFQUNBLGVFL0NIO0VGZ0RHLHVCRW5ERjtBRjBGZDtBQXBDWTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBc0NoQjtBQXBDZ0I7RUFFSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJFOURBO0VGK0RBLHVCRW5FTjtBRndHZDtBQWxDZ0I7RUFDSSxvQ0V6RUY7QUY2R2xCO0FBakNnQjtFQUNJLHNDRTVFUjtBRitHWjtBQTdCSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdFN0VLO0VGOEVMLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUErQlI7QUE1QlE7RUFDSSxrQkFBQTtFQUNBLGlCRTNGRDtFRjRGQyxtQkFBQTtBQThCWjtBQTVCWTtFQUNJLGFBQUE7QUE4QmhCO0FBMUJRO0VBQ0ksV0U5RkM7RUYrRkQsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQTRCWjtBQXZCZ0I7RUFDSSxXRTFHUDtFRjJHTyxhQUFBO0VBQ0EsOERBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUF5QnBCO0FBdkJvQjtFQUVJLGVBQUE7QUF3QnhCO0FBckJvQjtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF1QnhCO0FBcEJvQjtFQUVJLGlCQUFBO0FBcUJ4QjtBQWpCb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSw2Q0VySkw7RUZzSkssZUFBQTtBQW1CeEI7QUFoQjRCO0VBQ0ksWUFBQTtBQWtCaEM7QUFib0I7RUFDSSxpQkUzSmI7QUYwS1g7QUFYZ0I7RUFDSSxhQUFBO0VBQ0EsZUUvSlA7RUZnS08saUJBQUE7QUFhcEI7QUFOUTtFQUNJLGFBQUE7QUFRWjtBQU5ZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkU3S0k7QUZxTHBCO0FBTmdCO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkVuTEE7RUZvTEEsWUFBQTtFQUNBLGVFdExQO0VGdUxPLHVCRTFMTjtBRmlNZDtBQUpnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCRTlMTjtBRm9NZDtBQUhnQjtFQUNJLFlBQUE7RUFDQSx1QkVyTU47QUYwTWQ7QUFEWTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBR2hCO0FBRGdCO0VBRUksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CRWpOQTtFRmtOQSx1QkV0Tk47QUZ3TmQ7QUFDZ0I7RUFDSSxvQ0U1TkY7QUY2TmxCO0FBRWdCO0VBQ0ksc0NFL05SO0FGK05aXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVwiLFwiQHVzZSAnc3R5bGVfbW9kdWxlcycgYXMgKjtcXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTpcXHJcXG4gICAgICAgIFtyb3cxLXN0YXJ0XSAnaGVhZGVyIGhlYWRlciBoZWFkZXInIDYwcHggW3JvdzEtZW5kXSBbcm93Mi1zdGFydF0gJ25hdiBtYWluIG1haW4nIDFmciBbcm93Mi1lbmRdIC8gMzAwcHggMWZyIDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xcclxcblxcclxcbiAgICAmLWhlYWRlciB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xcclxcbiAgICAgICAgei1pbmRleDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLW5hdiB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IG5hdjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LWNvbG9yO1xcclxcblxcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4IDAgMzBweDtcXHJcXG5cXHJcXG4gICAgICAgICZfcHJvamVjdCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc21hbGw7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xcyAkdHJhbnNpdGlvbi1jdXJ2ZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmLS1hY3RpdmUge1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS1kYXJrLWNvbG9yO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICZfYWRkUHJvamVjdCB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc21hbGw7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnKyAnO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYtcHJvamVjdEZvcm0ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgICAgICAgJl90aXRsZSB7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRncmV5LWRhcmstY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJpZztcXHJcXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xcclxcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLWJ1dHRvbnMge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfY2FuY2VsLFxcclxcbiAgICAgICAgICAgICAgICAmX3N1Ym1pdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJpZztcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJl9jYW5jZWwge1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktZGFyay1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAmX3N1Ym1pdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtbWFpbiB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IG1haW47XFxyXFxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG4gICAgICAgIHdpZHRoOiAkdGFzay13aWR0aDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcblxcclxcblxcclxcbiAgICAgICAgJl9hZGRUYXNrIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1iaWc7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnKyAnO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYtdGFzayB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6ICR0YXNrLXdpZHRoO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDEwcHggMDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDBweCBzb2xpZCAkZ3JleS1kYXJrLWNvbG9yO1xcclxcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMHB4O1xcclxcblxcclxcblxcclxcbiAgICAgICAgICAgICYtaW5mbyB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICYtdGl0bGVDb250IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkdGFzay13aWR0aDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmPmltZyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICZfY2hlY2tib3gge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICY+aW1nIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICZfYXJyb3dEb3duLFxcclxcbiAgICAgICAgICAgICAgICAgICAgJl9jbG9zZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmX2NoZWNrYm94IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZS1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1jb2xvci10cmFucztcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiA1MCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmX3RpdGxlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250LWJpZztcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAmX2JvZHkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc21hbGw7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLS1kb25lIHt9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLXRhc2tGb3JtIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcblxcclxcbiAgICAgICAgICAgICYtaW5wdXRzIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGdyZXktZGFyay1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmlnO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAmX3RpdGxlLFxcclxcbiAgICAgICAgICAgICAgICAmX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iaWc7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAmX3RpdGxlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1tZWRpdW07XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJl9kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICYtYnV0dG9ucyB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIGdhcDogMTBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJl9jYW5jZWwsXFxyXFxuICAgICAgICAgICAgICAgICZfc3VibWl0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmlnO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAmX2NhbmNlbCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS1kYXJrLWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfc3VibWl0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCIsXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdjaXJjdWxhcic7XFxyXFxuICAgIHNyYzogdXJsKC4vZm9udHMvQ2lyY3VsYXJBaXItTGlnaHQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG59XCIsXCIkYmx1ZS1jb2xvcjogaHNsKDIxNCwgNzklLCAxMyUpO1xcclxcbiRibHVlLWNvbG9yLXRyYW5zOiBoc2xhKDIxMywgNzklLCAxMyUsIDAuNSk7XFxyXFxuJGdyZXktY29sb3I6IGhzbCgwLCAwJSwgOTclKTtcXHJcXG4kZ3JleS1kYXJrLWNvbG9yOiBoc2woMCwgMCUsIDgwJSk7XFxyXFxuJHJlZC1jb2xvcjogaHNsKDAsIDEwMCUsIDcwJSk7XFxyXFxuJGZvbnQtZmFtaWx5OiAnY2lyY3VsYXInO1xcclxcbiRmb250LWJpZzogMS41cmVtO1xcclxcbiRmb250LW1lZGl1bTogMS4ycmVtO1xcclxcbiRmb250LXNtYWxsOiAxcmVtO1xcclxcbiRib3JkZXItcmFkaXVzLWJpZzogMTJweDtcXHJcXG4kYm9yZGVyLXJhZGl1cy1zbWFsbDogOHB4O1xcclxcbiR0cmFuc2l0aW9uLWN1cnZlOiBjdWJpYy1iZXppZXIoLjUsIDEsIC41LCAxKTtcXHJcXG4kdGFzay13aWR0aDogNTB2dztcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguc2Nzcyc7XHJcbmltcG9ydCBjaGVja0ltZ1NyYyBmcm9tICcuL2ltYWdlcy9pY29ucy9jaGVjay5zdmcnXHJcbmltcG9ydCBjbG9zZUltZ1NyYyBmcm9tICcuL2ltYWdlcy9pY29ucy9jbG9zZS5zdmcnXHJcbmltcG9ydCBhcnJvd0Rvd25JbWdTcmMgZnJvbSAnLi9pbWFnZXMvaWNvbnMvYXJyb3ctZG93bi5zdmcnXHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1tYWluJylcclxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1uYXYnKVxyXG5cclxuY29uc3QgVUkgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG15UHJvamVjdHMgPSBbXVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRQcm9qZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gUHJvamVjdEZhY3RvcnkoJ0luZGV4JylcclxuICAgICAgICBteVByb2plY3RzLnB1c2goaW5kZXgpXHJcbiAgICAgICAgVUkucmVzZXRNYWluKClcclxuICAgICAgICBpbmRleC5kaXNwbGF5UHJvamVjdCgpXHJcbiAgICAgICAgaW5kZXguaW5pdGlhbGl6ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRNYWluKCkge1xyXG4gICAgICAgIGlmIChtYWluLmNoaWxkcmVuLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20obWFpbi5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICAgICAgICBteVByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBkaXNwbGF5UHJvamVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgbXlQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgLy8gICAgICAgICBwcm9qZWN0LmRpc3BsYXlQcm9qZWN0KClcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbXlQcm9qZWN0cyxcclxuICAgICAgICByZXNldE1haW4sXHJcbiAgICAgICAgaW5pdFByb2plY3QsXHJcbiAgICAgICAgYWRkUHJvamVjdCxcclxuICAgICAgICAvLyBkaXNwbGF5UHJvamVjdExpc3QsXHJcbiAgICB9XHJcbn0pKClcclxuXHJcblxyXG5jb25zdCBQcm9qZWN0RmFjdG9yeSA9ICh0aXRsZVZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBteVRhc2tzID0gW11cclxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVWYWx1ZVxyXG5cclxuICAgIGNvbnN0IHByb2plY3RDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBjb25zdCBwcm9qZWN0VGFza0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcblxyXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICAgICAgbXlUYXNrcy5wdXNoKHRhc2spXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlzcGxheVByb2plY3RUYXNrcyA9ICgpID0+IHtcclxuICAgICAgICBteVRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgIHRhc2sgPSBUYXNrRmFjdG9yeSh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmNvbXBsZXRpb24sIG15VGFza3MpXHJcbiAgICAgICAgICAgIHRhc2suZGlzcGxheVRhc2soKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RDb250LmNsYXNzTGlzdCA9ICdjb250YWluZXItbmF2X3Byb2plY3QnXHJcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVcclxuICAgICAgICBwcm9qZWN0VGFza0NvdW50LnRleHRDb250ZW50ID0gbXlUYXNrcy5sZW5ndGhcclxuICAgICAgICBwcm9qZWN0Q29udC5hcHBlbmQocHJvamVjdFRpdGxlLCBwcm9qZWN0VGFza0NvdW50KVxyXG4gICAgICAgIG5hdi5wcmVwZW5kKHByb2plY3RDb250KVxyXG4gICAgICAgIGluaXRFdmVudExpc3RlbmVycygpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5pdEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBVSS5yZXNldE1haW4oKVxyXG4gICAgICAgICAgICBtYWtlQWN0aXZlKClcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VGFza3MoKVxyXG4gICAgICAgIG1ha2VBY3RpdmUoKVxyXG4gICAgICAgIGNvbnN0IG15Rm9ybSA9IFRhc2tGb3JtRmFjdG9yeShteVRhc2tzKVxyXG4gICAgICAgIG15Rm9ybS5idWlsZEFkZFRhc2soKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ha2VBY3RpdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShuYXYuY2hpbGRyZW4pLmZvckVhY2gocHJvamVjdCA9PiB7IHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFpbmVyLW5hdl9wcm9qZWN0LS1hY3RpdmUnKSB9KTtcclxuICAgICAgICBwcm9qZWN0Q29udC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItbmF2X3Byb2plY3QtLWFjdGl2ZScpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBteVRhc2tzLFxyXG4gICAgICAgIGluaXRpYWxpemUsXHJcbiAgICAgICAgYWRkVGFzayxcclxuICAgICAgICByZW1vdmVUYXNrLFxyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VGFza3MsXHJcbiAgICAgICAgZGlzcGxheVByb2plY3QsXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBUYXNrRmFjdG9yeSA9ICh0aXRsZVZhbCwgYm9keVZhbCwgY29tcGxldGlvblZhbCwgcHJvamVjdFRhc2tzKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlVmFsXHJcbiAgICBjb25zdCBib2R5ID0gYm9keVZhbFxyXG4gICAgbGV0IGNvbXBsZXRpb24gPSBjb21wbGV0aW9uVmFsXHJcbiAgICBsZXQgY2xpY2tlZCA9IGZhbHNlXHJcblxyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjb25zdCBjaGVja0ltZyA9IG5ldyBJbWFnZSgxMSwgMTEpXHJcbiAgICBjb25zdCBjbG9zZUltZyA9IG5ldyBJbWFnZSgxOCwgMTgpXHJcbiAgICBjb25zdCBhcnJvd0Rvd25JbWcgPSBuZXcgSW1hZ2UoMTgsIDE4KVxyXG4gICAgY29uc3QgdGl0bGVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHRpdGxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgYm9keUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDb21wbGV0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RUYXNrcy5maW5kKHRhc2sgPT4geyBpZiAodGFzay50aXRsZSA9PT0gdGl0bGUgJiYgdGFzay5ib2R5ID09PSBib2R5KSB0YXNrLmNvbXBsZXRpb24gPSAhdGFzay5jb21wbGV0aW9uIH0pXHJcbiAgICAgICAgY29tcGxldGlvbiA9ICFjb21wbGV0aW9uXHJcbiAgICAgICAgIWNsaWNrZWQgPyBjaGVja0ltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyA6IGNoZWNrSW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBjbGlja2VkID0gIWNsaWNrZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmUoKVxyXG4gICAgICAgIHByb2plY3RUYXNrcy5maW5kKHRhc2sgPT4geyBpZiAodGFzay50aXRsZSA9PT0gdGl0bGUgfHwgdGFzay5ib2R5ID09PSBib2R5KSBwcm9qZWN0VGFza3Muc3BsaWNlKHByb2plY3RUYXNrcy5pbmRleE9mKHRhc2spLCAxKSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrYm94TW91c2VPdmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghY2xpY2tlZCkgY2hlY2tJbWcuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja2JveE1vdXNlT3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghY2xpY2tlZCkgY2hlY2tJbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlJY29ucyA9ICgpID0+IHtcclxuICAgICAgICBjbG9zZUltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgIGFycm93RG93bkltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpZGVJY29ucyA9ICgpID0+IHtcclxuICAgICAgICBjbG9zZUltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgYXJyb3dEb3duSW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VCb2R5VmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgICAgICBib2R5RWxlbS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snID8gYm9keUVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJyA6IGJvZHlFbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbGl6ZVRhc2tFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHsgZGlzcGxheUljb25zKCkgfSlcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4geyBoaWRlSWNvbnMoKSB9KVxyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBjaGFuZ2VDb21wbGV0aW9uKCkgfSlcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7IGNoZWNrYm94TW91c2VPdmVyKCkgfSlcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHsgY2hlY2tib3hNb3VzZU91dCgpIH0pXHJcbiAgICAgICAgY2xvc2VJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHJlbW92ZSgpIH0pXHJcbiAgICAgICAgYXJyb3dEb3duSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBjaGFuZ2VCb2R5VmlzaWJpbGl0eSgpIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheVRhc2soKSB7XHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW4tdGFzaydcclxuICAgICAgICB0YXNrSW5mby5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW4tdGFzay1pbmZvJ1xyXG4gICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrLWluZm8tdGl0bGVDb250X2NoZWNrYm94J1xyXG4gICAgICAgIGNsb3NlSW1nLmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrLWluZm8tdGl0bGVDb250X2Nsb3NlJ1xyXG4gICAgICAgIGFycm93RG93bkltZy5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW4tdGFzay1pbmZvLXRpdGxlQ29udF9hcnJvd0Rvd24nXHJcbiAgICAgICAgdGl0bGVDb250LmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrLWluZm8tdGl0bGVDb250J1xyXG4gICAgICAgIHRpdGxlRWxlbS5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW4tdGFzay1pbmZvLXRpdGxlQ29udF90aXRsZSdcclxuICAgICAgICBib2R5RWxlbS5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW4tdGFzay1pbmZvX2JvZHknXHJcblxyXG4gICAgICAgIGNoZWNrSW1nLnN0eWxlLmRpc3BsYXkgPSBjb21wbGV0aW9uID8gJ2Jsb2NrJyA6ICdub25lJ1xyXG4gICAgICAgIHRpdGxlRWxlbS50ZXh0Q29udGVudCA9IHRpdGxlID8gdGl0bGUgOiAnTm8gVGl0bGUnXHJcbiAgICAgICAgYm9keUVsZW0udGV4dENvbnRlbnQgPSBib2R5XHJcblxyXG4gICAgICAgIGNsb3NlSW1nLnNyYyA9IGNsb3NlSW1nU3JjXHJcbiAgICAgICAgY2hlY2tJbWcuc3JjID0gY2hlY2tJbWdTcmNcclxuICAgICAgICBhcnJvd0Rvd25JbWcuc3JjID0gYXJyb3dEb3duSW1nU3JjXHJcblxyXG5cclxuICAgICAgICBpbml0aWFsaXplVGFza0V2ZW50TGlzdGVuZXJzKGNoZWNrYm94LCBjaGVja0ltZylcclxuICAgICAgICBjaGVja2JveC5hcHBlbmQoY2hlY2tJbWcpXHJcbiAgICAgICAgdGl0bGVDb250LmFwcGVuZChjaGVja2JveCwgdGl0bGVFbGVtLCBhcnJvd0Rvd25JbWcsIGNsb3NlSW1nKVxyXG4gICAgICAgIHRhc2tJbmZvLmFwcGVuZCh0aXRsZUNvbnQsIGJvZHlFbGVtKVxyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRhc2tJbmZvKVxyXG4gICAgICAgIG1haW4ucHJlcGVuZCh0YXNrQ29udGFpbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFVJLm15UHJvamVjdHMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgYm9keSxcclxuICAgICAgICBjb21wbGV0aW9uLFxyXG4gICAgICAgIGRpc3BsYXlUYXNrLFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgVGFza0Zvcm1GYWN0b3J5ID0gKHByb2plY3RUYXNrcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGFkZFRhc2tMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbiAgICBjb25zdCBidWlsZEFkZFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkVGFza0xpbmUuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluX2FkZFRhc2snXHJcbiAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluLXRhc2tGb3JtJ1xyXG4gICAgICAgIGlucHV0cy5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW4tdGFza0Zvcm0taW5wdXRzJ1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrRm9ybS1pbnB1dHNfdGl0bGUnXHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW1haW4tdGFza0Zvcm0taW5wdXRzX2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgIGJ1dHRvbnMuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluLXRhc2tGb3JtLWJ1dHRvbnMnXHJcbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdCA9ICdjb250YWluZXItbWFpbi10YXNrRm9ybS1idXR0b25zX2NhbmNlbCdcclxuICAgICAgICBzdWJtaXQuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1tYWluLXRhc2tGb3JtLWJ1dHRvbnNfc3VibWl0J1xyXG5cclxuICAgICAgICBhZGRUYXNrTGluZS50ZXh0Q29udGVudCA9ICdhZGQgdGFzaydcclxuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnY2FuY2VsJ1xyXG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdzdWJtaXQnXHJcblxyXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKVxyXG4gICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCdyb3dzJywgJzMnKVxyXG4gICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCdtdWx0aWxpbmUnLCAnZmFsc2UnKVxyXG4gICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpXHJcbiAgICAgICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgndHlwZScsICdyZXNldCcpXHJcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyZXNldCcpXHJcblxyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kKGNhbmNlbCwgc3VibWl0KVxyXG4gICAgICAgIGlucHV0cy5hcHBlbmQodGl0bGUsIGJvZHkpXHJcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kKGlucHV0cywgYnV0dG9ucylcclxuICAgICAgICBtYWluLmFwcGVuZChhZGRUYXNrTGluZSwgdGFza0Zvcm0pXHJcbiAgICAgICAgaW5pdEV2ZW50TGlzdGVuZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkVGFza0xpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNob3dBZGRUYXNrKCkgfSlcclxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGhpZGVBZGRUYXNrKCkgfSlcclxuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHN1Ym1pdFRhc2soKSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IFRhc2tGYWN0b3J5KHRpdGxlLnZhbHVlLCBib2R5LnZhbHVlLCBmYWxzZSwgcHJvamVjdFRhc2tzKVxyXG4gICAgICAgIHByb2plY3RUYXNrcy5wdXNoKG5ld1Rhc2spXHJcbiAgICAgICAgbmV3VGFzay5kaXNwbGF5VGFzaygpXHJcbiAgICAgICAgaGlkZUFkZFRhc2soKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dBZGRUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFRhc2tMaW5lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpZGVBZGRUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFRhc2tMaW5lLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFVJLm15UHJvamVjdHMpO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJ1aWxkQWRkVGFzayxcclxuICAgICAgICBoaWRlQWRkVGFzayxcclxuICAgICAgICBzaG93QWRkVGFzayxcclxuICAgICAgICBzdWJtaXRUYXNrLFxyXG4gICAgICAgIGluaXRFdmVudExpc3RlbmVycyxcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IG5hdkZvcm1GYWN0b3J5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWRkUHJvamVjdExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbiAgICBjb25zdCBidWlsZE5hdiA9ICgpID0+IHtcclxuICAgICAgICBhZGRQcm9qZWN0TGluZS5jbGFzc0xpc3QgPSAnY29udGFpbmVyLW5hdl9hZGRQcm9qZWN0J1xyXG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdCA9ICdjb250YWluZXItbmF2LXByb2plY3RGb3JtJ1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdCA9ICdjb250YWluZXItbmF2LXByb2plY3RGb3JtX3RpdGxlJ1xyXG4gICAgICAgIGJ1dHRvbnMuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1uYXYtcHJvamVjdEZvcm0tYnV0dG9ucydcclxuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lci1uYXYtcHJvamVjdEZvcm0tYnV0dG9uc19jYW5jZWwnXHJcbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdCA9ICdjb250YWluZXItbmF2LXByb2plY3RGb3JtLWJ1dHRvbnNfc3VibWl0J1xyXG5cclxuICAgICAgICBhZGRQcm9qZWN0TGluZS50ZXh0Q29udGVudCA9ICdhZGQgcHJvamVjdCdcclxuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnY2FuY2VsJ1xyXG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdzdWJtaXQnXHJcblxyXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKVxyXG4gICAgICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmVzZXQnKVxyXG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmVzZXQnKVxyXG5cclxuICAgICAgICBidXR0b25zLmFwcGVuZChjYW5jZWwsIHN1Ym1pdClcclxuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmQodGl0bGUsIGJ1dHRvbnMpXHJcbiAgICAgICAgbmF2LmFwcGVuZChhZGRQcm9qZWN0TGluZSwgcHJvamVjdEZvcm0pXHJcbiAgICAgICAgaW5pdEV2ZW50TGlzdGVuZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkUHJvamVjdExpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNob3dBZGRUYXNrKCkgfSlcclxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGhpZGVBZGRUYXNrKCkgfSlcclxuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHN1Ym1pdFRhc2soKSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3RGYWN0b3J5KHRpdGxlLnZhbHVlKVxyXG4gICAgICAgIFVJLmFkZFByb2plY3QobmV3UHJvamVjdClcclxuICAgICAgICBVSS5yZXNldE1haW4oKVxyXG4gICAgICAgIG5ld1Byb2plY3QuZGlzcGxheVByb2plY3QoKVxyXG4gICAgICAgIG5ld1Byb2plY3QuaW5pdGlhbGl6ZSgpXHJcbiAgICAgICAgaGlkZUFkZFRhc2soKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dBZGRUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFByb2plY3RMaW5lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGlkZUFkZFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkUHJvamVjdExpbmUuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYnVpbGROYXYsXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL3Jlc2V0IG1haW5cclxuY29uc3QgbmF2Rm9ybSA9IG5hdkZvcm1GYWN0b3J5KClcclxubmF2Rm9ybS5idWlsZE5hdigpXHJcblVJLmluaXRQcm9qZWN0KClcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==