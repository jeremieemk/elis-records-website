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
    var scrubTime = e.nativeEvent.offsetX / progressBar.current.offsetWidth * props.audio.duration;
    props.audio.currentTime = scrubTime;
  }

  return __jsx("div", {
    ref: progressBar,
    onClick: scrub,
    className: "jsx-420793320" + " " + "progress-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: "".concat(props.progression, "%")
    },
    className: "jsx-420793320" + " " + "range",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "420793320",
    __self: this
  }, ".progress-bar.jsx-420793320{width:100%;height:100%;margin-left:0.5rem;margin-right:1rem;border:1px solid black;-webkit-transition:opacity 0.6s;transition:opacity 0.6s;}.progress-bar.jsx-420793320:hover{opacity:0.8;}.range.jsx-420793320{background:black;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2tCLEFBR3NCLEFBUUMsQUFHSyxXQVZMLENBUWQsS0FHYyxNQVZPLE1BV3JCLGFBVm9CLGtCQUNLLHVCQUNDLHdEQUMxQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFByb2dyZXNzQmFyKHByb3BzKSB7XG4gIGNvbnN0IHByb2dyZXNzQmFyID0gdXNlUmVmKCk7XG4gIGZ1bmN0aW9uIHNjcnViKGUpIHtcbiAgICBjb25zdCBzY3J1YlRpbWUgPVxuICAgICAgKGUubmF0aXZlRXZlbnQub2Zmc2V0WCAvIHByb2dyZXNzQmFyLmN1cnJlbnQub2Zmc2V0V2lkdGgpICpcbiAgICAgIHByb3BzLmF1ZGlvLmR1cmF0aW9uO1xuICAgIHByb3BzLmF1ZGlvLmN1cnJlbnRUaW1lID0gc2NydWJUaW1lO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiIHJlZj17cHJvZ3Jlc3NCYXJ9IG9uQ2xpY2s9e3NjcnVifT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFuZ2VcIiBzdHlsZT17eyB3aWR0aDogYCR7cHJvcHMucHJvZ3Jlc3Npb259JWAgfX0gLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cztcbiAgICAgICAgfVxuICAgICAgICAucHJvZ3Jlc3MtYmFyOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIH1cbiAgICAgICAgLnJhbmdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ProgressBar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ })

})
//# sourceMappingURL=index.js.793c4d02b77f8614b933.hot-update.js.map