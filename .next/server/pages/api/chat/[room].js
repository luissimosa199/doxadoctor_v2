"use strict";
(() => {
var exports = {};
exports.id = 1888;
exports.ids = [1888];
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

/***/ 7804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1092);
/* harmony import */ var _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5352);


async function handler(req, res) {
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const room = req.query.room;
    if (req.method === "GET") {
        const { limit: limitStr, beforeTimestamp } = req.query;
        if (!room || room === "null") {
            return res.status(400).json({
                error: "Invalid room name provided."
            });
        }
        const limit = parseInt(limitStr || "10");
        const beforeDate = beforeTimestamp ? new Date(Number(beforeTimestamp)).toISOString() : null;
        const chat = await _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_1__/* .VideoCallChatModel */ .gd.findById(room);
        if (chat && chat.messages) {
            // Ensure messages are sorted by timestamp in descending order
            const sortedMessages = chat.messages.sort((a, b)=>new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
            // Filter messages that are newer than the provided timestamp
            const filteredMessages = beforeDate ? sortedMessages.filter((msg)=>new Date(msg.timestamp).getTime() < new Date(beforeDate).getTime()) : sortedMessages;
            // Take the first 'limit' number of messages from the filtered list
            const nextMessages = filteredMessages.slice(0, limit).reverse();
            const oldestTimestamp = nextMessages.length > 0 ? nextMessages[0].timestamp : null;
            res.status(200).json({
                messages: nextMessages,
                oldestTimestamp
            });
        }
    } else if (req.method === "POST") {
        const body = JSON.parse(req.body);
        const chat = await _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_1__/* .VideoCallChatModel */ .gd.findById(room);
        if (chat) {
            const updateChat = await _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_1__/* .VideoCallChatModel */ .gd.findByIdAndUpdate(room, {
                $push: {
                    messages: {
                        timestamp: body.timestamp,
                        user: body.user,
                        message: body.message,
                        files: body.files
                    }
                }
            }, {
                new: true
            }).catch((err)=>{
                console.error("Update Error:", err);
                res.status(500).json({
                    error: "Update Error"
                });
            });
            if (updateChat) {
                res.status(200).json(body);
            }
        } else {
            const newChat = new _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_1__/* .VideoCallChatModel */ .gd({
                _id: room,
                messages: [
                    body.message
                ]
            });
            await newChat.save();
            res.status(201).json(newChat);
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2246,5352], () => (__webpack_exec__(7804)));
module.exports = __webpack_exports__;

})();