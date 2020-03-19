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
  function getStreamingUrl(streamingService) {
    return props.selectedRelease.data[streamingService] ? props.selectedRelease.data[streamingService].url : null;
  }

  var buttonProps = [["SPOTIFY", "/img/spotify.png", getStreamingUrl("spotify")], ["APPLE MUSIC", "/img/apple.png", getStreamingUrl("apple")], ["DEEZER", "/img/deezer-small.png", getStreamingUrl("deezer")], ["BANDCAMP", "/img/bandcamp-small.png", getStreamingUrl("bandcamp")], ["YOUTUBE", "/img/youtube-small.png", getStreamingUrl("youtube")]];
  return __jsx("div", {
    className: "jsx-1747562398" + " " + "button-link-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, buttonProps.map(function (buttonProps) {
    return __jsx(_LinkButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      streamingService: buttonProps[0],
      streamingServiceLogo: buttonProps[1],
      streamingServiceLink: buttonProps[2],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1747562398",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvTGlua0J1dHRvbkxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL0xpbmtCdXR0b25MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmtCdXR0b24gZnJvbSBcIi4vTGlua0J1dHRvblwiO1xuXG5mdW5jdGlvbiBMaW5rQnV0dG9uTGlzdChwcm9wcykge1xuICBmdW5jdGlvbiBnZXRTdHJlYW1pbmdVcmwoc3RyZWFtaW5nU2VydmljZSkge1xuICAgIHJldHVybiBwcm9wcy5zZWxlY3RlZFJlbGVhc2UuZGF0YVtzdHJlYW1pbmdTZXJ2aWNlXVxuICAgICAgPyBwcm9wcy5zZWxlY3RlZFJlbGVhc2UuZGF0YVtzdHJlYW1pbmdTZXJ2aWNlXS51cmxcbiAgICAgIDogbnVsbDtcbiAgfVxuICBjb25zdCBidXR0b25Qcm9wcyA9IFtcbiAgICBbXCJTUE9USUZZXCIsIFwiL2ltZy9zcG90aWZ5LnBuZ1wiLCBnZXRTdHJlYW1pbmdVcmwoXCJzcG90aWZ5XCIpXSxcbiAgICBbXCJBUFBMRSBNVVNJQ1wiLCBcIi9pbWcvYXBwbGUucG5nXCIsIGdldFN0cmVhbWluZ1VybChcImFwcGxlXCIpXSxcbiAgICBbXCJERUVaRVJcIiwgXCIvaW1nL2RlZXplci1zbWFsbC5wbmdcIiwgZ2V0U3RyZWFtaW5nVXJsKFwiZGVlemVyXCIpXSxcbiAgICBbXCJCQU5EQ0FNUFwiLCBcIi9pbWcvYmFuZGNhbXAtc21hbGwucG5nXCIsIGdldFN0cmVhbWluZ1VybChcImJhbmRjYW1wXCIpXSxcbiAgICBbXCJZT1VUVUJFXCIsIFwiL2ltZy95b3V0dWJlLXNtYWxsLnBuZ1wiLCBnZXRTdHJlYW1pbmdVcmwoXCJ5b3V0dWJlXCIpXVxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWxpbmstY29udGFpbmVyXCI+XG4gICAgICB7YnV0dG9uUHJvcHMubWFwKGJ1dHRvblByb3BzID0+IChcbiAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICBzdHJlYW1pbmdTZXJ2aWNlPXtidXR0b25Qcm9wc1swXX1cbiAgICAgICAgICBzdHJlYW1pbmdTZXJ2aWNlTG9nbz17YnV0dG9uUHJvcHNbMV19XG4gICAgICAgICAgc3RyZWFtaW5nU2VydmljZUxpbms9e2J1dHRvblByb3BzWzJdfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtCdXR0b25MaXN0O1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/LinkButtonList.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (LinkButtonList);

/***/ })

})
//# sourceMappingURL=[releaseName].js.4fe5aca71eb197589fc9.hot-update.js.map