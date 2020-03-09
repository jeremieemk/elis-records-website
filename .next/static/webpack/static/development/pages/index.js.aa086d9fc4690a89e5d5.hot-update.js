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
  console.log(audio.current && audio.current.playing);
  var audioPlayerClassNames = audio.current ? "audio-player-container" : "audio-player-container is-loading";
  return __jsx("div", {
    className: "jsx-540425200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-540425200" + " " + (audioPlayerClassNames || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_PlayButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handlePlayButtonClick: props.handlePlayButtonClick,
    playingStatus: props.playingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    audio: audio.current,
    progression: progression,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("audio", {
    ref: audio,
    onTimeUpdate: updateProgress,
    src: props.track.url,
    className: "jsx-540425200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx(_VolumeSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    audio: audio.current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "540425200",
    __self: this
  }, ".audio-player-container.jsx-540425200{z-index:5;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:2rem;-webkit-animation:fadeIn-jsx-540425200 1s;animation:fadeIn-jsx-540425200 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.is-loading.jsx-540425200{-webkit-filter:blur(8px);filter:blur(8px);display:none;}@-webkit-keyframes fadeIn-jsx-540425200{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-540425200{from{opacity:0;}to{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURrQixBQUdxQixBQVNPLEFBS0QsQUFJQSxVQWpCRSxBQWNkLEFBSUEsa0JBakJTLGNBUUEsYUFDZiwrQ0FSYSxXQUNDLFlBQ1EsNEVBQ2Esa0VBQy9CIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbGF5QnV0dG9uIGZyb20gXCIuL1BsYXlCdXR0b25cIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IFZvbHVtZVNsaWRlciBmcm9tIFwiLi9Wb2x1bWVTbGlkZXJcIjtcblxuZnVuY3Rpb24gQXVkaW9QbGF5ZXIocHJvcHMpIHtcbiAgLy8gY3VzdG9tIHByb3BlcnR5IHRvIGNoZWNrIHdoZXRoZXIgdHJhY2sgaXMgcGxheWluZ1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUsIFwicGxheWluZ1wiLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gISEoXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPiAwICYmXG4gICAgICAgICF0aGlzLnBhdXNlZCAmJlxuICAgICAgICAhdGhpcy5lbmRlZCAmJlxuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPiAyXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgW3Byb2dyZXNzaW9uLCBzZXRQcm9ncmVzc2lvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgYXVkaW8gPSB1c2VSZWYoKTtcbiAgY29uc3QgdXBkYXRlUHJvZ3Jlc3MgPSAoKSA9PlxuICAgIHNldFByb2dyZXNzaW9uKChhdWRpby5jdXJyZW50LmN1cnJlbnRUaW1lIC8gYXVkaW8uY3VycmVudC5kdXJhdGlvbikgKiAxMDApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLnBsYXlpbmdTdGF0dXMgPyBhdWRpby5jdXJyZW50LnBsYXkoKSA6IGF1ZGlvLmN1cnJlbnQucGF1c2UoKTtcbiAgfSwgW3Byb3BzLnBsYXlpbmdTdGF0dXNdKTtcblxuICAvLyBhbGxvd3MgbGF1bmNoaW5nIHRyYWNrIHdoZW4gY2xpY2tpbmcgb24gdGhlIHRyYWNrbGlzdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLnNldFBsYXlpbmdTdGF0dXModHJ1ZSk7XG4gICAgYXVkaW8uY3VycmVudC5jdXJyZW50VGltZSA9IDA7XG4gICAgYXVkaW8uY3VycmVudC5wbGF5KCk7XG4gIH0sIFtwcm9wcy5sYXVuY2hQbGF5LCBwcm9wcy50cmFja10pO1xuICBjb25zb2xlLmxvZyhhdWRpby5jdXJyZW50ICYmIGF1ZGlvLmN1cnJlbnQucGxheWluZyk7XG4gIGNvbnN0IGF1ZGlvUGxheWVyQ2xhc3NOYW1lcyA9IGF1ZGlvLmN1cnJlbnRcbiAgICA/IFwiYXVkaW8tcGxheWVyLWNvbnRhaW5lclwiXG4gICAgOiBcImF1ZGlvLXBsYXllci1jb250YWluZXIgaXMtbG9hZGluZ1wiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthdWRpb1BsYXllckNsYXNzTmFtZXN9PlxuICAgICAgICA8UGxheUJ1dHRvblxuICAgICAgICAgIGhhbmRsZVBsYXlCdXR0b25DbGljaz17cHJvcHMuaGFuZGxlUGxheUJ1dHRvbkNsaWNrfVxuICAgICAgICAgIHBsYXlpbmdTdGF0dXM9e3Byb3BzLnBsYXlpbmdTdGF0dXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9ncmVzc0JhciBhdWRpbz17YXVkaW8uY3VycmVudH0gcHJvZ3Jlc3Npb249e3Byb2dyZXNzaW9ufSAvPlxuXG4gICAgICAgIDxhdWRpb1xuICAgICAgICAgIHJlZj17YXVkaW99XG4gICAgICAgICAgb25UaW1lVXBkYXRlPXt1cGRhdGVQcm9ncmVzc31cbiAgICAgICAgICBzcmM9e3Byb3BzLnRyYWNrLnVybH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFZvbHVtZVNsaWRlciBhdWRpbz17YXVkaW8uY3VycmVudH0gLz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYXVkaW8tcGxheWVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAuaXMtbG9hZGluZyB7XG4gICAgICAgICAgZmlsdGVyOiBibHVyKDhweCk7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1BsYXllcjtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/AudioPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

/***/ })

})
//# sourceMappingURL=index.js.aa086d9fc4690a89e5d5.hot-update.js.map