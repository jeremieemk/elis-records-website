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
/* harmony import */ var _text_landingText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text/landingText */ "./components/text/landingText.js");
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
      lineNumber: 17
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Elis Records Homepage"), __jsx("meta", {
    name: "description",
    content: _text_landingText__WEBPACK_IMPORTED_MODULE_6__["default"].replace("&nbsp", ""),
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/img/favicon.ico",
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/priority.css",
    className: "jsx-1300303396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1300303396" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), props.children, __jsx("div", {
    className: "jsx-1300303396" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1300303396" + " " + "email-address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "ola@elis-records.com"), __jsx("div", {
    className: "jsx-1300303396" + " " + "open-source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "built by", " ", __jsx("a", {
    href: "https://www.overdub.dev/",
    target: "_blank",
    className: "jsx-1300303396" + " " + "overdub-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "overDub.dev"), " ", "with next.js and open-sourced on", " ", __jsx("a", {
    href: "https://github.com/jeremieemk/elis-records-website",
    target: "_blank",
    className: "jsx-1300303396" + " " + "github-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "GitHub")))), _style_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__["default"], __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1300303396",
    __self: this
  }, ".container.jsx-1300303396{position:relative;width:100%;}.footer.jsx-1300303396{bottom:-2;margin-bottom:10rem;margin-top:3rem;text-align:center;color:black;font-family:var(--font1);font-size:var(--standard-font-size);padding-left:2rem;padding-right:2rem;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;}.github-link.jsx-1300303396,.overdub-link.jsx-1300303396{color:var(--color2);}.open-source.jsx-1300303396{margin-bottom:0.5rem;opacity:0.7;}.email-address.jsx-1300303396{margin-bottom:1rem;}@media (min-width:801px){.footer.jsx-1300303396{font-size:1.1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEa0IsQUFHNkIsQUFJUixBQWFVLEFBR0MsQUFJRixBQUlBLFVBdkJDLE9Bd0JwQixDQTVCVyxDQXdCYixDQVBBLENBR2MsUUFuQmQsQ0FJa0IsR0FnQmxCLGFBZm9CLGtCQUNOLFlBQ2EseUJBQ1csb0NBQ2xCLGtCQUNDLG1CQUNJLDZHQUN6QiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gXCIuLi9zdHlsZS9HbG9iYWxTdHlsZXNcIjtcbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tIFwiLi91dGlscy9hbmFseXRpY3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGxhbmRpbmdUZXh0IGZyb20gXCIuL3RleHQvbGFuZGluZ1RleHRcIjtcblxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cuR0FfSU5JVElBTElaRUQpIHtcbiAgICAgIGluaXRHQSgpO1xuICAgICAgd2luZG93LkdBX0lOSVRJQUxJWkVEID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nUGFnZVZpZXcoKTtcbiAgfSwgW3dpbmRvdy5HQV9JTklUSUFMSVpFRF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkVsaXMgUmVjb3JkcyBIb21lcGFnZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PXtsYW5kaW5nVGV4dC5yZXBsYWNlKFwiJm5ic3BcIiwgXCJcIil9XG4gICAgICAgID48L21ldGE+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2ltZy9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9wcmlvcml0eS5jc3NcIj48L2xpbms+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsLWFkZHJlc3NcIj5vbGFAZWxpcy1yZWNvcmRzLmNvbTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wZW4tc291cmNlXCI+XG4gICAgICAgICAgICBidWlsdCBieXtcIiBcIn1cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJkdWItbGlua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5vdmVyZHViLmRldi9cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBvdmVyRHViLmRldlxuICAgICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICAgIHdpdGggbmV4dC5qcyBhbmQgb3Blbi1zb3VyY2VkIG9ue1wiIFwifVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2l0aHViLWxpbmtcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2plcmVtaWVlbWsvZWxpcy1yZWNvcmRzLXdlYnNpdGVcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHaXRIdWJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtHbG9iYWxTdHlsZXN9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBib3R0b206IC0yO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udDEpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RhbmRhcmQtZm9udC1zaXplKTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZ2l0aHViLWxpbmssXG4gICAgICAgIC5vdmVyZHViLWxpbmsge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xuICAgICAgICB9XG4gICAgICAgIC5vcGVuLXNvdXJjZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgfVxuICAgICAgICAuZW1haWwtYWRkcmVzcyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODAxcHgpIHtcbiAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/Layout.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.b88fcf045d8d195b3fa3.hot-update.js.map