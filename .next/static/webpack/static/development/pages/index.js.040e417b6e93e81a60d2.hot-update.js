webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TracklistAndPlayer.js":
/*!******************************************!*\
  !*** ./components/TracklistAndPlayer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AudioPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioPlayer */ "./components/AudioPlayer.js");
var _jsxFileName = "/Users/jeremie/web/33_elis/components/TracklistAndPlayer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function TracklistAndPlayer(props) {
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
    className: "jsx-546657863" + " " + "audio-player-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("img", {
    src: "/img/cross.png",
    alt: "cross",
    onClick: stopMusic,
    className: "jsx-546657863" + " " + "cross",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-546657863" + " " + "tracklist-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.tracklist.map(function (track, index) {
    return __jsx("div", {
      "data-tag": index,
      onClick: startTrack,
      style: "opacity: 1",
      className: "jsx-546657863" + " " + "tracklist-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, track.name.slice(0, -4));
  })), __jsx(_AudioPlayer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    track: props.tracklist[selectedTrack],
    launchPlay: launchPlay,
    handlePlayButtonClick: handlePlayButtonClick,
    playingStatus: playingStatus,
    setPlayingStatus: setPlayingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "546657863",
    __self: this
  }, ".audio-player-container.jsx-546657863{cursor:pointer;position:fixed;bottom:0;left:0;background:white;width:100%;z-index:2;padding-bottom:1rem;padding-top:1rem;}.cross.jsx-546657863{width:0.7rem;position:absolute;right:0.3rem;top:0.3rem;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;}.cross.jsx-546657863:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);opacity:0.7;}.tracklist-container.jsx-546657863{padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;}.tracklist-item.jsx-546657863{padding-bottom:0.5rem;opacity:0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvVHJhY2tsaXN0QW5kUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDa0IsQUFHMEIsQUFXRixBQU9RLEFBSUMsQUFLQSxhQWZKLEVBWEgsT0FzQkcsQUFLTixRQTFCSCxDQVdJLEdBZ0JmLEtBMUJTLENBcUJZLElBVlIsRUFWTSxTQVdTLElBVTVCLElBcEJhLFdBQ0QsQ0FhRSxTQVpRLEdBYXRCLGlCQVptQixpQkFDbkIsb0NBT0EiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzMzX2VsaXMvY29tcG9uZW50cy9UcmFja2xpc3RBbmRQbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEF1ZGlvUGxheWVyIGZyb20gXCIuL0F1ZGlvUGxheWVyXCI7XG5cbmZ1bmN0aW9uIFRyYWNrbGlzdEFuZFBsYXllcihwcm9wcykge1xuICBjb25zdCBbc2VsZWN0ZWRUcmFjaywgc2V0U2VsZWN0ZWRUcmFja10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2xhdW5jaFBsYXksIHNldExhdW5jaFBsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGxheWluZ1N0YXR1cywgc2V0UGxheWluZ1N0YXR1c10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgZnVuY3Rpb24gc3RvcE11c2ljKCkge1xuICAgIHNldFBsYXlpbmdTdGF0dXMoZmFsc2UpO1xuICAgIHByb3BzLnNldFBsYXllckRpc3BsYXlJZChudWxsKTtcbiAgfVxuICBmdW5jdGlvbiBzdGFydFRyYWNrKGV2ZW50KSB7XG4gICAgc2V0U2VsZWN0ZWRUcmFjayhldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YWdcIikpO1xuICAgIHNldExhdW5jaFBsYXkodHJ1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlUGxheUJ1dHRvbkNsaWNrKCkge1xuICAgIHNldFBsYXlpbmdTdGF0dXMoIXBsYXlpbmdTdGF0dXMpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1ZGlvLXBsYXllci1jb250YWluZXJcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwiY3Jvc3NcIlxuICAgICAgICBzcmM9XCIvaW1nL2Nyb3NzLnBuZ1wiXG4gICAgICAgIGFsdD1cImNyb3NzXCJcbiAgICAgICAgb25DbGljaz17c3RvcE11c2ljfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tsaXN0LWNvbnRhaW5lclwiPlxuICAgICAgICB7cHJvcHMudHJhY2tsaXN0Lm1hcCgodHJhY2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhY2tsaXN0LWl0ZW1cIlxuICAgICAgICAgICAgZGF0YS10YWc9e2luZGV4fVxuICAgICAgICAgICAgb25DbGljaz17c3RhcnRUcmFja31cbiAgICAgICAgICAgIHN0eWxlPXtcIm9wYWNpdHk6IDFcIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dHJhY2submFtZS5zbGljZSgwLCAtNCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8QXVkaW9QbGF5ZXJcbiAgICAgICAgdHJhY2s9e3Byb3BzLnRyYWNrbGlzdFtzZWxlY3RlZFRyYWNrXX1cbiAgICAgICAgbGF1bmNoUGxheT17bGF1bmNoUGxheX1cbiAgICAgICAgaGFuZGxlUGxheUJ1dHRvbkNsaWNrPXtoYW5kbGVQbGF5QnV0dG9uQ2xpY2t9XG4gICAgICAgIHBsYXlpbmdTdGF0dXM9e3BsYXlpbmdTdGF0dXN9XG4gICAgICAgIHNldFBsYXlpbmdTdGF0dXM9e3NldFBsYXlpbmdTdGF0dXN9XG4gICAgICAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYXVkaW8tcGxheWVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jcm9zcyB7XG4gICAgICAgICAgd2lkdGg6IDAuN3JlbTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDAuM3JlbTtcbiAgICAgICAgICB0b3A6IDAuM3JlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgICAgICAgfVxuICAgICAgICAuY3Jvc3M6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIH1cbiAgICAgICAgLnRyYWNrbGlzdC1jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnRyYWNrbGlzdC1pdGVtIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFja2xpc3RBbmRQbGF5ZXI7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/TracklistAndPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (TracklistAndPlayer);

/***/ })

})
//# sourceMappingURL=index.js.040e417b6e93e81a60d2.hot-update.js.map