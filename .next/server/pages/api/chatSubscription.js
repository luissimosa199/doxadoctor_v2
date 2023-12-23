"use strict";
(() => {
var exports = {};
exports.id = 4631;
exports.ids = [4631];
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

/***/ 999:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1092);
/* harmony import */ var _db_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3511);
/* harmony import */ var _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5352);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db_models__WEBPACK_IMPORTED_MODULE_1__]);
_db_models__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function handler(req, res) {
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    if (req.method === "POST") {
        const { user_agent_id, subscription, conversationId } = req.body;
        if (!user_agent_id || !subscription || !conversationId) {
            return res.status(400).json({
                error: "Missing required fields"
            });
        }
        try {
            // Update the UserAgent with the subscription
            await _db_models__WEBPACK_IMPORTED_MODULE_1__/* .UserAgentModel */ .zI.findByIdAndUpdate(user_agent_id, {
                PushSubscription: subscription
            });
            // Add the user_agent_id to the VideoCallChat's subscribedForNotifications list
            await _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_2__/* .VideoCallChatModel */ .gd.findByIdAndUpdate(conversationId, {
                $addToSet: {
                    subscribedForNotifications: user_agent_id
                }
            });
            res.status(200).json({
                success: true
            });
        } catch (error) {
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    } else if (req.method === "GET") {
        const { user_agent_id, conversationId } = req.query;
        if (!user_agent_id || !conversationId) {
            return res.status(400).json({
                error: "Missing required query parameters"
            });
        }
        try {
            const chat = await _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_2__/* .VideoCallChatModel */ .gd.findById(conversationId);
            const isSubscribed = chat?.subscribedForNotifications?.includes(user_agent_id);
            res.status(200).json({
                isSubscribed
            });
        } catch (error) {
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    } else if (req.method === "DELETE") {
        const { user_agent_id, conversationId } = req.body;
        if (!user_agent_id || !conversationId) {
            return res.status(400).json({
                error: "Missing required fields"
            });
        }
        try {
            await _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_2__/* .VideoCallChatModel */ .gd.findByIdAndUpdate(conversationId, {
                $pull: {
                    subscribedForNotifications: user_agent_id
                }
            });
            res.status(200).json({
                success: true
            });
        } catch (error) {
            res.status(500).json({
                error: "Internal Server Error"
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
var __webpack_exports__ = __webpack_require__.X(0, [2246,5352,3511], () => (__webpack_exec__(999)));
module.exports = __webpack_exports__;

})();