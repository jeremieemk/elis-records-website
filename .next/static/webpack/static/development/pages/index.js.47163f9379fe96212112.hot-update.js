webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PlayButton.js":
/*!**********************************!*\
  !*** ./components/PlayButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeremie/web/33_elis/components/PlayButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function PlayButton(props) {
  return __jsx("div", {
    className: "PlayButton",
    onClick: props.handlePlayButtonClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, !props.playingStatus ? __jsx("img", {
    className: "play-song",
    src: "/img/play-song.png",
    alt: "play-song",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }) : __jsx("img", {
    className: "pause-song",
    src: "/img/pause.png",
    alt: "pause-song",
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
    lineNumber: 15
  },
  __self: undefined
}, "\n    .PlayButton {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-left: 0.5rem;\n    }\n    .play-song,\n    .pause-song {\n      width: 2rem;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (PlayButton);

/***/ })

})
//# sourceMappingURL=index.js.47163f9379fe96212112.hot-update.js.map