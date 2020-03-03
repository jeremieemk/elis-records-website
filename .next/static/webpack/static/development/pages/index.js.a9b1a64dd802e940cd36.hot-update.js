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

  var audio = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var updateProgress = function updateProgress() {
    setProgression(audio.current.currentTime / audio.current.duration * 100);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (props.playingStatus) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [props.playingStatus]); // allows launchinng track owhen clicking on the tracklist

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    props.setPlayingStatus(true);
    audio.current.currentTime = 0;
    audio.current.play();
  }, [props.launchPlay, props.track]);
  return __jsx("div", {
    className: "jsx-1775785678",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1775785678" + " " + "audio-player-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_PlayButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handlePlayButtonClick: props.handlePlayButtonClick,
    playingStatus: props.playingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    audio: audio.current,
    progression: progression,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("audio", {
    ref: audio,
    onTimeUpdate: updateProgress,
    src: props.track.url,
    className: "jsx-1775785678",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(_VolumeSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    audio: audio.current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1775785678",
    __self: this
  }, ".audio-player-container.jsx-1775785678{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUd3QiwwRUFDRixXQUNDLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzMzX2VsaXMvY29tcG9uZW50cy9BdWRpb1BsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsYXlCdXR0b24gZnJvbSBcIi4vUGxheUJ1dHRvblwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgVm9sdW1lU2xpZGVyIGZyb20gXCIuL1ZvbHVtZVNsaWRlclwiO1xuXG5mdW5jdGlvbiBBdWRpb1BsYXllcihwcm9wcykge1xuICBjb25zdCBbcHJvZ3Jlc3Npb24sIHNldFByb2dyZXNzaW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBhdWRpbyA9IHVzZVJlZigpO1xuICBjb25zdCB1cGRhdGVQcm9ncmVzcyA9ICgpID0+IHtcbiAgICBzZXRQcm9ncmVzc2lvbigoYXVkaW8uY3VycmVudC5jdXJyZW50VGltZSAvIGF1ZGlvLmN1cnJlbnQuZHVyYXRpb24pICogMTAwKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvcHMucGxheWluZ1N0YXR1cykge1xuICAgICAgYXVkaW8uY3VycmVudC5wbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF1ZGlvLmN1cnJlbnQucGF1c2UoKTtcbiAgICB9XG4gIH0sIFtwcm9wcy5wbGF5aW5nU3RhdHVzXSk7XG5cbiAgLy8gYWxsb3dzIGxhdW5jaGlubmcgdHJhY2sgb3doZW4gY2xpY2tpbmcgb24gdGhlIHRyYWNrbGlzdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLnNldFBsYXlpbmdTdGF0dXModHJ1ZSk7XG4gICAgYXVkaW8uY3VycmVudC5jdXJyZW50VGltZSA9IDA7XG4gICAgYXVkaW8uY3VycmVudC5wbGF5KCk7XG4gIH0sIFtwcm9wcy5sYXVuY2hQbGF5LCBwcm9wcy50cmFja10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW8tcGxheWVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8UGxheUJ1dHRvblxuICAgICAgICAgIGhhbmRsZVBsYXlCdXR0b25DbGljaz17cHJvcHMuaGFuZGxlUGxheUJ1dHRvbkNsaWNrfVxuICAgICAgICAgIHBsYXlpbmdTdGF0dXM9e3Byb3BzLnBsYXlpbmdTdGF0dXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9ncmVzc0JhciBhdWRpbz17YXVkaW8uY3VycmVudH0gcHJvZ3Jlc3Npb249e3Byb2dyZXNzaW9ufSAvPlxuXG4gICAgICAgIDxhdWRpb1xuICAgICAgICAgIHJlZj17YXVkaW99XG4gICAgICAgICAgb25UaW1lVXBkYXRlPXt1cGRhdGVQcm9ncmVzc31cbiAgICAgICAgICBzcmM9e3Byb3BzLnRyYWNrLnVybH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFZvbHVtZVNsaWRlciBhdWRpbz17YXVkaW8uY3VycmVudH0gLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmF1ZGlvLXBsYXllci1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9QbGF5ZXI7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/AudioPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

/***/ })

})
//# sourceMappingURL=index.js.a9b1a64dd802e940cd36.hot-update.js.map