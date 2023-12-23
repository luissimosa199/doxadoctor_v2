"use strict";
exports.id = 8355;
exports.ids = [8355];
exports.modules = {

/***/ 8355:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authOptions: () => (/* binding */ authOptions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_mongoDbPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8841);
/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7349);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7449);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1092);
/* harmony import */ var _db_models_userModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9795);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__, _db_models_userModel__WEBPACK_IMPORTED_MODULE_5__]);
([_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__, _db_models_userModel__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const authOptions = {
    providers: [
        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({
            name: "credentials",
            id: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text"
                },
                password: {
                    label: "Contrase\xf1a",
                    type: "password"
                }
            },
            async authorize (credentials, req) {
                if (!credentials) {
                    return null;
                }
                try {
                    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
                    const user = await _db_models_userModel__WEBPACK_IMPORTED_MODULE_5__/* .UserModel */ .T.findOne({
                        email: credentials.email
                    });
                    if (!user) {
                        return null;
                    }
                    const isValid = await user.validatePassword(credentials.password);
                    if (!isValid) {
                        return null;
                    }
                    return {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        role: user.role
                    };
                } catch (error) {
                    console.error(error);
                    return null;
                }
            }
        })
    ],
    callbacks: {
        jwt: async ({ token, user })=>{
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.picture = user.image;
            }
            return token;
        },
        session: async ({ session, token })=>{
            session.role = token.role;
            return session;
        }
    },
    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__.MongoDBAdapter)(_utils_mongoDbPromise__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z),
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    }
};
const NextAuthHandler = (req, res)=>next_auth__WEBPACK_IMPORTED_MODULE_3___default()(req, res, authOptions);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextAuthHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri = process.env.MONGODB_URI;
const options = {};
let client;
let clientPromise;
if (false) {} else {
    // In production mode, it's best to not use a global variable.
    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);
    clientPromise = client.connect();
}
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);


/***/ })

};
;