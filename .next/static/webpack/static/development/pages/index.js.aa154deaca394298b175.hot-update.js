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
    return setProgression(audio.current.currentTime / audio.current.duration * 100);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    props.playingStatus ? audio.current.play() : audio.current.pause();
  }, [props.playingStatus]); // allows launching track when clicking on the tracklist

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    props.setPlayingStatus(true);
    audio.current.currentTime = 0;
    audio.current.play();
  }, [props.launchPlay, props.track]);
  var audioPlayerClassNames = audio.current ? "audio-player-container" : "audio-player-container is-loading";
  return __jsx("div", {
    className: "jsx-1271596834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1271596834" + " " + (audioPlayerClassNames || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_PlayButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handlePlayButtonClick: props.handlePlayButtonClick,
    playingStatus: props.playingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    audio: audio.current,
    progression: progression,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("audio", {
    ref: audio,
    onTimeUpdate: updateProgress,
    src: props.track.url,
    className: "jsx-1271596834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx(_VolumeSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    audio: audio.current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1271596834",
    __self: this
  }, ".audio-player-container.jsx-1271596834{z-index:5;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:2rem;-webkit-animation:fadeIn-jsx-1271596834 1s;animation:fadeIn-jsx-1271596834 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.is-loading.jsx-1271596834{-webkit-animation:blurAnimation-jsx-1271596834 1s;animation:blurAnimation-jsx-1271596834 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}@-webkit-keyframes fadeIn-jsx-1271596834{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-1271596834{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes blurAnimation-jsx-1271596834{from{-webkit-filter:blur(0px);filter:blur(0px);}to{-webkit-filter:blur(5px);filter:blur(5px);}}@keyframes blurAnimation-jsx-1271596834{from{-webkit-filter:blur(0px);filter:blur(0px);}to{-webkit-filter:blur(5px);filter:blur(5px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNrQixBQUdxQixBQVNpQixBQUtmLEFBSUEsQUFLTyxBQUlBLFVBMUJELEFBY2xCLEFBSUEsa0JBakJhLGNBc0JiLEFBSUEsa0RBbEI2QixVQVBsQixXQUNDLFlBQ1EsaUNBTXRCLDZDQUwrQixrRUFDL0IiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzMzX2VsaXMvY29tcG9uZW50cy9BdWRpb1BsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsYXlCdXR0b24gZnJvbSBcIi4vUGxheUJ1dHRvblwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgVm9sdW1lU2xpZGVyIGZyb20gXCIuL1ZvbHVtZVNsaWRlclwiO1xuXG5mdW5jdGlvbiBBdWRpb1BsYXllcihwcm9wcykge1xuICBjb25zdCBbcHJvZ3Jlc3Npb24sIHNldFByb2dyZXNzaW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBhdWRpbyA9IHVzZVJlZigpO1xuICBjb25zdCB1cGRhdGVQcm9ncmVzcyA9ICgpID0+XG4gICAgc2V0UHJvZ3Jlc3Npb24oKGF1ZGlvLmN1cnJlbnQuY3VycmVudFRpbWUgLyBhdWRpby5jdXJyZW50LmR1cmF0aW9uKSAqIDEwMCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJvcHMucGxheWluZ1N0YXR1cyA/IGF1ZGlvLmN1cnJlbnQucGxheSgpIDogYXVkaW8uY3VycmVudC5wYXVzZSgpO1xuICB9LCBbcHJvcHMucGxheWluZ1N0YXR1c10pO1xuXG4gIC8vIGFsbG93cyBsYXVuY2hpbmcgdHJhY2sgd2hlbiBjbGlja2luZyBvbiB0aGUgdHJhY2tsaXN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJvcHMuc2V0UGxheWluZ1N0YXR1cyh0cnVlKTtcbiAgICBhdWRpby5jdXJyZW50LmN1cnJlbnRUaW1lID0gMDtcbiAgICBhdWRpby5jdXJyZW50LnBsYXkoKTtcbiAgfSwgW3Byb3BzLmxhdW5jaFBsYXksIHByb3BzLnRyYWNrXSk7XG4gIGNvbnN0IGF1ZGlvUGxheWVyQ2xhc3NOYW1lcyA9IGF1ZGlvLmN1cnJlbnRcbiAgICA/IFwiYXVkaW8tcGxheWVyLWNvbnRhaW5lclwiXG4gICAgOiBcImF1ZGlvLXBsYXllci1jb250YWluZXIgaXMtbG9hZGluZ1wiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthdWRpb1BsYXllckNsYXNzTmFtZXN9PlxuICAgICAgICA8UGxheUJ1dHRvblxuICAgICAgICAgIGhhbmRsZVBsYXlCdXR0b25DbGljaz17cHJvcHMuaGFuZGxlUGxheUJ1dHRvbkNsaWNrfVxuICAgICAgICAgIHBsYXlpbmdTdGF0dXM9e3Byb3BzLnBsYXlpbmdTdGF0dXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9ncmVzc0JhciBhdWRpbz17YXVkaW8uY3VycmVudH0gcHJvZ3Jlc3Npb249e3Byb2dyZXNzaW9ufSAvPlxuXG4gICAgICAgIDxhdWRpb1xuICAgICAgICAgIHJlZj17YXVkaW99XG4gICAgICAgICAgb25UaW1lVXBkYXRlPXt1cGRhdGVQcm9ncmVzc31cbiAgICAgICAgICBzcmM9e3Byb3BzLnRyYWNrLnVybH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFZvbHVtZVNsaWRlciBhdWRpbz17YXVkaW8uY3VycmVudH0gLz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYXVkaW8tcGxheWVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIH1cbiAgICAgICAgLmlzLWxvYWRpbmcge1xuICAgICAgICAgIGFuaW1hdGlvbjogYmx1ckFuaW1hdGlvbiAxcztcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgYmx1ckFuaW1hdGlvbiB7XG4gICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0byB7XG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9QbGF5ZXI7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/AudioPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

/***/ })

})
//# sourceMappingURL=index.js.aa154deaca394298b175.hot-update.js.map