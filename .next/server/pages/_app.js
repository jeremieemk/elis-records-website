"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-javascript */ \"prismic-javascript\");\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component , pageProps  }) {\n    const { 0: releases , 1: setReleasesData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const { 0: dataIsLoaded , 1: setDataIsLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const apiEndpoint = \"https://elis-records.prismic.io/api/v2\";\n    const accessToken = \"\";\n    const Client = prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default().client(apiEndpoint, {\n        accessToken\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await Client.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default().Predicates.at(\"document.type\", \"release\"), {\n                orderings: \"[my.release.release-date desc]\"\n            });\n            if (response) {\n                setReleasesData(response.results);\n                setDataIsLoaded(true);\n            }\n        };\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        releases: releases,\n        dataIsLoaded: dataIsLoaded\n    }, void 0, false, {\n        fileName: \"/Users/jeremie/code/elis-records-website/pages/_app.js\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, this));\n}\n// Only uncomment this method if you have blocking data requirements for\n// every single page in your application. This disables the ability to\n// perform automatic static optimization, causing every page in your app to\n// be server-side rendered.\n//\n// MyApp.getInitialProps = async (appContext) => {\n//   // calls page's `getInitialProps` and fills `appProps.pageProps`\n//   const appProps = await App.getInitialProps(appContext);\n//\n//   return { ...appProps }\n// }\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0c7U0FFbENHLEdBQUcsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RDLEtBQUssTUFBRUMsUUFBUSxNQUFFQyxlQUFlLE1BQUlMLCtDQUFRLENBQUMsSUFBSTtJQUNqRCxLQUFLLE1BQUVNLFlBQVksTUFBRUMsZUFBZSxNQUFJUCwrQ0FBUSxDQUFDLEtBQUs7SUFDdEQsS0FBSyxDQUFDUSxXQUFXLEdBQUcsQ0FBd0M7SUFDNUQsS0FBSyxDQUFDQyxXQUFXLEdBQUcsQ0FBRTtJQUN0QixLQUFLLENBQUNDLE1BQU0sR0FBR1osZ0VBQWMsQ0FBQ1UsV0FBVyxFQUFFLENBQUM7UUFBQ0MsV0FBVztJQUFDLENBQUM7SUFDMURWLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ2EsU0FBUyxhQUFlLENBQUM7WUFDN0IsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDSCxNQUFNLENBQUNJLEtBQUssQ0FDakNoQix1RUFBcUIsQ0FBQyxDQUFlLGdCQUFFLENBQVMsV0FDaEQsQ0FBQztnQkFBQ21CLFNBQVMsRUFBRSxDQUFnQztZQUFDLENBQUM7WUFFakQsRUFBRSxFQUFFSixRQUFRLEVBQUUsQ0FBQztnQkFDYlIsZUFBZSxDQUFDUSxRQUFRLENBQUNLLE9BQU87Z0JBQ2hDWCxlQUFlLENBQUMsSUFBSTtZQUN0QixDQUFDO1FBQ0gsQ0FBQztRQUNESyxTQUFTO0lBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU0sNkVBQUVWLFNBQVM7UUFBQ0UsUUFBUSxFQUFFQSxRQUFRO1FBQUVFLFlBQVksRUFBRUEsWUFBWTs7Ozs7O0FBQ2xFLENBQUM7QUFFRCxFQUF3RTtBQUN4RSxFQUFzRTtBQUN0RSxFQUEyRTtBQUMzRSxFQUEyQjtBQUMzQixFQUFFO0FBQ0YsRUFBa0Q7QUFDbEQsRUFBcUU7QUFDckUsRUFBNEQ7QUFDNUQsRUFBRTtBQUNGLEVBQTJCO0FBQzNCLEVBQUk7QUFFSixpRUFBZUwsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMjhfcG9ydGZvbGlvLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlzbWljIGZyb20gXCJwcmlzbWljLWphdmFzY3JpcHRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbcmVsZWFzZXMsIHNldFJlbGVhc2VzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2RhdGFJc0xvYWRlZCwgc2V0RGF0YUlzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYXBpRW5kcG9pbnQgPSBcImh0dHBzOi8vZWxpcy1yZWNvcmRzLnByaXNtaWMuaW8vYXBpL3YyXCI7XG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gXCJcIjtcbiAgY29uc3QgQ2xpZW50ID0gUHJpc21pYy5jbGllbnQoYXBpRW5kcG9pbnQsIHsgYWNjZXNzVG9rZW4gfSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBDbGllbnQucXVlcnkoXG4gICAgICAgIFByaXNtaWMuUHJlZGljYXRlcy5hdChcImRvY3VtZW50LnR5cGVcIiwgXCJyZWxlYXNlXCIpLFxuICAgICAgICB7IG9yZGVyaW5nczogXCJbbXkucmVsZWFzZS5yZWxlYXNlLWRhdGUgZGVzY11cIiB9XG4gICAgICApO1xuICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIHNldFJlbGVhc2VzRGF0YShyZXNwb25zZS5yZXN1bHRzKTtcbiAgICAgICAgc2V0RGF0YUlzTG9hZGVkKHRydWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIDxDb21wb25lbnQgcmVsZWFzZXM9e3JlbGVhc2VzfSBkYXRhSXNMb2FkZWQ9e2RhdGFJc0xvYWRlZH0gLz47XG59XG5cbi8vIE9ubHkgdW5jb21tZW50IHRoaXMgbWV0aG9kIGlmIHlvdSBoYXZlIGJsb2NraW5nIGRhdGEgcmVxdWlyZW1lbnRzIGZvclxuLy8gZXZlcnkgc2luZ2xlIHBhZ2UgaW4geW91ciBhcHBsaWNhdGlvbi4gVGhpcyBkaXNhYmxlcyB0aGUgYWJpbGl0eSB0b1xuLy8gcGVyZm9ybSBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiwgY2F1c2luZyBldmVyeSBwYWdlIGluIHlvdXIgYXBwIHRvXG4vLyBiZSBzZXJ2ZXItc2lkZSByZW5kZXJlZC5cbi8vXG4vLyBNeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuLy8gICAvLyBjYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4vLyAgIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcbi8vXG4vLyAgIHJldHVybiB7IC4uLmFwcFByb3BzIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlbGVhc2VzIiwic2V0UmVsZWFzZXNEYXRhIiwiZGF0YUlzTG9hZGVkIiwic2V0RGF0YUlzTG9hZGVkIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsIkNsaWVudCIsImNsaWVudCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwicXVlcnkiLCJQcmVkaWNhdGVzIiwiYXQiLCJvcmRlcmluZ3MiLCJyZXN1bHRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "prismic-javascript":
/*!*************************************!*\
  !*** external "prismic-javascript" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("prismic-javascript");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();