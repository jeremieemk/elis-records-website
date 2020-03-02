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

  function showPlayer(event) {
    setPlayerDisplayId(event.target.getAttribute("data-tag"));
  }

  function changeTrack(event) {
    setSelectedTrack(event.target.getAttribute("data-tag"));
  }

  return props.releases.data && props.releases.data.map(function (release, index) {
    var tracklist = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(release.tracks[0]);

    return __jsx("div", {
      className: "jsx-3697838130",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3697838130" + " " + "release-entry-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("img", {
      onClick: showPlayer,
      key: "cover".concat(index),
      src: release.cover.url,
      alt: "release-cover",
      "data-tag": index,
      className: "jsx-3697838130" + " " + "release-cover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3697838130" + " " + "release-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      key: "artist".concat(index),
      className: "jsx-3697838130" + " " + "artist-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, release.artist[0].text), __jsx("div", {
      key: "title".concat(index),
      className: "jsx-3697838130" + " " + "release-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, release.title[0].text)), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(playerDisplayId) === index && __jsx("div", {
      className: "jsx-3697838130" + " " + "audio-player-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, tracklist.map(function (track, index) {
      return __jsx("div", {
        "data-tag": index,
        onClick: changeTrack,
        className: "jsx-3697838130",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, track.name.slice(0, -4));
    }), __jsx(_AudioPlayer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      track: tracklist[selectedTrack],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3697838130",
      __self: this
    }, ".release-cover.jsx-3697838130{width:100%;}.audio-player-container.jsx-3697838130{position:fixed;bottom:0;background:white;padding:1rem;width:100%;z-index:2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUmVsZWFzZUVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDc0IsQUFLMEIsQUFXSSxXQVZqQixJQVdXLFNBQ1EsaUJBQ0osYUFDRixXQUNELFVBQ1oiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzMzX2VsaXMvY29tcG9uZW50cy9SZWxlYXNlRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXVkaW9QbGF5ZXIgZnJvbSBcIi4vQXVkaW9QbGF5ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gUmVsZWFzZUVudHJ5KHByb3BzKSB7XG4gIGNvbnN0IFtwbGF5ZXJEaXNwbGF5SWQsIHNldFBsYXllckRpc3BsYXlJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3NlbGVjdGVkVHJhY2ssIHNldFNlbGVjdGVkVHJhY2tdID0gdXNlU3RhdGUoMCk7XG4gIGZ1bmN0aW9uIHNob3dQbGF5ZXIoZXZlbnQpIHtcbiAgICBzZXRQbGF5ZXJEaXNwbGF5SWQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdGFnXCIpKTtcbiAgfVxuICBmdW5jdGlvbiBjaGFuZ2VUcmFjayhldmVudCkge1xuICAgIHNldFNlbGVjdGVkVHJhY2soZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdGFnXCIpKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHByb3BzLnJlbGVhc2VzLmRhdGEgJiZcbiAgICBwcm9wcy5yZWxlYXNlcy5kYXRhLm1hcChmdW5jdGlvbihyZWxlYXNlLCBpbmRleCkge1xuICAgICAgbGV0IHRyYWNrbGlzdCA9IE9iamVjdC52YWx1ZXMocmVsZWFzZS50cmFja3NbMF0pO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtZW50cnktd3JhcHBlclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLWNvdmVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17c2hvd1BsYXllcn1cbiAgICAgICAgICAgICAga2V5PXtgY292ZXIke2luZGV4fWB9XG4gICAgICAgICAgICAgIHNyYz17cmVsZWFzZS5jb3Zlci51cmx9XG4gICAgICAgICAgICAgIGFsdD1cInJlbGVhc2UtY292ZXJcIlxuICAgICAgICAgICAgICBkYXRhLXRhZz17aW5kZXh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2BhcnRpc3Qke2luZGV4fWB9IGNsYXNzTmFtZT1cImFydGlzdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAge3JlbGVhc2UuYXJ0aXN0WzBdLnRleHR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGtleT17YHRpdGxlJHtpbmRleH1gfSBjbGFzc05hbWU9XCJyZWxlYXNlLW5hbWVcIj5cbiAgICAgICAgICAgICAgICB7cmVsZWFzZS50aXRsZVswXS50ZXh0fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3BhcnNlSW50KHBsYXllckRpc3BsYXlJZCkgPT09IGluZGV4ICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdWRpby1wbGF5ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge3RyYWNrbGlzdC5tYXAoKHRyYWNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXRhZz17aW5kZXh9IG9uQ2xpY2s9e2NoYW5nZVRyYWNrfT5cbiAgICAgICAgICAgICAgICAgICAge3RyYWNrLm5hbWUuc2xpY2UoMCwgLTQpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPEF1ZGlvUGxheWVyIHRyYWNrPXt0cmFja2xpc3Rbc2VsZWN0ZWRUcmFja119IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucmVsZWFzZS1lbnRyeS13cmFwcGVyIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWxlYXNlLWNvdmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZWxlYXNlLWRldGFpbHMge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGlzdC1uYW1lIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpc3QtbmFtZSxcbiAgICAgICAgICAgIC5yZWxlYXNlLW5hbWUge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmF1ZGlvLXBsYXllci1jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGVhc2VFbnRyeTtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ReleaseEntry.js */"));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ReleaseEntry);

/***/ })

})
//# sourceMappingURL=index.js.e830e43c7e7fc435d0e7.hot-update.js.map