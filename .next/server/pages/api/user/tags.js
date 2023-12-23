"use strict";
(() => {
var exports = {};
exports.id = 1781;
exports.ids = [1781];
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

/***/ 975:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1092);
/* harmony import */ var _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9795);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db_models_userModel__WEBPACK_IMPORTED_MODULE_1__]);
_db_models_userModel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const { username } = req.query;
    if (!username) {
        return res.status(400).json({
            error: "Username is required"
        });
    }
    try {
        if (req.method === "POST") {
            const { tag } = req.body;
            if (!tag || typeof tag !== "string") {
                return res.status(400).json({
                    error: "Tag is required and must be a string"
                });
            }
            const updatedUser = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .UserModel */ .T.findOneAndUpdate({
                email: username
            }, {
                $addToSet: {
                    tags: tag
                }
            }, {
                new: true
            });
            if (!updatedUser) {
                return res.status(404).json({
                    error: "User not found"
                });
            }
            return res.status(200).json({
                tags: updatedUser.tags
            });
        } else if (req.method === "DELETE") {
            const { tag } = req.body;
            if (!tag || typeof tag !== "string") {
                return res.status(400).json({
                    error: "Tag is required and must be a string"
                });
            }
            const updatedUser = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .UserModel */ .T.findOneAndUpdate({
                email: username
            }, {
                $pull: {
                    tags: tag
                }
            }, {
                new: true
            });
            if (!updatedUser) {
                return res.status(404).json({
                    error: "User not found"
                });
            }
            return res.status(200).json({
                tags: updatedUser.tags
            });
        } else if (req.method === "GET") {
            const user = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .UserModel */ .T.findOne({
                email: username
            }).select("tags");
            if (!user) {
                return res.status(404).json({
                    error: "User not found"
                });
            }
            return res.status(200).json({
                tags: user.tags
            });
        } else {
            return res.status(405).json({
                error: "Method not allowed"
            });
        }
    } catch (error) {
        console.error("Error in API handler:", error);
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
var __webpack_exports__ = __webpack_require__.X(0, [2246,9795], () => (__webpack_exec__(975)));
module.exports = __webpack_exports__;

})();