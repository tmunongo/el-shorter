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
exports.id = "pages/api/[slug]";
exports.ids = ["pages/api/[slug]"];
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

/***/ "(api)/./src/pages/api/[slug].ts":
/*!*********************************!*\
  !*** ./src/pages/api/[slug].ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/client */ \"(api)/./src/db/client.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const slug = req.query[\"slug\"];\n    if (!slug || typeof slug !== \"string\") {\n        res.statusCode = 404;\n        res.send(JSON.stringify({\n            message: \"a slug is required\"\n        }));\n        return;\n    }\n    const data = await _db_client__WEBPACK_IMPORTED_MODULE_0__.prisma.linkShort.findFirst({\n        where: {\n            slug: {\n                equals: slug\n            }\n        }\n    });\n    if (!data) {\n        res.statusCode = 404;\n        res.send(JSON.stringify({\n            message: \"this slug was not found\"\n        }));\n        return;\n    }\n    return res.redirect(data.url);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL1tzbHVnXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQUV6QyxpRUFBZSxPQUFPQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLO0lBQ2xFLE1BQU1DLElBQUksR0FBR0YsR0FBRyxDQUFDRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBRTlCLElBQUksQ0FBQ0QsSUFBSSxJQUFJLE9BQU9BLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDckNELEdBQUcsQ0FBQ0csVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUVyQkgsR0FBRyxDQUFDSSxJQUFJLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1lBQUVDLE9BQU8sRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUMsQ0FBQztRQUU1RCxPQUFPO0tBQ1I7SUFDRCxNQUFNQyxJQUFJLEdBQUcsTUFBTVYsa0VBQTBCLENBQUM7UUFDNUNhLEtBQUssRUFBRTtZQUNMVixJQUFJLEVBQUU7Z0JBQ0pXLE1BQU0sRUFBRVgsSUFBSTthQUNiO1NBQ0Y7S0FDRixDQUFDO0lBQ0YsSUFBSSxDQUFDTyxJQUFJLEVBQUU7UUFDVFIsR0FBRyxDQUFDRyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBRXJCSCxHQUFHLENBQUNJLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUM7WUFBRUMsT0FBTyxFQUFFLHlCQUF5QjtTQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWpFLE9BQU87S0FDUjtJQUVELE9BQU9QLEdBQUcsQ0FBQ2EsUUFBUSxDQUFDTCxJQUFJLENBQUNNLEdBQUcsQ0FBQyxDQUFDO0NBQy9CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbC1zaG9ydGVyLy4vc3JjL3BhZ2VzL2FwaS9bc2x1Z10udHM/M2M2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uL2RiL2NsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3Qgc2x1ZyA9IHJlcS5xdWVyeVtcInNsdWdcIl07XG5cbiAgaWYgKCFzbHVnIHx8IHR5cGVvZiBzbHVnICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDQ7XG5cbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiYSBzbHVnIGlzIHJlcXVpcmVkXCIgfSkpO1xuXG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEubGlua1Nob3J0LmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHNsdWc6IHtcbiAgICAgICAgZXF1YWxzOiBzbHVnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDQ7XG5cbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwidGhpcyBzbHVnIHdhcyBub3QgZm91bmRcIiB9KSk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gcmVzLnJlZGlyZWN0KGRhdGEudXJsKTtcbn07XG4iXSwibmFtZXMiOlsicHJpc21hIiwicmVxIiwicmVzIiwic2x1ZyIsInF1ZXJ5Iiwic3RhdHVzQ29kZSIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsImRhdGEiLCJsaW5rU2hvcnQiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImVxdWFscyIsInJlZGlyZWN0IiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/[slug].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/[slug].ts"));
module.exports = __webpack_exports__;

})();