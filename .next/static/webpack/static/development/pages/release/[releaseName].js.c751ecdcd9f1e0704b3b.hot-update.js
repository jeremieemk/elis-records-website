webpackHotUpdate("static/development/pages/release/[releaseName].js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _style_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/GlobalStyles */ "./style/GlobalStyles.js");
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/analytics */ "./components/utils/analytics.js");
var _jsxFileName = "/Users/jeremie/web/33_elis/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Layout(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!window.GA_INITIALIZED) {
      Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_4__["initGA"])();
      window.GA_INITIALIZED = true;
    }

    Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_4__["logPageView"])();
  }, []);
  return __jsx("div", {
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1300303396" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.children, __jsx("div", {
    className: "jsx-1300303396" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1300303396" + " " + "email-address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "ola@elis-records.com"), __jsx("div", {
    className: "jsx-1300303396" + " " + "open-source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "built by", " ", __jsx("a", {
    href: "https://www.overdub.dev/",
    target: "_blank",
    className: "jsx-1300303396" + " " + "overdub-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "overDub.dev"), " ", "with next.js and open-sourced on", " ", __jsx("a", {
    href: "https://github.com/jeremieemk/elis-records-website",
    target: "_blank",
    className: "jsx-1300303396" + " " + "github-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "GitHub")))), _style_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["default"], __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1300303396",
    __self: this
  }, ".container.jsx-1300303396{position:relative;width:100%;}.footer.jsx-1300303396{bottom:-2;margin-bottom:10rem;margin-top:3rem;text-align:center;color:black;font-family:var(--font1);font-size:var(--standard-font-size);padding-left:2rem;padding-right:2rem;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;}.github-link.jsx-1300303396,.overdub-link.jsx-1300303396{color:var(--color2);}.open-source.jsx-1300303396{margin-bottom:0.5rem;opacity:0.7;}.email-address.jsx-1300303396{margin-bottom:1rem;}@media (min-width:801px){.footer.jsx-1300303396{font-size:1.1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDa0IsQUFHNkIsQUFJUixBQWFVLEFBR0MsQUFJRixBQUlBLFVBdkJDLE9Bd0JwQixDQTVCVyxDQXdCYixDQVBBLENBR2MsUUFuQmQsQ0FJa0IsR0FnQmxCLGFBZm9CLGtCQUNOLFlBQ2EseUJBQ1csb0NBQ2xCLGtCQUNDLG1CQUNJLDZHQUN6QiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gXCIuLi9zdHlsZS9HbG9iYWxTdHlsZXNcIjtcbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tIFwiLi91dGlscy9hbmFseXRpY3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXdpbmRvdy5HQV9JTklUSUFMSVpFRCkge1xuICAgICAgaW5pdEdBKCk7XG4gICAgICB3aW5kb3cuR0FfSU5JVElBTElaRUQgPSB0cnVlO1xuICAgIH1cbiAgICBsb2dQYWdlVmlldygpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlbWFpbC1hZGRyZXNzXCI+b2xhQGVsaXMtcmVjb3Jkcy5jb208L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGVuLXNvdXJjZVwiPlxuICAgICAgICAgICAgYnVpbHQgYnl7XCIgXCJ9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZHViLWxpbmtcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cub3ZlcmR1Yi5kZXYvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgb3ZlckR1Yi5kZXZcbiAgICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgICB3aXRoIG5leHQuanMgYW5kIG9wZW4tc291cmNlZCBvbntcIiBcIn1cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdpdGh1Yi1saW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9qZXJlbWllZW1rL2VsaXMtcmVjb3Jkcy13ZWJzaXRlXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2l0SHViXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7R2xvYmFsU3R5bGVzfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgYm90dG9tOiAtMjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQxKTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN0YW5kYXJkLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmdpdGh1Yi1saW5rLFxuICAgICAgICAub3ZlcmR1Yi1saW5rIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3IyKTtcbiAgICAgICAgfVxuICAgICAgICAub3Blbi1zb3VyY2Uge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIH1cbiAgICAgICAgLmVtYWlsLWFkZHJlc3Mge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMXB4KSB7XG4gICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/Layout.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=[releaseName].js.c751ecdcd9f1e0704b3b.hot-update.js.map