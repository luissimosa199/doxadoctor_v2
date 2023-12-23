"use strict";
(() => {
var exports = {};
exports.id = 8371;
exports.ids = [8371];
exports.modules = {

/***/ 3868:
/***/ ((module) => {

module.exports = require("@typegoose/typegoose");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

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

/***/ 8990:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3511);
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1092);
/* harmony import */ var _db_models_userModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9795);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db_models__WEBPACK_IMPORTED_MODULE_0__, _db_models_userModel__WEBPACK_IMPORTED_MODULE_2__]);
([_db_models__WEBPACK_IMPORTED_MODULE_0__, _db_models_userModel__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function handler(req, res) {
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    if (req.method === "GET") {
        const modelType = req.query.modelType;
        try {
            let tags;
            if (modelType === "user") {
                tags = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_2__/* .UserModel */ .T.distinct("tags");
            } else {
                // Default to timeline if no modelType is provided or if it's not "user"
                tags = await _db_models__WEBPACK_IMPORTED_MODULE_0__/* .TimeLineModel */ .HQ.distinct("tags");
            }
            res.status(200).json(tags);
        } catch (error) {
            res.status(500).json({
                error: "Internal server error"
            });
        }
    } else {
        res.status(405).json({
            error: "Method not allowed"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2246,9795,5352,3511], () => (__webpack_exec__(8990)));
module.exports = __webpack_exports__;

})();