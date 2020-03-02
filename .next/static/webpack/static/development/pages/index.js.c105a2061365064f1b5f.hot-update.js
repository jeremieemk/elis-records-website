webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ReleaseEntry.js":
/*!************************************!*\
  !*** ./components/ReleaseEntry.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AudioPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioPlayer */ "./components/AudioPlayer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function ReleaseEntry(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      playerDisplayId = _useState[0],
      setPlayerDisplayId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      selectedTrack = _useState2[0],
      setSelectedTrack = _useState2[1];

  function showPlayer(event) {
    setPlayerDisplayId(event.target.getAttribute("data-tag"));
  }

  function changeTrack(event) {
    setSelectedTrack(event.target.getAttribute("data-tag"));
  }

  console.log(props.releases.data);
  return null; //   props.releases &&
  //   props.releases.data.map(function(release, index) {
  //     let tracklist = Object.values(release.tracks[0]);
  //     return (
  //       <div>
  //         <div className="release-entry-wrapper">
  //           <img
  //             className="release-cover"
  //             onClick={showPlayer}
  //             key={`cover${index}`}
  //             src={release.cover.url}
  //             alt="release-cover"
  //             data-tag={index}
  //           />
  //           <div className="release-details">
  //             <div key={`artist${index}`} className="artist-name">
  //               {release.artist[0].text}
  //             </div>
  //             <div key={`title${index}`} className="release-name">
  //               {release.title[0].text}
  //             </div>
  //           </div>
  //           {parseInt(playerDisplayId) === index && (
  //             <div className="audio-player-container">
  //               {tracklist.map((track, index) => (
  //                 <div data-tag={index} onClick={changeTrack}>
  //                   {track.name.slice(0, -4)}
  //                 </div>
  //               ))}
  //               <AudioPlayer track={tracklist[selectedTrack]} />
  //             </div>
  //           )}
  //         </div>
  //         <style jsx>{`
  //           .release-entry-wrapper {
  //           }
  //           .release-cover {
  //             width: 100%;
  //           }
  //           .release-details {
  //           }
  //           .artist-name {
  //           }
  //           .artist-name,
  //           .release-name {
  //           }
  //           .audio-player-container {
  //             position: fixed;
  //             bottom: 0;
  //             background: white;
  //             padding: 1rem;
  //             width: 100%;
  //             z-index: 2;
  //           }
  //         `}</style>
  //       </div>
  //     );
  //   })
  // );
}

/* harmony default export */ __webpack_exports__["default"] = (ReleaseEntry);

/***/ })

})
//# sourceMappingURL=index.js.c105a2061365064f1b5f.hot-update.js.map