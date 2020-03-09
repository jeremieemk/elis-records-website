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
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
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
  }, [props.launchPlay, props.track]); // useEffect(() => {
  //   audio.current.play();
  // }, [audio]);

  audio.current && console.log(audio.current.readyState);
  return __jsx("div", {
    className: "jsx-1111867522",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, audio.current && audio.current.readyState === 4 ? __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }) : __jsx("div", {
    className: "jsx-1111867522" + " " + "player-loaded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1111867522" + " " + "audio-player-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_PlayButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handlePlayButtonClick: props.handlePlayButtonClick,
    playingStatus: props.playingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    audio: audio.current,
    progression: progression,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("audio", {
    ref: audio,
    onTimeUpdate: updateProgress,
    src: props.track.url,
    className: "jsx-1111867522",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx(_VolumeSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    audio: audio.current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1111867522",
    __self: this
  }, ".audio-player-container.jsx-1111867522{z-index:5;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:2rem;-webkit-animation:fadeIn-jsx-1111867522 1s;animation:fadeIn-jsx-1111867522 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}@-webkit-keyframes fadeIn-jsx-1111867522{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-1111867522{from{opacity:0;}to{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RrQixBQUdxQixBQVVNLEFBSUEsVUFiRSxBQVVkLEFBSUEsa0JBYlMsMEVBQ0YsV0FDQyxZQUNRLDhFQUNhLGtFQUMvQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL0F1ZGlvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tIFwiLi9QbGF5QnV0dG9uXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBWb2x1bWVTbGlkZXIgZnJvbSBcIi4vVm9sdW1lU2xpZGVyXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRlclwiO1xuXG5mdW5jdGlvbiBBdWRpb1BsYXllcihwcm9wcykge1xuICBjb25zdCBbcHJvZ3Jlc3Npb24sIHNldFByb2dyZXNzaW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBhdWRpbyA9IHVzZVJlZigpO1xuICBjb25zdCB1cGRhdGVQcm9ncmVzcyA9ICgpID0+XG4gICAgc2V0UHJvZ3Jlc3Npb24oKGF1ZGlvLmN1cnJlbnQuY3VycmVudFRpbWUgLyBhdWRpby5jdXJyZW50LmR1cmF0aW9uKSAqIDEwMCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJvcHMucGxheWluZ1N0YXR1cyA/IGF1ZGlvLmN1cnJlbnQucGxheSgpIDogYXVkaW8uY3VycmVudC5wYXVzZSgpO1xuICB9LCBbcHJvcHMucGxheWluZ1N0YXR1c10pO1xuXG4gIC8vIGFsbG93cyBsYXVuY2hpbmcgdHJhY2sgd2hlbiBjbGlja2luZyBvbiB0aGUgdHJhY2tsaXN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJvcHMuc2V0UGxheWluZ1N0YXR1cyh0cnVlKTtcbiAgICBhdWRpby5jdXJyZW50LmN1cnJlbnRUaW1lID0gMDtcbiAgICBhdWRpby5jdXJyZW50LnBsYXkoKTtcbiAgfSwgW3Byb3BzLmxhdW5jaFBsYXksIHByb3BzLnRyYWNrXSk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgYXVkaW8uY3VycmVudC5wbGF5KCk7XG4gIC8vIH0sIFthdWRpb10pO1xuICBhdWRpby5jdXJyZW50ICYmIGNvbnNvbGUubG9nKGF1ZGlvLmN1cnJlbnQucmVhZHlTdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2F1ZGlvLmN1cnJlbnQgJiYgYXVkaW8uY3VycmVudC5yZWFkeVN0YXRlID09PSA0ID8gKFxuICAgICAgICA8TG9hZGVyIC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllci1sb2FkZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1ZGlvLXBsYXllci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxQbGF5QnV0dG9uXG4gICAgICAgICAgICAgIGhhbmRsZVBsYXlCdXR0b25DbGljaz17cHJvcHMuaGFuZGxlUGxheUJ1dHRvbkNsaWNrfVxuICAgICAgICAgICAgICBwbGF5aW5nU3RhdHVzPXtwcm9wcy5wbGF5aW5nU3RhdHVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcm9ncmVzc0JhciBhdWRpbz17YXVkaW8uY3VycmVudH0gcHJvZ3Jlc3Npb249e3Byb2dyZXNzaW9ufSAvPlxuICAgICAgICAgICAgPGF1ZGlvXG4gICAgICAgICAgICAgIHJlZj17YXVkaW99XG4gICAgICAgICAgICAgIG9uVGltZVVwZGF0ZT17dXBkYXRlUHJvZ3Jlc3N9XG4gICAgICAgICAgICAgIHNyYz17cHJvcHMudHJhY2sudXJsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Vm9sdW1lU2xpZGVyIGF1ZGlvPXthdWRpby5jdXJyZW50fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmF1ZGlvLXBsYXllci1jb250YWluZXIge1xuICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xuICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9QbGF5ZXI7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/AudioPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

/***/ })

})
//# sourceMappingURL=index.js.1cb9a9b159646e949b09.hot-update.js.map