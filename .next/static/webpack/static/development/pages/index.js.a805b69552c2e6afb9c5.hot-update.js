webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ReleaseEntry.js":
/*!************************************!*\
  !*** ./components/ReleaseEntry.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
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

  function showPlayer(event) {
    setPlayerDisplayId(event.target.getAttribute("data-tag"));
  }

  return props.releases && props.releases.map(function (release, index) {
    return __jsx("div", {
      className: "jsx-3697838130",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3697838130" + " " + "release-entry-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("img", {
      onClick: showPlayer,
      key: "cover".concat(index),
      src: release.data.cover.url,
      alt: "release-cover",
      "data-tag": index,
      className: "jsx-3697838130" + " " + "release-cover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3697838130" + " " + "release-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      key: "artist".concat(index),
      className: "jsx-3697838130" + " " + "artist-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, release.data.artist[0].text), __jsx("div", {
      key: "title".concat(index),
      className: "jsx-3697838130" + " " + "release-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, release.data.title[0].text)), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(playerDisplayId) === index && __jsx("div", {
      className: "jsx-3697838130" + " " + "audio-player-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(release.data.tracks[0]).map(function (track) {
      return __jsx("div", {
        className: "jsx-3697838130",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, track.name.slice(0, -4));
    }), __jsx(_AudioPlayer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: release.data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3697838130",
      __self: this
    }, ".release-cover.jsx-3697838130{width:100%;}.audio-player-container.jsx-3697838130{position:fixed;bottom:0;background:white;padding:1rem;width:100%;z-index:2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUmVsZWFzZUVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDc0IsQUFLMEIsQUFXSSxXQVZqQixJQVdXLFNBQ1EsaUJBQ0osYUFDRixXQUNELFVBQ1oiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzMzX2VsaXMvY29tcG9uZW50cy9SZWxlYXNlRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXVkaW9QbGF5ZXIgZnJvbSBcIi4vQXVkaW9QbGF5ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gUmVsZWFzZUVudHJ5KHByb3BzKSB7XG4gIGNvbnN0IFtwbGF5ZXJEaXNwbGF5SWQsIHNldFBsYXllckRpc3BsYXlJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgZnVuY3Rpb24gc2hvd1BsYXllcihldmVudCkge1xuICAgIHNldFBsYXllckRpc3BsYXlJZChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YWdcIikpO1xuICB9XG4gIHJldHVybiAoXG4gICAgcHJvcHMucmVsZWFzZXMgJiZcbiAgICBwcm9wcy5yZWxlYXNlcy5tYXAoZnVuY3Rpb24ocmVsZWFzZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLWVudHJ5LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsZWFzZS1jb3ZlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQbGF5ZXJ9XG4gICAgICAgICAgICAgIGtleT17YGNvdmVyJHtpbmRleH1gfVxuICAgICAgICAgICAgICBzcmM9e3JlbGVhc2UuZGF0YS5jb3Zlci51cmx9XG4gICAgICAgICAgICAgIGFsdD1cInJlbGVhc2UtY292ZXJcIlxuICAgICAgICAgICAgICBkYXRhLXRhZz17aW5kZXh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2BhcnRpc3Qke2luZGV4fWB9IGNsYXNzTmFtZT1cImFydGlzdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAge3JlbGVhc2UuZGF0YS5hcnRpc3RbMF0udGV4dH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYga2V5PXtgdGl0bGUke2luZGV4fWB9IGNsYXNzTmFtZT1cInJlbGVhc2UtbmFtZVwiPlxuICAgICAgICAgICAgICAgIHtyZWxlYXNlLmRhdGEudGl0bGVbMF0udGV4dH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtwYXJzZUludChwbGF5ZXJEaXNwbGF5SWQpID09PSBpbmRleCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW8tcGxheWVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKHJlbGVhc2UuZGF0YS50cmFja3NbMF0pLm1hcCh0cmFjayA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2Pnt0cmFjay5uYW1lLnNsaWNlKDAsIC00KX08L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8QXVkaW9QbGF5ZXIgZGF0YT17cmVsZWFzZS5kYXRhfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnJlbGVhc2UtZW50cnktd3JhcHBlciB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVsZWFzZS1jb3ZlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVsZWFzZS1kZXRhaWxzIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aXN0LW5hbWUsXG4gICAgICAgICAgICAucmVsZWFzZS1uYW1lIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hdWRpby1wbGF5ZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWxlYXNlRW50cnk7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ReleaseEntry.js */"));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ReleaseEntry);

/***/ })

})
//# sourceMappingURL=index.js.a805b69552c2e6afb9c5.hot-update.js.map