"use strict";
(() => {
var exports = {};
exports.id = 667;
exports.ids = [667];
exports.modules = {

/***/ 3868:
/***/ ((module) => {

module.exports = require("@typegoose/typegoose");

/***/ }),

/***/ 752:
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ 8927:
/***/ ((module) => {

module.exports = require("web-push");

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 9957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5352);
/* harmony import */ var _utils_sendNotificationToUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5651);
/* harmony import */ var _utils_webPushSetup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2599);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_sendNotificationToUser__WEBPACK_IMPORTED_MODULE_1__]);
_utils_sendNotificationToUser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end(); // Method Not Allowed
    }
    const { channelName } = req.body;
    if (!channelName) {
        return res.status(400).json({
            error: "Missing channelName"
        });
    }
    try {
        // Fetch users subscribed to this chat
        const chat = await _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_0__/* .VideoCallChatModel */ .gd.findOne({
            _id: channelName
        });
        if (!chat) {
            return res.status(404).json({
                error: "Chat not found"
            });
        }
        const subscribers = chat.subscribedForNotifications || [];
        const payload = JSON.stringify({
            message: "Alguien quiere chatear con vos!",
            url: `${"http://localhost:3000"}/chat/${encodeURI(channelName)}`
        });
        // Send notifications to those users
        for (const userId of subscribers){
            await (0,_utils_sendNotificationToUser__WEBPACK_IMPORTED_MODULE_1__/* .sendNotificationToUser */ .z)(userId, payload);
        }
        res.status(200).json({
            success: true
        });
    } catch (error) {
        console.log("notifyUsers", error);
        res.status(500).json({
            error: "Internal Server Error",
            details: error.message
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ sendNotificationToUser)
/* harmony export */ });
/* harmony import */ var _db_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3511);
/* harmony import */ var web_push__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8927);
/* harmony import */ var web_push__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web_push__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db_models__WEBPACK_IMPORTED_MODULE_0__]);
_db_models__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function sendNotificationToUser(userId, payload) {
    const user = await _db_models__WEBPACK_IMPORTED_MODULE_0__/* .UserAgentModel */ .zI.findById(userId);
    if (!user || !user.PushSubscription) {
        throw new Error("User not found or not subscribed");
    }
    const pushConfig = {
        endpoint: user.PushSubscription.endpoint,
        keys: {
            auth: user.PushSubscription.keys.auth,
            p256dh: user.PushSubscription.keys.p256dh
        }
    };
    return web_push__WEBPACK_IMPORTED_MODULE_1___default().sendNotification(pushConfig, payload);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2599:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var web_push__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8927);
/* harmony import */ var web_push__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web_push__WEBPACK_IMPORTED_MODULE_0__);

web_push__WEBPACK_IMPORTED_MODULE_0___default().setVapidDetails("mailto:luissimosaarg@gmail.com", "BOINoNDgymZI_-mV3-vB71q1-zvi-rTe8GezByLUdZ4DHpVcQNaHKdiqxGJ7XLeCr39lbc9yzNYMa2lUzNWpVos", process.env.VAPID_PRIVATE_KEY);


/***/ }),

/***/ 3888:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports._ = /* unused reexport */ __webpack_require__(752).__decorate;


/***/ }),

/***/ 630:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports._ = /* unused reexport */ __webpack_require__(752).__metadata;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5352,3511], () => (__webpack_exec__(9957)));
module.exports = __webpack_exports__;

})();