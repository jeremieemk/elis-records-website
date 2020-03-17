webpackHotUpdate("static/development/pages/release/[releaseName].js",{

/***/ "./pages/release/[releaseName]/index.js":
/*!**********************************************!*\
  !*** ./pages/release/[releaseName]/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeremie/web/33_elis/pages/release/[releaseName]/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Release(props) {
  console.log(props.releases);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var releaseName = router.query.releaseName;
  props.releases && props.releases.map(function (release) {
    return console.log(release.slugs);
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Release: ", releaseName));
}

/* harmony default export */ __webpack_exports__["default"] = (Release);

/***/ })

})
//# sourceMappingURL=[releaseName].js.dc460b155ea3d004073f.hot-update.js.map