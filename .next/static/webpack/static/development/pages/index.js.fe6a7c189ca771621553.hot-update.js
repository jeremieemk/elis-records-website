webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProgressBar.js":
/*!***********************************!*\
  !*** ./components/ProgressBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeremie/web/33_elis/components/ProgressBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ProgressBar(props) {
  var progressBar = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  function scrub(e) {
    console.log();
    console.log(progressBar.current.offsetWidth);
    console.log(props.audio.duration);
    var scrubTime = e.nativeEvent.offsetX / progressBar.current.offsetWidth * props.audio.duration;
    props.audio.currentTime = scrubTime;
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "progress-bar",
    ref: progressBar,
    onClick: function onClick(e) {
      return scrub(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "range",
    style: {
      width: "".concat(props.progression, "%")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "\n    .progress-bar {\n      width: 80%;\n      height: 35px;\n      border: 2px solid #666;\n    }\n    .range {\n      background: limegreen;\n      height: 100%;\n      transition: width 0.3s ease-in;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ })

})
//# sourceMappingURL=index.js.fe6a7c189ca771621553.hot-update.js.map