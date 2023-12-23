"use strict";
(() => {
var exports = {};
exports.id = 3155;
exports.ids = [3155,3748];
exports.modules = {

/***/ 3868:
/***/ ((module) => {

module.exports = require("@typegoose/typegoose");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 752:
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ 7349:
/***/ ((module) => {

module.exports = import("@auth/mongodb-adapter");;

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 1499:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1092);
/* harmony import */ var _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9795);
/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8355);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db_models_userModel__WEBPACK_IMPORTED_MODULE_1__, _auth_nextauth___WEBPACK_IMPORTED_MODULE_2__]);
([_db_models_userModel__WEBPACK_IMPORTED_MODULE_1__, _auth_nextauth___WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function handler(req, res) {
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(req, res, _auth_nextauth___WEBPACK_IMPORTED_MODULE_2__.authOptions);
    if (!session || !session.user) {
        return res.status(401).json({
            error: "Unauthorized"
        });
    }
    try {
        if (req.method === "GET") {
            const response = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .UserModel */ .T.findOne({
                email: session.user.email
            }).select("favorites").sort({
                createdAt: -1
            }).lean();
            if (response && !response.favorites) {
                return res.status(200).json({
                    favorites: []
                });
            }
            return res.status(200).json(response.favorites);
        } else if (req.method === "POST") {
            const favorites = req.body;
            if (!favorites) {
                return res.status(400).json({
                    error: "favorites are required"
                });
            }
            const updatedUser = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .UserModel */ .T.findOneAndUpdate({
                email: session.user.email
            }, {
                $addToSet: {
                    favorites: favorites
                }
            }, {
                new: true
            }).select("favorites");
            if (!updatedUser) {
                return res.status(404).json({
                    error: "User not found"
                });
            }
            return res.status(200).json(favorites);
        } else if (req.method === "DELETE") {
            const favorites = req.body;
            if (!favorites) {
                return res.status(400).json({
                    error: "favorites are required"
                });
            }
            const updatedUser = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .UserModel */ .T.findOneAndUpdate({
                email: session.user.email
            }, {
                $pull: {
                    favorites: favorites
                }
            }, {
                new: true
            }).select("favorites");
            if (!updatedUser) {
                return res.status(404).json({
                    error: "favorite not found or photo not found in user's photo array"
                });
            }
            return res.status(200).json(updatedUser.favorites);
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
var __webpack_exports__ = __webpack_require__.X(0, [2246,9795,8355], () => (__webpack_exec__(1499)));
module.exports = __webpack_exports__;

})();