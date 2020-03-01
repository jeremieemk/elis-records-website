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
  var progression = props.audioCurrentTime / props.songLength * 100;
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
      lineNumber: 17
    },
    __self: this
  }, props.audioCurrentTime, __jsx("div", {
    className: "progress-bar",
    ref: progressBar,
    onClick: function onClick(e) {
      return scrub(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "range",
    style: {
      width: "".concat(progression, "%")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "\n    .progress-bar {\n      width: 80%;\n      height: 35px;\n      border: 2px solid #666;\n    }\n    .range {\n      background: limegreen;\n      height: 100%;\n      transition: width 0.3s ease-in;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ })

})
//# sourceMappingURL=index.js.60a1c091a7d953a91d34.hot-update.js.map