"use strict";
(() => {
var exports = {};
exports.id = 1706;
exports.ids = [1706];
exports.modules = {

/***/ 3868:
/***/ ((module) => {

module.exports = require("@typegoose/typegoose");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 752:
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 7086:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3511);
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1092);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db_models__WEBPACK_IMPORTED_MODULE_0__]);
_db_models__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    try {
        await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
        if (req.method !== "GET") {
            return res.status(405).json({
                error: "Method not allowed"
            });
        }
        const { page, username } = req.query;
        if (!username) {
            return res.status(400).json({
                error: "Username is required"
            });
        }
        const perPage = 10;
        const skip = page ? parseInt(page) * perPage : 0;
        const response = await _db_models__WEBPACK_IMPORTED_MODULE_0__/* .TimeLineModel */ .HQ.find({
            authorId: username
        }).sort({
            createdAt: -1
        }).skip(skip).limit(perPage).lean();
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error fetching timelines:", error);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2246,5352,3511], () => (__webpack_exec__(7086)));
module.exports = __webpack_exports__;

})();