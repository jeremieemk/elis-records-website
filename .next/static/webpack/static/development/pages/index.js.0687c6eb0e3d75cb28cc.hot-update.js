webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_LandingText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LandingText */ "./components/LandingText.js");
/* harmony import */ var _components_ReleaseEntry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ReleaseEntry */ "./components/ReleaseEntry.js");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismic-javascript */ "./node_modules/prismic-javascript/dist/prismic-javascript.min.js");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");

var _jsxFileName = "/Users/jeremie/web/33_elis/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      releases = _useState[0],
      setReleasesData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      dataIsLoaded = _useState2[0],
      setDataIsLoaded = _useState2[1];

  var apiEndpoint = "https://elis-records.prismic.io/api/v2";
  var accessToken = "";
  var Client = prismic_javascript__WEBPACK_IMPORTED_MODULE_6___default.a.client(apiEndpoint, {
    accessToken: accessToken
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchData = function fetchData() {
      var response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Client.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_6___default.a.Predicates.at("document.type", "release"), {
                orderings: "[my.release.release-date desc]"
              }));

            case 2:
              response = _context.sent;

              if (response) {
                setReleasesData(response.results);
                setDataIsLoaded(true);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    fetchData();
  }, []);
  return __jsx("div", {
    className: "jsx-2301818340" + " " + "main-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, dataIsLoaded ? __jsx("div", {
    className: "jsx-2301818340" + " " + "loaded-site-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_components_LandingText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_components_ReleaseEntry__WEBPACK_IMPORTED_MODULE_5__["default"], {
    releases: releases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))) : __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2301818340",
    __self: this
  }, ".main-container.jsx-2301818340{height:100vh%;}.loaded-site-container.jsx-2301818340{-webkit-animation:fadeIn-jsx-2301818340 1s;animation:fadeIn-jsx-2301818340 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}@-webkit-keyframes fadeIn-jsx-2301818340{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-2301818340{from{opacity:0;}to{opacity:1;}}@media (min-width:801px){.main-container.jsx-2301818340{padding-left:25%;padding-right:25%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDa0IsQUFHeUIsQUFHTSxBQUtSLEFBSUEsQUFNTyxVQVRuQixBQUlBLElBWkYsR0FrQnNCLGtCQUNwQiwyQ0FoQjZCLGtFQUMvQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTGFuZGluZ1RleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGFuZGluZ1RleHRcIjtcbmltcG9ydCBSZWxlYXNlRW50cnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVsZWFzZUVudHJ5XCI7XG5pbXBvcnQgUHJpc21pYyBmcm9tIFwicHJpc21pYy1qYXZhc2NyaXB0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRlclwiO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW3JlbGVhc2VzLCBzZXRSZWxlYXNlc0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkYXRhSXNMb2FkZWQsIHNldERhdGFJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGFwaUVuZHBvaW50ID0gXCJodHRwczovL2VsaXMtcmVjb3Jkcy5wcmlzbWljLmlvL2FwaS92MlwiO1xuICBjb25zdCBhY2Nlc3NUb2tlbiA9IFwiXCI7XG4gIGNvbnN0IENsaWVudCA9IFByaXNtaWMuY2xpZW50KGFwaUVuZHBvaW50LCB7IGFjY2Vzc1Rva2VuIH0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQ2xpZW50LnF1ZXJ5KFxuICAgICAgICBQcmlzbWljLlByZWRpY2F0ZXMuYXQoXCJkb2N1bWVudC50eXBlXCIsIFwicmVsZWFzZVwiKSxcbiAgICAgICAgeyBvcmRlcmluZ3M6IFwiW215LnJlbGVhc2UucmVsZWFzZS1kYXRlIGRlc2NdXCIgfVxuICAgICAgKTtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICBzZXRSZWxlYXNlc0RhdGEocmVzcG9uc2UucmVzdWx0cyk7XG4gICAgICAgIHNldERhdGFJc0xvYWRlZCh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICB7ZGF0YUlzTG9hZGVkID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlZC1zaXRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8TGFuZGluZ1RleHQgLz5cbiAgICAgICAgICAgIDxSZWxlYXNlRW50cnkgcmVsZWFzZXM9e3JlbGVhc2VzfSAvPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aCU7XG4gICAgICAgIH1cbiAgICAgICAgLmxvYWRlZC1zaXRlLWNvbnRhaW5lciB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0byB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDFweCkge1xuICAgICAgICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1JTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.0687c6eb0e3d75cb28cc.hot-update.js.map