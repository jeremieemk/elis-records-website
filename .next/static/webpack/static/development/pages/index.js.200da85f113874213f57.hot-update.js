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
  var audioPlayerClassNames = audio.current && audio.current.playing ? "audio-player-container" : "audio-player-container is-loading";
  return __jsx("div", {
    className: "jsx-3863402624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3863402624" + " " + (audioPlayerClassNames || ""),
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
    className: "jsx-3863402624",
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
    id: "3863402624",
    __self: this
  }, ".audio-player-container.jsx-3863402624{z-index:5;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:2rem;-webkit-animation:fadeIn-jsx-3863402624 1s;animation:fadeIn-jsx-3863402624 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.isLoading.jsx-3863402624{-webkit-filter:blur(8px);filter:blur(8px);display:none;}@-webkit-keyframes fadeIn-jsx-3863402624{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-3863402624{from{opacity:0;}to{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RrQixBQUdxQixBQVNPLEFBS0QsQUFJQSxVQWpCRSxBQWNkLEFBSUEsa0JBakJTLGNBUUEsYUFDZiwrQ0FSYSxXQUNDLFlBQ1EsOEVBQ2Esa0VBQy9CIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbGF5QnV0dG9uIGZyb20gXCIuL1BsYXlCdXR0b25cIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IFZvbHVtZVNsaWRlciBmcm9tIFwiLi9Wb2x1bWVTbGlkZXJcIjtcblxuZnVuY3Rpb24gQXVkaW9QbGF5ZXIocHJvcHMpIHtcbiAgLy8gY3VzdG9tIHByb3BlcnR5IHRvIGNoZWNrIHdoZXRoZXIgdHJhY2sgaXMgcGxheWluZ1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUsIFwicGxheWluZ1wiLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gISEoXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPiAwICYmXG4gICAgICAgICF0aGlzLnBhdXNlZCAmJlxuICAgICAgICAhdGhpcy5lbmRlZCAmJlxuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPiAyXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgW3Byb2dyZXNzaW9uLCBzZXRQcm9ncmVzc2lvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgYXVkaW8gPSB1c2VSZWYoKTtcbiAgY29uc3QgdXBkYXRlUHJvZ3Jlc3MgPSAoKSA9PlxuICAgIHNldFByb2dyZXNzaW9uKChhdWRpby5jdXJyZW50LmN1cnJlbnRUaW1lIC8gYXVkaW8uY3VycmVudC5kdXJhdGlvbikgKiAxMDApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLnBsYXlpbmdTdGF0dXMgPyBhdWRpby5jdXJyZW50LnBsYXkoKSA6IGF1ZGlvLmN1cnJlbnQucGF1c2UoKTtcbiAgfSwgW3Byb3BzLnBsYXlpbmdTdGF0dXNdKTtcblxuICAvLyBhbGxvd3MgbGF1bmNoaW5nIHRyYWNrIHdoZW4gY2xpY2tpbmcgb24gdGhlIHRyYWNrbGlzdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLnNldFBsYXlpbmdTdGF0dXModHJ1ZSk7XG4gICAgYXVkaW8uY3VycmVudC5jdXJyZW50VGltZSA9IDA7XG4gICAgYXVkaW8uY3VycmVudC5wbGF5KCk7XG4gIH0sIFtwcm9wcy5sYXVuY2hQbGF5LCBwcm9wcy50cmFja10pO1xuICBjb25zb2xlLmxvZyhhdWRpby5jdXJyZW50ICYmIGF1ZGlvLmN1cnJlbnQucGxheWluZyk7XG4gIGNvbnN0IGF1ZGlvUGxheWVyQ2xhc3NOYW1lcyA9XG4gICAgYXVkaW8uY3VycmVudCAmJiBhdWRpby5jdXJyZW50LnBsYXlpbmdcbiAgICAgID8gXCJhdWRpby1wbGF5ZXItY29udGFpbmVyXCJcbiAgICAgIDogXCJhdWRpby1wbGF5ZXItY29udGFpbmVyIGlzLWxvYWRpbmdcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YXVkaW9QbGF5ZXJDbGFzc05hbWVzfT5cbiAgICAgICAgPFBsYXlCdXR0b25cbiAgICAgICAgICBoYW5kbGVQbGF5QnV0dG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVBsYXlCdXR0b25DbGlja31cbiAgICAgICAgICBwbGF5aW5nU3RhdHVzPXtwcm9wcy5wbGF5aW5nU3RhdHVzfVxuICAgICAgICAvPlxuICAgICAgICA8UHJvZ3Jlc3NCYXIgYXVkaW89e2F1ZGlvLmN1cnJlbnR9IHByb2dyZXNzaW9uPXtwcm9ncmVzc2lvbn0gLz5cblxuICAgICAgICA8YXVkaW9cbiAgICAgICAgICByZWY9e2F1ZGlvfVxuICAgICAgICAgIG9uVGltZVVwZGF0ZT17dXBkYXRlUHJvZ3Jlc3N9XG4gICAgICAgICAgc3JjPXtwcm9wcy50cmFjay51cmx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxWb2x1bWVTbGlkZXIgYXVkaW89e2F1ZGlvLmN1cnJlbnR9IC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmF1ZGlvLXBsYXllci1jb250YWluZXIge1xuICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xuICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgLmlzTG9hZGluZyB7XG4gICAgICAgICAgZmlsdGVyOiBibHVyKDhweCk7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1BsYXllcjtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/AudioPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

/***/ })

})
//# sourceMappingURL=index.js.200da85f113874213f57.hot-update.js.map