"use strict";
(() => {
var exports = {};
exports.id = 9317;
exports.ids = [9317];
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

/***/ 8341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3511);
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1092);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db_models__WEBPACK_IMPORTED_MODULE_0__]);
_db_models__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const id = req.query.id;
    if (req.method === "GET") {
        const timeline = await _db_models__WEBPACK_IMPORTED_MODULE_0__/* .TimeLineModel */ .HQ.findById(id);
        if (timeline) {
            res.status(200).json(timeline);
        } else {
            res.status(404);
        }
    } else if (req.method === "PUT") {
        const body = JSON.parse(req.body);
        const timeline = await _db_models__WEBPACK_IMPORTED_MODULE_0__/* .TimeLineModel */ .HQ.findById(id);
        if (timeline) {
            const updateResult = await _db_models__WEBPACK_IMPORTED_MODULE_0__/* .TimeLineModel */ .HQ.updateMany({
                _id: id
            }, {
                $set: body
            }).catch((err)=>{
                console.error("Update Error:", err);
                res.status(500).json({
                    error: "Update Error"
                });
            });
            const updatedTimeline = await _db_models__WEBPACK_IMPORTED_MODULE_0__/* .TimeLineModel */ .HQ.findById(id);
            if (updatedTimeline) {
                res.status(200).json(updatedTimeline);
            }
        } else {
            res.status(404).send({
                message: "Timeline not found"
            });
        }
    } else if (req.method === "DELETE") {
        try {
            const timeline = await _db_models__WEBPACK_IMPORTED_MODULE_0__/* .TimeLineModel */ .HQ.findById(id);
            if (timeline) {
                const timelineObject = timeline.toObject();
                const deletedTimeline = new _db_models__WEBPACK_IMPORTED_MODULE_0__/* .DeletedTimelineModel */ .qV({
                    ...timelineObject,
                    deletedAt: new Date()
                });
                await deletedTimeline.save();
                await _db_models__WEBPACK_IMPORTED_MODULE_0__/* .TimeLineModel */ .HQ.findByIdAndRemove(id);
                res.status(200).json({
                    message: "Timeline successfully deleted"
                });
            } else {
                res.status(404).send({
                    message: "Timeline not found"
                });
            }
        } catch (err) {
            console.error("Delete Error:", err);
            res.status(500).json({
                error: "Delete Error"
            });
        }
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
var __webpack_exports__ = __webpack_require__.X(0, [2246,5352,3511], () => (__webpack_exec__(8341)));
module.exports = __webpack_exports__;

})();