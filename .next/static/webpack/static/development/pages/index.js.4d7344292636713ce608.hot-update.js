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
      className: "section",
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
      className: "jsx-2234540587",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2234540587" + " " + "release-entry-wrapper",
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
      className: "jsx-2234540587" + " " + "release-cover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-2234540587" + " " + "release-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("div", {
      key: "artist".concat(index),
      onClick: showPlayer,
      "data-tag": index,
      className: "jsx-2234540587" + " " + "artist-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, release.data.artist[0].text), __jsx("div", {
      key: "title".concat(index),
      onClick: showPlayer,
      "data-tag": index,
      className: "jsx-2234540587" + " " + "release-name",
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
      className: "jsx-2234540587" + " " + "mini-play",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), release.data.title[0].text)), __jsx("div", {
      className: "jsx-2234540587" + " " + "more-info-about-release",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("img", {
      src: "/img/cross.png",
      alt: "cross",
      onClick: stopMusic,
      className: "jsx-2234540587" + " " + "close-more-info-cross",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-2234540587" + " " + "tracklist-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, renderSection(release.data.tracklist)), __jsx("div", {
      className: "jsx-2234540587" + " " + "about-release",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, renderSection(release.data.about)), __jsx("div", {
      className: "jsx-2234540587" + " " + "credits",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, renderSection(release.data.credits))), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(playerDisplayId) === index && __jsx(_TracklistAndPlayer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tracklist: tracklist,
      setPlayerDisplayId: setPlayerDisplayId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "2234540587",
      __self: this
    }, ".release-entry-wrapper.jsx-2234540587{padding-left:var(--global-margin);padding-right:var(--global-margin);font-family:var(--font1);font-size:var(--standard-font-size);text-transform:uppercase;}.release-cover.jsx-2234540587{cursor:pointer;width:100%;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}.release-cover.jsx-2234540587:hover{-webkit-transform:scale(1.005);-ms-transform:scale(1.005);transform:scale(1.005);}.release-details.jsx-2234540587{padding-top:1rem;padding-bottom:1rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;cursor:pointer;}.release-details.jsx-2234540587:hover{opacity:0.85;-webkit-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01);}.mini-play.jsx-2234540587{width:0.5rem;margin-right:0.7rem;}.artist-name.jsx-2234540587,.release-name.jsx-2234540587{padding-top:0.5rem;padding-bottom:0.3rem;}.tracklist-details.jsx-2234540587{margin-bottom:2rem;}.close-more-info-cross.jsx-2234540587{width:0.5rem;position:absolute;right:0.3rem;top:0.3rem;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;opacity:0.7;}.more-info-about-release.jsx-2234540587{text-transform:none;margin-bottom:2rem;}.more-info-section-title.jsx-2234540587{margin-bottom:1rem;margin-top:1rem;}.about-release.jsx-2234540587{margin-bottom:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUmVsZWFzZUVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGc0IsQUFHaUQsQUFPbkIsQUFLUSxBQUlOLEFBV0osQUFJQSxBQUtNLEFBSUEsQUFHVixBQVVXLEFBSUQsQUFJQSxhQWpDRyxBQUlGLEFBWU4sRUFwQ0gsRUFTUyxFQW9CRSxBQUl4QixBQWlCa0IsQUFJbEIsQ0FScUIsTUE3Q08sS0FvQ2pCLEVBWlgsQ0FoQ3FDLENBMERyQyxFQXpDc0IsRUFxQ3RCLEVBakJBLEdBUVMsV0FDZSxFQTVCRCxZQWpCSSxTQWtCUCxHQVBwQixVQWdCQSxHQTFCc0MsRUFrQmIsZ0NBWHpCLEVBTjJCLHlCQUMzQixFQTJDVSxZQUNkLG9DQTNCOEIsd0RBQ0Usc0dBQ1gsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzMzX2VsaXMvY29tcG9uZW50cy9SZWxlYXNlRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYWNrbGlzdEFuZFBsYXllciBmcm9tIFwiLi9UcmFja2xpc3RBbmRQbGF5ZXJcIjtcblxuZnVuY3Rpb24gUmVsZWFzZUVudHJ5KHByb3BzKSB7XG4gIGNvbnN0IFtwbGF5ZXJEaXNwbGF5SWQsIHNldFBsYXllckRpc3BsYXlJZF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBmdW5jdGlvbiBzaG93UGxheWVyKGV2ZW50KSB7XG4gICAgc2V0UGxheWVyRGlzcGxheUlkKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhZ1wiKSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVuZGVyU2VjdGlvbihzZWN0aW9uKSB7XG4gICAgY29uc29sZS5sb2coc2VjdGlvbik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICB7c2VjdGlvblswXSAmJiBzZWN0aW9uLm1hcChwYXJhZ3JhcGggPT4gPHA+e3BhcmFncmFwaC50ZXh0fTwvcD4pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgcHJvcHMucmVsZWFzZXMgJiZcbiAgICBwcm9wcy5yZWxlYXNlcy5tYXAoZnVuY3Rpb24ocmVsZWFzZSwgaW5kZXgpIHtcbiAgICAgIGxldCB0cmFja2xpc3QgPSBPYmplY3QudmFsdWVzKHJlbGVhc2UuZGF0YS50cmFja3NbMF0pO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtZW50cnktd3JhcHBlclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLWNvdmVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17c2hvd1BsYXllcn1cbiAgICAgICAgICAgICAga2V5PXtgY292ZXIke2luZGV4fWB9XG4gICAgICAgICAgICAgIHNyYz17cmVsZWFzZS5kYXRhLmNvdmVyLnVybH1cbiAgICAgICAgICAgICAgYWx0PVwicmVsZWFzZS1jb3ZlclwiXG4gICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtgYXJ0aXN0JHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1uYW1lXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UGxheWVyfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZWxlYXNlLmRhdGEuYXJ0aXN0WzBdLnRleHR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2B0aXRsZSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLW5hbWVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQbGF5ZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS10YWc9e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaS1wbGF5XCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvcGxheS1zb25nLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJtaW5pLXBsYXlcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1BsYXllcn1cbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtyZWxlYXNlLmRhdGEudGl0bGVbMF0udGV4dH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLWluZm8tYWJvdXQtcmVsZWFzZVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2UtbW9yZS1pbmZvLWNyb3NzXCJcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2Nyb3NzLnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiY3Jvc3NcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0b3BNdXNpY31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2xpc3QtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJTZWN0aW9uKHJlbGVhc2UuZGF0YS50cmFja2xpc3QpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1yZWxlYXNlXCI+XG4gICAgICAgICAgICAgICAge3JlbmRlclNlY3Rpb24ocmVsZWFzZS5kYXRhLmFib3V0KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVkaXRzXCI+XG4gICAgICAgICAgICAgICAge3JlbmRlclNlY3Rpb24ocmVsZWFzZS5kYXRhLmNyZWRpdHMpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7cGFyc2VJbnQocGxheWVyRGlzcGxheUlkKSA9PT0gaW5kZXggJiYgKFxuICAgICAgICAgICAgICA8VHJhY2tsaXN0QW5kUGxheWVyXG4gICAgICAgICAgICAgICAgdHJhY2tsaXN0PXt0cmFja2xpc3R9XG4gICAgICAgICAgICAgICAgc2V0UGxheWVyRGlzcGxheUlkPXtzZXRQbGF5ZXJEaXNwbGF5SWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5yZWxlYXNlLWVudHJ5LXdyYXBwZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdsb2JhbC1tYXJnaW4pO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1nbG9iYWwtbWFyZ2luKTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQxKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdGFuZGFyZC1mb250LXNpemUpO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlbGVhc2UtY292ZXIge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWxlYXNlLWNvdmVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZWxlYXNlLWRldGFpbHMge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWxlYXNlLWRldGFpbHM6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg1O1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1pbmktcGxheSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGlzdC1uYW1lLFxuICAgICAgICAgICAgLnJlbGVhc2UtbmFtZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHJhY2tsaXN0LWRldGFpbHMge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsb3NlLW1vcmUtaW5mby1jcm9zcyB7XG4gICAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDAuM3JlbTtcbiAgICAgICAgICB0b3A6IDAuM3JlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vcmUtaW5mby1hYm91dC1yZWxlYXNlIHtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9yZS1pbmZvLXNlY3Rpb24tdGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFib3V0LXJlbGVhc2Uge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGVhc2VFbnRyeTtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ReleaseEntry.js */"));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ReleaseEntry);

/***/ })

})
//# sourceMappingURL=index.js.4d7344292636713ce608.hot-update.js.map