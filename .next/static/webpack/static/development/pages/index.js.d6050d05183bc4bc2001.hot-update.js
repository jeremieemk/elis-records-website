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

  console.log(selectedTrack);
  return __jsx("div", {
    className: "jsx-1675785805" + " " + "audio-player-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("img", {
    src: "/img/cross.png",
    alt: "cross",
    onClick: stopMusic,
    className: "jsx-1675785805" + " " + "cross",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1675785805" + " " + "tracklist-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, props.tracklist.map(function (track, index) {
    return __jsx("div", {
      "data-tag": index,
      onClick: startTrack,
      style: {
        opacity: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(selectedTrack) === index && 1
      },
      className: "jsx-1675785805" + " " + "tracklist-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, track.name.slice(0, -4));
  })), __jsx(_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    track: props.tracklist[selectedTrack],
    launchPlay: launchPlay,
    handlePlayButtonClick: handlePlayButtonClick,
    playingStatus: playingStatus,
    setPlayingStatus: setPlayingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1675785805",
    __self: this
  }, ".audio-player-container.jsx-1675785805{cursor:pointer;position:fixed;bottom:0;left:0;background:white;width:100%;z-index:2;padding-bottom:1rem;padding-top:1rem;box-shadow:0 -1px 0px 0px;}.cross.jsx-1675785805{width:0.5rem;position:absolute;right:0.3rem;top:0.3rem;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;opacity:0.7;}.cross.jsx-1675785805:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);opacity:1;}.tracklist-container.jsx-1675785805{padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;}.tracklist-item.jsx-1675785805{padding-bottom:0.5rem;opacity:0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvVHJhY2tsaXN0QW5kUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEa0IsQUFHMEIsQUFZRixBQVFRLEFBSUMsQUFLQSxhQWhCSixFQVpILE9Bd0JHLEFBS04sUUE1QkgsQ0FZSSxHQWlCZixLQTVCUyxDQXVCWSxJQVhSLEVBWE0sU0FZUyxJQVc1QixJQXRCYSxXQUNELENBZUEsU0FkVSxDQWV0QixtQkFkbUIsaUJBQ1MsMEJBQzVCLFVBT2MsWUFDZCIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL1RyYWNrbGlzdEFuZFBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXVkaW9QbGF5ZXIgZnJvbSBcIi4vQXVkaW9QbGF5ZXJcIjtcblxuZnVuY3Rpb24gVHJhY2tsaXN0QW5kUGxheWVyKHByb3BzKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFRyYWNrLCBzZXRTZWxlY3RlZFRyYWNrXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbGF1bmNoUGxheSwgc2V0TGF1bmNoUGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwbGF5aW5nU3RhdHVzLCBzZXRQbGF5aW5nU3RhdHVzXSA9IHVzZVN0YXRlKHRydWUpO1xuICBmdW5jdGlvbiBzdG9wTXVzaWMoKSB7XG4gICAgc2V0UGxheWluZ1N0YXR1cyhmYWxzZSk7XG4gICAgcHJvcHMuc2V0UGxheWVyRGlzcGxheUlkKG51bGwpO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0VHJhY2soZXZlbnQpIHtcbiAgICBzZXRTZWxlY3RlZFRyYWNrKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhZ1wiKSk7XG4gICAgc2V0TGF1bmNoUGxheSh0cnVlKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVQbGF5QnV0dG9uQ2xpY2soKSB7XG4gICAgc2V0UGxheWluZ1N0YXR1cyghcGxheWluZ1N0YXR1cyk7XG4gIH1cbiAgY29uc29sZS5sb2coc2VsZWN0ZWRUcmFjayk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1ZGlvLXBsYXllci1jb250YWluZXJcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwiY3Jvc3NcIlxuICAgICAgICBzcmM9XCIvaW1nL2Nyb3NzLnBuZ1wiXG4gICAgICAgIGFsdD1cImNyb3NzXCJcbiAgICAgICAgb25DbGljaz17c3RvcE11c2ljfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tsaXN0LWNvbnRhaW5lclwiPlxuICAgICAgICB7cHJvcHMudHJhY2tsaXN0Lm1hcCgodHJhY2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhY2tsaXN0LWl0ZW1cIlxuICAgICAgICAgICAgZGF0YS10YWc9e2luZGV4fVxuICAgICAgICAgICAgb25DbGljaz17c3RhcnRUcmFja31cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IHBhcnNlSW50KHNlbGVjdGVkVHJhY2spID09PSBpbmRleCAmJiAxXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0cmFjay5uYW1lLnNsaWNlKDAsIC00KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxBdWRpb1BsYXllclxuICAgICAgICB0cmFjaz17cHJvcHMudHJhY2tsaXN0W3NlbGVjdGVkVHJhY2tdfVxuICAgICAgICBsYXVuY2hQbGF5PXtsYXVuY2hQbGF5fVxuICAgICAgICBoYW5kbGVQbGF5QnV0dG9uQ2xpY2s9e2hhbmRsZVBsYXlCdXR0b25DbGlja31cbiAgICAgICAgcGxheWluZ1N0YXR1cz17cGxheWluZ1N0YXR1c31cbiAgICAgICAgc2V0UGxheWluZ1N0YXR1cz17c2V0UGxheWluZ1N0YXR1c31cbiAgICAgIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hdWRpby1wbGF5ZXItY29udGFpbmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAtMXB4IDBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNyb3NzIHtcbiAgICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMC4zcmVtO1xuICAgICAgICAgIHRvcDogMC4zcmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgfVxuICAgICAgICAuY3Jvc3M6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIC50cmFja2xpc3QtY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC50cmFja2xpc3QtaXRlbSB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhY2tsaXN0QW5kUGxheWVyO1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/TracklistAndPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (TracklistAndPlayer);

/***/ })

})
//# sourceMappingURL=index.js.d6050d05183bc4bc2001.hot-update.js.map