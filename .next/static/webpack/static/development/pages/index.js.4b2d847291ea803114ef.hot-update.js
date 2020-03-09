webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TracklistAndPlayer.js":
/*!******************************************!*\
  !*** ./components/TracklistAndPlayer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AudioPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AudioPlayer */ "./components/AudioPlayer.js");

var _jsxFileName = "/Users/jeremie/web/33_elis/components/TracklistAndPlayer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function TracklistAndPlayer(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      selectedTrack = _useState[0],
      setSelectedTrack = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      launchPlay = _useState2[0],
      setLaunchPlay = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      playingStatus = _useState3[0],
      setPlayingStatus = _useState3[1];

  function stopMusic() {
    setPlayingStatus(false);
    props.setPlayerDisplayId(null);
  }

  function startTrack(event) {
    setSelectedTrack(event.target.getAttribute("data-tag"));
    setLaunchPlay(true);
  }

  function handlePlayButtonClick() {
    setPlayingStatus(!playingStatus);
  }

  return __jsx("div", {
    className: "jsx-409392071" + " " + "audio-player-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("img", {
    src: "/img/cross.png",
    alt: "cross",
    onClick: stopMusic,
    className: "jsx-409392071" + " " + "cross",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-409392071" + " " + "tracklist-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.tracklist.map(function (track, index) {
    return __jsx("div", {
      "data-tag": index,
      onClick: startTrack,
      style: {
        opacity: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(selectedTrack) === index && 1
      },
      className: "jsx-409392071" + " " + "tracklist-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, track.name && track.name.slice(0, -4));
  })), __jsx(_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    track: props.tracklist[selectedTrack],
    launchPlay: launchPlay,
    handlePlayButtonClick: handlePlayButtonClick,
    playingStatus: playingStatus,
    setPlayingStatus: setPlayingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "409392071",
    __self: this
  }, ".audio-player-container.jsx-409392071{cursor:pointer;position:fixed;bottom:0;left:0;background:black;width:100%;z-index:2;padding-bottom:1rem;padding-top:1rem;border-top:0.2px solid white;}.cross.jsx-409392071{width:0.7rem;position:absolute;right:0.3rem;top:0.3rem;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;opacity:0.5;}.cross.jsx-409392071:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);opacity:1;}.tracklist-container.jsx-409392071{padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;}.tracklist-item.jsx-409392071{padding-bottom:0.5rem;opacity:0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvVHJhY2tsaXN0QW5kUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEa0IsQUFHMEIsQUFZRixBQVFRLEFBSUMsQUFLQSxhQWhCSixFQVpILE9Bd0JHLEFBS04sUUE1QkgsQ0FZSSxHQWlCZixLQTVCUyxDQXVCWSxJQVhSLEVBWE0sU0FZUyxJQVc1QixJQXRCYSxXQUNELENBZUEsU0FkVSxDQWV0QixtQkFkbUIsaUJBQ1ksNkJBQy9CLE9BT2MsWUFDZCIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL1RyYWNrbGlzdEFuZFBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXVkaW9QbGF5ZXIgZnJvbSBcIi4vQXVkaW9QbGF5ZXJcIjtcblxuZnVuY3Rpb24gVHJhY2tsaXN0QW5kUGxheWVyKHByb3BzKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFRyYWNrLCBzZXRTZWxlY3RlZFRyYWNrXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbGF1bmNoUGxheSwgc2V0TGF1bmNoUGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwbGF5aW5nU3RhdHVzLCBzZXRQbGF5aW5nU3RhdHVzXSA9IHVzZVN0YXRlKHRydWUpO1xuICBmdW5jdGlvbiBzdG9wTXVzaWMoKSB7XG4gICAgc2V0UGxheWluZ1N0YXR1cyhmYWxzZSk7XG4gICAgcHJvcHMuc2V0UGxheWVyRGlzcGxheUlkKG51bGwpO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0VHJhY2soZXZlbnQpIHtcbiAgICBzZXRTZWxlY3RlZFRyYWNrKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhZ1wiKSk7XG4gICAgc2V0TGF1bmNoUGxheSh0cnVlKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVQbGF5QnV0dG9uQ2xpY2soKSB7XG4gICAgc2V0UGxheWluZ1N0YXR1cyghcGxheWluZ1N0YXR1cyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW8tcGxheWVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJjcm9zc1wiXG4gICAgICAgIHNyYz1cIi9pbWcvY3Jvc3MucG5nXCJcbiAgICAgICAgYWx0PVwiY3Jvc3NcIlxuICAgICAgICBvbkNsaWNrPXtzdG9wTXVzaWN9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2xpc3QtY29udGFpbmVyXCI+XG4gICAgICAgIHtwcm9wcy50cmFja2xpc3QubWFwKCh0cmFjaywgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFja2xpc3QtaXRlbVwiXG4gICAgICAgICAgICBkYXRhLXRhZz17aW5kZXh9XG4gICAgICAgICAgICBvbkNsaWNrPXtzdGFydFRyYWNrfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgb3BhY2l0eTogcGFyc2VJbnQoc2VsZWN0ZWRUcmFjaykgPT09IGluZGV4ICYmIDFcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RyYWNrLm5hbWUgJiYgdHJhY2submFtZS5zbGljZSgwLCAtNCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8QXVkaW9QbGF5ZXJcbiAgICAgICAgdHJhY2s9e3Byb3BzLnRyYWNrbGlzdFtzZWxlY3RlZFRyYWNrXX1cbiAgICAgICAgbGF1bmNoUGxheT17bGF1bmNoUGxheX1cbiAgICAgICAgaGFuZGxlUGxheUJ1dHRvbkNsaWNrPXtoYW5kbGVQbGF5QnV0dG9uQ2xpY2t9XG4gICAgICAgIHBsYXlpbmdTdGF0dXM9e3BsYXlpbmdTdGF0dXN9XG4gICAgICAgIHNldFBsYXlpbmdTdGF0dXM9e3NldFBsYXlpbmdTdGF0dXN9XG4gICAgICAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYXVkaW8tcGxheWVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICAgIGJvcmRlci10b3A6IDAuMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5jcm9zcyB7XG4gICAgICAgICAgd2lkdGg6IDAuN3JlbTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDAuM3JlbTtcbiAgICAgICAgICB0b3A6IDAuM3JlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgLmNyb3NzOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICAudHJhY2tsaXN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAudHJhY2tsaXN0LWl0ZW0ge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrbGlzdEFuZFBsYXllcjtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/TracklistAndPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (TracklistAndPlayer);

/***/ })

})
//# sourceMappingURL=index.js.4b2d847291ea803114ef.hot-update.js.map