webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ReleaseTracklistAndPlayer.js":
/*!*************************************************!*\
  !*** ./components/ReleaseTracklistAndPlayer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AudioPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioPlayer */ "./components/AudioPlayer.js");
var _jsxFileName = "/Users/jeremie/web/33_elis/components/ReleaseTracklistAndPlayer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function ReleaseTracklistAndPlayer(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      selectedTrack = _useState[0],
      setSelectedTrack = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      launchPlay = _useState2[0],
      setLaunchPlay = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      playingStatus = _useState3[0],
      setPlayingStatus = _useState3[1];

  function stopMusic() {
    setLaunchPlay(false);
  }

  function startTrack(event) {
    setSelectedTrack(event.target.getAttribute("data-tag"));
    setLaunchPlay(true);
  }

  function handlePlayButtonClick() {
    setPlayingStatus(!playingStatus);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (playingStatus) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [playingStatus]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setPlayingStatus(true);
    audio.current.currentTime = 0;
    audio.current.play();
  }, [props.launchPlay, props.track]);
  return __jsx("div", {
    className: "jsx-2344234528" + " " + "audio-player-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("img", {
    src: "/img/cross.png",
    alt: "cross",
    onClick: stopMusic,
    className: "jsx-2344234528" + " " + "cross",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2344234528" + " " + "tracklist-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, props.tracklist.map(function (track, index) {
    return __jsx("div", {
      "data-tag": index,
      onClick: startTrack,
      className: "jsx-2344234528" + " " + "tracklist-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, track.name.slice(0, -4));
  })), __jsx(_AudioPlayer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    track: props.tracklist[selectedTrack],
    launchPlay: launchPlay,
    handlePlayButtonClick: handlePlayButtonClick,
    playingStatus: playingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2344234528",
    __self: this
  }, ".audio-player-container.jsx-2344234528{cursor:pointer;position:fixed;bottom:0;left:0;background:white;width:100%;z-index:2;padding-bottom:1rem;padding-top:1rem;}.cross.jsx-2344234528{width:0.7rem;position:absolute;right:0.3rem;top:0.3rem;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;}.cross.jsx-2344234528:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);opacity:0.7;}.tracklist-container.jsx-2344234528{padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;}.tracklist-item.jsx-2344234528{padding-bottom:0.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUmVsZWFzZVRyYWNrbGlzdEFuZFBsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGtCLEFBRzBCLEFBV0YsQUFPUSxBQUlDLEFBS0EsYUFmSixFQVhILE9Bc0JHLEFBS3BCLFFBMUJXLENBV0ksUUFWTixDQXFCWSxJQVZSLEVBVk0sU0FXUyxJQVU1QixJQXBCYSxXQUNELENBYUUsU0FaUSxHQWF0QixpQkFabUIsaUJBQ25CLG9DQU9BIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUmVsZWFzZVRyYWNrbGlzdEFuZFBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBdWRpb1BsYXllciBmcm9tIFwiLi9BdWRpb1BsYXllclwiO1xuXG5mdW5jdGlvbiBSZWxlYXNlVHJhY2tsaXN0QW5kUGxheWVyKHByb3BzKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFRyYWNrLCBzZXRTZWxlY3RlZFRyYWNrXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbGF1bmNoUGxheSwgc2V0TGF1bmNoUGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwbGF5aW5nU3RhdHVzLCBzZXRQbGF5aW5nU3RhdHVzXSA9IHVzZVN0YXRlKHRydWUpO1xuICBmdW5jdGlvbiBzdG9wTXVzaWMoKSB7XG4gICAgc2V0TGF1bmNoUGxheShmYWxzZSk7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRUcmFjayhldmVudCkge1xuICAgIHNldFNlbGVjdGVkVHJhY2soZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdGFnXCIpKTtcbiAgICBzZXRMYXVuY2hQbGF5KHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVBsYXlCdXR0b25DbGljaygpIHtcbiAgICBzZXRQbGF5aW5nU3RhdHVzKCFwbGF5aW5nU3RhdHVzKTtcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwbGF5aW5nU3RhdHVzKSB7XG4gICAgICBhdWRpby5jdXJyZW50LnBsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXVkaW8uY3VycmVudC5wYXVzZSgpO1xuICAgIH1cbiAgfSwgW3BsYXlpbmdTdGF0dXNdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQbGF5aW5nU3RhdHVzKHRydWUpO1xuICAgIGF1ZGlvLmN1cnJlbnQuY3VycmVudFRpbWUgPSAwO1xuICAgIGF1ZGlvLmN1cnJlbnQucGxheSgpO1xuICB9LCBbcHJvcHMubGF1bmNoUGxheSwgcHJvcHMudHJhY2tdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW8tcGxheWVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJjcm9zc1wiXG4gICAgICAgIHNyYz1cIi9pbWcvY3Jvc3MucG5nXCJcbiAgICAgICAgYWx0PVwiY3Jvc3NcIlxuICAgICAgICBvbkNsaWNrPXtzdG9wTXVzaWN9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2xpc3QtY29udGFpbmVyXCI+XG4gICAgICAgIHtwcm9wcy50cmFja2xpc3QubWFwKCh0cmFjaywgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrbGlzdC1pdGVtXCIgZGF0YS10YWc9e2luZGV4fSBvbkNsaWNrPXtzdGFydFRyYWNrfT5cbiAgICAgICAgICAgIHt0cmFjay5uYW1lLnNsaWNlKDAsIC00KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxBdWRpb1BsYXllclxuICAgICAgICB0cmFjaz17cHJvcHMudHJhY2tsaXN0W3NlbGVjdGVkVHJhY2tdfVxuICAgICAgICBsYXVuY2hQbGF5PXtsYXVuY2hQbGF5fVxuICAgICAgICBoYW5kbGVQbGF5QnV0dG9uQ2xpY2s9e2hhbmRsZVBsYXlCdXR0b25DbGlja31cbiAgICAgICAgcGxheWluZ1N0YXR1cz17cGxheWluZ1N0YXR1c31cbiAgICAgIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hdWRpby1wbGF5ZXItY29udGFpbmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNyb3NzIHtcbiAgICAgICAgICB3aWR0aDogMC43cmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMC4zcmVtO1xuICAgICAgICAgIHRvcDogMC4zcmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgICAgICB9XG4gICAgICAgIC5jcm9zczpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgfVxuICAgICAgICAudHJhY2tsaXN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAudHJhY2tsaXN0LWl0ZW0ge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVsZWFzZVRyYWNrbGlzdEFuZFBsYXllcjtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ReleaseTracklistAndPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ReleaseTracklistAndPlayer);

/***/ })

})
//# sourceMappingURL=index.js.e3b62eaaefd7e43213df.hot-update.js.map