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
  }, [props.launchPlay, props.track]); // useEffect(() => {
  //   audio.current.play();
  // }, [audio]);

  audio.current && console.log(audio.current.readyState);
  return __jsx("div", {
    className: "jsx-1111867522",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1111867522" + " " + "audio-player-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_PlayButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handlePlayButtonClick: props.handlePlayButtonClick,
    playingStatus: props.playingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    audio: audio.current,
    progression: progression,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("audio", {
    ref: audio,
    onTimeUpdate: updateProgress,
    src: props.track.url,
    className: "jsx-1111867522",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx(_VolumeSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    audio: audio.current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1111867522",
    __self: this
  }, ".audio-player-container.jsx-1111867522{z-index:5;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:2rem;-webkit-animation:fadeIn-jsx-1111867522 1s;animation:fadeIn-jsx-1111867522 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}@-webkit-keyframes fadeIn-jsx-1111867522{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-1111867522{from{opacity:0;}to{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNrQixBQUdxQixBQVVNLEFBSUEsVUFiRSxBQVVkLEFBSUEsa0JBYlMsMEVBQ0YsV0FDQyxZQUNRLDhFQUNhLGtFQUMvQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL0F1ZGlvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tIFwiLi9QbGF5QnV0dG9uXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBWb2x1bWVTbGlkZXIgZnJvbSBcIi4vVm9sdW1lU2xpZGVyXCI7XG5cbmZ1bmN0aW9uIEF1ZGlvUGxheWVyKHByb3BzKSB7XG4gIGNvbnN0IFtwcm9ncmVzc2lvbiwgc2V0UHJvZ3Jlc3Npb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGF1ZGlvID0gdXNlUmVmKCk7XG4gIGNvbnN0IHVwZGF0ZVByb2dyZXNzID0gKCkgPT5cbiAgICBzZXRQcm9ncmVzc2lvbigoYXVkaW8uY3VycmVudC5jdXJyZW50VGltZSAvIGF1ZGlvLmN1cnJlbnQuZHVyYXRpb24pICogMTAwKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9wcy5wbGF5aW5nU3RhdHVzID8gYXVkaW8uY3VycmVudC5wbGF5KCkgOiBhdWRpby5jdXJyZW50LnBhdXNlKCk7XG4gIH0sIFtwcm9wcy5wbGF5aW5nU3RhdHVzXSk7XG5cbiAgLy8gYWxsb3dzIGxhdW5jaGluZyB0cmFjayB3aGVuIGNsaWNraW5nIG9uIHRoZSB0cmFja2xpc3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9wcy5zZXRQbGF5aW5nU3RhdHVzKHRydWUpO1xuICAgIGF1ZGlvLmN1cnJlbnQuY3VycmVudFRpbWUgPSAwO1xuICAgIGF1ZGlvLmN1cnJlbnQucGxheSgpO1xuICB9LCBbcHJvcHMubGF1bmNoUGxheSwgcHJvcHMudHJhY2tdKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBhdWRpby5jdXJyZW50LnBsYXkoKTtcbiAgLy8gfSwgW2F1ZGlvXSk7XG4gIGF1ZGlvLmN1cnJlbnQgJiYgY29uc29sZS5sb2coYXVkaW8uY3VycmVudC5yZWFkeVN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1ZGlvLXBsYXllci1jb250YWluZXJcIj5cbiAgICAgICAgPFBsYXlCdXR0b25cbiAgICAgICAgICBoYW5kbGVQbGF5QnV0dG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVBsYXlCdXR0b25DbGlja31cbiAgICAgICAgICBwbGF5aW5nU3RhdHVzPXtwcm9wcy5wbGF5aW5nU3RhdHVzfVxuICAgICAgICAvPlxuICAgICAgICA8UHJvZ3Jlc3NCYXIgYXVkaW89e2F1ZGlvLmN1cnJlbnR9IHByb2dyZXNzaW9uPXtwcm9ncmVzc2lvbn0gLz5cblxuICAgICAgICA8YXVkaW9cbiAgICAgICAgICByZWY9e2F1ZGlvfVxuICAgICAgICAgIG9uVGltZVVwZGF0ZT17dXBkYXRlUHJvZ3Jlc3N9XG4gICAgICAgICAgc3JjPXtwcm9wcy50cmFjay51cmx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxWb2x1bWVTbGlkZXIgYXVkaW89e2F1ZGlvLmN1cnJlbnR9IC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hdWRpby1wbGF5ZXItY29udGFpbmVyIHtcbiAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAxcztcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvUGxheWVyO1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/AudioPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

/***/ })

})
//# sourceMappingURL=index.js.f952af14bc820c8270ec.hot-update.js.map