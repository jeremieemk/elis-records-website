webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AudioPlayer.js":
/*!***********************************!*\
  !*** ./components/AudioPlayer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PlayButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayButton */ "./components/PlayButton.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressBar */ "./components/ProgressBar.js");
/* harmony import */ var _VolumeSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VolumeSlider */ "./components/VolumeSlider.js");

var _jsxFileName = "/Users/jeremie/web/33_elis/components/AudioPlayer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function AudioPlayer(props) {
  // custom property to check whether track is playing
  _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(HTMLMediaElement.prototype, "playing", {
    configurable: true,
    get: function get() {
      return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      progression = _useState[0],
      setProgression = _useState[1];

  var audio = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var updateProgress = function updateProgress() {
    return setProgression(audio.current.currentTime / audio.current.duration * 100);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    props.playingStatus ? audio.current.play() : audio.current.pause();
  }, [props.playingStatus]); // allows launching track when clicking on the tracklist

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    props.setPlayingStatus(true);
    audio.current.currentTime = 0;
    audio.current.play();
  }, [props.launchPlay, props.track]);
  audio.current && console.log(audio.current.playing);
  var audioPlayerClassNames = audio.current && audio.current.playing ? "audio-player-container" : "audio-player-container is-loading";
  return __jsx("div", {
    className: "jsx-3944199246",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3944199246" + " " + (audioPlayerClassNames || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_PlayButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handlePlayButtonClick: props.handlePlayButtonClick,
    playingStatus: props.playingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    audio: audio.current,
    progression: progression,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("audio", {
    ref: audio,
    onTimeUpdate: updateProgress,
    src: props.track.url,
    className: "jsx-3944199246",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), __jsx(_VolumeSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    audio: audio.current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3944199246",
    __self: this
  }, ".audio-player-container.jsx-3944199246{z-index:5;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:2rem;-webkit-animation:fadeIn-jsx-3944199246 1s;animation:fadeIn-jsx-3944199246 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.isLoading.jsx-3944199246{-webkit-filter:blur(8px);filter:blur(8px);}@-webkit-keyframes fadeIn-jsx-3944199246{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-3944199246{from{opacity:0;}to{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RrQixBQUdxQixBQVNPLEFBSUQsQUFJQSxVQWhCRSxBQWFkLEFBSUEsa0JBaEJTLGNBUWYsNERBUGEsV0FDQyxZQUNRLDhFQUNhLGtFQUMvQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL0F1ZGlvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tIFwiLi9QbGF5QnV0dG9uXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBWb2x1bWVTbGlkZXIgZnJvbSBcIi4vVm9sdW1lU2xpZGVyXCI7XG5cbmZ1bmN0aW9uIEF1ZGlvUGxheWVyKHByb3BzKSB7XG4gIC8vIGN1c3RvbSBwcm9wZXJ0eSB0byBjaGVjayB3aGV0aGVyIHRyYWNrIGlzIHBsYXlpbmdcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlLCBcInBsYXlpbmdcIiwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICEhKFxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID4gMCAmJlxuICAgICAgICAhdGhpcy5wYXVzZWQgJiZcbiAgICAgICAgIXRoaXMuZW5kZWQgJiZcbiAgICAgICAgdGhpcy5yZWFkeVN0YXRlID4gMlxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IFtwcm9ncmVzc2lvbiwgc2V0UHJvZ3Jlc3Npb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGF1ZGlvID0gdXNlUmVmKCk7XG4gIGNvbnN0IHVwZGF0ZVByb2dyZXNzID0gKCkgPT5cbiAgICBzZXRQcm9ncmVzc2lvbigoYXVkaW8uY3VycmVudC5jdXJyZW50VGltZSAvIGF1ZGlvLmN1cnJlbnQuZHVyYXRpb24pICogMTAwKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9wcy5wbGF5aW5nU3RhdHVzID8gYXVkaW8uY3VycmVudC5wbGF5KCkgOiBhdWRpby5jdXJyZW50LnBhdXNlKCk7XG4gIH0sIFtwcm9wcy5wbGF5aW5nU3RhdHVzXSk7XG5cbiAgLy8gYWxsb3dzIGxhdW5jaGluZyB0cmFjayB3aGVuIGNsaWNraW5nIG9uIHRoZSB0cmFja2xpc3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9wcy5zZXRQbGF5aW5nU3RhdHVzKHRydWUpO1xuICAgIGF1ZGlvLmN1cnJlbnQuY3VycmVudFRpbWUgPSAwO1xuICAgIGF1ZGlvLmN1cnJlbnQucGxheSgpO1xuICB9LCBbcHJvcHMubGF1bmNoUGxheSwgcHJvcHMudHJhY2tdKTtcbiAgYXVkaW8uY3VycmVudCAmJiBjb25zb2xlLmxvZyhhdWRpby5jdXJyZW50LnBsYXlpbmcpO1xuICBjb25zdCBhdWRpb1BsYXllckNsYXNzTmFtZXMgPVxuICAgIGF1ZGlvLmN1cnJlbnQgJiYgYXVkaW8uY3VycmVudC5wbGF5aW5nXG4gICAgICA/IFwiYXVkaW8tcGxheWVyLWNvbnRhaW5lclwiXG4gICAgICA6IFwiYXVkaW8tcGxheWVyLWNvbnRhaW5lciBpcy1sb2FkaW5nXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2F1ZGlvUGxheWVyQ2xhc3NOYW1lc30+XG4gICAgICAgIDxQbGF5QnV0dG9uXG4gICAgICAgICAgaGFuZGxlUGxheUJ1dHRvbkNsaWNrPXtwcm9wcy5oYW5kbGVQbGF5QnV0dG9uQ2xpY2t9XG4gICAgICAgICAgcGxheWluZ1N0YXR1cz17cHJvcHMucGxheWluZ1N0YXR1c31cbiAgICAgICAgLz5cbiAgICAgICAgPFByb2dyZXNzQmFyIGF1ZGlvPXthdWRpby5jdXJyZW50fSBwcm9ncmVzc2lvbj17cHJvZ3Jlc3Npb259IC8+XG5cbiAgICAgICAgPGF1ZGlvXG4gICAgICAgICAgcmVmPXthdWRpb31cbiAgICAgICAgICBvblRpbWVVcGRhdGU9e3VwZGF0ZVByb2dyZXNzfVxuICAgICAgICAgIHNyYz17cHJvcHMudHJhY2sudXJsfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Vm9sdW1lU2xpZGVyIGF1ZGlvPXthdWRpby5jdXJyZW50fSAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hdWRpby1wbGF5ZXItY29udGFpbmVyIHtcbiAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAxcztcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIC5pc0xvYWRpbmcge1xuICAgICAgICAgIGZpbHRlcjogYmx1cig4cHgpO1xuICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvUGxheWVyO1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/AudioPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

/***/ })

})
//# sourceMappingURL=index.js.722f9274814ff264aadd.hot-update.js.map