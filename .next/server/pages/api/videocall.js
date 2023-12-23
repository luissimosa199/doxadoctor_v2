"use strict";
(() => {
var exports = {};
exports.id = 9076;
exports.ids = [9076];
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

/***/ 6446:
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
        const chat = await _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_1__/* .VideoCallChatModel */ .gd.findById(room);
        if (chat && chat.currentCall) {
            const currentTime = new Date().getTime();
            const initTime = new Date(chat.currentCall.initTime).getTime();
            const duration = chat.currentCall.duration;
            const endTime = initTime + duration;
            const timeLeft = endTime - currentTime;
            const timeLeftInMinutes = Math.floor(timeLeft / (60 * 1000));
            if (timeLeft <= 0) {
                await _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_1__/* .VideoCallChatModel */ .gd.findByIdAndUpdate(room, {
                    $set: {
                        currentCall: null
                    }
                });
                return res.status(404).json({
                    error: "Chat not found"
                });
            }
            res.status(200).json({
                timeLeft: timeLeftInMinutes
            });
        } else {
            res.status(404).json({
                error: "Chat not found"
            });
        }
    } else if (req.method === "POST") {
        const body = req.body;
        const initTime = new Date();
        const duration = body.duration;
        const chat = await _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_1__/* .VideoCallChatModel */ .gd.findById(room);
        if (chat) {
            if (chat.currentCall) {
                return res.status(400).json({
                    error: "A call is already in progress."
                });
            }
            const updateChat = await _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_1__/* .VideoCallChatModel */ .gd.findByIdAndUpdate(room, {
                $set: {
                    currentCall: {
                        initTime,
                        duration
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
                res.status(200).json(updateChat);
            }
        } else {
            const newChat = new _db_models_videoCallChatModel__WEBPACK_IMPORTED_MODULE_1__/* .VideoCallChatModel */ .gd({
                _id: room,
                messages: [],
                currentCall: {
                    initTime,
                    duration
                }
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2246,5352], () => (__webpack_exec__(6446)));
module.exports = __webpack_exports__;

})();