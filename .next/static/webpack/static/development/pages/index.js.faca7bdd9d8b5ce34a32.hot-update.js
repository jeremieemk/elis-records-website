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
    className: "jsx-3503910218",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, !(audio.current && audio.current.currentTime > 0) ? __jsx("div", {
    className: "jsx-3503910218" + " " + "loader-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "37",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })) : __jsx("div", {
    className: "jsx-3503910218" + " " + "player-loaded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3503910218" + " " + "audio-player-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_PlayButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handlePlayButtonClick: props.handlePlayButtonClick,
    playingStatus: props.playingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    audio: audio.current,
    progression: progression,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(_VolumeSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    audio: audio.current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx("audio", {
    ref: audio,
    onTimeUpdate: updateProgress,
    src: props.track.url,
    className: "jsx-3503910218",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3503910218",
    __self: this
  }, ".audio-player-container.jsx-3503910218{z-index:5;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:2rem;-webkit-animation:fadeIn-jsx-3503910218 1s;animation:fadeIn-jsx-3503910218 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.loader-container.jsx-3503910218{padding-bottom:1rem;}@-webkit-keyframes fadeIn-jsx-3503910218{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-3503910218{from{opacity:0;}to{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUdxQixBQVNVLEFBS1IsQUFJQSxVQWpCTSxBQWNsQixBQUlBLFVBVEYsUUFSZSwwRUFDRixXQUNDLFlBQ1EsOEVBQ1Msa0VBQy9CIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvQXVkaW9QbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbGF5QnV0dG9uIGZyb20gXCIuL1BsYXlCdXR0b25cIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IFZvbHVtZVNsaWRlciBmcm9tIFwiLi9Wb2x1bWVTbGlkZXJcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vTG9hZGVyXCI7XG5cbmZ1bmN0aW9uIEF1ZGlvUGxheWVyKHByb3BzKSB7XG4gIGNvbnN0IFtwcm9ncmVzc2lvbiwgc2V0UHJvZ3Jlc3Npb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGF1ZGlvID0gdXNlUmVmKCk7XG4gIGNvbnN0IHVwZGF0ZVByb2dyZXNzID0gKCkgPT5cbiAgICBzZXRQcm9ncmVzc2lvbigoYXVkaW8uY3VycmVudC5jdXJyZW50VGltZSAvIGF1ZGlvLmN1cnJlbnQuZHVyYXRpb24pICogMTAwKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9wcy5wbGF5aW5nU3RhdHVzID8gYXVkaW8uY3VycmVudC5wbGF5KCkgOiBhdWRpby5jdXJyZW50LnBhdXNlKCk7XG4gIH0sIFtwcm9wcy5wbGF5aW5nU3RhdHVzXSk7XG5cbiAgLy8gYWxsb3dzIGxhdW5jaGluZyB0cmFjayB3aGVuIGNsaWNraW5nIG9uIHRoZSB0cmFja2xpc3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9wcy5zZXRQbGF5aW5nU3RhdHVzKHRydWUpO1xuICAgIGF1ZGlvLmN1cnJlbnQuY3VycmVudFRpbWUgPSAwO1xuICAgIGF1ZGlvLmN1cnJlbnQucGxheSgpO1xuICB9LCBbcHJvcHMubGF1bmNoUGxheSwgcHJvcHMudHJhY2tdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7IShhdWRpby5jdXJyZW50ICYmIGF1ZGlvLmN1cnJlbnQuY3VycmVudFRpbWUgPiAwKSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPExvYWRlciBzaXplPVwiMzdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyLWxvYWRlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW8tcGxheWVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFBsYXlCdXR0b25cbiAgICAgICAgICAgICAgaGFuZGxlUGxheUJ1dHRvbkNsaWNrPXtwcm9wcy5oYW5kbGVQbGF5QnV0dG9uQ2xpY2t9XG4gICAgICAgICAgICAgIHBsYXlpbmdTdGF0dXM9e3Byb3BzLnBsYXlpbmdTdGF0dXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFByb2dyZXNzQmFyIGF1ZGlvPXthdWRpby5jdXJyZW50fSBwcm9ncmVzc2lvbj17cHJvZ3Jlc3Npb259IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFZvbHVtZVNsaWRlciBhdWRpbz17YXVkaW8uY3VycmVudH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGF1ZGlvIHJlZj17YXVkaW99IG9uVGltZVVwZGF0ZT17dXBkYXRlUHJvZ3Jlc3N9IHNyYz17cHJvcHMudHJhY2sudXJsfSAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hdWRpby1wbGF5ZXItY29udGFpbmVyIHtcbiAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAxcztcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgfVxuICAgICAgICAubG9hZGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvUGxheWVyO1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/AudioPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

/***/ }),

/***/ "./components/ProgressBar.js":
/*!***********************************!*\
  !*** ./components/ProgressBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeremie/web/33_elis/components/ProgressBar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ProgressBar(props) {
  var progressBar = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  function scrub(e) {
    if (props.audio) {
      var scrubTime = e.nativeEvent.offsetX / progressBar.current.offsetWidth * props.audio.duration;
      props.audio.currentTime = scrubTime;
    }
  }

  return __jsx("div", {
    ref: progressBar,
    onClick: scrub,
    className: "jsx-420793320" + " " + "progress-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: "".concat(props.progression, "%")
    },
    className: "jsx-420793320" + " " + "range",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "420793320",
    __self: this
  }, ".progress-bar.jsx-420793320{width:100%;height:100%;margin-left:0.5rem;margin-right:1rem;border:1px solid black;-webkit-transition:opacity 0.6s;transition:opacity 0.6s;}.progress-bar.jsx-420793320:hover{opacity:0.8;}.range.jsx-420793320{background:black;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JrQixBQUdzQixBQVFDLEFBR0ssV0FWTCxDQVFkLEtBR2MsTUFWTyxNQVdyQixhQVZvQixrQkFDSyx1QkFDQyx3REFDMUIiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzMzX2VsaXMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBQcm9ncmVzc0Jhcihwcm9wcykge1xuICBjb25zdCBwcm9ncmVzc0JhciA9IHVzZVJlZigpO1xuICBmdW5jdGlvbiBzY3J1YihlKSB7XG4gICAgaWYgKHByb3BzLmF1ZGlvKSB7XG4gICAgICBjb25zdCBzY3J1YlRpbWUgPVxuICAgICAgICAoZS5uYXRpdmVFdmVudC5vZmZzZXRYIC8gcHJvZ3Jlc3NCYXIuY3VycmVudC5vZmZzZXRXaWR0aCkgKlxuICAgICAgICBwcm9wcy5hdWRpby5kdXJhdGlvbjtcbiAgICAgIHByb3BzLmF1ZGlvLmN1cnJlbnRUaW1lID0gc2NydWJUaW1lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIiByZWY9e3Byb2dyZXNzQmFyfSBvbkNsaWNrPXtzY3J1Yn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmdlXCIgc3R5bGU9e3sgd2lkdGg6IGAke3Byb3BzLnByb2dyZXNzaW9ufSVgIH19IC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnM7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2dyZXNzLWJhcjpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB9XG4gICAgICAgIC5yYW5nZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ProgressBar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ })

})
//# sourceMappingURL=index.js.faca7bdd9d8b5ce34a32.hot-update.js.map