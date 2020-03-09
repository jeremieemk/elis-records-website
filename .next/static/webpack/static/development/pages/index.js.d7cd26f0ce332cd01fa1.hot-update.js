webpackHotUpdate("static/development/pages/index.js",{

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
    className: "jsx-4276442258" + " " + "progress-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: "".concat(props.progression, "%")
    },
    className: "jsx-4276442258" + " " + "range",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4276442258",
    __self: this
  }, ".progress-bar.jsx-4276442258{width:100%;height:100%;margin-left:0.5rem;margin-right:1rem;border:1px solid white;-webkit-transition:opacity 0.6s;transition:opacity 0.6s;}.progress-bar.jsx-4276442258:hover{opacity:0.8;}.range.jsx-4276442258{background:black;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JrQixBQUdzQixBQVFDLEFBR0ssV0FWTCxDQVFkLEtBR2MsTUFWTyxNQVdyQixhQVZvQixrQkFDSyx1QkFDQyx3REFDMUIiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzMzX2VsaXMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBQcm9ncmVzc0Jhcihwcm9wcykge1xuICBjb25zdCBwcm9ncmVzc0JhciA9IHVzZVJlZigpO1xuICBmdW5jdGlvbiBzY3J1YihlKSB7XG4gICAgaWYgKHByb3BzLmF1ZGlvKSB7XG4gICAgICBjb25zdCBzY3J1YlRpbWUgPVxuICAgICAgICAoZS5uYXRpdmVFdmVudC5vZmZzZXRYIC8gcHJvZ3Jlc3NCYXIuY3VycmVudC5vZmZzZXRXaWR0aCkgKlxuICAgICAgICBwcm9wcy5hdWRpby5kdXJhdGlvbjtcbiAgICAgIHByb3BzLmF1ZGlvLmN1cnJlbnRUaW1lID0gc2NydWJUaW1lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIiByZWY9e3Byb2dyZXNzQmFyfSBvbkNsaWNrPXtzY3J1Yn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmdlXCIgc3R5bGU9e3sgd2lkdGg6IGAke3Byb3BzLnByb2dyZXNzaW9ufSVgIH19IC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnM7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2dyZXNzLWJhcjpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB9XG4gICAgICAgIC5yYW5nZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ProgressBar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ })

})
//# sourceMappingURL=index.js.d7cd26f0ce332cd01fa1.hot-update.js.map