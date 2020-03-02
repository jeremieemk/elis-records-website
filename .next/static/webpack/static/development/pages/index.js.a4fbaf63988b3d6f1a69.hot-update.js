webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/VolumeSlider.js":
/*!************************************!*\
  !*** ./components/VolumeSlider.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeremie/web/33_elis/components/VolumeSlider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function VolumeSlider(props) {
  var handleVolumechange = function handleVolumechange(e) {
    props.audio.volume = e;
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
    onChange: function onChange(e) {
      return handleVolumechange(e);
    },
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
}, "\n    .volume-slider-container {\n      margin-top: 1rem;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (VolumeSlider);

/***/ })

})
//# sourceMappingURL=index.js.a4fbaf63988b3d6f1a69.hot-update.js.map