"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\nasync function middleware(req, ev) {\n    if (req.nextUrl.pathname.startsWith(\"/api/get-url/\")) {\n        console.log(\"returning early\");\n        return;\n    }\n    console.log(\"Path? \", req.nextUrl.pathname);\n    const slug = req.nextUrl.pathname.split(\"/\").pop();\n    const data = (await fetch(`${req.nextUrl.origin}/api/get-url/${slug}`)).json();\n    console.log(\"data?? \", data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLGVBQWVBLFVBQVUsQ0FBQ0MsR0FBZ0IsRUFBRUMsRUFBa0IsRUFBRTtJQUNyRSxJQUFJRCxHQUFHLENBQUNFLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQUU7UUFDcERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsT0FBTztLQUNSO0lBRURELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBRU4sR0FBRyxDQUFDRSxPQUFPLENBQUNDLFFBQVEsQ0FBQyxDQUFDO0lBRTVDLE1BQU1JLElBQUksR0FBR1AsR0FBRyxDQUFDRSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUU7SUFFbEQsTUFBTUMsSUFBSSxHQUFHLENBQ1gsTUFBTUMsS0FBSyxDQUFDLENBQUMsRUFBRVgsR0FBRyxDQUFDRSxPQUFPLENBQUNVLE1BQU0sQ0FBQyxhQUFhLEVBQUVMLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDekQsQ0FBQ00sSUFBSSxFQUFFO0lBRVJSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRUksSUFBSSxDQUFDLENBQUM7Q0FDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RmV0Y2hFdmVudCwgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxOiBOZXh0UmVxdWVzdCwgZXY6IE5leHRGZXRjaEV2ZW50KSB7XG4gIGlmIChyZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2FwaS9nZXQtdXJsL1wiKSkge1xuICAgIGNvbnNvbGUubG9nKFwicmV0dXJuaW5nIGVhcmx5XCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiUGF0aD8gXCIsIHJlcS5uZXh0VXJsLnBhdGhuYW1lKTtcblxuICBjb25zdCBzbHVnID0gcmVxLm5leHRVcmwucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnBvcCgpO1xuXG4gIGNvbnN0IGRhdGEgPSAoXG4gICAgYXdhaXQgZmV0Y2goYCR7cmVxLm5leHRVcmwub3JpZ2lufS9hcGkvZ2V0LXVybC8ke3NsdWd9YClcbiAgKS5qc29uKCk7XG5cbiAgY29uc29sZS5sb2coXCJkYXRhPz8gXCIsIGRhdGEpO1xufVxuIl0sIm5hbWVzIjpbIm1pZGRsZXdhcmUiLCJyZXEiLCJldiIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJjb25zb2xlIiwibG9nIiwic2x1ZyIsInNwbGl0IiwicG9wIiwiZGF0YSIsImZldGNoIiwib3JpZ2luIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});