webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AudioPlayer.js":
/*!***********************************!*\
  !*** ./components/AudioPlayer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlayButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayButton */ "./components/PlayButton.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgressBar */ "./components/ProgressBar.js");
/* harmony import */ var _VolumeSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VolumeSlider */ "./components/VolumeSlider.js");
var _jsxFileName = "/Users/jeremie/web/33_elis/components/AudioPlayer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function AudioPlayer(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      progression = _useState[0],
      setProgression = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      playingStatus = _useState2[0],
      setPlayingStatus = _useState2[1];

  var audio = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var updateProgress = function updateProgress() {
    setProgression(audio.current.currentTime / audio.current.duration * 100);
  };

  var handlePlayButtonClick = function handlePlayButtonClick() {
    setPlayingStatus(!playingStatus);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (playingStatus) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [playingStatus]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setPlayingStatus(true);
    console.log(playingStatus);
    audio.current.currentTime = 0;
    audio.current.play();
  }, [props.launchPlay]);
  return __jsx("div", {
    className: "jsx-4151149824",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4151149824" + " " + "audio-player-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_PlayButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handlePlayButtonClick: handlePlayButtonClick,
    playingStatus: playingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    audio: audio.current,
    progression: progression,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("audio", {
    ref: audio,
    onTimeUpdate: updateProgress,
    src: props.track.url,
    className: "jsx-4151149824",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx(_VolumeSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    audio: audio.current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4151149824",
    __self: this
  }, ".audio-player-container.jsx-4151149824{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NrQixBQUd3QiwwRUFDRixXQUNDLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzMzX2VsaXMvY29tcG9uZW50cy9BdWRpb1BsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsYXlCdXR0b24gZnJvbSBcIi4vUGxheUJ1dHRvblwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgVm9sdW1lU2xpZGVyIGZyb20gXCIuL1ZvbHVtZVNsaWRlclwiO1xuXG5mdW5jdGlvbiBBdWRpb1BsYXllcihwcm9wcykge1xuICBjb25zdCBbcHJvZ3Jlc3Npb24sIHNldFByb2dyZXNzaW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcGxheWluZ1N0YXR1cywgc2V0UGxheWluZ1N0YXR1c10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgYXVkaW8gPSB1c2VSZWYoKTtcbiAgY29uc3QgdXBkYXRlUHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgc2V0UHJvZ3Jlc3Npb24oKGF1ZGlvLmN1cnJlbnQuY3VycmVudFRpbWUgLyBhdWRpby5jdXJyZW50LmR1cmF0aW9uKSAqIDEwMCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVBsYXlCdXR0b25DbGljayA9ICgpID0+IHtcbiAgICBzZXRQbGF5aW5nU3RhdHVzKCFwbGF5aW5nU3RhdHVzKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwbGF5aW5nU3RhdHVzKSB7XG4gICAgICBhdWRpby5jdXJyZW50LnBsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXVkaW8uY3VycmVudC5wYXVzZSgpO1xuICAgIH1cbiAgfSwgW3BsYXlpbmdTdGF0dXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBsYXlpbmdTdGF0dXModHJ1ZSk7XG4gICAgY29uc29sZS5sb2cocGxheWluZ1N0YXR1cyk7XG4gICAgYXVkaW8uY3VycmVudC5jdXJyZW50VGltZSA9IDA7XG4gICAgYXVkaW8uY3VycmVudC5wbGF5KCk7XG4gIH0sIFtwcm9wcy5sYXVuY2hQbGF5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdWRpby1wbGF5ZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxQbGF5QnV0dG9uXG4gICAgICAgICAgaGFuZGxlUGxheUJ1dHRvbkNsaWNrPXtoYW5kbGVQbGF5QnV0dG9uQ2xpY2t9XG4gICAgICAgICAgcGxheWluZ1N0YXR1cz17cGxheWluZ1N0YXR1c31cbiAgICAgICAgLz5cbiAgICAgICAgPFByb2dyZXNzQmFyIGF1ZGlvPXthdWRpby5jdXJyZW50fSBwcm9ncmVzc2lvbj17cHJvZ3Jlc3Npb259IC8+XG5cbiAgICAgICAgPGF1ZGlvXG4gICAgICAgICAgcmVmPXthdWRpb31cbiAgICAgICAgICBvblRpbWVVcGRhdGU9e3VwZGF0ZVByb2dyZXNzfVxuICAgICAgICAgIHNyYz17cHJvcHMudHJhY2sudXJsfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Vm9sdW1lU2xpZGVyIGF1ZGlvPXthdWRpby5jdXJyZW50fSAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYXVkaW8tcGxheWVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9QbGF5ZXI7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/AudioPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

/***/ })

})
//# sourceMappingURL=index.js.603e629a1c53af718fdd.hot-update.js.map