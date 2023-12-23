"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/perfil",{

/***/ "./src/hooks/useUpdateAvatar.ts":
/*!**************************************!*\
  !*** ./src/hooks/useUpdateAvatar.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useUpdateAvatar: function() { return /* binding */ useUpdateAvatar; }\n/* harmony export */ });\n/* harmony import */ var _utils_formHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/formHelpers */ \"./src/utils/formHelpers.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst useUpdateAvatar = ()=>{\n    var _session_user, _session;\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();\n    const [isUpdating, setIsUpdating] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const updateAvatar = async (event)=>{\n        setIsUpdating(true);\n        setError(null);\n        try {\n            var _event_target_files, _session_user, _session, _avatarArr;\n            const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];\n            if (!file) return;\n            const dataUrl = await new Promise((resolve, reject)=>{\n                const reader = new FileReader();\n                reader.onloadend = ()=>resolve(reader.result);\n                reader.onerror = ()=>reject(new Error(\"Failed to read the file\"));\n                reader.readAsDataURL(file);\n            });\n            queryClient.setQueryData([\n                (_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.email,\n                \"profilePicture\"\n            ], {\n                image: dataUrl\n            });\n            const avatarArr = await (0,_utils_formHelpers__WEBPACK_IMPORTED_MODULE_0__.uploadImages)(event);\n            const avatarUrl = (_avatarArr = avatarArr) === null || _avatarArr === void 0 ? void 0 : _avatarArr[0];\n            await updateAvatarOnServer(avatarUrl);\n        } catch (error) {\n            setError(error);\n        } finally{\n            setIsUpdating(false);\n        }\n    };\n    const updateAvatarOnServer = async (avatarUrl)=>{\n        const response = await fetch(\"/api/user/avatar/?username=\".concat(encodeURIComponent(session.user.email)), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                image: avatarUrl\n            })\n        });\n        if (!response.ok) {\n            const data = await response.json();\n            throw new Error(data.error || \"Server responded with \".concat(response.status));\n        }\n        return response.json();\n    };\n    const fetchProfilePicture = async ()=>{\n        var _session_user, _session;\n        const response = await fetch(\"/api/user/avatar/?username=\".concat(encodeURIComponent((_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.email)));\n        const data = await response.json();\n        return data;\n    };\n    const { data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        (_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.email,\n        \"profilePicture\"\n    ], fetchProfilePicture);\n    console.log(data);\n    return {\n        updateAvatar,\n        isUpdating,\n        error,\n        image: \"data.image\"\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3VzZVVwZGF0ZUF2YXRhci50cz80NjRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVwbG9hZEltYWdlcyB9IGZyb20gXCJAL3V0aWxzL2Zvcm1IZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBVc2VVcGRhdGVBdmF0YXJSZXR1cm4ge1xuICB1cGRhdGVBdmF0YXI6IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IFByb21pc2U8dm9pZD47XG4gIGlzVXBkYXRpbmc6IGJvb2xlYW47XG4gIGVycm9yOiBhbnkgfCBudWxsO1xuICBpbWFnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXNlVXBkYXRlQXZhdGFyID0gKCk6IFVzZVVwZGF0ZUF2YXRhclJldHVybiA9PiB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIGNvbnN0IFtpc1VwZGF0aW5nLCBzZXRJc1VwZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxhbnkgfCBudWxsPihudWxsKTtcblxuICBjb25zdCB1cGRhdGVBdmF0YXIgPSBhc3luYyAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0SXNVcGRhdGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcihudWxsKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzPy5bMF07XG4gICAgICBpZiAoIWZpbGUpIHJldHVybjtcblxuICAgICAgY29uc3QgZGF0YVVybCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpO1xuICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcmVhZCB0aGUgZmlsZVwiKSk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIHF1ZXJ5Q2xpZW50LnNldFF1ZXJ5RGF0YShbc2Vzc2lvbj8udXNlcj8uZW1haWwsIFwicHJvZmlsZVBpY3R1cmVcIl0sIHtcbiAgICAgICAgaW1hZ2U6IGRhdGFVcmwsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgYXZhdGFyQXJyID0gYXdhaXQgdXBsb2FkSW1hZ2VzKGV2ZW50KTtcbiAgICAgIGNvbnN0IGF2YXRhclVybCA9IGF2YXRhckFycj8uWzBdO1xuXG4gICAgICBhd2FpdCB1cGRhdGVBdmF0YXJPblNlcnZlcihhdmF0YXJVcmwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzVXBkYXRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVBdmF0YXJPblNlcnZlciA9IGFzeW5jIChhdmF0YXJVcmw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgL2FwaS91c2VyL2F2YXRhci8/dXNlcm5hbWU9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgIHNlc3Npb24hLnVzZXIhLmVtYWlsIGFzIHN0cmluZ1xuICAgICAgKX1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaW1hZ2U6IGF2YXRhclVybCB9KSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yIHx8IGBTZXJ2ZXIgcmVzcG9uZGVkIHdpdGggJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfTtcblxuICBjb25zdCBmZXRjaFByb2ZpbGVQaWN0dXJlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgL2FwaS91c2VyL2F2YXRhci8/dXNlcm5hbWU9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgIHNlc3Npb24/LnVzZXI/LmVtYWlsIGFzIHN0cmluZ1xuICAgICAgKX1gXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoXG4gICAgW3Nlc3Npb24/LnVzZXI/LmVtYWlsLCBcInByb2ZpbGVQaWN0dXJlXCJdLFxuICAgIGZldGNoUHJvZmlsZVBpY3R1cmVcbiAgKTtcblxuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICByZXR1cm4geyB1cGRhdGVBdmF0YXIsIGlzVXBkYXRpbmcsIGVycm9yLCBpbWFnZTogXCJkYXRhLmltYWdlXCIgfTtcbn07XG4iXSwibmFtZXMiOlsidXBsb2FkSW1hZ2VzIiwidXNlUXVlcnkiLCJ1c2VRdWVyeUNsaWVudCIsInVzZVNlc3Npb24iLCJ1c2VTdGF0ZSIsInVzZVVwZGF0ZUF2YXRhciIsInNlc3Npb24iLCJkYXRhIiwicXVlcnlDbGllbnQiLCJpc1VwZGF0aW5nIiwic2V0SXNVcGRhdGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJ1cGRhdGVBdmF0YXIiLCJldmVudCIsImF2YXRhckFyciIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImRhdGFVcmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJvbmVycm9yIiwiRXJyb3IiLCJyZWFkQXNEYXRhVVJMIiwic2V0UXVlcnlEYXRhIiwidXNlciIsImVtYWlsIiwiaW1hZ2UiLCJhdmF0YXJVcmwiLCJ1cGRhdGVBdmF0YXJPblNlcnZlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImpzb24iLCJzdGF0dXMiLCJmZXRjaFByb2ZpbGVQaWN0dXJlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useUpdateAvatar.ts\n"));

/***/ })

});