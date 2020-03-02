webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_LandingText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LandingText */ "./components/LandingText.js");
/* harmony import */ var _components_ReleaseEntry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ReleaseEntry */ "./components/ReleaseEntry.js");
/* harmony import */ var _components_AudioPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AudioPlayer */ "./components/AudioPlayer.js");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismic-javascript */ "./node_modules/prismic-javascript/dist/prismic-javascript.min.js");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/jeremie/web/33_elis/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      releases = _useState[0],
      setReleasesData = _useState[1];

  var apiEndpoint = "https://elis-records.prismic.io/api/v2";
  var accessToken = "";
  var Client = prismic_javascript__WEBPACK_IMPORTED_MODULE_6___default.a.client(apiEndpoint, {
    accessToken: accessToken
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchData = function fetchData() {
      var response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Client.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_6___default.a.Predicates.at("document.type", "release"), {
                orderings: "[my.release.release-date desc]"
              }));

            case 2:
              response = _context.sent;

              if (response) {
                setReleasesData(response.results);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    fetchData();
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_LandingText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_components_ReleaseEntry__WEBPACK_IMPORTED_MODULE_4__["default"], {
    releases: releases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3a460d761e3ea0d2831e.hot-update.js.map