webpackHotUpdate("static/development/pages/release/[releaseName].js",{

/***/ "./components/LinkButtonList.js":
/*!**************************************!*\
  !*** ./components/LinkButtonList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkButton */ "./components/LinkButton.js");
var _jsxFileName = "/Users/jeremie/web/33_elis/components/LinkButtonList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function LinkButtonList(props) {
  var linkButtonListProps = [["SPOTIFY", "/img/spotify.png", props.selectedRelease.data.spotify], ["APPLE MUSIC", "/img/apple.png", props.selectedRelease.data.apple], ["DEEZER", "/img/deezer-small.png", props.selectedRelease.data.deezer], ["BANDCAMP", "/img/bandcamp-small.png", props.selectedRelease.data["buy-link"]], ["YOUTUBE", "/img/youtube-small.png", props.selectedRelease.data.youtube]];
  return __jsx("div", {
    className: "jsx-1747562398" + " " + "button-link-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, linkButtonListProps.map(function (buttonProps) {
    return __jsx(_LinkButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      streamingService: buttonProps[0],
      streamingServiceLogo: buttonProps[1],
      selectedRelease: props.selectedRelease,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1747562398",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvTGlua0J1dHRvbkxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJrQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL0xpbmtCdXR0b25MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmtCdXR0b24gZnJvbSBcIi4vTGlua0J1dHRvblwiO1xuXG5mdW5jdGlvbiBMaW5rQnV0dG9uTGlzdChwcm9wcykge1xuICBjb25zdCBsaW5rQnV0dG9uTGlzdFByb3BzID0gW1xuICAgIFtcIlNQT1RJRllcIiwgXCIvaW1nL3Nwb3RpZnkucG5nXCIsIHByb3BzLnNlbGVjdGVkUmVsZWFzZS5kYXRhLnNwb3RpZnldLFxuICAgIFtcIkFQUExFIE1VU0lDXCIsIFwiL2ltZy9hcHBsZS5wbmdcIiwgcHJvcHMuc2VsZWN0ZWRSZWxlYXNlLmRhdGEuYXBwbGVdLFxuICAgIFtcIkRFRVpFUlwiLCBcIi9pbWcvZGVlemVyLXNtYWxsLnBuZ1wiLCBwcm9wcy5zZWxlY3RlZFJlbGVhc2UuZGF0YS5kZWV6ZXJdLFxuICAgIFtcbiAgICAgIFwiQkFORENBTVBcIixcbiAgICAgIFwiL2ltZy9iYW5kY2FtcC1zbWFsbC5wbmdcIixcbiAgICAgIHByb3BzLnNlbGVjdGVkUmVsZWFzZS5kYXRhW1wiYnV5LWxpbmtcIl1cbiAgICBdLFxuICAgIFtcIllPVVRVQkVcIiwgXCIvaW1nL3lvdXR1YmUtc21hbGwucG5nXCIsIHByb3BzLnNlbGVjdGVkUmVsZWFzZS5kYXRhLnlvdXR1YmVdXG4gIF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tbGluay1jb250YWluZXJcIj5cbiAgICAgIHtsaW5rQnV0dG9uTGlzdFByb3BzLm1hcChidXR0b25Qcm9wcyA9PiAoXG4gICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgc3RyZWFtaW5nU2VydmljZT17YnV0dG9uUHJvcHNbMF19XG4gICAgICAgICAgc3RyZWFtaW5nU2VydmljZUxvZ289e2J1dHRvblByb3BzWzFdfVxuICAgICAgICAgIHNlbGVjdGVkUmVsZWFzZT17cHJvcHMuc2VsZWN0ZWRSZWxlYXNlfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtCdXR0b25MaXN0O1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/LinkButtonList.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (LinkButtonList);

/***/ })

})
//# sourceMappingURL=[releaseName].js.b89856e851c81f3c87ec.hot-update.js.map