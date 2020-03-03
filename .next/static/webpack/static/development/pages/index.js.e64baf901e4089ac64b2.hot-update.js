webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ReleaseEntry.js":
/*!************************************!*\
  !*** ./components/ReleaseEntry.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TracklistAndPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TracklistAndPlayer */ "./components/TracklistAndPlayer.js");


var _jsxFileName = "/Users/jeremie/web/33_elis/components/ReleaseEntry.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



function ReleaseEntry(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      playerDisplayId = _useState[0],
      setPlayerDisplayId = _useState[1];

  function showPlayer(event) {
    setPlayerDisplayId(event.target.getAttribute("data-tag"));
  }

  function renderSection(section) {
    console.log(section);
    return __jsx("div", {
      className: "".concat(section.toString(), "-section"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, section[0] && section.map(function (paragraph) {
      return __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, paragraph.text);
    }));
  }

  return props.releases && props.releases.map(function (release, index) {
    var tracklist = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(release.data.tracks[0]);

    return __jsx("div", {
      className: "jsx-3741588868",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3741588868" + " " + "release-entry-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("img", {
      onClick: showPlayer,
      key: "cover".concat(index),
      src: release.data.cover.url,
      alt: "release-cover",
      "data-tag": index,
      className: "jsx-3741588868" + " " + "release-cover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3741588868" + " " + "release-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("div", {
      key: "artist".concat(index),
      onClick: showPlayer,
      "data-tag": index,
      className: "jsx-3741588868" + " " + "artist-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, release.data.artist[0].text), __jsx("div", {
      key: "title".concat(index),
      onClick: showPlayer,
      "data-tag": index,
      className: "jsx-3741588868" + " " + "release-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("img", {
      src: "/img/play-song.png",
      alt: "mini-play",
      onClick: showPlayer,
      "data-tag": index,
      className: "jsx-3741588868" + " " + "mini-play",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), release.data.title[0].text)), __jsx("div", {
      className: "jsx-3741588868" + " " + "more-info-about-release",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, renderSection(release.data.about), __jsx("div", {
      key: "credits".concat(index),
      className: "jsx-3741588868" + " " + "credits",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, release.data.credits[0] && release.data.credits.map(function (paragraph) {
      return __jsx("p", {
        className: "jsx-3741588868",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, paragraph.text);
    })), __jsx("div", {
      key: "tracklist-details".concat(index),
      className: "jsx-3741588868" + " " + "tracklist-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, release.data.tracklist[0] && release.data.tracklist.map(function (paragraph) {
      return __jsx("p", {
        className: "jsx-3741588868",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, paragraph.text);
    }))), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(playerDisplayId) === index && __jsx(_TracklistAndPlayer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tracklist: tracklist,
      setPlayerDisplayId: setPlayerDisplayId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3741588868",
      __self: this
    }, ".release-entry-wrapper.jsx-3741588868{padding-left:var(--global-margin);padding-right:var(--global-margin);font-family:var(--font1);font-size:var(--standard-font-size);text-transform:uppercase;}.release-cover.jsx-3741588868{cursor:pointer;width:100%;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}.release-cover.jsx-3741588868:hover{-webkit-transform:scale(1.005);-ms-transform:scale(1.005);transform:scale(1.005);}.release-details.jsx-3741588868{padding-top:1rem;padding-bottom:1rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;cursor:pointer;}.release-details.jsx-3741588868:hover{opacity:0.85;-webkit-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01);}.mini-play.jsx-3741588868{width:0.5rem;margin-right:0.7rem;}.artist-name.jsx-3741588868,.release-name.jsx-3741588868{padding-top:0.5rem;padding-bottom:0.3rem;}.more-info-about-release.jsx-3741588868{text-transform:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUmVsZWFzZUVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGc0IsQUFHaUQsQUFPbkIsQUFLUSxBQUlOLEFBV0osQUFJQSxBQUtNLEFBSUMsYUFaRSxBQUlGLEVBeEJULEVBU1MsRUFvQkUsQ0FJeEIsTUFoQzRCLE9Bd0I1QixDQWhDcUMsR0FpQmYsSUFvQnRCLGdCQW5CdUIsWUFqQkksU0FrQlAsR0FQcEIsVUFnQkEsR0ExQnNDLEVBa0JiLGdDQVh6QixFQU4yQix5QkFDM0Isa0RBaUIwQix3REFDRSxzR0FDWCxlQUNqQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL1JlbGVhc2VFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhY2tsaXN0QW5kUGxheWVyIGZyb20gXCIuL1RyYWNrbGlzdEFuZFBsYXllclwiO1xuXG5mdW5jdGlvbiBSZWxlYXNlRW50cnkocHJvcHMpIHtcbiAgY29uc3QgW3BsYXllckRpc3BsYXlJZCwgc2V0UGxheWVyRGlzcGxheUlkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHNob3dQbGF5ZXIoZXZlbnQpIHtcbiAgICBzZXRQbGF5ZXJEaXNwbGF5SWQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdGFnXCIpKTtcbiAgfVxuICBmdW5jdGlvbiByZW5kZXJTZWN0aW9uKHNlY3Rpb24pIHtcbiAgICBjb25zb2xlLmxvZyhzZWN0aW9uKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3NlY3Rpb24udG9TdHJpbmcoKX0tc2VjdGlvbmB9PlxuICAgICAgICB7c2VjdGlvblswXSAmJiBzZWN0aW9uLm1hcChwYXJhZ3JhcGggPT4gPHA+e3BhcmFncmFwaC50ZXh0fTwvcD4pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgcHJvcHMucmVsZWFzZXMgJiZcbiAgICBwcm9wcy5yZWxlYXNlcy5tYXAoZnVuY3Rpb24ocmVsZWFzZSwgaW5kZXgpIHtcbiAgICAgIGxldCB0cmFja2xpc3QgPSBPYmplY3QudmFsdWVzKHJlbGVhc2UuZGF0YS50cmFja3NbMF0pO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtZW50cnktd3JhcHBlclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLWNvdmVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17c2hvd1BsYXllcn1cbiAgICAgICAgICAgICAga2V5PXtgY292ZXIke2luZGV4fWB9XG4gICAgICAgICAgICAgIHNyYz17cmVsZWFzZS5kYXRhLmNvdmVyLnVybH1cbiAgICAgICAgICAgICAgYWx0PVwicmVsZWFzZS1jb3ZlclwiXG4gICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtgYXJ0aXN0JHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1uYW1lXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGxheWVyfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZWxlYXNlLmRhdGEuYXJ0aXN0WzBdLnRleHR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2B0aXRsZSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLW5hbWVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQbGF5ZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS10YWc9e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaS1wbGF5XCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvcGxheS1zb25nLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJtaW5pLXBsYXlcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1BsYXllcn1cbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtyZWxlYXNlLmRhdGEudGl0bGVbMF0udGV4dH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZS1pbmZvLWFib3V0LXJlbGVhc2VcIj5cbiAgICAgICAgICAgICAge3JlbmRlclNlY3Rpb24ocmVsZWFzZS5kYXRhLmFib3V0KX1cblxuICAgICAgICAgICAgICA8ZGl2IGtleT17YGNyZWRpdHMke2luZGV4fWB9IGNsYXNzTmFtZT1cImNyZWRpdHNcIj5cbiAgICAgICAgICAgICAgICB7cmVsZWFzZS5kYXRhLmNyZWRpdHNbMF0gJiZcbiAgICAgICAgICAgICAgICAgIHJlbGVhc2UuZGF0YS5jcmVkaXRzLm1hcChwYXJhZ3JhcGggPT4gKFxuICAgICAgICAgICAgICAgICAgICA8cD57cGFyYWdyYXBoLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtgdHJhY2tsaXN0LWRldGFpbHMke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhY2tsaXN0LWRldGFpbHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3JlbGVhc2UuZGF0YS50cmFja2xpc3RbMF0gJiZcbiAgICAgICAgICAgICAgICAgIHJlbGVhc2UuZGF0YS50cmFja2xpc3QubWFwKHBhcmFncmFwaCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxwPntwYXJhZ3JhcGgudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge3BhcnNlSW50KHBsYXllckRpc3BsYXlJZCkgPT09IGluZGV4ICYmIChcbiAgICAgICAgICAgICAgPFRyYWNrbGlzdEFuZFBsYXllclxuICAgICAgICAgICAgICAgIHRyYWNrbGlzdD17dHJhY2tsaXN0fVxuICAgICAgICAgICAgICAgIHNldFBsYXllckRpc3BsYXlJZD17c2V0UGxheWVyRGlzcGxheUlkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucmVsZWFzZS1lbnRyeS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1nbG9iYWwtbWFyZ2luKTtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tZ2xvYmFsLW1hcmdpbik7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250MSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RhbmRhcmQtZm9udC1zaXplKTtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWxlYXNlLWNvdmVyIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVsZWFzZS1jb3Zlcjpob3ZlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVsZWFzZS1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVsZWFzZS1kZXRhaWxzOmhvdmVyIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44NTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5taW5pLXBsYXkge1xuICAgICAgICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpc3QtbmFtZSxcbiAgICAgICAgICAgIC5yZWxlYXNlLW5hbWUge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vcmUtaW5mby1hYm91dC1yZWxlYXNlIHtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSlcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVsZWFzZUVudHJ5O1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ReleaseEntry.js */"));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ReleaseEntry);

/***/ })

})
//# sourceMappingURL=index.js.e64baf901e4089ac64b2.hot-update.js.map