"use strict";
(() => {
var exports = {};
exports.id = 8551;
exports.ids = [8551,3748];
exports.modules = {

/***/ 3868:
/***/ ((module) => {

module.exports = require("@typegoose/typegoose");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

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

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 4951:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1092);
/* harmony import */ var _db_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3511);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6555);
/* harmony import */ var _db_models_userModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9795);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8355);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db_models__WEBPACK_IMPORTED_MODULE_1__, uuid__WEBPACK_IMPORTED_MODULE_3__, _db_models_userModel__WEBPACK_IMPORTED_MODULE_4__, _auth_nextauth___WEBPACK_IMPORTED_MODULE_6__]);
([_db_models__WEBPACK_IMPORTED_MODULE_1__, uuid__WEBPACK_IMPORTED_MODULE_3__, _db_models_userModel__WEBPACK_IMPORTED_MODULE_4__, _auth_nextauth___WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function handler(req, res) {
    const { userData, id } = req.body;
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_5__.getServerSession)(req, res, _auth_nextauth___WEBPACK_IMPORTED_MODULE_6__.authOptions);
    if (session && session.user) {
        const userId = session.user.email;
        const cookies = (0,cookie__WEBPACK_IMPORTED_MODULE_2__.parse)(req.headers.cookie || "");
        const userAgentId = cookies.user_agent_id;
        const updatedUser = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_4__/* .UserModel */ .T.findOneAndUpdate({
            email: userId
        }, {
            $addToSet: {
                user_agent_id: userAgentId
            }
        }, {
            new: true,
            upsert: false
        });
    }
    if (req.method === "POST") {
        const newId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)();
        try {
            await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
            const userAgent = new _db_models__WEBPACK_IMPORTED_MODULE_1__/* .UserAgentModel */ .zI({
                visits: [
                    userData
                ],
                _id: newId
            });
            await userAgent.save();
        } catch (error) {
            console.error("Error creating UserAgent:", error);
            res.status(500).json({
                error: "Failed to create userAgent"
            });
        }
        res.setHeader("Set-Cookie", (0,cookie__WEBPACK_IMPORTED_MODULE_2__.serialize)(`user_agent_id`, newId, {
            httpOnly: false,
            secure: "production" !== "development",
            expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            sameSite: "strict",
            path: "/"
        }));
        res.status(200).json({
            message: "userAgent registered"
        });
    } else if (req.method === "PUT") {
        try {
            await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
            await _db_models__WEBPACK_IMPORTED_MODULE_1__/* .UserAgentModel */ .zI.findByIdAndUpdate(id, {
                $push: {
                    visits: userData
                }
            });
            res.status(200).json({
                message: "UserAgent updated"
            });
        } catch (error) {
            console.error("Error updating UserAgent:", error);
            res.status(500).json({
                error: "Failed to update userAgent"
            });
        }
    } else if (req.method === "GET") {
        try {
            await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
            const userAgentData = await _db_models__WEBPACK_IMPORTED_MODULE_1__/* .UserAgentModel */ .zI.find();
            const users = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_4__/* .UserModel */ .T.find({
                user_agent_id: {
                    $exists: true
                }
            }).select("email user_agent_id");
            res.status(200).json({
                userAgentData,
                users
            });
        } catch (error) {
            console.error("Error updating UserAgent:", error);
            res.status(500).json({
                error: "Failed to retrieve userAgent data"
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
var __webpack_exports__ = __webpack_require__.X(0, [2246,9795,5352,3511,8355], () => (__webpack_exec__(4951)));
module.exports = __webpack_exports__;

})();