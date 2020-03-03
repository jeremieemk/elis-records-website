webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TracklistAndPlayer.js":
/*!******************************************!*\
  !*** ./components/TracklistAndPlayer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
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
    className: "jsx-1817445594" + " " + "audio-player-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("img", {
    src: "/img/cross.png",
    alt: "cross",
    onClick: stopMusic,
    className: "jsx-1817445594" + " " + "cross",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1817445594" + " " + "tracklist-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, props.tracklist.map(function (track, index) {
    var _jsx;

    return __jsx("div", (_jsx = {
      className: "tracklist-item",
      "data-tag": index,
      onClick: startTrack
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-1817445594" + " " + (selectedTrack === index && "bolder" || "")), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
      fileName: _jsxFileName,
      lineNumber: 31
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), track.name.slice(0, -4));
  })), __jsx(_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    track: props.tracklist[selectedTrack],
    launchPlay: launchPlay,
    handlePlayButtonClick: handlePlayButtonClick,
    playingStatus: playingStatus,
    setPlayingStatus: setPlayingStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1817445594",
    __self: this
  }, ".audio-player-container.jsx-1817445594{cursor:pointer;position:fixed;bottom:0;left:0;background:white;width:100%;z-index:2;padding-bottom:1rem;padding-top:1rem;}.cross.jsx-1817445594{width:0.7rem;position:absolute;right:0.3rem;top:0.3rem;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;}.cross.jsx-1817445594:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);opacity:0.7;}.tracklist-container.jsx-1817445594{padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;}.tracklist-item.jsx-1817445594{padding-bottom:0.5rem;opacity:0.5;}.bolder.jsx-1817445594{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvVHJhY2tsaXN0QW5kUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDa0IsQUFHMEIsQUFXRixBQU9RLEFBSUMsQUFLQSxBQUlaLFVBQ1osR0FwQm9CLEVBWEgsT0FzQkcsQUFLTixRQTFCSCxDQVdJLEdBZ0JmLEtBMUJTLENBcUJZLElBVlIsRUFWTSxTQVdTLElBVTVCLElBcEJhLFdBQ0QsQ0FhRSxTQVpRLEdBYXRCLGlCQVptQixpQkFDbkIsb0NBT0EiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzMzX2VsaXMvY29tcG9uZW50cy9UcmFja2xpc3RBbmRQbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEF1ZGlvUGxheWVyIGZyb20gXCIuL0F1ZGlvUGxheWVyXCI7XG5cbmZ1bmN0aW9uIFRyYWNrbGlzdEFuZFBsYXllcihwcm9wcykge1xuICBjb25zdCBbc2VsZWN0ZWRUcmFjaywgc2V0U2VsZWN0ZWRUcmFja10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2xhdW5jaFBsYXksIHNldExhdW5jaFBsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGxheWluZ1N0YXR1cywgc2V0UGxheWluZ1N0YXR1c10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgZnVuY3Rpb24gc3RvcE11c2ljKCkge1xuICAgIHNldFBsYXlpbmdTdGF0dXMoZmFsc2UpO1xuICAgIHByb3BzLnNldFBsYXllckRpc3BsYXlJZChudWxsKTtcbiAgfVxuICBmdW5jdGlvbiBzdGFydFRyYWNrKGV2ZW50KSB7XG4gICAgc2V0U2VsZWN0ZWRUcmFjayhldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YWdcIikpO1xuICAgIHNldExhdW5jaFBsYXkodHJ1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlUGxheUJ1dHRvbkNsaWNrKCkge1xuICAgIHNldFBsYXlpbmdTdGF0dXMoIXBsYXlpbmdTdGF0dXMpO1xuICB9XG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkVHJhY2spO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdWRpby1wbGF5ZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cImNyb3NzXCJcbiAgICAgICAgc3JjPVwiL2ltZy9jcm9zcy5wbmdcIlxuICAgICAgICBhbHQ9XCJjcm9zc1wiXG4gICAgICAgIG9uQ2xpY2s9e3N0b3BNdXNpY31cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAge3Byb3BzLnRyYWNrbGlzdC5tYXAoKHRyYWNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYWNrbGlzdC1pdGVtXCJcbiAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0VHJhY2t9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkVHJhY2sgPT09IGluZGV4ICYmIFwiYm9sZGVyXCJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RyYWNrLm5hbWUuc2xpY2UoMCwgLTQpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEF1ZGlvUGxheWVyXG4gICAgICAgIHRyYWNrPXtwcm9wcy50cmFja2xpc3Rbc2VsZWN0ZWRUcmFja119XG4gICAgICAgIGxhdW5jaFBsYXk9e2xhdW5jaFBsYXl9XG4gICAgICAgIGhhbmRsZVBsYXlCdXR0b25DbGljaz17aGFuZGxlUGxheUJ1dHRvbkNsaWNrfVxuICAgICAgICBwbGF5aW5nU3RhdHVzPXtwbGF5aW5nU3RhdHVzfVxuICAgICAgICBzZXRQbGF5aW5nU3RhdHVzPXtzZXRQbGF5aW5nU3RhdHVzfVxuICAgICAgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmF1ZGlvLXBsYXllci1jb250YWluZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY3Jvc3Mge1xuICAgICAgICAgIHdpZHRoOiAwLjdyZW07XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAwLjNyZW07XG4gICAgICAgICAgdG9wOiAwLjNyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgICAgIH1cbiAgICAgICAgLmNyb3NzOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICB9XG4gICAgICAgIC50cmFja2xpc3QtY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC50cmFja2xpc3QtaXRlbSB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgLmJvbGRlciB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFja2xpc3RBbmRQbGF5ZXI7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/TracklistAndPlayer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (TracklistAndPlayer);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

})
//# sourceMappingURL=index.js.923cfdc693a3973ddb9f.hot-update.js.map