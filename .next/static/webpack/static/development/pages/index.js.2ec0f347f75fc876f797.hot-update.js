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
      className: "jsx-1713757193",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1713757193" + " " + "release-entry-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("div", {
      onClick: showPlayer,
      className: "jsx-1713757193",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("img", {
      key: "cover".concat(index),
      src: release.data.cover.url.slice(0, -20),
      alt: "release-cover",
      "data-tag": index // ref={releaseCover}
      ,
      className: "jsx-1713757193" + " " + "release-cover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1713757193" + " " + "release-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      key: "artist".concat(index),
      "data-tag": index,
      className: "jsx-1713757193" + " " + "artist-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, release.data.artist[0].text), __jsx("div", {
      key: "title".concat(index),
      "data-tag": index,
      className: "jsx-1713757193" + " " + "release-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("img", {
      src: "/img/play-song.png",
      alt: "mini-play",
      "data-tag": index,
      className: "jsx-1713757193" + " " + "mini-play",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), release.data.title[0].text))), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(playerDisplayId) === index && __jsx("div", {
      className: "jsx-1713757193",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, showMoreDetails && __jsx("div", {
      className: "jsx-1713757193" + " " + "more-info-about-release",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("img", {
      src: "/img/cross.png",
      alt: "cross",
      onClick: hideMoreDetails,
      className: "jsx-1713757193" + " " + "close-more-info-cross",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1713757193" + " " + "tracklist-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, renderSection(release.data.tracklist)), __jsx("div", {
      className: "jsx-1713757193" + " " + "release-date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Released ", convertDate(release.data["release-date"])), __jsx("div", {
      className: "jsx-1713757193" + " " + "buy-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("a", {
      href: release.data.buy.url,
      target: "_blank",
      className: "jsx-1713757193",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "BUY")), __jsx("div", {
      className: "jsx-1713757193" + " " + "about-release",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, renderSection(release.data.about)), __jsx("div", {
      className: "jsx-1713757193" + " " + "credits",
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
      id: "1713757193",
      __self: this
    }, ".release-entry-wrapper.jsx-1713757193{z-index:-1;padding-left:var(--global-margin);padding-right:var(--global-margin);font-family:var(--font1);font-size:var(--standard-font-size);text-transform:uppercase;}.release-cover.jsx-1713757193{cursor:pointer;width:100%;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;}.release-cover.jsx-1713757193:hover{opacity:0.8;}.release-details.jsx-1713757193{padding-top:1.2rem;padding-bottom:3rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;cursor:pointer;}.release-details.jsx-1713757193:hover{opacity:0.7;}.mini-play.jsx-1713757193{width:0.5rem;margin-right:0.7rem;}.release-name.jsx-1713757193,.release-name.jsx-1713757193{padding-top:0.5rem;}.tracklist-details.jsx-1713757193{margin-bottom:1rem;padding-right:0.5rem;}.buy-link.jsx-1713757193{margin-top:1rem;margin-bottom:1rem;-webkit-text-decoration:underline;text-decoration:underline;}.close-more-info-cross.jsx-1713757193{width:0.7rem;position:absolute;right:0;top:0;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;opacity:0.7;cursor:pointer;}.close-more-info-cross.jsx-1713757193:hover{width:0.7rem;opacity:1;}.more-info-about-release.jsx-1713757193{text-transform:none;margin-bottom:4rem;position:relative;-webkit-letter-spacing:0.05rem;-moz-letter-spacing:0.05rem;-ms-letter-spacing:0.05rem;letter-spacing:0.05rem;line-height:1rem;}.more-info-section-title.jsx-1713757193{margin-bottom:1rem;margin-top:1rem;}.about-release.jsx-1713757193{margin-bottom:2rem;}@media (min-width:801px){.release-entry-wrapper.jsx-1713757193{font-size:var(--desktop-font-size);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8zM19lbGlzL2NvbXBvbmVudHMvUmVsZWFzZUVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtIc0IsQUFHMEIsQUFTSSxBQUtILEFBSU8sQUFXUCxBQUdDLEFBTU0sQUFHQSxBQUlILEFBS0gsQUFTQSxBQUlPLEFBT0QsQUFJQSxBQUtrQixXQTlFSCxDQWNwQyxBQWVBLENBR3NCLEFBa0JGLEFBU1IsRUFsREMsQ0FvQ1EsR0EzQkMsQUFvQnRCLEFBR3VCLEFBNkJMLEFBSWxCLENBWHFCLEdBSHJCLEdBbEQwQixLQXlDaEIsRUFsQlYsRUFhNEIsQUF5QjVCLEFBUUUsSUE1RG9CLEFBaUNkLEFBWVksQ0F0QnBCLEtBekNxQyxBQW9EVCxZQVlILEVBN0NGLHFCQWxCSSxBQW1CUCxFQVZwQixhQW9DQSxHQXpCeUIsT0FuQmEsb0NBQ1gsTUFrRGIsWUFDRyxPQWxEakIsQUE2RG1CLFFBVm5CLFNBV0Esd0JBNUMwQix3REFFVCxlQUNqQiIsImZpbGUiOiIvVXNlcnMvamVyZW1pZS93ZWIvMzNfZWxpcy9jb21wb25lbnRzL1JlbGVhc2VFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFja2xpc3RBbmRQbGF5ZXIgZnJvbSBcIi4vVHJhY2tsaXN0QW5kUGxheWVyXCI7XG5cbmZ1bmN0aW9uIFJlbGVhc2VFbnRyeShwcm9wcykge1xuICBjb25zdCBbcGxheWVyRGlzcGxheUlkLCBzZXRQbGF5ZXJEaXNwbGF5SWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzaG93TW9yZURldGFpbHMsIHNldFNob3dNb3JlRGV0YWlsc10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBsZXQgcmVsZWFzZUNvdmVyID0gdXNlUmVmKCk7XG4gIC8vIHJlbGVhc2VDb3Zlci5jdXJyZW50ICYmIGNvbnNvbGUubG9nKHJlbGVhc2VDb3Zlci5jdXJyZW50KTtcblxuICBmdW5jdGlvbiBzaG93UGxheWVyKGV2ZW50KSB7XG4gICAgc2V0UGxheWVyRGlzcGxheUlkKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhZ1wiKSk7XG4gICAgc2V0U2hvd01vcmVEZXRhaWxzKHRydWUpO1xuICAgIC8vIHJlbGVhc2VDb3Zlci5jdXJyZW50ICYmXG4gICAgLy8gICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgIC8vICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAvLyAgICAgdG9wOiByZWxlYXNlQ292ZXIuY3VycmVudC5vZmZzZXRUb3BcbiAgICAvLyAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJlbmRlclNlY3Rpb24oc2VjdGlvbikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAge3NlY3Rpb25bMF0gJiYgc2VjdGlvbi5tYXAocGFyYWdyYXBoID0+IDxwPntwYXJhZ3JhcGgudGV4dH08L3A+KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgZnVuY3Rpb24gaGlkZU1vcmVEZXRhaWxzKGUpIHtcbiAgICBzZXRTaG93TW9yZURldGFpbHMoZmFsc2UpO1xuICB9XG4gIGZ1bmN0aW9uIGNvbnZlcnREYXRlKGRhdGVTdHJpbmcpIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICB9XG5cbiAgcHJvcHMucmVsZWFzZXMgJiYgY29uc29sZS5sb2cocHJvcHMucmVsZWFzZXMpO1xuXG4gIHJldHVybiAoXG4gICAgcHJvcHMucmVsZWFzZXMgJiZcbiAgICBwcm9wcy5yZWxlYXNlcy5tYXAoKHJlbGVhc2UsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgdHJhY2tsaXN0ID0gT2JqZWN0LnZhbHVlcyhyZWxlYXNlLmRhdGEudHJhY2tzWzBdKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLWVudHJ5LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17c2hvd1BsYXllcn0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxlYXNlLWNvdmVyXCJcbiAgICAgICAgICAgICAgICBrZXk9e2Bjb3ZlciR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBzcmM9e3JlbGVhc2UuZGF0YS5jb3Zlci51cmwuc2xpY2UoMCwgLTIwKX1cbiAgICAgICAgICAgICAgICBhbHQ9XCJyZWxlYXNlLWNvdmVyXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRhZz17aW5kZXh9XG4gICAgICAgICAgICAgICAgLy8gcmVmPXtyZWxlYXNlQ292ZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZWFzZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtgYXJ0aXN0JHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aXN0LW5hbWVcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10YWc9e2luZGV4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtyZWxlYXNlLmRhdGEuYXJ0aXN0WzBdLnRleHR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2B0aXRsZSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGVhc2UtbmFtZVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhZz17aW5kZXh9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5pLXBsYXlcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3BsYXktc29uZy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJtaW5pLXBsYXlcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRhZz17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3JlbGVhc2UuZGF0YS50aXRsZVswXS50ZXh0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3BhcnNlSW50KHBsYXllckRpc3BsYXlJZCkgPT09IGluZGV4ICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7c2hvd01vcmVEZXRhaWxzICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZS1pbmZvLWFib3V0LXJlbGVhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlLW1vcmUtaW5mby1jcm9zc1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9jcm9zcy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImNyb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoaWRlTW9yZURldGFpbHN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tsaXN0LWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyU2VjdGlvbihyZWxlYXNlLmRhdGEudHJhY2tsaXN0KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsZWFzZS1kYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgUmVsZWFzZWQge2NvbnZlcnREYXRlKHJlbGVhc2UuZGF0YVtcInJlbGVhc2UtZGF0ZVwiXSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1eS1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cmVsZWFzZS5kYXRhLmJ1eS51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQlVZXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXJlbGVhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyU2VjdGlvbihyZWxlYXNlLmRhdGEuYWJvdXQpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWRpdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyU2VjdGlvbihyZWxlYXNlLmRhdGEuY3JlZGl0cyl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8VHJhY2tsaXN0QW5kUGxheWVyXG4gICAgICAgICAgICAgICAgICB0cmFja2xpc3Q9e3RyYWNrbGlzdH1cbiAgICAgICAgICAgICAgICAgIHNldFBsYXllckRpc3BsYXlJZD17c2V0UGxheWVyRGlzcGxheUlkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucmVsZWFzZS1lbnRyeS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tZ2xvYmFsLW1hcmdpbik7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLWdsb2JhbC1tYXJnaW4pO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udDEpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN0YW5kYXJkLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZWxlYXNlLWNvdmVyIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlbGVhc2UtY292ZXI6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZWxlYXNlLWRldGFpbHMge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMS4ycmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWxlYXNlLWRldGFpbHM6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWluaS1wbGF5IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZWxlYXNlLW5hbWUsXG4gICAgICAgICAgICAucmVsZWFzZS1uYW1lIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50cmFja2xpc3QtZGV0YWlscyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idXktbGluayB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsb3NlLW1vcmUtaW5mby1jcm9zcyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAwLjdyZW07XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsb3NlLW1vcmUtaW5mby1jcm9zczpob3ZlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAwLjdyZW07XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9yZS1pbmZvLWFib3V0LXJlbGVhc2Uge1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9yZS1pbmZvLXNlY3Rpb24tdGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFib3V0LXJlbGVhc2Uge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODAxcHgpIHtcbiAgICAgICAgICAgICAgLnJlbGVhc2UtZW50cnktd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1kZXNrdG9wLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWxlYXNlRW50cnk7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/33_elis/components/ReleaseEntry.js */"));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ReleaseEntry);

/***/ })

})
//# sourceMappingURL=index.js.2ec0f347f75fc876f797.hot-update.js.map