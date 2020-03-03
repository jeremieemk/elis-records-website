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
    className: "jsx-2731488706" + " " + "progress-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: "".concat(props.progression, "%")
    },
    className: "jsx-2731488706" + " " + "range",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2731488706",
    __self: this
  }, ".progress-bar.jsx-2731488706{width:100%;height:100%;margin-left:0.5rem;margin-right:1.5rem;border:1px solid black;-webkit-transition:opacity 0.6s;transition:opacity 0.6s;}.progress-bar.jsx-2731488706:hover{opacity:0.8;}.range.jsx-2731488706{background:black;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2tCLEFBR3NCLEFBUUMsQUFHSyxXQVZMLENBUWQsS0FHYyxNQVZPLE1BV3JCLGFBVnNCLG9CQUNHLHVCQUNDLHdEQUMxQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFByb2dyZXNzQmFyKHByb3BzKSB7XG4gIGNvbnN0IHByb2dyZXNzQmFyID0gdXNlUmVmKCk7XG4gIGZ1bmN0aW9uIHNjcnViKGUpIHtcbiAgICBjb25zdCBzY3J1YlRpbWUgPVxuICAgICAgKGUubmF0aXZlRXZlbnQub2Zmc2V0WCAvIHByb2dyZXNzQmFyLmN1cnJlbnQub2Zmc2V0V2lkdGgpICpcbiAgICAgIHByb3BzLmF1ZGlvLmR1cmF0aW9uO1xuICAgIHByb3BzLmF1ZGlvLmN1cnJlbnRUaW1lID0gc2NydWJUaW1lO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiIHJlZj17cHJvZ3Jlc3NCYXJ9IG9uQ2xpY2s9e3NjcnVifT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFuZ2VcIiBzdHlsZT17eyB3aWR0aDogYCR7cHJvcHMucHJvZ3Jlc3Npb259JWAgfX0gLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9ncmVzcy1iYXI6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgfVxuICAgICAgICAucmFuZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ProgressBar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ })

})
//# sourceMappingURL=index.js.2f8f70b459b67a34c3b9.hot-update.js.map