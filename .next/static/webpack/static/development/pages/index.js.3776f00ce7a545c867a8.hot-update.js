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
    className: "jsx-584827206" + " " + "volume-slider-container",
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
    className: "jsx-584827206" + " " + "volume-slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "584827206",
    __self: this
  }, ".volume-slider-container.jsx-584827206{opacity:0.8;margin-top:1rem;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.volume-slider.jsx-584827206{width:4rem;margin-right:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvVm9sdW1lU2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUd1QixBQVFELFdBQ08sQ0FSRixnQkFFTCxDQU9iLFVBTmUsMEVBQ1ksaUdBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvVm9sdW1lU2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gVm9sdW1lU2xpZGVyKHByb3BzKSB7XG4gIGNvbnN0IGhhbmRsZVZvbHVtZWNoYW5nZSA9IGUgPT4ge1xuICAgIHByb3BzLmF1ZGlvICYmIChwcm9wcy5hdWRpby52b2x1bWUgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2b2x1bWUtc2xpZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cInZvbHVtZS1zbGlkZXJcIlxuICAgICAgICBuYW1lPVwidm9sdW1lXCJcbiAgICAgICAgbWluPVwiMFwiXG4gICAgICAgIG1heD1cIjFcIlxuICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVWb2x1bWVjaGFuZ2V9XG4gICAgICA+PC9pbnB1dD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnZvbHVtZS1zbGlkZXItY29udGFpbmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgICAudm9sdW1lLXNsaWRlciB7XG4gICAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZvbHVtZVNsaWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/VolumeSlider.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (VolumeSlider);

/***/ })

})
//# sourceMappingURL=index.js.3776f00ce7a545c867a8.hot-update.js.map