webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ReleaseEntry.js":
/*!************************************!*\
  !*** ./components/ReleaseEntry.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
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
      className: "section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, section[0] && section.map(function (paragraph) {
      return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(playerDisplayId) === index && __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, paragraph.text);
    }));
  }

  return props.releases && props.releases.map(function (release, index) {
    var tracklist = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(release.data.tracks[0]);

    return __jsx("div", {
      className: "jsx-4240035204",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-4240035204" + " " + "release-entry-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("img", {
      onClick: showPlayer,
      key: "cover".concat(index),
      src: release.data.cover.url,
      alt: "release-cover",
      "data-tag": index,
      className: "jsx-4240035204" + " " + "release-cover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-4240035204" + " " + "release-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      key: "artist".concat(index),
      onClick: showPlayer,
      "data-tag": index,
      className: "jsx-4240035204" + " " + "artist-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, release.data.artist[0].text), __jsx("div", {
      key: "title".concat(index),
      onClick: showPlayer,
      "data-tag": index,
      className: "jsx-4240035204" + " " + "release-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("img", {
      src: "/img/play-song.png",
      alt: "mini-play",
      onClick: showPlayer,
      "data-tag": index,
      className: "jsx-4240035204" + " " + "mini-play",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), release.data.title[0].text)), __jsx("div", {
      className: "jsx-4240035204" + " " + "more-info-about-release",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("img", {
      src: "/img/cross.png",
      alt: "cross",
      className: "jsx-4240035204" + " " + "close-more-info-cross",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-4240035204" + " " + "tracklist-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, renderSection(release.data.tracklist)), __jsx("div", {
      className: "jsx-4240035204" + " " + "about-release",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, renderSection(release.data.about)), __jsx("div", {
      className: "jsx-4240035204" + " " + "credits",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, renderSection(release.data.credits))), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(playerDisplayId) === index && __jsx(_TracklistAndPlayer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tracklist: tracklist,
      setPlayerDisplayId: setPlayerDisplayId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "4240035204",
      __self: this
    }, ".release-entry-wrapper.jsx-4240035204{padding-left:var(--global-margin);padding-right:var(--global-margin);font-family:var(--font1);font-size:var(--standard-font-size);text-transform:uppercase;}.release-cover.jsx-4240035204{cursor:pointer;width:100%;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}.release-cover.jsx-4240035204:hover{-webkit-transform:scale(1.005);-ms-transform:scale(1.005);transform:scale(1.005);}.release-details.jsx-4240035204{padding-top:1rem;padding-bottom:1rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;cursor:pointer;}.release-details.jsx-4240035204:hover{opacity:0.85;-webkit-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01);}.mini-play.jsx-4240035204{width:0.5rem;margin-right:0.7rem;}.artist-name.jsx-4240035204,.release-name.jsx-4240035204{padding-top:0.5rem;padding-bottom:0.3rem;}.tracklist-details.jsx-4240035204{margin-bottom:2rem;}.close-more-info-cross.jsx-4240035204{width:0.6rem;position:absolute;right:0;top:0;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;opacity:0.7;}.close-more-info-cross.jsx-4240035204:hover{width:0.7rem;opacity:1;}.more-info-about-release.jsx-4240035204{text-transform:none;margin-bottom:2rem;position:relative;}.more-info-section-title.jsx-4240035204{margin-bottom:1rem;margin-top:1rem;}.about-release.jsx-4240035204{margin-bottom:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUmVsZWFzZUVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGc0IsQUFHaUQsQUFRbkIsQUFLUSxBQUlOLEFBV0osQUFJQSxBQUtNLEFBSUEsQUFHVixBQVFBLEFBTVcsQUFLRCxBQUlBLGFBdENHLEFBSUYsQUFZTixBQVFSLEVBNUNLLEVBU1MsRUFvQkUsQUFJeEIsQUFzQmtCLEFBSWxCLENBVHFCLEdBTHpCLEdBNUNnQyxLQW9DdEIsRUFaTixDQWpDcUMsQ0FnRXJDLEVBOUNzQixFQTRCbEIsQUFhZSxFQXJCbkIsSUFTd0IsWUE1QkQsQUF5Q3ZCLFlBM0QyQixTQW1CUCxHQVBwQixVQWdCQSxHQTNCc0MsRUFtQmIsZ0NBWHpCLEVBUDJCLGlCQTZDakIsUUEzQ1YsSUE0Q0osOENBM0I4Qix3REFDRSxzR0FDWCxlQUNqQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL1JlbGVhc2VFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhY2tsaXN0QW5kUGxheWVyIGZyb20gXCIuL1RyYWNrbGlzdEFuZFBsYXllclwiO1xuXG5mdW5jdGlvbiBSZWxlYXNlRW50cnkocHJvcHMpIHtcbiAgY29uc3QgW3BsYXllckRpc3BsYXlJZCwgc2V0UGxheWVyRGlzcGxheUlkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHNob3dQbGF5ZXIoZXZlbnQpIHtcbiAgICBzZXRQbGF5ZXJEaXNwbGF5SWQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdGFnXCIpKTtcbiAgfVxuICBmdW5jdGlvbiByZW5kZXJTZWN0aW9uKHNlY3Rpb24pIHtcbiAgICBjb25zb2xlLmxvZyhzZWN0aW9uKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIHtzZWN0aW9uWzBdICYmXG4gICAgICAgICAgc2VjdGlvbi5tYXAoXG4gICAgICAgICAgICBwYXJhZ3JhcGggPT5cbiAgICAgICAgICAgICAgcGFyc2VJbnQocGxheWVyRGlzcGxheUlkKSA9PT0gaW5kZXggJiYgPHA+e3BhcmFncmFwaC50ZXh0fTwvcD5cbiAgICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgcHJvcHMucmVsZWFzZXMgJiZcbiAgICBwcm9wcy5yZWxlYXNlcy5tYXAoZnVuY3Rpb24ocmVsZWFzZSwgaW5kZXgpIHtcbiAgICAgIGxldCB0cmFja2xpc3QgPSBPYmplY3QudmFsdWVzKHJlbGVhc2UuZGF0YS50cmFja3NbMF0pO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtZW50cnktd3JhcHBlclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLWNvdmVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17c2hvd1BsYXllcn1cbiAgICAgICAgICAgICAga2V5PXtgY292ZXIke2luZGV4fWB9XG4gICAgICAgICAgICAgIHNyYz17cmVsZWFzZS5kYXRhLmNvdmVyLnVybH1cbiAgICAgICAgICAgICAgYWx0PVwicmVsZWFzZS1jb3ZlclwiXG4gICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtgYXJ0aXN0JHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1uYW1lXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGxheWVyfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZWxlYXNlLmRhdGEuYXJ0aXN0WzBdLnRleHR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2B0aXRsZSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLW5hbWVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQbGF5ZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS10YWc9e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaS1wbGF5XCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvcGxheS1zb25nLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJtaW5pLXBsYXlcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1BsYXllcn1cbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtyZWxlYXNlLmRhdGEudGl0bGVbMF0udGV4dH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLWluZm8tYWJvdXQtcmVsZWFzZVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2UtbW9yZS1pbmZvLWNyb3NzXCJcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2Nyb3NzLnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiY3Jvc3NcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrbGlzdC1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAge3JlbmRlclNlY3Rpb24ocmVsZWFzZS5kYXRhLnRyYWNrbGlzdCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXJlbGVhc2VcIj5cbiAgICAgICAgICAgICAgICB7cmVuZGVyU2VjdGlvbihyZWxlYXNlLmRhdGEuYWJvdXQpfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWRpdHNcIj5cbiAgICAgICAgICAgICAgICB7cmVuZGVyU2VjdGlvbihyZWxlYXNlLmRhdGEuY3JlZGl0cyl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtwYXJzZUludChwbGF5ZXJEaXNwbGF5SWQpID09PSBpbmRleCAmJiAoXG4gICAgICAgICAgICAgIDxUcmFja2xpc3RBbmRQbGF5ZXJcbiAgICAgICAgICAgICAgICB0cmFja2xpc3Q9e3RyYWNrbGlzdH1cbiAgICAgICAgICAgICAgICBzZXRQbGF5ZXJEaXNwbGF5SWQ9e3NldFBsYXllckRpc3BsYXlJZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnJlbGVhc2UtZW50cnktd3JhcHBlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tZ2xvYmFsLW1hcmdpbik7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLWdsb2JhbC1tYXJnaW4pO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udDEpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN0YW5kYXJkLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlbGVhc2UtY292ZXIge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWxlYXNlLWNvdmVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZWxlYXNlLWRldGFpbHMge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWxlYXNlLWRldGFpbHM6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg1O1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1pbmktcGxheSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGlzdC1uYW1lLFxuICAgICAgICAgICAgLnJlbGVhc2UtbmFtZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHJhY2tsaXN0LWRldGFpbHMge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsb3NlLW1vcmUtaW5mby1jcm9zcyB7XG4gICAgICAgICAgd2lkdGg6IDAuNnJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgfVxuICAgICAgICAuY2xvc2UtbW9yZS1pbmZvLWNyb3NzOmhvdmVyIHtcbiAgICAgICAgICB3aWR0aDogMC43cmVtOztcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb3JlLWluZm8tYWJvdXQtcmVsZWFzZSB7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb3JlLWluZm8tc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWJvdXQtcmVsZWFzZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSlcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVsZWFzZUVudHJ5O1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ReleaseEntry.js */"));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ReleaseEntry);

/***/ })

})
//# sourceMappingURL=index.js.46868dbb5a0f3f5698c3.hot-update.js.map