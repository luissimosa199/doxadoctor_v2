"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
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

/***/ 6717:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db_models_userModel__WEBPACK_IMPORTED_MODULE_1__]);
_db_models_userModel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
 // Adjust the path to your MongoDB connection utility
 // Adjust the path to your User model

async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end(); // Method Not Allowed
    }
    const { name, email, password, user_agent_id } = req.body;
    console.log(user_agent_id);
    // Input validation (you may want to add more comprehensive checks)
    if (!name || !email || !password) {
        return res.status(400).json({
            error: "Campos requeridos incompletos."
        });
    }
    // Connect to the database using dbConnect
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    try {
        // Check if the user already exists
        const existingUser = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .UserModel */ .T.findOne({
            email
        });
        if (existingUser) {
            return res.status(409).json({
                error: "Usuario con el mismo mail ya existe"
            });
        }
        // Hash the password
        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(password, 10);
        let slug = name.toLowerCase().replaceAll(" ", "-");
        let originalSlug = slug;
        let counter = 1;
        while(true){
            const existingSlugUser = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .UserModel */ .T.findOne({
                slug
            });
            if (!existingSlugUser) break;
            slug = `${originalSlug}-${counter}`;
            counter++;
        }
        // Create the user
        const user = new _db_models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .UserModel */ .T({
            name,
            email,
            user_agent_id,
            password: hashedPassword,
            slug
        });
        await user.save();
        return res.status(201).json({
            message: "Usuario registrado correctamente."
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
var __webpack_exports__ = __webpack_require__.X(0, [2246,9795], () => (__webpack_exec__(6717)));
module.exports = __webpack_exports__;

})();