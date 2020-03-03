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

var _jsxFileName = "/Users/jeremie/web/33_elis/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      releases = _useState[0],
      setReleasesData = _useState[1];

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
                console.log(response);
                setReleasesData(response.results);
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
    className: "jsx-272831238" + " " + "main-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_LandingText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_components_ReleaseEntry__WEBPACK_IMPORTED_MODULE_5__["default"], {
    releases: releases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "272831238",
    __self: this
  }, "@media (min-width:801px){.main-container.jsx-272831238{padding-left:25%;padding-right:25%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFJOEIsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBMYW5kaW5nVGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYW5kaW5nVGV4dFwiO1xuaW1wb3J0IFJlbGVhc2VFbnRyeSBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWxlYXNlRW50cnlcIjtcbmltcG9ydCBQcmlzbWljIGZyb20gXCJwcmlzbWljLWphdmFzY3JpcHRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFtyZWxlYXNlcywgc2V0UmVsZWFzZXNEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9lbGlzLXJlY29yZHMucHJpc21pYy5pby9hcGkvdjJcIjtcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSBcIlwiO1xuICBjb25zdCBDbGllbnQgPSBQcmlzbWljLmNsaWVudChhcGlFbmRwb2ludCwgeyBhY2Nlc3NUb2tlbiB9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IENsaWVudC5xdWVyeShcbiAgICAgICAgUHJpc21pYy5QcmVkaWNhdGVzLmF0KFwiZG9jdW1lbnQudHlwZVwiLCBcInJlbGVhc2VcIiksXG4gICAgICAgIHsgb3JkZXJpbmdzOiBcIltteS5yZWxlYXNlLnJlbGVhc2UtZGF0ZSBkZXNjXVwiIH1cbiAgICAgICk7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBzZXRSZWxlYXNlc0RhdGEocmVzcG9uc2UucmVzdWx0cyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPExhbmRpbmdUZXh0IC8+XG4gICAgICAgIDxSZWxlYXNlRW50cnkgcmVsZWFzZXM9e3JlbGVhc2VzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDFweCkge1xuICAgICAgICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1JTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.0c8de01d987dcdcdb741.hot-update.js.map