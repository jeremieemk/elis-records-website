webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/VolumeSlider.js":
/*!************************************!*\
  !*** ./components/VolumeSlider.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/jeremie/web/33_elis/components/VolumeSlider.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function VolumeSlider(props) {
  var handleVolumechange = function handleVolumechange(e) {
    props.audio && (props.audio.volume = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value));
  };

  return __jsx("div", {
    className: "jsx-2146019982" + " " + "volume-slider-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("input", {
    type: "range",
    name: "volume",
    min: "0",
    max: "1",
    step: "0.01",
    onChange: handleVolumechange,
    className: "jsx-2146019982" + " " + "volume-slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2146019982",
    __self: this
  }, ".volume-slider-container.jsx-2146019982{margin-top:1rem;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.volume-slider.jsx-2146019982{width:4rem;margin-right:0.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvVm9sdW1lU2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUcyQixBQU9MLFdBQ1MsS0FOVCxXQUNFLElBTWYsc0VBTDJCLGlHQUMzQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL1ZvbHVtZVNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFZvbHVtZVNsaWRlcihwcm9wcykge1xuICBjb25zdCBoYW5kbGVWb2x1bWVjaGFuZ2UgPSBlID0+IHtcbiAgICBwcm9wcy5hdWRpbyAmJiAocHJvcHMuYXVkaW8udm9sdW1lID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidm9sdW1lLXNsaWRlci1jb250YWluZXJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICBjbGFzc05hbWU9XCJ2b2x1bWUtc2xpZGVyXCJcbiAgICAgICAgbmFtZT1cInZvbHVtZVwiXG4gICAgICAgIG1pbj1cIjBcIlxuICAgICAgICBtYXg9XCIxXCJcbiAgICAgICAgc3RlcD1cIjAuMDFcIlxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlVm9sdW1lY2hhbmdlfVxuICAgICAgPjwvaW5wdXQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC52b2x1bWUtc2xpZGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgICAudm9sdW1lLXNsaWRlciB7XG4gICAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICk7XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZvbHVtZVNsaWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/VolumeSlider.js */"), ");");
}

/* harmony default export */ __webpack_exports__["default"] = (VolumeSlider);

/***/ })

})
//# sourceMappingURL=index.js.5e8e74109a9c57490148.hot-update.js.map