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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useUpdateAvatar: function() { return /* binding */ useUpdateAvatar; }\n/* harmony export */ });\n/* harmony import */ var _utils_formHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/formHelpers */ \"./src/utils/formHelpers.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst useUpdateAvatar = ()=>{\n    var _session_user, _session;\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();\n    const [isUpdating, setIsUpdating] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const updateAvatar = async (event)=>{\n        setIsUpdating(true);\n        setError(null);\n        try {\n            var _event_target_files, _session_user, _session, _avatarArr;\n            const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];\n            if (!file) return;\n            const dataUrl = await new Promise((resolve, reject)=>{\n                const reader = new FileReader();\n                reader.onloadend = ()=>resolve(reader.result);\n                reader.onerror = ()=>reject(new Error(\"Failed to read the file\"));\n                reader.readAsDataURL(file);\n            });\n            queryClient.setQueryData([\n                (_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.email,\n                \"profilePicture\"\n            ], {\n                image: dataUrl\n            });\n            const avatarArr = await (0,_utils_formHelpers__WEBPACK_IMPORTED_MODULE_0__.uploadImages)(event);\n            const avatarUrl = (_avatarArr = avatarArr) === null || _avatarArr === void 0 ? void 0 : _avatarArr[0];\n            await updateAvatarOnServer(avatarUrl);\n        } catch (error) {\n            setError(error);\n        } finally{\n            setIsUpdating(false);\n        }\n    };\n    const updateAvatarOnServer = async (avatarUrl)=>{\n        const response = await fetch(\"/api/user/avatar/?username=\".concat(encodeURIComponent(session.user.email)), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                image: avatarUrl\n            })\n        });\n        if (!response.ok) {\n            const data = await response.json();\n            throw new Error(data.error || \"Server responded with \".concat(response.status));\n        }\n        return response.json();\n    };\n    const fetchProfilePicture = async ()=>{\n        var _session_user, _session;\n        const response = await fetch(\"/api/user/avatar/?username=\".concat(encodeURIComponent((_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.email)));\n        const data = await response.json();\n        return data;\n    };\n    const { data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        (_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.email,\n        \"profilePicture\"\n    ], fetchProfilePicture);\n    console.log(data);\n    return {\n        updateAvatar,\n        isUpdating,\n        error,\n        image: data.image\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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X0UvLi9zcmMvaG9va3MvdXNlVXBkYXRlQXZhdGFyLnRzPzQ2NGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXBsb2FkSW1hZ2VzIH0gZnJvbSBcIkAvdXRpbHMvZm9ybUhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFVzZVVwZGF0ZUF2YXRhclJldHVybiB7XG4gIHVwZGF0ZUF2YXRhcjogKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gUHJvbWlzZTx2b2lkPjtcbiAgaXNVcGRhdGluZzogYm9vbGVhbjtcbiAgZXJyb3I6IGFueSB8IG51bGw7XG4gIGltYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VVcGRhdGVBdmF0YXIgPSAoKTogVXNlVXBkYXRlQXZhdGFyUmV0dXJuID0+IHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgY29uc3QgW2lzVXBkYXRpbmcsIHNldElzVXBkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHVwZGF0ZUF2YXRhciA9IGFzeW5jIChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRJc1VwZGF0aW5nKHRydWUpO1xuICAgIHNldEVycm9yKG51bGwpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXM/LlswXTtcbiAgICAgIGlmICghZmlsZSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBkYXRhVXJsID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byByZWFkIHRoZSBmaWxlXCIpKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICB9KTtcblxuICAgICAgcXVlcnlDbGllbnQuc2V0UXVlcnlEYXRhKFtzZXNzaW9uPy51c2VyPy5lbWFpbCwgXCJwcm9maWxlUGljdHVyZVwiXSwge1xuICAgICAgICBpbWFnZTogZGF0YVVybCxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBhdmF0YXJBcnIgPSBhd2FpdCB1cGxvYWRJbWFnZXMoZXZlbnQpO1xuICAgICAgY29uc3QgYXZhdGFyVXJsID0gYXZhdGFyQXJyPy5bMF07XG5cbiAgICAgIGF3YWl0IHVwZGF0ZUF2YXRhck9uU2VydmVyKGF2YXRhclVybCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNVcGRhdGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUF2YXRhck9uU2VydmVyID0gYXN5bmMgKGF2YXRhclVybDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAvYXBpL3VzZXIvYXZhdGFyLz91c2VybmFtZT0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgc2Vzc2lvbiEudXNlciEuZW1haWwgYXMgc3RyaW5nXG4gICAgICApfWAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpbWFnZTogYXZhdGFyVXJsIH0pLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3IgfHwgYFNlcnZlciByZXNwb25kZWQgd2l0aCAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9O1xuXG4gIGNvbnN0IGZldGNoUHJvZmlsZVBpY3R1cmUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAvYXBpL3VzZXIvYXZhdGFyLz91c2VybmFtZT0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgc2Vzc2lvbj8udXNlcj8uZW1haWwgYXMgc3RyaW5nXG4gICAgICApfWBcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShcbiAgICBbc2Vzc2lvbj8udXNlcj8uZW1haWwsIFwicHJvZmlsZVBpY3R1cmVcIl0sXG4gICAgZmV0Y2hQcm9maWxlUGljdHVyZVxuICApO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiB7IHVwZGF0ZUF2YXRhciwgaXNVcGRhdGluZywgZXJyb3IsIGltYWdlOiBkYXRhLmltYWdlIH07XG59O1xuIl0sIm5hbWVzIjpbInVwbG9hZEltYWdlcyIsInVzZVF1ZXJ5IiwidXNlUXVlcnlDbGllbnQiLCJ1c2VTZXNzaW9uIiwidXNlU3RhdGUiLCJ1c2VVcGRhdGVBdmF0YXIiLCJzZXNzaW9uIiwiZGF0YSIsInF1ZXJ5Q2xpZW50IiwiaXNVcGRhdGluZyIsInNldElzVXBkYXRpbmciLCJlcnJvciIsInNldEVycm9yIiwidXBkYXRlQXZhdGFyIiwiZXZlbnQiLCJhdmF0YXJBcnIiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJkYXRhVXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVzdWx0Iiwib25lcnJvciIsIkVycm9yIiwicmVhZEFzRGF0YVVSTCIsInNldFF1ZXJ5RGF0YSIsInVzZXIiLCJlbWFpbCIsImltYWdlIiwiYXZhdGFyVXJsIiwidXBkYXRlQXZhdGFyT25TZXJ2ZXIiLCJyZXNwb25zZSIsImZldGNoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJqc29uIiwic3RhdHVzIiwiZmV0Y2hQcm9maWxlUGljdHVyZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useUpdateAvatar.ts\n"));

/***/ })

});