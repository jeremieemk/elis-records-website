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
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loader */ "./components/Loader.js");
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
  return __jsx("div", {
    className: "jsx-2384702918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, !(audio.current && audio.current.currentTime > 0) ? __jsx(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }) : __jsx("div", {
    className: "jsx-2384702918" + " " + "player-loaded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2384702918" + " " + "audio-player-container",
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
  })), __jsx(_VolumeSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    audio: audio.current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("audio", {
    ref: audio,
    onTimeUpdate: updateProgress,
    src: props.track.url,
    className: "jsx-2384702918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2384702918",
    __self: this
  }, ".audio-player-container.jsx-2384702918{z-index:5;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:2rem;-webkit-animation:fadeIn-jsx-2384702918 1s;animation:fadeIn-jsx-2384702918 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.is-loading.jsx-2384702918{-webkit-animation:blurAnimation-jsx-2384702918 1s;animation:blurAnimation-jsx-2384702918 1s;}@-webkit-keyframes fadeIn-jsx-2384702918{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-2384702918{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes blurAnimation-jsx-2384702918{from{-webkit-filter:blur(0px);filter:blur(0px);}to{-webkit-filter:blur(5px);filter:blur(5px);}}@keyframes blurAnimation-jsx-2384702918{from{-webkit-filter:blur(0px);filter:blur(0px);}to{-webkit-filter:blur(5px);filter:blur(5px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NrQixBQUdxQixBQVNpQixBQUlmLEFBSUEsQUFLTyxBQUlBLFVBekJELEFBYWxCLEFBSUEsa0JBaEJhLGNBcUJiLEFBSUEsa0RBakJGLFVBUGEsV0FDQyxZQUNRLDhFQUNTLGtFQUMvQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL0F1ZGlvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tIFwiLi9QbGF5QnV0dG9uXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBWb2x1bWVTbGlkZXIgZnJvbSBcIi4vVm9sdW1lU2xpZGVyXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL0xvYWRlclwiO1xuXG5mdW5jdGlvbiBBdWRpb1BsYXllcihwcm9wcykge1xuICBjb25zdCBbcHJvZ3Jlc3Npb24sIHNldFByb2dyZXNzaW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBhdWRpbyA9IHVzZVJlZigpO1xuICBjb25zdCB1cGRhdGVQcm9ncmVzcyA9ICgpID0+XG4gICAgc2V0UHJvZ3Jlc3Npb24oKGF1ZGlvLmN1cnJlbnQuY3VycmVudFRpbWUgLyBhdWRpby5jdXJyZW50LmR1cmF0aW9uKSAqIDEwMCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJvcHMucGxheWluZ1N0YXR1cyA/IGF1ZGlvLmN1cnJlbnQucGxheSgpIDogYXVkaW8uY3VycmVudC5wYXVzZSgpO1xuICB9LCBbcHJvcHMucGxheWluZ1N0YXR1c10pO1xuXG4gIC8vIGFsbG93cyBsYXVuY2hpbmcgdHJhY2sgd2hlbiBjbGlja2luZyBvbiB0aGUgdHJhY2tsaXN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJvcHMuc2V0UGxheWluZ1N0YXR1cyh0cnVlKTtcbiAgICBhdWRpby5jdXJyZW50LmN1cnJlbnRUaW1lID0gMDtcbiAgICBhdWRpby5jdXJyZW50LnBsYXkoKTtcbiAgfSwgW3Byb3BzLmxhdW5jaFBsYXksIHByb3BzLnRyYWNrXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeyEoYXVkaW8uY3VycmVudCAmJiBhdWRpby5jdXJyZW50LmN1cnJlbnRUaW1lID4gMCkgPyAoXG4gICAgICAgIDxMb2FkZXIgc2l6ZT1cIjQwXCIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyLWxvYWRlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW8tcGxheWVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFBsYXlCdXR0b25cbiAgICAgICAgICAgICAgaGFuZGxlUGxheUJ1dHRvbkNsaWNrPXtwcm9wcy5oYW5kbGVQbGF5QnV0dG9uQ2xpY2t9XG4gICAgICAgICAgICAgIHBsYXlpbmdTdGF0dXM9e3Byb3BzLnBsYXlpbmdTdGF0dXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFByb2dyZXNzQmFyIGF1ZGlvPXthdWRpby5jdXJyZW50fSBwcm9ncmVzc2lvbj17cHJvZ3Jlc3Npb259IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFZvbHVtZVNsaWRlciBhdWRpbz17YXVkaW8uY3VycmVudH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGF1ZGlvIHJlZj17YXVkaW99IG9uVGltZVVwZGF0ZT17dXBkYXRlUHJvZ3Jlc3N9IHNyYz17cHJvcHMudHJhY2sudXJsfSAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hdWRpby1wbGF5ZXItY29udGFpbmVyIHtcbiAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAxcztcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgfVxuICAgICAgICAuaXMtbG9hZGluZyB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBibHVyQW5pbWF0aW9uIDFzO1xuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG8ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBibHVyQW5pbWF0aW9uIHtcbiAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cig1cHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1BsYXllcjtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/AudioPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

/***/ })

})
//# sourceMappingURL=index.js.18fab4eaaa7dee9d56d1.hot-update.js.map