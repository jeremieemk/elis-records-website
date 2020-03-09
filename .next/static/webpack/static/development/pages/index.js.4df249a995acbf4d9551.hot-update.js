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
      className: "jsx-478194894",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-478194894" + " " + "release-entry-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("div", {
      onClick: showPlayer,
      className: "jsx-478194894",
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
      className: "jsx-478194894" + " " + "release-cover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-478194894" + " " + "release-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      key: "artist".concat(index),
      "data-tag": index,
      className: "jsx-478194894" + " " + "artist-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, release.data.artist[0].text), __jsx("div", {
      key: "title".concat(index),
      "data-tag": index,
      className: "jsx-478194894" + " " + "release-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("img", {
      src: "/img/play-song.png",
      alt: "mini-play",
      "data-tag": index,
      className: "jsx-478194894" + " " + "mini-play",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), release.data.title[0].text))), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(playerDisplayId) === index && __jsx("div", {
      className: "jsx-478194894",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, showMoreDetails && __jsx("div", {
      className: "jsx-478194894" + " " + "more-info-about-release",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("img", {
      src: "/img/cross.png",
      alt: "cross",
      onClick: hideMoreDetails,
      className: "jsx-478194894" + " " + "close-more-info-cross",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-478194894" + " " + "tracklist-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, renderSection(release.data.tracklist)), __jsx("div", {
      className: "jsx-478194894" + " " + "release-date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Released ", convertDate(release.data["release-date"])), __jsx("div", {
      className: "jsx-478194894" + " " + "buy-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("a", {
      href: release.data.buy.url,
      target: "_blank",
      className: "jsx-478194894",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "BUY")), __jsx("div", {
      className: "jsx-478194894" + " " + "about-release",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, renderSection(release.data.about)), __jsx("div", {
      className: "jsx-478194894" + " " + "credits",
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
      id: "478194894",
      __self: this
    }, ".release-entry-wrapper.jsx-478194894{z-index:-1;padding-left:var(--global-margin);padding-right:var(--global-margin);font-family:var(--font1);font-size:var(--standard-font-size);text-transform:uppercase;}.release-cover.jsx-478194894{cursor:pointer;width:100%;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;}.release-cover.jsx-478194894:hover{opacity:0.8;}.release-details.jsx-478194894{padding-top:0.5rem;padding-bottom:2.5rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;cursor:pointer;}.release-details.jsx-478194894:hover{opacity:0.7;}.mini-play.jsx-478194894{width:0.5rem;margin-right:0.7rem;}.artist-name.jsx-478194894{padding-top:0.5rem;}.release-name.jsx-478194894{padding-top:0.5rem;}.tracklist-details.jsx-478194894{margin-bottom:1rem;padding-right:0.5rem;}.buy-link.jsx-478194894{margin-top:1rem;margin-bottom:1rem;-webkit-text-decoration:underline;text-decoration:underline;}.close-more-info-cross.jsx-478194894{width:0.7rem;position:absolute;right:0;top:0;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;opacity:0.7;cursor:pointer;}.close-more-info-cross.jsx-478194894:hover{width:0.7rem;opacity:1;}.more-info-about-release.jsx-478194894{text-transform:none;margin-bottom:4rem;position:relative;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;line-height:1.1rem;}.more-info-section-title.jsx-478194894{margin-bottom:1rem;margin-top:1rem;}.about-release.jsx-478194894{margin-bottom:2rem;}@media (min-width:801px){.release-entry-wrapper.jsx-478194894{font-size:var(--desktop-font-size);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUmVsZWFzZUVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtIc0IsQUFHMEIsQUFTSSxBQUtILEFBSU8sQUFXUCxBQUdDLEFBSU0sQUFHQSxBQUdBLEFBSUgsQUFLSCxBQVNBLEFBSU8sQUFPRCxBQUlBLEFBS2tCLFdBL0VILENBY3BDLEFBZUEsQ0FHc0IsQUFtQkYsQUFTUixFQW5EQyxDQXFDUSxHQTVCRyxBQWtCeEIsQUFHQSxBQUd1QixBQTZCTCxBQUlsQixDQVhxQixHQUhyQixHQW5EMEIsS0EwQ2hCLEVBbkJWLEVBYzRCLEFBeUI1QixBQVFFLElBM0JNLEFBWVksQ0F0QnBCLENBeEJzQixJQWxCZSxBQXFEVCxZQVlILElBOUNGLG1CQWxCSSxFQVMzQixBQVVvQixhQTJCcEIsS0ExQnlCLEtBbkJhLG9DQUNYLE1BbURiLFlBQ0csT0FuRGpCLEFBOERxQixRQVZyQixXQVdBLHdCQTdDMEIsd0RBRVQsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzMzX2VsaXMvY29tcG9uZW50cy9SZWxlYXNlRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhY2tsaXN0QW5kUGxheWVyIGZyb20gXCIuL1RyYWNrbGlzdEFuZFBsYXllclwiO1xuXG5mdW5jdGlvbiBSZWxlYXNlRW50cnkocHJvcHMpIHtcbiAgY29uc3QgW3BsYXllckRpc3BsYXlJZCwgc2V0UGxheWVyRGlzcGxheUlkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2hvd01vcmVEZXRhaWxzLCBzZXRTaG93TW9yZURldGFpbHNdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gbGV0IHJlbGVhc2VDb3ZlciA9IHVzZVJlZigpO1xuICAvLyByZWxlYXNlQ292ZXIuY3VycmVudCAmJiBjb25zb2xlLmxvZyhyZWxlYXNlQ292ZXIuY3VycmVudCk7XG5cbiAgZnVuY3Rpb24gc2hvd1BsYXllcihldmVudCkge1xuICAgIHNldFBsYXllckRpc3BsYXlJZChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YWdcIikpO1xuICAgIHNldFNob3dNb3JlRGV0YWlscyh0cnVlKTtcbiAgICAvLyByZWxlYXNlQ292ZXIuY3VycmVudCAmJlxuICAgIC8vICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAvLyAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgLy8gICAgIHRvcDogcmVsZWFzZUNvdmVyLmN1cnJlbnQub2Zmc2V0VG9wXG4gICAgLy8gICB9KTtcbiAgfVxuICBmdW5jdGlvbiByZW5kZXJTZWN0aW9uKHNlY3Rpb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIHtzZWN0aW9uWzBdICYmIHNlY3Rpb24ubWFwKHBhcmFncmFwaCA9PiA8cD57cGFyYWdyYXBoLnRleHR9PC9wPil9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGZ1bmN0aW9uIGhpZGVNb3JlRGV0YWlscyhlKSB7XG4gICAgc2V0U2hvd01vcmVEZXRhaWxzKGZhbHNlKTtcbiAgfVxuICBmdW5jdGlvbiBjb252ZXJ0RGF0ZShkYXRlU3RyaW5nKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgfVxuXG4gIHByb3BzLnJlbGVhc2VzICYmIGNvbnNvbGUubG9nKHByb3BzLnJlbGVhc2VzKTtcblxuICByZXR1cm4gKFxuICAgIHByb3BzLnJlbGVhc2VzICYmXG4gICAgcHJvcHMucmVsZWFzZXMubWFwKChyZWxlYXNlLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHRyYWNrbGlzdCA9IE9iamVjdC52YWx1ZXMocmVsZWFzZS5kYXRhLnRyYWNrc1swXSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZWFzZS1lbnRyeS13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3Nob3dQbGF5ZXJ9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsZWFzZS1jb3ZlclwiXG4gICAgICAgICAgICAgICAga2V5PXtgY292ZXIke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgc3JjPXtyZWxlYXNlLmRhdGEuY292ZXIudXJsfVxuICAgICAgICAgICAgICAgIGFsdD1cInJlbGVhc2UtY292ZXJcIlxuICAgICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgICAgICAvLyByZWY9e3JlbGVhc2VDb3Zlcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2BhcnRpc3Qke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpc3QtbmFtZVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhZz17aW5kZXh9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3JlbGVhc2UuZGF0YS5hcnRpc3RbMF0udGV4dH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17YHRpdGxlJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsZWFzZS1uYW1lXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmktcGxheVwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvcGxheS1zb25nLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIm1pbmktcGxheVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGFnPXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7cmVsZWFzZS5kYXRhLnRpdGxlWzBdLnRleHR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7cGFyc2VJbnQocGxheWVyRGlzcGxheUlkKSA9PT0gaW5kZXggJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtzaG93TW9yZURldGFpbHMgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLWluZm8tYWJvdXQtcmVsZWFzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2UtbW9yZS1pbmZvLWNyb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2Nyb3NzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY3Jvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hpZGVNb3JlRGV0YWlsc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2xpc3QtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJTZWN0aW9uKHJlbGVhc2UuZGF0YS50cmFja2xpc3QpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLWRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICBSZWxlYXNlZCB7Y29udmVydERhdGUocmVsZWFzZS5kYXRhW1wicmVsZWFzZS1kYXRlXCJdKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV5LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtyZWxlYXNlLmRhdGEuYnV5LnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBCVVlcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtcmVsZWFzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJTZWN0aW9uKHJlbGVhc2UuZGF0YS5hYm91dCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlZGl0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJTZWN0aW9uKHJlbGVhc2UuZGF0YS5jcmVkaXRzKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxUcmFja2xpc3RBbmRQbGF5ZXJcbiAgICAgICAgICAgICAgICAgIHRyYWNrbGlzdD17dHJhY2tsaXN0fVxuICAgICAgICAgICAgICAgICAgc2V0UGxheWVyRGlzcGxheUlkPXtzZXRQbGF5ZXJEaXNwbGF5SWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5yZWxlYXNlLWVudHJ5LXdyYXBwZXIge1xuICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1nbG9iYWwtbWFyZ2luKTtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tZ2xvYmFsLW1hcmdpbik7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250MSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RhbmRhcmQtZm9udC1zaXplKTtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlbGVhc2UtY292ZXIge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVsZWFzZS1jb3Zlcjpob3ZlciB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlbGVhc2UtZGV0YWlscyB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcblxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVsZWFzZS1kZXRhaWxzOmhvdmVyIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1pbmktcGxheSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGlzdC1uYW1lIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWxlYXNlLW5hbWUge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRyYWNrbGlzdC1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ1eS1saW5rIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xvc2UtbW9yZS1pbmZvLWNyb3NzIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDAuN3JlbTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xvc2UtbW9yZS1pbmZvLWNyb3NzOmhvdmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDAuN3JlbTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb3JlLWluZm8tYWJvdXQtcmVsZWFzZSB7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vcmUtaW5mby1zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hYm91dC1yZWxlYXNlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMXB4KSB7XG4gICAgICAgICAgICAgIC5yZWxlYXNlLWVudHJ5LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZGVza3RvcC1mb250LXNpemUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSlcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVsZWFzZUVudHJ5O1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ReleaseEntry.js */"));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ReleaseEntry);

/***/ })

})
//# sourceMappingURL=index.js.4df249a995acbf4d9551.hot-update.js.map