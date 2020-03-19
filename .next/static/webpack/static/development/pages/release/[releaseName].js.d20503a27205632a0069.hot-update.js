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
        setSelectedRelease(null);
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
    size: "80",
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
    className: "jsx-3444925059" + " " + "release-page-container",
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
    className: "jsx-3444925059" + " " + "release-page-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3444925059",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    href: selectedRelease.data.spotify.url,
    target: "_blank",
    className: "jsx-3444925059",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("img", {
    src: selectedRelease.data.cover.url.slice(0, -21),
    alt: "release-cover",
    className: "jsx-3444925059" + " " + "release-page-cover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3444925059" + " " + "release-page-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3444925059" + " " + "release-artist-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, selectedRelease.data.artist[0].text), __jsx("div", {
    className: "jsx-3444925059" + " " + "release-song-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, selectedRelease.data.title[0].text)), __jsx(_components_LinkButtonList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedRelease: selectedRelease,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3444925059",
    __self: this
  }, ".main-container.jsx-3444925059{height:100vh;}.release-page-logo.jsx-3444925059{height:3rem;width:auto;margin-bottom:1rem;margin-top:1rem;cursor:pointer;}.release-page-container.jsx-3444925059{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:var(--font1);text-transform:uppercase;line-height:1.2rem;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;padding-left:3rem;padding-right:3rem;text-align:center;margin-bottom:2rem;}.release-page-cover.jsx-3444925059{width:100%;}.release-page-details.jsx-3444925059{text-align:center;margin-bottom:1.5rem;}.release-artist-name.jsx-3444925059{margin-top:1.5rem;margin-bottom:0.5rem;font-size:1.2rem;}.release-song-title.jsx-3444925059{margin-top:0.3rem;font-size:0.7rem;}@media (min-width:801px){.release-page-container.jsx-3444925059{padding-left:37%;padding-right:37%;}.release-page-logo.jsx-3444925059{height:5rem;margin-bottom:2rem;margin-top:2rem;}.release-artist-name.jsx-3444925059{font-size:1.7rem;}.release-song-title.jsx-3444925059{margin-top:1rem;font-size:1.2rem;}.release-page-details.jsx-3444925059{margin:3rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL3BhZ2VzL3JlbGVhc2UvW3JlbGVhc2VOYW1lXS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRHdCLEFBRzhCLEFBR0QsQUFRQyxBQWVGLEFBR08sQUFJQSxBQUtBLEFBS0MsQUFJTCxBQUtLLEFBR0QsQUFJSixXQWhDaEIsQ0F2QmEsQUE0Q1UsQUFZckIsQ0EzREYsR0F1RHFCLENBWkMsQUFTcEIsQ0F2QnFCLEFBSUEsQUFLSixLQWxDRSxRQTRDRCxFQVFsQixFQWpCRixBQUtFLElBZEYsQUFJbUIsR0E3QkQsS0E0Q2hCLFNBZEYsRUE3QmlCLGVBQ2pCLENBSXdCLDhFQUNILDZGQUNJLG1HQUNFLHlCQUNBLHlCQUNOLG1CQUNJLDZHQUNMLGtCQUNDLG1CQUNELGtCQUNDLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9wYWdlcy9yZWxlYXNlL1tyZWxlYXNlTmFtZV0vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xvYWRlclwiO1xuaW1wb3J0IExpbmtCdXR0b25MaXN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xpbmtCdXR0b25MaXN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIFJlbGVhc2UocHJvcHMpIHtcbiAgY29uc3QgW3NlbGVjdGVkUmVsZWFzZSwgc2V0U2VsZWN0ZWRSZWxlYXNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyByZWxlYXNlTmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLnJlbGVhc2VzICYmXG4gICAgICBwcm9wcy5yZWxlYXNlcy5tYXAoZnVuY3Rpb24ocmVsZWFzZSkge1xuICAgICAgICBpZiAocmVsZWFzZS5zbHVncy5pbmNsdWRlcyhyZWxlYXNlTmFtZSkpIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZFJlbGVhc2UobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LCBbcHJvcHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgIHshc2VsZWN0ZWRSZWxlYXNlID8gKFxuICAgICAgICA8TG9hZGVyIHNpemU9XCI4MFwiIC8+XG4gICAgICApIDogKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZWFzZS1wYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGVhc2UtcGFnZS1sb2dvXCJcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2xvZ28uanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3NlbGVjdGVkUmVsZWFzZS5kYXRhLnNwb3RpZnkudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLXBhZ2UtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZFJlbGVhc2UuZGF0YS5jb3Zlci51cmwuc2xpY2UoMCwgLTIxKX1cbiAgICAgICAgICAgICAgICAgIGFsdD1cInJlbGVhc2UtY292ZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtcGFnZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLWFydGlzdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRSZWxlYXNlLmRhdGEuYXJ0aXN0WzBdLnRleHR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLXNvbmctdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFJlbGVhc2UuZGF0YS50aXRsZVswXS50ZXh0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPExpbmtCdXR0b25MaXN0IHNlbGVjdGVkUmVsZWFzZT17c2VsZWN0ZWRSZWxlYXNlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yZWxlYXNlLXBhZ2UtbG9nbyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucmVsZWFzZS1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQxKTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucmVsZWFzZS1wYWdlLWNvdmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucmVsZWFzZS1wYWdlLWRldGFpbHMge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJlbGVhc2UtYXJ0aXN0LW5hbWUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJlbGVhc2Utc29uZy10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDFweCkge1xuICAgICAgICAgICAgICAgIC5yZWxlYXNlLXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzclO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzclO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVsZWFzZS1wYWdlLWxvZ28ge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZWxlYXNlLWFydGlzdC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVsZWFzZS1zb25nLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlbGVhc2UtcGFnZS1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogM3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWxlYXNlO1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/pages/release/[releaseName]/index.js */"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Release);

/***/ })

})
//# sourceMappingURL=[releaseName].js.d20503a27205632a0069.hot-update.js.map