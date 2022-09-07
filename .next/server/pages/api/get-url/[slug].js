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
exports.id = "pages/api/get-url/[slug]";
exports.ids = ["pages/api/get-url/[slug]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./src/db/client.ts":
/*!**************************!*\
  !*** ./src/db/client.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGIvY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU92QyxNQUFNQyxNQUFNLEdBQ2pCQyxNQUFNLENBQUNELE1BQU0sSUFDYixJQUFJRCx3REFBWSxDQUFDO0lBQ2ZHLEdBQUcsRUFBRTtRQUFDLE9BQU87S0FBQztDQUNmLENBQUMsQ0FBQztBQUVMLElBQUlDLElBQXFDLEVBQUVGLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbC1zaG9ydGVyLy4vc3JjL2RiL2NsaWVudC50cz9lMDUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGFsb3cgZ2xvYmFsIHZhciBkZWNsYXJhdGlvbnNcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsLnByaXNtYSB8fFxuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFtcInF1ZXJ5XCJdLFxuICB9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/db/client.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/get-url/[slug].ts":
/*!*****************************************!*\
  !*** ./src/pages/api/get-url/[slug].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../db/client */ \"(api)/./src/db/client.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const slug = req.query[\"slug\"];\n    if (!slug || typeof slug !== \"string\") {\n        res.statusCode = 404;\n        res.send(JSON.stringify({\n            message: \"a slug is required\"\n        }));\n        return;\n    }\n    const data = await _db_client__WEBPACK_IMPORTED_MODULE_0__.prisma.linkShort.findFirst({\n        where: {\n            slug: {\n                equals: slug\n            }\n        }\n    });\n    if (!data) {\n        res.statusCode = 404;\n        res.setHeader(\"Content-Type\", \"application/json\");\n        res.setHeader(\"Access-Control-Allow-Origin\", \"*\");\n        res.setHeader(\"Cache-Control\", \"s-maxage=1000000, stale-while-revalidate\");\n        res.send(JSON.stringify({\n            message: \"this slug was not found\"\n        }));\n        return;\n    }\n    return res.json(data);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldC11cmwvW3NsdWddLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRTRDO0FBRTVDLGlFQUFlLE9BQU9DLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUs7SUFDbEUsTUFBTUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFFOUIsSUFBSSxDQUFDRCxJQUFJLElBQUksT0FBT0EsSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUNyQ0QsR0FBRyxDQUFDRyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBRXJCSCxHQUFHLENBQUNJLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUM7WUFBRUMsT0FBTyxFQUFFLG9CQUFvQjtTQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTVELE9BQU87S0FDUjtJQUNELE1BQU1DLElBQUksR0FBRyxNQUFNVixrRUFBMEIsQ0FBQztRQUM1Q2EsS0FBSyxFQUFFO1lBQ0xWLElBQUksRUFBRTtnQkFDSlcsTUFBTSxFQUFFWCxJQUFJO2FBQ2I7U0FDRjtLQUNGLENBQUM7SUFDRixJQUFJLENBQUNPLElBQUksRUFBRTtRQUNUUixHQUFHLENBQUNHLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFFckJILEdBQUcsQ0FBQ2EsU0FBUyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xEYixHQUFHLENBQUNhLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRGIsR0FBRyxDQUFDYSxTQUFTLENBQUMsZUFBZSxFQUFFLDBDQUEwQyxDQUFDLENBQUM7UUFFM0ViLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztZQUFFQyxPQUFPLEVBQUUseUJBQXlCO1NBQUUsQ0FBQyxDQUFDLENBQUM7UUFFakUsT0FBTztLQUNSO0lBRUQsT0FBT1AsR0FBRyxDQUFDYyxJQUFJLENBQUNOLElBQUksQ0FBQyxDQUFDO0NBQ3ZCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbC1zaG9ydGVyLy4vc3JjL3BhZ2VzL2FwaS9nZXQtdXJsL1tzbHVnXS50cz9iN2Q3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi4vLi4vLi4vZGIvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCBzbHVnID0gcmVxLnF1ZXJ5W1wic2x1Z1wiXTtcblxuICBpZiAoIXNsdWcgfHwgdHlwZW9mIHNsdWcgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXMuc3RhdHVzQ29kZSA9IDQwNDtcblxuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJhIHNsdWcgaXMgcmVxdWlyZWRcIiB9KSk7XG5cbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5saW5rU2hvcnQuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgc2x1Zzoge1xuICAgICAgICBlcXVhbHM6IHNsdWcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXMuc3RhdHVzQ29kZSA9IDQwNDtcblxuICAgIHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIHJlcy5zZXRIZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xuICAgIHJlcy5zZXRIZWFkZXIoXCJDYWNoZS1Db250cm9sXCIsIFwicy1tYXhhZ2U9MTAwMDAwMCwgc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZVwiKTtcblxuICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJ0aGlzIHNsdWcgd2FzIG5vdCBmb3VuZFwiIH0pKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiByZXMuanNvbihkYXRhKTtcbn07XG4iXSwibmFtZXMiOlsicHJpc21hIiwicmVxIiwicmVzIiwic2x1ZyIsInF1ZXJ5Iiwic3RhdHVzQ29kZSIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsImRhdGEiLCJsaW5rU2hvcnQiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImVxdWFscyIsInNldEhlYWRlciIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/get-url/[slug].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/get-url/[slug].ts"));
module.exports = __webpack_exports__;

})();