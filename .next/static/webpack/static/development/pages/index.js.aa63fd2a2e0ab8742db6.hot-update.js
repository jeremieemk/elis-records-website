webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ReleaseEntry.js":
/*!************************************!*\
  !*** ./components/ReleaseEntry.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AudioPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudioPlayer */ "./components/AudioPlayer.js");


var _jsxFileName = "/Users/jeremie/web/33_elis/components/ReleaseEntry.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



function ReleaseEntry(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      playerDisplayId = _useState[0],
      setPlayerDisplayId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      selectedTrack = _useState2[0],
      setSelectedTrack = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      launchPlay = _useState3[0],
      setLaunchPlay = _useState3[1];

  function showPlayer(event) {
    setPlayerDisplayId(event.target.getAttribute("data-tag"));
  }

  function startTrack(event) {
    setSelectedTrack(event.target.getAttribute("data-tag"));
    setLaunchPlay(true);
  }

  return props.releases && props.releases.map(function (release, index) {
    var tracklist = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(release.data.tracks[0]);

    return __jsx("div", {
      className: "jsx-3353342077",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3353342077" + " " + "release-entry-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("img", {
      onClick: showPlayer,
      key: "cover".concat(index),
      src: release.data.cover.url,
      alt: "release-cover",
      "data-tag": index,
      className: "jsx-3353342077" + " " + "release-cover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3353342077" + " " + "release-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      key: "artist".concat(index),
      className: "jsx-3353342077" + " " + "artist-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, release.data.artist[0].text), __jsx("div", {
      key: "title".concat(index),
      className: "jsx-3353342077" + " " + "release-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, release.data.title[0].text)), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(playerDisplayId) === index && __jsx("div", {
      className: "jsx-3353342077" + " " + "audio-player-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, tracklist.map(function (track, index) {
      return __jsx("div", {
        "data-tag": index,
        onClick: startTrack,
        className: "jsx-3353342077",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, track.name.slice(0, -4));
    }), __jsx(_AudioPlayer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      track: tracklist[selectedTrack],
      launchPlay: launchPlay,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3353342077",
      __self: this
    }, ".release-entry-wrapper.jsx-3353342077{padding-left:var(--global-margin);padding-right:var(--global-margin);}.release-cover.jsx-3353342077{width:100%;}.release-details.jsx-3353342077{font-family:var(--font1);font-size:var(--standard-font-size);text-transform:uppercase;padding-top:1rem;padding-bottom:1rem;}.audio-player-container.jsx-3353342077{position:fixed;bottom:0;background:white;padding:1rem;width:100%;z-index:2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUmVsZWFzZUVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ec0IsQUFHaUQsQUFJdkIsQUFJYyxBQVlWLFdBZmpCLElBZ0JXLFNBQ1EsQ0FibUIsU0FSRCxPQXNCdEIsYUFDRixPQWRjLElBZWYsSUF2QlosTUF3QkEsV0FmbUIsaUJBQ0csb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUmVsZWFzZUVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1ZGlvUGxheWVyIGZyb20gXCIuL0F1ZGlvUGxheWVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFJlbGVhc2VFbnRyeShwcm9wcykge1xuICBjb25zdCBbcGxheWVyRGlzcGxheUlkLCBzZXRQbGF5ZXJEaXNwbGF5SWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzZWxlY3RlZFRyYWNrLCBzZXRTZWxlY3RlZFRyYWNrXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbGF1bmNoUGxheSwgc2V0TGF1bmNoUGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGZ1bmN0aW9uIHNob3dQbGF5ZXIoZXZlbnQpIHtcbiAgICBzZXRQbGF5ZXJEaXNwbGF5SWQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdGFnXCIpKTtcbiAgfVxuICBmdW5jdGlvbiBzdGFydFRyYWNrKGV2ZW50KSB7XG4gICAgc2V0U2VsZWN0ZWRUcmFjayhldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YWdcIikpO1xuICAgIHNldExhdW5jaFBsYXkodHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICBwcm9wcy5yZWxlYXNlcyAmJlxuICAgIHByb3BzLnJlbGVhc2VzLm1hcChmdW5jdGlvbihyZWxlYXNlLCBpbmRleCkge1xuICAgICAgbGV0IHRyYWNrbGlzdCA9IE9iamVjdC52YWx1ZXMocmVsZWFzZS5kYXRhLnRyYWNrc1swXSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZWFzZS1lbnRyeS13cmFwcGVyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGVhc2UtY292ZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGxheWVyfVxuICAgICAgICAgICAgICBrZXk9e2Bjb3ZlciR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgc3JjPXtyZWxlYXNlLmRhdGEuY292ZXIudXJsfVxuICAgICAgICAgICAgICBhbHQ9XCJyZWxlYXNlLWNvdmVyXCJcbiAgICAgICAgICAgICAgZGF0YS10YWc9e2luZGV4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZWFzZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgIDxkaXYga2V5PXtgYXJ0aXN0JHtpbmRleH1gfSBjbGFzc05hbWU9XCJhcnRpc3QtbmFtZVwiPlxuICAgICAgICAgICAgICAgIHtyZWxlYXNlLmRhdGEuYXJ0aXN0WzBdLnRleHR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGtleT17YHRpdGxlJHtpbmRleH1gfSBjbGFzc05hbWU9XCJyZWxlYXNlLW5hbWVcIj5cbiAgICAgICAgICAgICAgICB7cmVsZWFzZS5kYXRhLnRpdGxlWzBdLnRleHR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7cGFyc2VJbnQocGxheWVyRGlzcGxheUlkKSA9PT0gaW5kZXggJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1ZGlvLXBsYXllci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7dHJhY2tsaXN0Lm1hcCgodHJhY2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtdGFnPXtpbmRleH0gb25DbGljaz17c3RhcnRUcmFja30+XG4gICAgICAgICAgICAgICAgICAgIHt0cmFjay5uYW1lLnNsaWNlKDAsIC00KX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxBdWRpb1BsYXllclxuICAgICAgICAgICAgICAgICAgdHJhY2s9e3RyYWNrbGlzdFtzZWxlY3RlZFRyYWNrXX1cbiAgICAgICAgICAgICAgICAgIGxhdW5jaFBsYXk9e2xhdW5jaFBsYXl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5yZWxlYXNlLWVudHJ5LXdyYXBwZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdsb2JhbC1tYXJnaW4pO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1nbG9iYWwtbWFyZ2luKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWxlYXNlLWNvdmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZWxlYXNlLWRldGFpbHMge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udDEpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN0YW5kYXJkLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aXN0LW5hbWUsXG4gICAgICAgICAgICAucmVsZWFzZS1uYW1lIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hdWRpby1wbGF5ZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWxlYXNlRW50cnk7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ReleaseEntry.js */"));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ReleaseEntry);

/***/ })

})
//# sourceMappingURL=index.js.aa63fd2a2e0ab8742db6.hot-update.js.map