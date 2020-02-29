webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AudioPlayer.js":
/*!***********************************!*\
  !*** ./components/AudioPlayer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PlayButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayButton */ "./components/PlayButton.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar */ "./components/ProgressBar.js");
var _jsxFileName = "/Users/jeremie/web/33_elis/components/AudioPlayer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function AudioPlayer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      playingStatus = _useState[0],
      setPlayingStatus = _useState[1];

  var audio = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handlePlayButtonClick = function handlePlayButtonClick() {
    setPlayingStatus(!playingStatus);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    playingStatus ? audio.current.play() : audio.current.pause();
  }, [playingStatus]);
  return __jsx("div", {
    className: "audio-player-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_PlayButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handlePlayButtonClick: handlePlayButtonClick,
    playingStatus: playingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    audio: audio.current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("audio", {
    ref: audio,
    src: "/music/0.mp3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "");

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

/***/ })

})
//# sourceMappingURL=index.js.4671299ae2660af9df03.hot-update.js.map