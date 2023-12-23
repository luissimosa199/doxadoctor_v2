"use strict";
(() => {
var exports = {};
exports.id = 122;
exports.ids = [122];
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

/***/ 7126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ VerifyCodeModel)
/* harmony export */ });
/* unused harmony export VerifyCode */
/* harmony import */ var _swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3888);
/* harmony import */ var _swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(630);
/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3868);
/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__);



let VerifyCode = class VerifyCode {
};
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        required: true
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", String)
], VerifyCode.prototype, "email", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        required: true
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", String)
], VerifyCode.prototype, "code", void 0);
VerifyCode = (0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.modelOptions)({
        schemaOptions: {
            timestamps: true
        }
    })
], VerifyCode);
const VerifyCodeModel = (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.getModelForClass)(VerifyCode);


/***/ }),

/***/ 1518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1092);
/* harmony import */ var _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9795);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _db_models_VerifyCodeModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7126);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db_models_userModel__WEBPACK_IMPORTED_MODULE_1__]);
_db_models_userModel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end(); // Method Not Allowed
    }
    const { email, newPassword, mailValidated } = req.body;
    if (!mailValidated) {
        return res.status(400).json({
            error: "Mail no validado."
        });
    }
    // Input validation
    if (!email || !newPassword) {
        return res.status(400).json({
            error: "Campos requeridos incompletos."
        });
    }
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    try {
        const existingUser = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .UserModel */ .T.findOne({
            email
        });
        if (!existingUser) {
            return res.status(404).json({
                error: "Usuario no encontrado."
            });
        }
        // Hash the new password and update the user's password
        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(newPassword, 10);
        existingUser.password = hashedPassword;
        await existingUser.save();
        await _db_models_VerifyCodeModel__WEBPACK_IMPORTED_MODULE_3__/* .VerifyCodeModel */ .i.deleteMany({
            email: email
        });
        return res.status(200).json({
            message: "Contrase\xf1a actualizada correctamente."
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: `Error: ${error}`
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
var __webpack_exports__ = __webpack_require__.X(0, [2246,9795], () => (__webpack_exec__(1518)));
module.exports = __webpack_exports__;

})();