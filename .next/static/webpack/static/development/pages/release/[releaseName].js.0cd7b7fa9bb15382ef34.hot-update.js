webpackHotUpdate("static/development/pages/release/[releaseName].js",{

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
/* harmony import */ var _components_LinkButtonList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/LinkButtonList */ "./components/LinkButtonList.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
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
      lineNumber: 22
    },
    __self: this
  }, !selectedRelease ? __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }) : __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1993594511" + " " + "release-page-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("img", {
    src: "/img/logo.jpg",
    alt: "logo",
    className: "jsx-1993594511" + " " + "release-page-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1993594511",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("img", {
    src: selectedRelease.data.cover.url.slice(0, -21),
    alt: "release-cover",
    className: "jsx-1993594511" + " " + "release-page-cover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1993594511" + " " + "release-page-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1993594511" + " " + "release-artist-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, selectedRelease.data.artist[0].text), __jsx("div", {
    className: "jsx-1993594511" + " " + "release-song-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, selectedRelease.data.title[0].text)), __jsx(_components_LinkButtonList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedRelease: selectedRelease,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1993594511",
    __self: this
  }, ".release-page-logo.jsx-1993594511{height:3rem;width:auto;margin-bottom:1rem;margin-top:1rem;}.main-container.jsx-1993594511{height:100vh;width:100%;}.release-page-container.jsx-1993594511{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:var(--font1);text-transform:uppercase;line-height:1.2rem;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;padding-left:3rem;padding-right:3rem;text-align:center;margin-bottom:2rem;}.release-page-cover.jsx-1993594511{width:100%;}.release-page-details.jsx-1993594511{text-align:center;margin-bottom:1.5rem;}.release-artist-name.jsx-1993594511{margin-top:1.5rem;margin-bottom:0.5rem;font-size:1.2rem;}.release-song-title.jsx-1993594511{margin-top:0.3rem;font-size:0.7rem;}@media (min-width:801px){.release-page-container.jsx-1993594511{padding-left:35%;padding-right:35%;}.release-page-logo.jsx-1993594511{height:5rem;margin-bottom:2rem;margin-top:2rem;}.release-artist-name.jsx-1993594511{font-size:1.5rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL3BhZ2VzL3JlbGVhc2UvW3JlbGVhc2VOYW1lXS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRHdCLEFBRzZCLEFBTUMsQUFJQSxBQWVGLEFBR08sQUFJQSxBQUtBLEFBS0MsQUFJTCxBQUtLLFdBekJyQixDQXpCYSxBQThDVSxDQXhDVixJQW9DUyxBQVNwQixDQXZCcUIsQUFJQSxBQUtKLEtBcENFLENBTXJCLE9Bd0NvQixJQVRwQixBQUtFLElBZEYsQUFJbUIsR0EvQkQsS0E4Q2hCLFNBZEYsRUEvQkEsZ0JBT3dCLDhFQUNILDZGQUNJLG1HQUNFLHlCQUNBLHlCQUNOLG1CQUNJLDZHQUNMLGtCQUNDLG1CQUNELGtCQUNDLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9wYWdlcy9yZWxlYXNlL1tyZWxlYXNlTmFtZV0vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xvYWRlclwiO1xuaW1wb3J0IExpbmtCdXR0b25MaXN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xpbmtCdXR0b25MaXN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIFJlbGVhc2UocHJvcHMpIHtcbiAgY29uc3QgW3NlbGVjdGVkUmVsZWFzZSwgc2V0U2VsZWN0ZWRSZWxlYXNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyByZWxlYXNlTmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLnJlbGVhc2VzICYmXG4gICAgICBwcm9wcy5yZWxlYXNlcy5tYXAoZnVuY3Rpb24ocmVsZWFzZSkge1xuICAgICAgICBpZiAocmVsZWFzZS5zbHVncy5pbmNsdWRlcyhyZWxlYXNlTmFtZSkpIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZFJlbGVhc2UocmVsZWFzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LCBbcHJvcHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgIHshc2VsZWN0ZWRSZWxlYXNlID8gKFxuICAgICAgICA8TG9hZGVyIC8+XG4gICAgICApIDogKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZWFzZS1wYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGVhc2UtcGFnZS1sb2dvXCJcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2xvZ28uanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLXBhZ2UtY292ZXJcIlxuICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRSZWxlYXNlLmRhdGEuY292ZXIudXJsLnNsaWNlKDAsIC0yMSl9XG4gICAgICAgICAgICAgICAgYWx0PVwicmVsZWFzZS1jb3ZlclwiXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLXBhZ2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZWFzZS1hcnRpc3QtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUmVsZWFzZS5kYXRhLmFydGlzdFswXS50ZXh0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZWFzZS1zb25nLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRSZWxlYXNlLmRhdGEudGl0bGVbMF0udGV4dH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rQnV0dG9uTGlzdCBzZWxlY3RlZFJlbGVhc2U9e3NlbGVjdGVkUmVsZWFzZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5yZWxlYXNlLXBhZ2UtbG9nbyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJlbGVhc2UtcGFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250MSk7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnJlbGVhc2UtcGFnZS1jb3ZlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJlbGVhc2UtcGFnZS1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yZWxlYXNlLWFydGlzdC1uYW1lIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yZWxlYXNlLXNvbmctdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuM3JlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODAxcHgpIHtcbiAgICAgICAgICAgICAgICAucmVsZWFzZS1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1JTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDM1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlbGVhc2UtcGFnZS1sb2dvIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVsZWFzZS1hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWxlYXNlO1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/pages/release/[releaseName]/index.js */"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Release);

/***/ })

})
//# sourceMappingURL=[releaseName].js.0cd7b7fa9bb15382ef34.hot-update.js.map