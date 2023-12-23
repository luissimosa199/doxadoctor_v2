"use strict";
exports.id = 8536;
exports.ids = [8536];
exports.modules = {

/***/ 8536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gd: () => (/* binding */ VideoCallChatModel),
/* harmony export */   wf: () => (/* binding */ VideoCallChat)
/* harmony export */ });
/* unused harmony export Message */
/* harmony import */ var _swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9321);
/* harmony import */ var _swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6312);
/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3868);
/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__);



class File {
}
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        required: true
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", String)
], File.prototype, "url", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        required: true
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", String)
], File.prototype, "type", void 0);
class Message {
}
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)(),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", String)
], Message.prototype, "timestamp", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)(),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", String)
], Message.prototype, "user", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        required: false
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", String)
], Message.prototype, "message", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        type: ()=>[
                File
            ],
        default: []
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", Array)
], Message.prototype, "files", void 0);
class CurrentCall {
}
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)(),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", Number)
], CurrentCall.prototype, "duration", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)(),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", typeof Date === "undefined" ? Object : Date)
], CurrentCall.prototype, "initTime", void 0);
let VideoCallChat = class VideoCallChat {
};
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)(),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", String)
], VideoCallChat.prototype, "_id", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)(),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", String)
], VideoCallChat.prototype, "url", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        default: ()=>new Date()
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", typeof Date === "undefined" ? Object : Date)
], VideoCallChat.prototype, "createdAt", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        default: ()=>new Date()
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", typeof Date === "undefined" ? Object : Date)
], VideoCallChat.prototype, "updatedAt", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)(),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", typeof CurrentCall === "undefined" ? Object : CurrentCall)
], VideoCallChat.prototype, "currentCall", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)(),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", Array)
], VideoCallChat.prototype, "messages", void 0);
(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({
        default: ()=>[]
    }),
    (0,_swc_helpers_ts_metadata__WEBPACK_IMPORTED_MODULE_2__._)("design:type", Array)
], VideoCallChat.prototype, "subscribedForNotifications", void 0);
VideoCallChat = (0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([
    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.modelOptions)({
        schemaOptions: {
            timestamps: true
        },
        options: {
            allowMixed: 0
        }
    })
], VideoCallChat);
const VideoCallChatModel = (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.getModelForClass)(VideoCallChat);


/***/ }),

/***/ 9321:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports._ = /* unused reexport */ __webpack_require__(752).__decorate;


/***/ }),

/***/ 6312:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports._ = /* unused reexport */ __webpack_require__(752).__metadata;


/***/ })

};
;