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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      imageIsLoaded = _useState2[0],
      setImageIsLoaded = _useState2[1];

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
    style: {
      height: "100vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, !selectedRelease ? __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }) : __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2257402441" + " " + "release-page-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("img", {
    src: "/img/logo.jpg",
    alt: "logo",
    onLoad: setImageIsLoaded(true),
    className: "jsx-2257402441" + " " + "release-page-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2257402441",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("a", {
    href: selectedRelease.data.spotify.url,
    target: "_blank",
    className: "jsx-2257402441",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    src: selectedRelease.data.cover.url.slice(0, -21),
    alt: "release-cover",
    className: "jsx-2257402441" + " " + "release-page-cover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2257402441" + " " + "release-page-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2257402441" + " " + "release-artist-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, selectedRelease.data.artist[0].text), __jsx("div", {
    className: "jsx-2257402441" + " " + "release-song-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, selectedRelease.data.title[0].text)), __jsx(_components_LinkButtonList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedRelease: selectedRelease,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2257402441",
    __self: this
  }, ".release-page-logo.jsx-2257402441{height:3rem;width:auto;margin-bottom:1rem;margin-top:1rem;cursor:pointer;}.release-page-container.jsx-2257402441{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:var(--font1);text-transform:uppercase;line-height:1.2rem;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;padding-left:3rem;padding-right:3rem;text-align:center;margin-bottom:2rem;}.release-page-cover.jsx-2257402441{width:100%;}.release-page-details.jsx-2257402441{text-align:center;margin-bottom:1.5rem;}.release-artist-name.jsx-2257402441{margin-top:1.5rem;margin-bottom:0.5rem;font-size:1.2rem;}.release-song-title.jsx-2257402441{margin-top:0.3rem;font-size:0.7rem;}@media (min-width:801px){.release-page-container.jsx-2257402441{padding-left:37%;padding-right:37%;}.release-page-logo.jsx-2257402441{height:5rem;margin-bottom:2rem;margin-top:2rem;}.release-artist-name.jsx-2257402441{font-size:1.7rem;}.release-song-title.jsx-2257402441{margin-top:1rem;font-size:1.2rem;}.release-page-details.jsx-2257402441{margin:3rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL3BhZ2VzL3JlbGVhc2UvW3JlbGVhc2VOYW1lXS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RHdCLEFBRzZCLEFBT0MsQUFlRixBQUdPLEFBSUEsQUFLQSxBQUtDLEFBSUwsQUFLSyxBQUdELEFBSUosV0FoQ2hCLENBdEJhLEFBMkNVLEFBWXJCLElBSm1CLENBWkMsQUFTcEIsQ0F2QnFCLEFBSUEsQUFLSixLQWpDRSxRQTJDRCxFQVFsQixFQWpCRixBQUtFLElBZEYsQUFJbUIsR0E1QkQsS0EyQ2hCLFNBZEYsRUE1QmlCLGVBQ2pCLENBR3dCLDhFQUNILDZGQUNJLG1HQUNFLHlCQUNBLHlCQUNOLG1CQUNJLDZHQUNMLGtCQUNDLG1CQUNELGtCQUNDLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9wYWdlcy9yZWxlYXNlL1tyZWxlYXNlTmFtZV0vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xvYWRlclwiO1xuaW1wb3J0IExpbmtCdXR0b25MaXN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xpbmtCdXR0b25MaXN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIFJlbGVhc2UocHJvcHMpIHtcbiAgY29uc3QgW3NlbGVjdGVkUmVsZWFzZSwgc2V0U2VsZWN0ZWRSZWxlYXNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaW1hZ2VJc0xvYWRlZCwgc2V0SW1hZ2VJc0xvYWRlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcmVsZWFzZU5hbWUgfSA9IHJvdXRlci5xdWVyeTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9wcy5yZWxlYXNlcyAmJlxuICAgICAgcHJvcHMucmVsZWFzZXMubWFwKGZ1bmN0aW9uKHJlbGVhc2UpIHtcbiAgICAgICAgaWYgKHJlbGVhc2Uuc2x1Z3MuaW5jbHVkZXMocmVsZWFzZU5hbWUpKSB7XG4gICAgICAgICAgc2V0U2VsZWN0ZWRSZWxlYXNlKHJlbGVhc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSwgW3Byb3BzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIgfX0+XG4gICAgICB7IXNlbGVjdGVkUmVsZWFzZSA/IChcbiAgICAgICAgPExvYWRlciBzaXplPVwiODBcIiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtcGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLXBhZ2UtbG9nb1wiXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9sb2dvLmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgICAgICAgb25Mb2FkPXtzZXRJbWFnZUlzTG9hZGVkKHRydWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17c2VsZWN0ZWRSZWxlYXNlLmRhdGEuc3BvdGlmeS51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGVhc2UtcGFnZS1jb3ZlclwiXG4gICAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkUmVsZWFzZS5kYXRhLmNvdmVyLnVybC5zbGljZSgwLCAtMjEpfVxuICAgICAgICAgICAgICAgICAgYWx0PVwicmVsZWFzZS1jb3ZlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZWFzZS1wYWdlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtYXJ0aXN0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFJlbGVhc2UuZGF0YS5hcnRpc3RbMF0udGV4dH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2Utc29uZy10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUmVsZWFzZS5kYXRhLnRpdGxlWzBdLnRleHR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8TGlua0J1dHRvbkxpc3Qgc2VsZWN0ZWRSZWxlYXNlPXtzZWxlY3RlZFJlbGVhc2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAucmVsZWFzZS1wYWdlLWxvZ28ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yZWxlYXNlLXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udDEpO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5yZWxlYXNlLXBhZ2UtY292ZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yZWxlYXNlLXBhZ2UtZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucmVsZWFzZS1hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucmVsZWFzZS1zb25nLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMXB4KSB7XG4gICAgICAgICAgICAgICAgLnJlbGVhc2UtcGFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNyU7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNyU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZWxlYXNlLXBhZ2UtbG9nbyB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlbGVhc2UtYXJ0aXN0LW5hbWUge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZWxlYXNlLXNvbmctdGl0bGUge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVsZWFzZS1wYWdlLWRldGFpbHMge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGVhc2U7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/pages/release/[releaseName]/index.js */"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Release);

/***/ })

})
//# sourceMappingURL=[releaseName].js.174979518df7783519ae.hot-update.js.map