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
  console.log(props.selectedRelease.data["spotify"].url); //   function streamingUrl(streamingService) {
  //     return props.selectedRelease.data[streamingService].url
  //       ? props.selectedRelease.data[streamingService].url
  //       : "";
  //   }

  var linkButtonListProps = [["SPOTIFY", "/img/spotify.png", streamingUrl("spotify")], ["APPLE MUSIC", "/img/apple.png", streamingUrl("apple")], ["DEEZER", "/img/deezer-small.png", streamingUrl("deezer")], ["BANDCAMP", "/img/bandcamp-small.png", streamingUrl("bandcamp")], ["YOUTUBE", "/img/youtube-small.png", streamingUrl("youtube")]];
  return __jsx("div", {
    className: "jsx-1747562398" + " " + "button-link-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, linkButtonListProps.map(function (buttonProps) {
    return __jsx(_LinkButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      streamingService: buttonProps[0],
      streamingServiceLogo: buttonProps[1],
      streamingServiceLink: buttonProps[2],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1747562398",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvTGlua0J1dHRvbkxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJrQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL0xpbmtCdXR0b25MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmtCdXR0b24gZnJvbSBcIi4vTGlua0J1dHRvblwiO1xuXG5mdW5jdGlvbiBMaW5rQnV0dG9uTGlzdChwcm9wcykge1xuICBwcm9wcy5zZWxlY3RlZFJlbGVhc2UuZGF0YSAmJiBjb25zb2xlLmxvZyhwcm9wcy5zZWxlY3RlZFJlbGVhc2UuZGF0YSk7XG4gIGNvbnNvbGUubG9nKHByb3BzLnNlbGVjdGVkUmVsZWFzZS5kYXRhW1wic3BvdGlmeVwiXS51cmwpO1xuICAvLyAgIGZ1bmN0aW9uIHN0cmVhbWluZ1VybChzdHJlYW1pbmdTZXJ2aWNlKSB7XG4gIC8vICAgICByZXR1cm4gcHJvcHMuc2VsZWN0ZWRSZWxlYXNlLmRhdGFbc3RyZWFtaW5nU2VydmljZV0udXJsXG5cbiAgLy8gICAgICAgPyBwcm9wcy5zZWxlY3RlZFJlbGVhc2UuZGF0YVtzdHJlYW1pbmdTZXJ2aWNlXS51cmxcbiAgLy8gICAgICAgOiBcIlwiO1xuICAvLyAgIH1cbiAgY29uc3QgbGlua0J1dHRvbkxpc3RQcm9wcyA9IFtcbiAgICBbXCJTUE9USUZZXCIsIFwiL2ltZy9zcG90aWZ5LnBuZ1wiLCBzdHJlYW1pbmdVcmwoXCJzcG90aWZ5XCIpXSxcbiAgICBbXCJBUFBMRSBNVVNJQ1wiLCBcIi9pbWcvYXBwbGUucG5nXCIsIHN0cmVhbWluZ1VybChcImFwcGxlXCIpXSxcbiAgICBbXCJERUVaRVJcIiwgXCIvaW1nL2RlZXplci1zbWFsbC5wbmdcIiwgc3RyZWFtaW5nVXJsKFwiZGVlemVyXCIpXSxcbiAgICBbXCJCQU5EQ0FNUFwiLCBcIi9pbWcvYmFuZGNhbXAtc21hbGwucG5nXCIsIHN0cmVhbWluZ1VybChcImJhbmRjYW1wXCIpXSxcbiAgICBbXCJZT1VUVUJFXCIsIFwiL2ltZy95b3V0dWJlLXNtYWxsLnBuZ1wiLCBzdHJlYW1pbmdVcmwoXCJ5b3V0dWJlXCIpXVxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWxpbmstY29udGFpbmVyXCI+XG4gICAgICB7bGlua0J1dHRvbkxpc3RQcm9wcy5tYXAoYnV0dG9uUHJvcHMgPT4gKFxuICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgIHN0cmVhbWluZ1NlcnZpY2U9e2J1dHRvblByb3BzWzBdfVxuICAgICAgICAgIHN0cmVhbWluZ1NlcnZpY2VMb2dvPXtidXR0b25Qcm9wc1sxXX1cbiAgICAgICAgICBzdHJlYW1pbmdTZXJ2aWNlTGluaz17YnV0dG9uUHJvcHNbMl19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua0J1dHRvbkxpc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/LinkButtonList.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (LinkButtonList);

/***/ })

})
//# sourceMappingURL=[releaseName].js.fdfe80e4c31293e8e855.hot-update.js.map