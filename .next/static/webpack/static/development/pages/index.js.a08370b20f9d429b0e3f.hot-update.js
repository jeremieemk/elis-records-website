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
    className: "jsx-1836412010" + " " + "main-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, dataIsLoaded ? __jsx("div", {
    className: "jsx-1836412010" + " " + "loaded-site-container",
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
    id: "1836412010",
    __self: this
  }, ".loaded-site-container.jsx-1836412010{-webkit-animation:fadeIn-jsx-1836412010 1s;animation:fadeIn-jsx-1836412010 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}@-webkit-keyframes fadeIn-jsx-1836412010{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-1836412010{from{opacity:0;}to{opacity:1;}}@media (min-width:801px){.main-container.jsx-1836412010{padding-left:25%;padding-right:25%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDa0IsQUFHK0IsQUFLUixBQUlBLEFBTU8sVUFUbkIsQUFJQSxPQU1vQixrQkFDcEIsMkNBaEI2QixrRUFDL0IiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzMzX2VsaXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IExhbmRpbmdUZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL0xhbmRpbmdUZXh0XCI7XG5pbXBvcnQgUmVsZWFzZUVudHJ5IGZyb20gXCIuLi9jb21wb25lbnRzL1JlbGVhc2VFbnRyeVwiO1xuaW1wb3J0IFByaXNtaWMgZnJvbSBcInByaXNtaWMtamF2YXNjcmlwdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFtyZWxlYXNlcywgc2V0UmVsZWFzZXNEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZGF0YUlzTG9hZGVkLCBzZXREYXRhSXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9lbGlzLXJlY29yZHMucHJpc21pYy5pby9hcGkvdjJcIjtcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSBcIlwiO1xuICBjb25zdCBDbGllbnQgPSBQcmlzbWljLmNsaWVudChhcGlFbmRwb2ludCwgeyBhY2Nlc3NUb2tlbiB9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IENsaWVudC5xdWVyeShcbiAgICAgICAgUHJpc21pYy5QcmVkaWNhdGVzLmF0KFwiZG9jdW1lbnQudHlwZVwiLCBcInJlbGVhc2VcIiksXG4gICAgICAgIHsgb3JkZXJpbmdzOiBcIltteS5yZWxlYXNlLnJlbGVhc2UtZGF0ZSBkZXNjXVwiIH1cbiAgICAgICk7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgc2V0UmVsZWFzZXNEYXRhKHJlc3BvbnNlLnJlc3VsdHMpO1xuICAgICAgICBzZXREYXRhSXNMb2FkZWQodHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAge2RhdGFJc0xvYWRlZCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZWQtc2l0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPExhbmRpbmdUZXh0IC8+XG4gICAgICAgICAgICA8UmVsZWFzZUVudHJ5IHJlbGVhc2VzPXtyZWxlYXNlc30gLz5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8TG9hZGVyIC8+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubG9hZGVkLXNpdGUtY29udGFpbmVyIHtcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAxcztcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMXB4KSB7XG4gICAgICAgICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjUlO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjUlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a08370b20f9d429b0e3f.hot-update.js.map