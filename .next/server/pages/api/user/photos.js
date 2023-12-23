"use strict";
(() => {
var exports = {};
exports.id = 3998;
exports.ids = [3998];
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

/***/ 923:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1092);
/* harmony import */ var _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9795);
/* harmony import */ var _db_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3511);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db_models_userModel__WEBPACK_IMPORTED_MODULE_1__, _db_models__WEBPACK_IMPORTED_MODULE_2__]);
([_db_models_userModel__WEBPACK_IMPORTED_MODULE_1__, _db_models__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function handler(req, res) {
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const { username } = req.query;
    if (!username) {
        return res.status(400).json({
            error: "Username is required"
        });
    }
    try {
        if (req.method === "GET") {
            const { page } = req.query;
            const perPage = 10;
            const skip = page ? parseInt(page) * perPage : 0;
            const response = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .UserModel */ .T.findOne({
                email: username
            }).select("photos").sort({
                createdAt: -1
            }).skip(skip).limit(perPage).lean();
            if (req.query.count) {
                return res.status(200).json(response?.photos?.length || 0);
            }
            if (response && !response.photos) {
                return res.status(200).json({
                    photos: []
                });
            }
            return res.status(200).json(response.photos);
        } else if (req.method === "POST") {
            const { photos } = req.body;
            if (!photos || !Array.isArray(photos)) {
                return res.status(400).json({
                    error: "Photos are required and must be an array"
                });
            }
            const updatedUser = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .UserModel */ .T.findOneAndUpdate({
                email: username
            }, {
                $push: {
                    photos: {
                        $each: photos
                    }
                }
            }, {
                new: true
            }).select("photos");
            if (!updatedUser) {
                return res.status(404).json({
                    error: "User not found"
                });
            }
            return res.status(200).json(photos);
        } else if (req.method === "DELETE") {
            const { photo } = req.body;
            if (!photo) {
                return res.status(400).json({
                    error: "Photo URL is required"
                });
            }
            const deletedUserPhoto = new _db_models__WEBPACK_IMPORTED_MODULE_2__/* .DeletedUserPhotoModel */ .A7({
                user: username,
                url: photo
            });
            await deletedUserPhoto.save();
            const updatedUser = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .UserModel */ .T.findOneAndUpdate({
                email: username
            }, {
                $pull: {
                    photos: photo
                }
            }, {
                new: true
            }).select("photos");
            if (!updatedUser) {
                return res.status(404).json({
                    error: "User not found or photo not found in user's photo array"
                });
            }
            return res.status(200).json(updatedUser.photos);
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
var __webpack_exports__ = __webpack_require__.X(0, [2246,9795,5352,3511], () => (__webpack_exec__(923)));
module.exports = __webpack_exports__;

})();