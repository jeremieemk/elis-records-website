webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/GlobalStyles */ "./style/GlobalStyles.js");
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/analytics */ "./components/utils/analytics.js");
var _jsxFileName = "/Users/jeremie/web/33_elis/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Layout(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!window.GA_INITIALIZED) {
      Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_5__["initGA"])();
      window.GA_INITIALIZED = true;
    }

    Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_5__["logPageView"])();
  }, [window.GA_INITIALIZED]);
  return __jsx("div", {
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Elis Records"), __jsx("meta", {
    name: "description",
    content: landingText,
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: "Elis Records",
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("meta", {
    name: "og:description",
    property: "og:description",
    content: landingText,
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("meta", {
    property: "og:site_name",
    content: "Elis Records",
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "http://www.elis-records.com/",
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: "/img/favicon.ico",
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    href: "/img/favicon.ico",
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/priority.css",
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "http://www.elis-records.com/img/elis-socials-img-tag.jpg",
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:image",
    content: "http://www.elis-records.com/img/elis-socials-img-tag.jpg",
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1300303396" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), props.children, __jsx("div", {
    className: "jsx-1300303396" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1300303396" + " " + "email-address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "ola@elis-records.com"), __jsx("div", {
    className: "jsx-1300303396" + " " + "open-source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "built by", " ", __jsx("a", {
    href: "https://www.overdub.dev/",
    target: "_blank",
    className: "jsx-1300303396" + " " + "overdub-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "overDub.dev"), " ", "with next.js and open-sourced on", " ", __jsx("a", {
    href: "https://github.com/jeremieemk/elis-records-website",
    target: "_blank",
    className: "jsx-1300303396" + " " + "github-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "GitHub")))), _style_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__["default"], __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1300303396",
    __self: this
  }, ".container.jsx-1300303396{position:relative;width:100%;}.footer.jsx-1300303396{bottom:-2;margin-bottom:10rem;margin-top:3rem;text-align:center;color:black;font-family:var(--font1);font-size:var(--standard-font-size);padding-left:2rem;padding-right:2rem;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;}.github-link.jsx-1300303396,.overdub-link.jsx-1300303396{color:var(--color2);}.open-source.jsx-1300303396{margin-bottom:0.5rem;opacity:0.7;}.email-address.jsx-1300303396{margin-bottom:1rem;}@media (min-width:801px){.footer.jsx-1300303396{font-size:1.1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fa0IsQUFHNkIsQUFJUixBQWFVLEFBR0MsQUFJRixBQUlBLFVBdkJDLE9Bd0JwQixDQTVCVyxDQXdCYixDQVBBLENBR2MsUUFuQmQsQ0FJa0IsR0FnQmxCLGFBZm9CLGtCQUNOLFlBQ2EseUJBQ1csb0NBQ2xCLGtCQUNDLG1CQUNJLDZHQUN6QiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gXCIuLi9zdHlsZS9HbG9iYWxTdHlsZXNcIjtcbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tIFwiLi91dGlscy9hbmFseXRpY3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXdpbmRvdy5HQV9JTklUSUFMSVpFRCkge1xuICAgICAgaW5pdEdBKCk7XG4gICAgICB3aW5kb3cuR0FfSU5JVElBTElaRUQgPSB0cnVlO1xuICAgIH1cbiAgICBsb2dQYWdlVmlldygpO1xuICB9LCBbd2luZG93LkdBX0lOSVRJQUxJWkVEXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RWxpcyBSZWNvcmRzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17bGFuZGluZ1RleHR9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJFbGlzIFJlY29yZHNcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD17bGFuZGluZ1RleHR9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIkVsaXMgUmVjb3Jkc1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHA6Ly93d3cuZWxpcy1yZWNvcmRzLmNvbS9cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvaW1nL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvaW1nL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL3ByaW9yaXR5LmNzc1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgY29udGVudD1cImh0dHA6Ly93d3cuZWxpcy1yZWNvcmRzLmNvbS9pbWcvZWxpcy1zb2NpYWxzLWltZy10YWcuanBnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidHdpdHRlcjppbWFnZVwiXG4gICAgICAgICAgY29udGVudD1cImh0dHA6Ly93d3cuZWxpcy1yZWNvcmRzLmNvbS9pbWcvZWxpcy1zb2NpYWxzLWltZy10YWcuanBnXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWwtYWRkcmVzc1wiPm9sYUBlbGlzLXJlY29yZHMuY29tPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3Blbi1zb3VyY2VcIj5cbiAgICAgICAgICAgIGJ1aWx0IGJ5e1wiIFwifVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmR1Yi1saW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm92ZXJkdWIuZGV2L1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIG92ZXJEdWIuZGV2XG4gICAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgICAgd2l0aCBuZXh0LmpzIGFuZCBvcGVuLXNvdXJjZWQgb257XCIgXCJ9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnaXRodWItbGlua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vamVyZW1pZWVtay9lbGlzLXJlY29yZHMtd2Vic2l0ZVwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge0dsb2JhbFN0eWxlc31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIGJvdHRvbTogLTI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTByZW07XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250MSk7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdGFuZGFyZC1mb250LXNpemUpO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5naXRodWItbGluayxcbiAgICAgICAgLm92ZXJkdWItbGluayB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yMik7XG4gICAgICAgIH1cbiAgICAgICAgLm9wZW4tc291cmNlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICB9XG4gICAgICAgIC5lbWFpbC1hZGRyZXNzIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDFweCkge1xuICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/Layout.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/utils/Meta.js":
false

})
//# sourceMappingURL=index.js.b4cec0d440b25622341f.hot-update.js.map