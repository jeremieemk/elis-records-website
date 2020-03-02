webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ReleaseEntry.js":
/*!************************************!*\
  !*** ./components/ReleaseEntry.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeremie/web/33_elis/components/ReleaseEntry.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ReleaseEntry(props) {
  return props.releases && props.releases.map(function (release) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, release.data.title[0].text);
  }); // <div>
  //   <div className="ReleaseEntry-wrapper">
  //     <img className="josyara" src="/img/josy.jpg" alt="josyara" />
  //     <span className="play-button">
  //       <img className="play" src="/img/play.png" alt="play" />
  //     </span>
  //     <div className="release-details">
  //       <span className="artist-name">JOSYARA & IZEM</span>
  //       <br></br>
  //       <span className="release-name">Iara Correnteza (single)</span>
  //     </div>
  //   </div>
  //   {style}
  // </div>
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "\n    .ReleaseEntry-wrapper {\n      position: relative;\n      font-family: var(--font4);\n    }\n    .josyara {\n      width: 100%;\n    }\n    .play-button {\n    }\n    .play {\n      position: absolute;\n      left: 1rem;\n      bottom: 1rem;\n      width: 5rem;\n      background-color: white;\n      padding: 0.2rem;\n    }\n    .release-details {\n      position: absolute;\n      bottom: 1rem;\n      right: 1rem;\n      text-align: right;\n    }\n    .artist-name {\n      margin-bottom: 0.3rem;\n      font-size: 1.2rem;\n    }\n    .artist-name,\n    .release-name {\n      display: inline-block;\n      background-color: white;\n      padding: 0.4rem;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (ReleaseEntry);

/***/ })

})
//# sourceMappingURL=index.js.e856c8c2b1acd3a5bda5.hot-update.js.map