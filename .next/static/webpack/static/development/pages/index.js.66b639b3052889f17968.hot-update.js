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

  return props.releases && props.releases.map(function (release, index) {
    var tracklist = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(release.data.tracks[0]);

    return __jsx("div", {
      className: "jsx-3741588868",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3741588868" + " " + "release-entry-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
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
        lineNumber: 18
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3741588868" + " " + "release-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      key: "artist".concat(index),
      onClick: showPlayer,
      "data-tag": index,
      className: "jsx-3741588868" + " " + "artist-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, release.data.artist[0].text), __jsx("div", {
      key: "title".concat(index),
      onClick: showPlayer,
      "data-tag": index,
      className: "jsx-3741588868" + " " + "release-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
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
        lineNumber: 42
      },
      __self: this
    }), release.data.title[0].text)), __jsx("div", {
      className: "jsx-3741588868" + " " + "more-info-about-release",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      key: "about".concat(index),
      className: "jsx-3741588868" + " " + "about-release",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, release.data.about[0] && release.data.about.map(function (paragraph) {
      return __jsx("p", {
        className: "jsx-3741588868",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, paragraph.text);
    })), __jsx("div", {
      key: "credits".concat(index),
      className: "jsx-3741588868" + " " + "credits",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, release.data.credits[0] && release.data.credits.map(function (paragraph) {
      return __jsx("p", {
        className: "jsx-3741588868",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, paragraph.text);
    })), __jsx("div", {
      key: "tracklist-details".concat(index),
      className: "jsx-3741588868" + " " + "tracklist-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, release.data.tracklist[0] && release.data.tracklist.map(function (paragraph) {
      return __jsx("p", {
        className: "jsx-3741588868",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, paragraph.text);
    }))), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(playerDisplayId) === index && __jsx(_TracklistAndPlayer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tracklist: tracklist,
      setPlayerDisplayId: setPlayerDisplayId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3741588868",
      __self: this
    }, ".release-entry-wrapper.jsx-3741588868{padding-left:var(--global-margin);padding-right:var(--global-margin);font-family:var(--font1);font-size:var(--standard-font-size);text-transform:uppercase;}.release-cover.jsx-3741588868{cursor:pointer;width:100%;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}.release-cover.jsx-3741588868:hover{-webkit-transform:scale(1.005);-ms-transform:scale(1.005);transform:scale(1.005);}.release-details.jsx-3741588868{padding-top:1rem;padding-bottom:1rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;cursor:pointer;}.release-details.jsx-3741588868:hover{opacity:0.85;-webkit-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01);}.mini-play.jsx-3741588868{width:0.5rem;margin-right:0.7rem;}.artist-name.jsx-3741588868,.release-name.jsx-3741588868{padding-top:0.5rem;padding-bottom:0.3rem;}.more-info-about-release.jsx-3741588868{text-transform:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUmVsZWFzZUVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGc0IsQUFHaUQsQUFPbkIsQUFLUSxBQUlOLEFBV0osQUFJQSxBQUtNLEFBSUMsYUFaRSxBQUlGLEVBeEJULEVBU1MsRUFvQkUsQ0FJeEIsTUFoQzRCLE9Bd0I1QixDQWhDcUMsR0FpQmYsSUFvQnRCLGdCQW5CdUIsWUFqQkksU0FrQlAsR0FQcEIsVUFnQkEsR0ExQnNDLEVBa0JiLGdDQVh6QixFQU4yQix5QkFDM0Isa0RBaUIwQix3REFDRSxzR0FDWCxlQUNqQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL1JlbGVhc2VFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhY2tsaXN0QW5kUGxheWVyIGZyb20gXCIuL1RyYWNrbGlzdEFuZFBsYXllclwiO1xuXG5mdW5jdGlvbiBSZWxlYXNlRW50cnkocHJvcHMpIHtcbiAgY29uc3QgW3BsYXllckRpc3BsYXlJZCwgc2V0UGxheWVyRGlzcGxheUlkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHNob3dQbGF5ZXIoZXZlbnQpIHtcbiAgICBzZXRQbGF5ZXJEaXNwbGF5SWQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdGFnXCIpKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgcHJvcHMucmVsZWFzZXMgJiZcbiAgICBwcm9wcy5yZWxlYXNlcy5tYXAoZnVuY3Rpb24ocmVsZWFzZSwgaW5kZXgpIHtcbiAgICAgIGxldCB0cmFja2xpc3QgPSBPYmplY3QudmFsdWVzKHJlbGVhc2UuZGF0YS50cmFja3NbMF0pO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtZW50cnktd3JhcHBlclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLWNvdmVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17c2hvd1BsYXllcn1cbiAgICAgICAgICAgICAga2V5PXtgY292ZXIke2luZGV4fWB9XG4gICAgICAgICAgICAgIHNyYz17cmVsZWFzZS5kYXRhLmNvdmVyLnVybH1cbiAgICAgICAgICAgICAgYWx0PVwicmVsZWFzZS1jb3ZlclwiXG4gICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtgYXJ0aXN0JHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1uYW1lXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGxheWVyfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZWxlYXNlLmRhdGEuYXJ0aXN0WzBdLnRleHR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2B0aXRsZSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLW5hbWVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQbGF5ZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS10YWc9e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaS1wbGF5XCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvcGxheS1zb25nLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJtaW5pLXBsYXlcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1BsYXllcn1cbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtyZWxlYXNlLmRhdGEudGl0bGVbMF0udGV4dH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZS1pbmZvLWFib3V0LXJlbGVhc2VcIj5cbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2BhYm91dCR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiYWJvdXQtcmVsZWFzZVwiPlxuICAgICAgICAgICAgICAgIHtyZWxlYXNlLmRhdGEuYWJvdXRbMF0gJiZcbiAgICAgICAgICAgICAgICAgIHJlbGVhc2UuZGF0YS5hYm91dC5tYXAocGFyYWdyYXBoID0+IDxwPntwYXJhZ3JhcGgudGV4dH08L3A+KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYga2V5PXtgY3JlZGl0cyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiY3JlZGl0c1wiPlxuICAgICAgICAgICAgICAgIHtyZWxlYXNlLmRhdGEuY3JlZGl0c1swXSAmJlxuICAgICAgICAgICAgICAgICAgcmVsZWFzZS5kYXRhLmNyZWRpdHMubWFwKHBhcmFncmFwaCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxwPntwYXJhZ3JhcGgudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2B0cmFja2xpc3QtZGV0YWlscyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFja2xpc3QtZGV0YWlsc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cmVsZWFzZS5kYXRhLnRyYWNrbGlzdFswXSAmJlxuICAgICAgICAgICAgICAgICAgcmVsZWFzZS5kYXRhLnRyYWNrbGlzdC5tYXAocGFyYWdyYXBoID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHA+e3BhcmFncmFwaC50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7cGFyc2VJbnQocGxheWVyRGlzcGxheUlkKSA9PT0gaW5kZXggJiYgKFxuICAgICAgICAgICAgICA8VHJhY2tsaXN0QW5kUGxheWVyXG4gICAgICAgICAgICAgICAgdHJhY2tsaXN0PXt0cmFja2xpc3R9XG4gICAgICAgICAgICAgICAgc2V0UGxheWVyRGlzcGxheUlkPXtzZXRQbGF5ZXJEaXNwbGF5SWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5yZWxlYXNlLWVudHJ5LXdyYXBwZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdsb2JhbC1tYXJnaW4pO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1nbG9iYWwtbWFyZ2luKTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQxKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdGFuZGFyZC1mb250LXNpemUpO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlbGVhc2UtY292ZXIge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWxlYXNlLWNvdmVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZWxlYXNlLWRldGFpbHMge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWxlYXNlLWRldGFpbHM6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg1O1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1pbmktcGxheSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGlzdC1uYW1lLFxuICAgICAgICAgICAgLnJlbGVhc2UtbmFtZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9yZS1pbmZvLWFib3V0LXJlbGVhc2Uge1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWxlYXNlRW50cnk7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ReleaseEntry.js */"));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ReleaseEntry);

/***/ })

})
//# sourceMappingURL=index.js.66b639b3052889f17968.hot-update.js.map