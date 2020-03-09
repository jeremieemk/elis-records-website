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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      showMoreDetails = _useState2[0],
      setShowMoreDetails = _useState2[1]; // let releaseCover = useRef();
  // releaseCover.current && console.log(releaseCover.current);


  function showPlayer(event) {
    setPlayerDisplayId(event.target.getAttribute("data-tag"));
    setShowMoreDetails(true); // releaseCover.current &&
    //   window.scrollTo({
    //     behavior: "smooth",
    //     top: releaseCover.current.offsetTop
    //   });
  }

  function renderSection(section) {
    return __jsx("div", {
      className: "section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, section[0] && section.map(function (paragraph) {
      return __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, paragraph.text);
    }));
  }

  function hideMoreDetails(e) {
    setShowMoreDetails(false);
  }

  function convertDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString();
  }

  props.releases && console.log(props.releases);
  return props.releases && props.releases.map(function (release, index) {
    var tracklist = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(release.data.tracks[0]);

    return __jsx("div", {
      className: "jsx-521304102",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-521304102" + " " + "release-entry-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("div", {
      onClick: showPlayer,
      className: "jsx-521304102",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("img", {
      key: "cover".concat(index),
      src: release.data.cover.url,
      alt: "release-cover",
      "data-tag": index // ref={releaseCover}
      ,
      className: "jsx-521304102" + " " + "release-cover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-521304102" + " " + "release-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      key: "artist".concat(index),
      "data-tag": index,
      className: "jsx-521304102" + " " + "artist-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, release.data.artist[0].text), __jsx("div", {
      key: "title".concat(index),
      "data-tag": index,
      className: "jsx-521304102" + " " + "release-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("img", {
      src: "/img/play-song.png",
      alt: "mini-play",
      "data-tag": index,
      className: "jsx-521304102" + " " + "mini-play",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), release.data.title[0].text))), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(playerDisplayId) === index && __jsx("div", {
      className: "jsx-521304102",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, showMoreDetails && __jsx("div", {
      className: "jsx-521304102" + " " + "more-info-about-release",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("img", {
      src: "/img/cross.png",
      alt: "cross",
      onClick: hideMoreDetails,
      className: "jsx-521304102" + " " + "close-more-info-cross",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-521304102" + " " + "tracklist-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, renderSection(release.data.tracklist)), __jsx("div", {
      className: "jsx-521304102" + " " + "release-date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Released ", convertDate(release.data["release-date"])), __jsx("div", {
      className: "jsx-521304102" + " " + "buy-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("a", {
      href: release.data.buy.url,
      target: "_blank",
      className: "jsx-521304102",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "BUY")), __jsx("div", {
      className: "jsx-521304102" + " " + "about-release",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, renderSection(release.data.about)), __jsx("div", {
      className: "jsx-521304102" + " " + "credits",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, renderSection(release.data.credits))), __jsx(_TracklistAndPlayer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tracklist: tracklist,
      setPlayerDisplayId: setPlayerDisplayId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "521304102",
      __self: this
    }, ".release-entry-wrapper.jsx-521304102{z-index:-1;padding-left:var(--global-margin);padding-right:var(--global-margin);font-family:var(--font1);font-size:var(--standard-font-size);text-transform:uppercase;}.release-cover.jsx-521304102{cursor:pointer;width:100%;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;}.release-cover.jsx-521304102:hover{opacity:0.8;}.release-details.jsx-521304102{padding-top:1.5rem;padding-bottom:1.5rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;cursor:pointer;}.release-details.jsx-521304102:hover{opacity:0.7;}.mini-play.jsx-521304102{width:0.5rem;margin-right:0.7rem;}.artist-name.jsx-521304102,.release-name.jsx-521304102{padding-top:0.5rem;padding-bottom:0.3rem;}.tracklist-details.jsx-521304102{margin-bottom:1rem;padding-right:0.5rem;}.buy-link.jsx-521304102{margin-top:1rem;margin-bottom:1rem;-webkit-text-decoration:underline;text-decoration:underline;}.close-more-info-cross.jsx-521304102{width:0.7rem;position:absolute;right:0;top:0;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;opacity:0.7;cursor:pointer;}.close-more-info-cross.jsx-521304102:hover{width:0.7rem;opacity:1;}.more-info-about-release.jsx-521304102{text-transform:none;margin-bottom:4rem;position:relative;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;line-height:1.1rem;}.more-info-section-title.jsx-521304102{margin-bottom:1rem;margin-top:1rem;}.about-release.jsx-521304102{margin-bottom:2rem;}@media (min-width:801px){.release-entry-wrapper.jsx-521304102{font-size:var(--desktop-font-size);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUmVsZWFzZUVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtIc0IsQUFHMEIsQUFTSSxBQUtILEFBSU8sQUFXUCxBQUdDLEFBS00sQUFJQSxBQUlILEFBS0gsQUFTQSxBQUlPLEFBT0QsQUFJQSxBQUtrQixXQTlFSCxDQWNwQyxBQWVBLENBR3NCLEFBa0JGLEFBU1IsRUFsREMsQ0FvQ1EsR0EzQkcsQUFtQkEsQUFJRCxBQTZCTCxBQUlsQixDQVhxQixHQUhyQixHQWxEMEIsS0F5Q2hCLEVBbEJWLEVBYTRCLEFBeUI1QixBQVFFLElBM0JNLEFBWVksQ0F0QnBCLENBdkJzQixBQW1CdEIsSUFyQ3FDLEFBb0RULFlBWUgsSUE3Q0YsbUJBbEJJLEVBUzNCLEFBVW9CLGFBMEJwQixLQXpCeUIsS0FuQmEsb0NBQ1gsTUFrRGIsWUFDRyxPQWxEakIsQUE2RHFCLFFBVnJCLFdBV0Esd0JBNUMwQix3REFFVCxlQUNqQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL1JlbGVhc2VFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFja2xpc3RBbmRQbGF5ZXIgZnJvbSBcIi4vVHJhY2tsaXN0QW5kUGxheWVyXCI7XG5cbmZ1bmN0aW9uIFJlbGVhc2VFbnRyeShwcm9wcykge1xuICBjb25zdCBbcGxheWVyRGlzcGxheUlkLCBzZXRQbGF5ZXJEaXNwbGF5SWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzaG93TW9yZURldGFpbHMsIHNldFNob3dNb3JlRGV0YWlsc10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBsZXQgcmVsZWFzZUNvdmVyID0gdXNlUmVmKCk7XG4gIC8vIHJlbGVhc2VDb3Zlci5jdXJyZW50ICYmIGNvbnNvbGUubG9nKHJlbGVhc2VDb3Zlci5jdXJyZW50KTtcblxuICBmdW5jdGlvbiBzaG93UGxheWVyKGV2ZW50KSB7XG4gICAgc2V0UGxheWVyRGlzcGxheUlkKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhZ1wiKSk7XG4gICAgc2V0U2hvd01vcmVEZXRhaWxzKHRydWUpO1xuICAgIC8vIHJlbGVhc2VDb3Zlci5jdXJyZW50ICYmXG4gICAgLy8gICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgIC8vICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAvLyAgICAgdG9wOiByZWxlYXNlQ292ZXIuY3VycmVudC5vZmZzZXRUb3BcbiAgICAvLyAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJlbmRlclNlY3Rpb24oc2VjdGlvbikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAge3NlY3Rpb25bMF0gJiYgc2VjdGlvbi5tYXAocGFyYWdyYXBoID0+IDxwPntwYXJhZ3JhcGgudGV4dH08L3A+KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgZnVuY3Rpb24gaGlkZU1vcmVEZXRhaWxzKGUpIHtcbiAgICBzZXRTaG93TW9yZURldGFpbHMoZmFsc2UpO1xuICB9XG4gIGZ1bmN0aW9uIGNvbnZlcnREYXRlKGRhdGVTdHJpbmcpIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICB9XG5cbiAgcHJvcHMucmVsZWFzZXMgJiYgY29uc29sZS5sb2cocHJvcHMucmVsZWFzZXMpO1xuXG4gIHJldHVybiAoXG4gICAgcHJvcHMucmVsZWFzZXMgJiZcbiAgICBwcm9wcy5yZWxlYXNlcy5tYXAoKHJlbGVhc2UsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgdHJhY2tsaXN0ID0gT2JqZWN0LnZhbHVlcyhyZWxlYXNlLmRhdGEudHJhY2tzWzBdKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLWVudHJ5LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17c2hvd1BsYXllcn0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLWNvdmVyXCJcbiAgICAgICAgICAgICAgICBrZXk9e2Bjb3ZlciR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBzcmM9e3JlbGVhc2UuZGF0YS5jb3Zlci51cmx9XG4gICAgICAgICAgICAgICAgYWx0PVwicmVsZWFzZS1jb3ZlclwiXG4gICAgICAgICAgICAgICAgZGF0YS10YWc9e2luZGV4fVxuICAgICAgICAgICAgICAgIC8vIHJlZj17cmVsZWFzZUNvdmVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17YGFydGlzdCR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1uYW1lXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cmVsZWFzZS5kYXRhLmFydGlzdFswXS50ZXh0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtgdGl0bGUke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10YWc9e2luZGV4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaS1wbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9wbGF5LXNvbmcucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibWluaS1wbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YWc9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHtyZWxlYXNlLmRhdGEudGl0bGVbMF0udGV4dH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtwYXJzZUludChwbGF5ZXJEaXNwbGF5SWQpID09PSBpbmRleCAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3Nob3dNb3JlRGV0YWlscyAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcmUtaW5mby1hYm91dC1yZWxlYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZS1tb3JlLWluZm8tY3Jvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvY3Jvc3MucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjcm9zc1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGlkZU1vcmVEZXRhaWxzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrbGlzdC1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3JlbmRlclNlY3Rpb24ocmVsZWFzZS5kYXRhLnRyYWNrbGlzdCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGVhc2UtZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFJlbGVhc2VkIHtjb252ZXJ0RGF0ZShyZWxlYXNlLmRhdGFbXCJyZWxlYXNlLWRhdGVcIl0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXktbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3JlbGVhc2UuZGF0YS5idXkudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJVWVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1yZWxlYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3JlbmRlclNlY3Rpb24ocmVsZWFzZS5kYXRhLmFib3V0KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVkaXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3JlbmRlclNlY3Rpb24ocmVsZWFzZS5kYXRhLmNyZWRpdHMpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPFRyYWNrbGlzdEFuZFBsYXllclxuICAgICAgICAgICAgICAgICAgdHJhY2tsaXN0PXt0cmFja2xpc3R9XG4gICAgICAgICAgICAgICAgICBzZXRQbGF5ZXJEaXNwbGF5SWQ9e3NldFBsYXllckRpc3BsYXlJZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnJlbGVhc2UtZW50cnktd3JhcHBlciB7XG4gICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdsb2JhbC1tYXJnaW4pO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1nbG9iYWwtbWFyZ2luKTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQxKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdGFuZGFyZC1mb250LXNpemUpO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVsZWFzZS1jb3ZlciB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWxlYXNlLWNvdmVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVsZWFzZS1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWxlYXNlLWRldGFpbHM6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWluaS1wbGF5IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aXN0LW5hbWUsXG4gICAgICAgICAgICAucmVsZWFzZS1uYW1lIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50cmFja2xpc3QtZGV0YWlscyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idXktbGluayB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsb3NlLW1vcmUtaW5mby1jcm9zcyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAwLjdyZW07XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsb3NlLW1vcmUtaW5mby1jcm9zczpob3ZlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAwLjdyZW07XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9yZS1pbmZvLWFib3V0LXJlbGVhc2Uge1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb3JlLWluZm8tc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWJvdXQtcmVsZWFzZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDFweCkge1xuICAgICAgICAgICAgICAucmVsZWFzZS1lbnRyeS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWRlc2t0b3AtZm9udC1zaXplKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGVhc2VFbnRyeTtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ReleaseEntry.js */"));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ReleaseEntry);

/***/ })

})
//# sourceMappingURL=index.js.77462fef12e5a1e28d47.hot-update.js.map