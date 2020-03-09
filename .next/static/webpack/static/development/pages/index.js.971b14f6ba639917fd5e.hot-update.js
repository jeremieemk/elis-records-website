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
  console.log(audio.current.playing);
  return __jsx("div", {
    className: "jsx-1111867522",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1111867522" + " " + "audio-player-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_PlayButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handlePlayButtonClick: props.handlePlayButtonClick,
    playingStatus: props.playingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    audio: audio.current,
    progression: progression,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("audio", {
    ref: audio,
    onTimeUpdate: updateProgress,
    src: props.track.url,
    className: "jsx-1111867522",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx(_VolumeSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    audio: audio.current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1111867522",
    __self: this
  }, ".audio-player-container.jsx-1111867522{z-index:5;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:2rem;-webkit-animation:fadeIn-jsx-1111867522 1s;animation:fadeIn-jsx-1111867522 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}@-webkit-keyframes fadeIn-jsx-1111867522{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-1111867522{from{opacity:0;}to{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RrQixBQUdxQixBQVVNLEFBSUEsVUFiRSxBQVVkLEFBSUEsa0JBYlMsMEVBQ0YsV0FDQyxZQUNRLDhFQUNhLGtFQUMvQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL0F1ZGlvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tIFwiLi9QbGF5QnV0dG9uXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBWb2x1bWVTbGlkZXIgZnJvbSBcIi4vVm9sdW1lU2xpZGVyXCI7XG5cbmZ1bmN0aW9uIEF1ZGlvUGxheWVyKHByb3BzKSB7XG4gIC8vIGN1c3RvbSBwcm9wZXJ0eSB0byBjaGVjayB3aGV0aGVyIHRyYWNrIGlzIHBsYXlpbmdcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlLCBcInBsYXlpbmdcIiwge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gISEoXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPiAwICYmXG4gICAgICAgICF0aGlzLnBhdXNlZCAmJlxuICAgICAgICAhdGhpcy5lbmRlZCAmJlxuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPiAyXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgW3Byb2dyZXNzaW9uLCBzZXRQcm9ncmVzc2lvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgYXVkaW8gPSB1c2VSZWYoKTtcbiAgY29uc3QgdXBkYXRlUHJvZ3Jlc3MgPSAoKSA9PlxuICAgIHNldFByb2dyZXNzaW9uKChhdWRpby5jdXJyZW50LmN1cnJlbnRUaW1lIC8gYXVkaW8uY3VycmVudC5kdXJhdGlvbikgKiAxMDApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLnBsYXlpbmdTdGF0dXMgPyBhdWRpby5jdXJyZW50LnBsYXkoKSA6IGF1ZGlvLmN1cnJlbnQucGF1c2UoKTtcbiAgfSwgW3Byb3BzLnBsYXlpbmdTdGF0dXNdKTtcblxuICAvLyBhbGxvd3MgbGF1bmNoaW5nIHRyYWNrIHdoZW4gY2xpY2tpbmcgb24gdGhlIHRyYWNrbGlzdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLnNldFBsYXlpbmdTdGF0dXModHJ1ZSk7XG4gICAgYXVkaW8uY3VycmVudC5jdXJyZW50VGltZSA9IDA7XG4gICAgYXVkaW8uY3VycmVudC5wbGF5KCk7XG4gIH0sIFtwcm9wcy5sYXVuY2hQbGF5LCBwcm9wcy50cmFja10pO1xuICBjb25zb2xlLmxvZyhhdWRpby5jdXJyZW50LnBsYXlpbmcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW8tcGxheWVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8UGxheUJ1dHRvblxuICAgICAgICAgIGhhbmRsZVBsYXlCdXR0b25DbGljaz17cHJvcHMuaGFuZGxlUGxheUJ1dHRvbkNsaWNrfVxuICAgICAgICAgIHBsYXlpbmdTdGF0dXM9e3Byb3BzLnBsYXlpbmdTdGF0dXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9ncmVzc0JhciBhdWRpbz17YXVkaW8uY3VycmVudH0gcHJvZ3Jlc3Npb249e3Byb2dyZXNzaW9ufSAvPlxuXG4gICAgICAgIDxhdWRpb1xuICAgICAgICAgIHJlZj17YXVkaW99XG4gICAgICAgICAgb25UaW1lVXBkYXRlPXt1cGRhdGVQcm9ncmVzc31cbiAgICAgICAgICBzcmM9e3Byb3BzLnRyYWNrLnVybH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFZvbHVtZVNsaWRlciBhdWRpbz17YXVkaW8uY3VycmVudH0gLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmF1ZGlvLXBsYXllci1jb250YWluZXIge1xuICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xuICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9QbGF5ZXI7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/AudioPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

/***/ })

})
//# sourceMappingURL=index.js.971b14f6ba639917fd5e.hot-update.js.map