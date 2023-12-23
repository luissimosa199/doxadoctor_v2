"use strict";
exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 587:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ UserModel)
/* harmony export */ });
/* unused harmony export User */
/* harmony import */ var _swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9321);
/* harmony import */ var _swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6312);
/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3868);
/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5611);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_1__]);
nanoid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





let User = class User {
    static async hashPassword(password) {
        return await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(password, 10);
    }
    async validatePassword(password) {
        return await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(password, this.password);
    }
};
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        default: ()=>(0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)(9)
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", String)
], User.prototype, "_id", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        required: true
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", String)
], User.prototype, "name", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        default: ""
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", String)
], User.prototype, "slug", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        default: ""
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", String)
], User.prototype, "bio", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        default: false
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", Boolean)
], User.prototype, "online", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        required: true,
        unique: true
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", String)
], User.prototype, "email", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        required: true
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", String)
], User.prototype, "password", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)(),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", String)
], User.prototype, "image", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)(),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", Array)
], User.prototype, "tags", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        default: []
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", Array)
], User.prototype, "favorites", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        type: [
            String
        ],
        default: []
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", Array)
], User.prototype, "user_agent_id", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)(),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", Array)
], User.prototype, "photos", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)(),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", Object)
], User.prototype, "emailVerified", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        default: false
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", Boolean)
], User.prototype, "disableAds", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        default: "USER"
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_4__._)("design:type", String)
], User.prototype, "role", void 0);
User = (0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_3__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.modelOptions)({
        schemaOptions: {
            timestamps: true,
            collection: "doxa_usermodel"
        },
        options: {
            allowMixed: 0
        }
    })
], User);
const UserModel = (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.getModelForClass)(User);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;