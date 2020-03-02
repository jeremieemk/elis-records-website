webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ReleaseEntry.js":
/*!************************************!*\
  !*** ./components/ReleaseEntry.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeremie/web/33_elis/components/ReleaseEntry.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ReleaseEntry(props) {
  return props.releases && props.releases.map(function (release) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, __jsx("div", {
      className: "release-entry-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("img", {
      className: "release-cover",
      src: release.data.cover.url,
      alt: "release-cover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), __jsx("div", {
      className: "release-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("div", {
      key: release.id,
      className: "artist-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, release.data.artist[0].text), __jsx("div", {
      key: release.id,
      className: "release-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, release.data.title[0].text))), style);
  });
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "\n    .release-entry-wrapper {\n      position: relative;\n      font-family: var(--font4);\n    }\n    .release-cover {\n      width: 100%;\n    }\n    .play-button {\n    }\n    .play {\n      position: absolute;\n      left: 1rem;\n      bottom: 1rem;\n      width: 5rem;\n      background-color: white;\n      padding: 0.2rem;\n    }\n    .release-details {\n      position: absolute;\n      bottom: 1rem;\n      right: 1rem;\n      text-align: right;\n    }\n    .artist-name {\n      margin-bottom: 0.3rem;\n      font-size: 1.2rem;\n    }\n    .artist-name,\n    .release-name {\n      display: inline-block;\n      background-color: white;\n      padding: 0.4rem;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (ReleaseEntry);

/***/ })

})
//# sourceMappingURL=index.js.30a7fa521fbace62c596.hot-update.js.map