webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/VolumeSlider.js":
/*!************************************!*\
  !*** ./components/VolumeSlider.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/jeremie/web/33_elis/components/VolumeSlider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function VolumeSlider(props) {
  var handleVolumechange = function handleVolumechange(e) {
    props.audio.volume = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value);
  };

  return __jsx("div", {
    className: "volume-slider-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("input", {
    type: "range",
    className: "volume_slider",
    name: "volume",
    min: "0",
    max: "1",
    step: "0.01",
    onChange: handleVolumechange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "\n    .volume-slider-container {\n      margin-top: 1rem;\n      width: 100%;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (VolumeSlider);

/***/ })

})
//# sourceMappingURL=index.js.d0446f1e811a274f376a.hot-update.js.map