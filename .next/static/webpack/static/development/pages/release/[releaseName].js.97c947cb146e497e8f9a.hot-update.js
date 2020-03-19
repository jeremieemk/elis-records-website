webpackHotUpdate("static/development/pages/release/[releaseName].js",{

/***/ "./components/LinkButton.js":
/*!**********************************!*\
  !*** ./components/LinkButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeremie/web/33_elis/components/LinkButton.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function LinkButton() {
  return __jsx("div", {
    className: "jsx-3724696610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-3724696610" + " " + "button-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Hello world"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3724696610",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvTGlua0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzMzX2VsaXMvY29tcG9uZW50cy9MaW5rQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTGlua0J1dHRvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tbGlua1wiPkhlbGxvIHdvcmxkPC9idXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5idXR0b24tbGluayB7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua0J1dHRvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/LinkButton.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (LinkButton);

/***/ }),

/***/ "./pages/release/[releaseName]/index.js":
/*!**********************************************!*\
  !*** ./pages/release/[releaseName]/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Loader */ "./components/Loader.js");
/* harmony import */ var _components_LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/LinkButton */ "./components/LinkButton.js");
var _jsxFileName = "/Users/jeremie/web/33_elis/pages/release/[releaseName]/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Release(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedRelease = _useState[0],
      setSelectedRelease = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var releaseName = router.query.releaseName;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    props.releases && props.releases.map(function (release) {
      if (release.slugs.includes(releaseName)) {
        setSelectedRelease(release);
      }
    });
  }, [props]);
  return __jsx("div", {
    className: "main-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, !selectedRelease ? __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }) : __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1358114345" + " " + "release-page-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    src: "/img/logo-simple.jpg",
    alt: "logo",
    className: "jsx-1358114345" + " " + "release-page-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1358114345",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("img", {
    src: selectedRelease.data.cover.url.slice(0, -21),
    alt: "release-cover",
    className: "jsx-1358114345" + " " + "release-page-cover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1358114345" + " " + "release-page-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1358114345" + " " + "release-artist-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, selectedRelease.data.artist[0].text), __jsx("div", {
    className: "jsx-1358114345" + " " + "release-song-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, selectedRelease.data.title[0].text), __jsx(_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1358114345",
    __self: this
  }, ".release-page-logo.jsx-1358114345{height:2rem;width:auto;margin-bottom:1rem;margin-top:1rem;}.main-container.jsx-1358114345{height:100vh;width:100%;}.release-page-container.jsx-1358114345{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:var(--font1);text-transform:uppercase;line-height:1.2rem;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;padding-left:2rem;padding-right:2rem;text-align:center;margin-bottom:20rem;}.release-page-cover.jsx-1358114345{width:100%;}.release-page-details.jsx-1358114345{text-align:center;}.release-artist-name.jsx-1358114345{margin-top:1rem;font-size:1.2rem;}.release-song-title.jsx-1358114345{margin-top:0.3rem;font-size:0.9rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL3BhZ2VzL3JlbGVhc2UvW3JlbGVhc2VOYW1lXS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRHdCLEFBRzZCLEFBTUMsQUFJQSxBQWVGLEFBR08sQUFHRixBQUlFLFdBVHBCLENBekJhLENBTUEsR0F5Qk0sRUFIbkIsQUFPbUIsS0FsQ0UsQ0FNckIsU0F5QkEsRUFJQSxPQWxDa0IsZ0JBQ2xCLGdCQU93Qiw4RUFDSCw2RkFDSSxtR0FDRSx5QkFDQSx5QkFDTixtQkFDSSw2R0FDTCxrQkFDQyxtQkFDRCxrQkFDRSxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzMzX2VsaXMvcGFnZXMvcmVsZWFzZS9bcmVsZWFzZU5hbWVdL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBMaW5rQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xpbmtCdXR0b25cIjtcblxuZnVuY3Rpb24gUmVsZWFzZShwcm9wcykge1xuICBjb25zdCBbc2VsZWN0ZWRSZWxlYXNlLCBzZXRTZWxlY3RlZFJlbGVhc2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHJlbGVhc2VOYW1lIH0gPSByb3V0ZXIucXVlcnk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJvcHMucmVsZWFzZXMgJiZcbiAgICAgIHByb3BzLnJlbGVhc2VzLm1hcChmdW5jdGlvbihyZWxlYXNlKSB7XG4gICAgICAgIGlmIChyZWxlYXNlLnNsdWdzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKSkge1xuICAgICAgICAgIHNldFNlbGVjdGVkUmVsZWFzZShyZWxlYXNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sIFtwcm9wc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgeyFzZWxlY3RlZFJlbGVhc2UgPyAoXG4gICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGVhc2UtcGFnZS1sb2dvXCJcbiAgICAgICAgICAgICAgc3JjPVwiL2ltZy9sb2dvLXNpbXBsZS5qcGdcIlxuICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsZWFzZS1wYWdlLWNvdmVyXCJcbiAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkUmVsZWFzZS5kYXRhLmNvdmVyLnVybC5zbGljZSgwLCAtMjEpfVxuICAgICAgICAgICAgICAgIGFsdD1cInJlbGVhc2UtY292ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtcGFnZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLWFydGlzdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRSZWxlYXNlLmRhdGEuYXJ0aXN0WzBdLnRleHR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLXNvbmctdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFJlbGVhc2UuZGF0YS50aXRsZVswXS50ZXh0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnJlbGVhc2UtcGFnZS1sb2dvIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucmVsZWFzZS1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQxKTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcmVtO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnJlbGVhc2UtcGFnZS1jb3ZlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJlbGVhc2UtcGFnZS1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJlbGVhc2UtYXJ0aXN0LW5hbWUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJlbGVhc2Utc29uZy10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVsZWFzZTtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/pages/release/[releaseName]/index.js */"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Release);

/***/ })

})
//# sourceMappingURL=[releaseName].js.97c947cb146e497e8f9a.hot-update.js.map