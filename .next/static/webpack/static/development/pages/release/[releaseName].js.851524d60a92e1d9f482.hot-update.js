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
  props.selectedRelease.data && console.log(props.selectedRelease.data);
  var linkButtonListProps = [["SPOTIFY", "/img/spotify.png", props.selectedRelease.data.spotify.url], ["APPLE MUSIC", "/img/apple.png", props.selectedRelease.data.apple.url], ["DEEZER", "/img/deezer-small.png", props.selectedRelease.data.deezer.url], ["BANDCAMP", "/img/bandcamp-small.png", props.selectedRelease.data["buy-link"].url], ["YOUTUBE", "/img/youtube-small.png", props.selectedRelease.data.youtube.url]];
  return __jsx("div", {
    className: "jsx-1747562398" + " " + "button-link-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, linkButtonListProps.map(function (buttonProps) {
    return __jsx(_LinkButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      streamingService: buttonProps[0],
      streamingServiceLogo: buttonProps[1],
      streamingServiceLink: buttonProps[2],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1747562398",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvTGlua0J1dHRvbkxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJrQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL0xpbmtCdXR0b25MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmtCdXR0b24gZnJvbSBcIi4vTGlua0J1dHRvblwiO1xuXG5mdW5jdGlvbiBMaW5rQnV0dG9uTGlzdChwcm9wcykge1xuICBwcm9wcy5zZWxlY3RlZFJlbGVhc2UuZGF0YSAmJiBjb25zb2xlLmxvZyhwcm9wcy5zZWxlY3RlZFJlbGVhc2UuZGF0YSk7XG4gIGNvbnN0IGxpbmtCdXR0b25MaXN0UHJvcHMgPSBbXG4gICAgW1wiU1BPVElGWVwiLCBcIi9pbWcvc3BvdGlmeS5wbmdcIiwgcHJvcHMuc2VsZWN0ZWRSZWxlYXNlLmRhdGEuc3BvdGlmeS51cmxdLFxuICAgIFtcIkFQUExFIE1VU0lDXCIsIFwiL2ltZy9hcHBsZS5wbmdcIiwgcHJvcHMuc2VsZWN0ZWRSZWxlYXNlLmRhdGEuYXBwbGUudXJsXSxcbiAgICBbXCJERUVaRVJcIiwgXCIvaW1nL2RlZXplci1zbWFsbC5wbmdcIiwgcHJvcHMuc2VsZWN0ZWRSZWxlYXNlLmRhdGEuZGVlemVyLnVybF0sXG4gICAgW1xuICAgICAgXCJCQU5EQ0FNUFwiLFxuICAgICAgXCIvaW1nL2JhbmRjYW1wLXNtYWxsLnBuZ1wiLFxuICAgICAgcHJvcHMuc2VsZWN0ZWRSZWxlYXNlLmRhdGFbXCJidXktbGlua1wiXS51cmxcbiAgICBdLFxuICAgIFtcbiAgICAgIFwiWU9VVFVCRVwiLFxuICAgICAgXCIvaW1nL3lvdXR1YmUtc21hbGwucG5nXCIsXG4gICAgICBwcm9wcy5zZWxlY3RlZFJlbGVhc2UuZGF0YS55b3V0dWJlLnVybFxuICAgIF1cbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1saW5rLWNvbnRhaW5lclwiPlxuICAgICAge2xpbmtCdXR0b25MaXN0UHJvcHMubWFwKGJ1dHRvblByb3BzID0+IChcbiAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICBzdHJlYW1pbmdTZXJ2aWNlPXtidXR0b25Qcm9wc1swXX1cbiAgICAgICAgICBzdHJlYW1pbmdTZXJ2aWNlTG9nbz17YnV0dG9uUHJvcHNbMV19XG4gICAgICAgICAgc3RyZWFtaW5nU2VydmljZUxpbms9e2J1dHRvblByb3BzWzJdfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtCdXR0b25MaXN0O1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/LinkButtonList.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (LinkButtonList);

/***/ })

})
//# sourceMappingURL=[releaseName].js.851524d60a92e1d9f482.hot-update.js.map