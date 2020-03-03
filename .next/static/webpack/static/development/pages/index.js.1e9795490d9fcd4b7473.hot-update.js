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
    className: "jsx-3233531085" + " " + "audio-player-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("img", {
    src: "/img/cross.png",
    alt: "cross",
    onClick: stopMusic,
    className: "jsx-3233531085" + " " + "cross",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3233531085" + " " + "tracklist-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.tracklist.map(function (track, index) {
    return __jsx("div", {
      "data-tag": index,
      onClick: startTrack,
      className: "jsx-3233531085" + " " + "tracklist-item",
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
      lineNumber: 35
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3233531085",
    __self: this
  }, ".audio-player-container.jsx-3233531085{cursor:pointer;position:fixed;bottom:0;left:0;background:white;width:100%;z-index:2;padding-bottom:1rem;padding-top:1rem;opacity:0.7;}.cross.jsx-3233531085{width:0.7rem;position:absolute;right:0.3rem;top:0.3rem;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;}.cross.jsx-3233531085:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);opacity:0.7;}.tracklist-container.jsx-3233531085{padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;}.tracklist-item.jsx-3233531085{padding-bottom:0.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvVHJhY2tsaXN0QW5kUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDa0IsQUFHMEIsQUFZRixBQU9RLEFBSUMsQUFLQSxhQWZKLEVBWkgsT0F1QkcsQUFLcEIsUUEzQlcsQ0FZSSxRQVhOLENBc0JZLElBVlIsRUFYTSxTQVlTLElBVTVCLElBckJhLFdBQ0QsQ0FjRSxTQWJRLEdBY3RCLGlCQWJtQixpQkFDTCxZQUNkLHdCQU9BIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvVHJhY2tsaXN0QW5kUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBdWRpb1BsYXllciBmcm9tIFwiLi9BdWRpb1BsYXllclwiO1xuXG5mdW5jdGlvbiBUcmFja2xpc3RBbmRQbGF5ZXIocHJvcHMpIHtcbiAgY29uc3QgW3NlbGVjdGVkVHJhY2ssIHNldFNlbGVjdGVkVHJhY2tdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtsYXVuY2hQbGF5LCBzZXRMYXVuY2hQbGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3BsYXlpbmdTdGF0dXMsIHNldFBsYXlpbmdTdGF0dXNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGZ1bmN0aW9uIHN0b3BNdXNpYygpIHtcbiAgICBzZXRQbGF5aW5nU3RhdHVzKGZhbHNlKTtcbiAgICBwcm9wcy5zZXRQbGF5ZXJEaXNwbGF5SWQobnVsbCk7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRUcmFjayhldmVudCkge1xuICAgIHNldFNlbGVjdGVkVHJhY2soZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdGFnXCIpKTtcbiAgICBzZXRMYXVuY2hQbGF5KHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVBsYXlCdXR0b25DbGljaygpIHtcbiAgICBzZXRQbGF5aW5nU3RhdHVzKCFwbGF5aW5nU3RhdHVzKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdWRpby1wbGF5ZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cImNyb3NzXCJcbiAgICAgICAgc3JjPVwiL2ltZy9jcm9zcy5wbmdcIlxuICAgICAgICBhbHQ9XCJjcm9zc1wiXG4gICAgICAgIG9uQ2xpY2s9e3N0b3BNdXNpY31cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAge3Byb3BzLnRyYWNrbGlzdC5tYXAoKHRyYWNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tsaXN0LWl0ZW1cIiBkYXRhLXRhZz17aW5kZXh9IG9uQ2xpY2s9e3N0YXJ0VHJhY2t9PlxuICAgICAgICAgICAge3RyYWNrLm5hbWUuc2xpY2UoMCwgLTQpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEF1ZGlvUGxheWVyXG4gICAgICAgIHRyYWNrPXtwcm9wcy50cmFja2xpc3Rbc2VsZWN0ZWRUcmFja119XG4gICAgICAgIGxhdW5jaFBsYXk9e2xhdW5jaFBsYXl9XG4gICAgICAgIGhhbmRsZVBsYXlCdXR0b25DbGljaz17aGFuZGxlUGxheUJ1dHRvbkNsaWNrfVxuICAgICAgICBwbGF5aW5nU3RhdHVzPXtwbGF5aW5nU3RhdHVzfVxuICAgICAgICBzZXRQbGF5aW5nU3RhdHVzPXtzZXRQbGF5aW5nU3RhdHVzfVxuICAgICAgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmF1ZGlvLXBsYXllci1jb250YWluZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIH1cbiAgICAgICAgLmNyb3NzIHtcbiAgICAgICAgICB3aWR0aDogMC43cmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMC4zcmVtO1xuICAgICAgICAgIHRvcDogMC4zcmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgICAgICB9XG4gICAgICAgIC5jcm9zczpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgfVxuICAgICAgICAudHJhY2tsaXN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAudHJhY2tsaXN0LWl0ZW0ge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhY2tsaXN0QW5kUGxheWVyO1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/TracklistAndPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (TracklistAndPlayer);

/***/ })

})
//# sourceMappingURL=index.js.1e9795490d9fcd4b7473.hot-update.js.map