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
    className: "jsx-3368318727" + " " + "release-page-container",
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
    className: "jsx-3368318727" + " " + "release-page-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3368318727",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    href: selectedRelease.data.spotify.url,
    target: "_blank",
    className: "jsx-3368318727",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("img", {
    src: selectedRelease.data.cover.url.slice(0, -21),
    alt: "release-cover",
    className: "jsx-3368318727" + " " + "release-page-cover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3368318727" + " " + "release-page-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3368318727" + " " + "release-artist-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, selectedRelease.data.artist[0].text), __jsx("div", {
    className: "jsx-3368318727" + " " + "release-song-title",
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
    id: "3368318727",
    __self: this
  }, ".release-page-logo.jsx-3368318727{height:3rem;width:auto;margin-bottom:1rem;margin-top:1rem;cursor:pointer;}.release-page-container.jsx-3368318727{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:var(--font1);text-transform:uppercase;line-height:1.2rem;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;padding-left:3rem;padding-right:3rem;text-align:center;margin-bottom:2rem;}.release-page-cover.jsx-3368318727{width:100%;}.release-page-details.jsx-3368318727{text-align:center;margin-bottom:1.5rem;}.release-artist-name.jsx-3368318727{margin-top:1.5rem;margin-bottom:0.5rem;font-size:1.2rem;}.release-song-title.jsx-3368318727{margin-top:0.3rem;font-size:0.7rem;}@media (min-width:801px){.release-page-container.jsx-3368318727{padding-left:37%;padding-right:37%;}.release-page-logo.jsx-3368318727{height:5rem;margin-bottom:2rem;margin-top:2rem;}.release-artist-name.jsx-3368318727{font-size:1.7rem;}.release-song-title.jsx-3368318727{margin-top:1rem;font-size:1.2rem;}.release-page-details.jsx-3368318727{margin:3rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL3BhZ2VzL3JlbGVhc2UvW3JlbGVhc2VOYW1lXS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRHdCLEFBRzZCLEFBUUMsQUFlRixBQUdPLEFBSUEsQUFLQSxBQUtDLEFBSUwsQUFLSyxBQUdELEFBSUosV0FoQ2hCLENBdkJhLEFBNENVLEFBWXJCLElBSm1CLENBWkMsQUFTcEIsQ0F2QnFCLEFBSUEsQUFLSixLQWxDRSxRQTRDRCxFQVFsQixFQWpCRixBQUtFLElBZEYsQUFJbUIsR0E3QkQsS0E0Q2hCLFNBZEYsRUE3QmlCLGVBQ2pCLENBSXdCLDhFQUNILDZGQUNJLG1HQUNFLHlCQUNBLHlCQUNOLG1CQUNJLDZHQUNMLGtCQUNDLG1CQUNELGtCQUNDLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9wYWdlcy9yZWxlYXNlL1tyZWxlYXNlTmFtZV0vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xvYWRlclwiO1xuaW1wb3J0IExpbmtCdXR0b25MaXN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xpbmtCdXR0b25MaXN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIFJlbGVhc2UocHJvcHMpIHtcbiAgY29uc3QgW3NlbGVjdGVkUmVsZWFzZSwgc2V0U2VsZWN0ZWRSZWxlYXNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyByZWxlYXNlTmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLnJlbGVhc2VzICYmXG4gICAgICBwcm9wcy5yZWxlYXNlcy5tYXAoZnVuY3Rpb24ocmVsZWFzZSkge1xuICAgICAgICBpZiAocmVsZWFzZS5zbHVncy5pbmNsdWRlcyhyZWxlYXNlTmFtZSkpIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZFJlbGVhc2UobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LCBbcHJvcHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgIHshc2VsZWN0ZWRSZWxlYXNlID8gKFxuICAgICAgICA8TG9hZGVyIHNpemU9XCI4MFwiIC8+XG4gICAgICApIDogKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZWFzZS1wYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGVhc2UtcGFnZS1sb2dvXCJcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2xvZ28uanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3NlbGVjdGVkUmVsZWFzZS5kYXRhLnNwb3RpZnkudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLXBhZ2UtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZFJlbGVhc2UuZGF0YS5jb3Zlci51cmwuc2xpY2UoMCwgLTIxKX1cbiAgICAgICAgICAgICAgICAgIGFsdD1cInJlbGVhc2UtY292ZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtcGFnZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLWFydGlzdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRSZWxlYXNlLmRhdGEuYXJ0aXN0WzBdLnRleHR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLXNvbmctdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFJlbGVhc2UuZGF0YS50aXRsZVswXS50ZXh0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPExpbmtCdXR0b25MaXN0IHNlbGVjdGVkUmVsZWFzZT17c2VsZWN0ZWRSZWxlYXNlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnJlbGVhc2UtcGFnZS1sb2dvIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5yZWxlYXNlLXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udDEpO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5yZWxlYXNlLXBhZ2UtY292ZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yZWxlYXNlLXBhZ2UtZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucmVsZWFzZS1hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucmVsZWFzZS1zb25nLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMXB4KSB7XG4gICAgICAgICAgICAgICAgLnJlbGVhc2UtcGFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNyU7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNyU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZWxlYXNlLXBhZ2UtbG9nbyB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlbGVhc2UtYXJ0aXN0LW5hbWUge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZWxlYXNlLXNvbmctdGl0bGUge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVsZWFzZS1wYWdlLWRldGFpbHMge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGVhc2U7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/pages/release/[releaseName]/index.js */"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Release);

/***/ })

})
//# sourceMappingURL=[releaseName].js.77ac1d1d0d55a23c3c70.hot-update.js.map