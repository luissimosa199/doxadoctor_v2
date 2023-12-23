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

/***/ "./src/components/DoctorPageHeader.tsx":
/*!*********************************************!*\
  !*** ./src/components/DoctorPageHeader.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_noProfileImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/noProfileImage */ \"./src/utils/noProfileImage.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons_UploadCloudSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/UploadCloudSvg */ \"./src/components/icons/UploadCloudSvg.tsx\");\n/* harmony import */ var _hooks_useUpdateAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useUpdateAvatar */ \"./src/hooks/useUpdateAvatar.ts\");\n/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-cloudinary */ \"./node_modules/next-cloudinary/dist/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst DoctorPageHeader = (param)=>{\n    let { photo, name, type } = param;\n    var _session_user, _session;\n    _s();\n    const [currentPhoto, setCurrentPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();\n    const { updateAvatar, isUpdating } = (0,_hooks_useUpdateAvatar__WEBPACK_IMPORTED_MODULE_4__.useUpdateAvatar)();\n    const fetchProfilePicture = async ()=>{\n        var _session_user, _session;\n        const response = await fetch(\"/api/user/avatar/?username=\".concat(encodeURIComponent((_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.email)));\n        const data = await response.json();\n        return data;\n    };\n    const { data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)([\n        (_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.email,\n        \"profilePicture\"\n    ], fetchProfilePicture);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (data && data.image) {\n            setCurrentPhoto(data.image);\n        }\n    }, [\n        session,\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-2 md:p-4 flex flex-col items-end bg-white md:flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative mx-auto md:mx-0 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-96 h-[400px] md:h-96 bg-gray-300 mb-2 overflow-hidden z-0 relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_cloudinary__WEBPACK_IMPORTED_MODULE_5__.CldImage, {\n                            src: currentPhoto || _utils_noProfileImage__WEBPACK_IMPORTED_MODULE_1__.noProfileImage,\n                            alt: \"profile picture\",\n                            className: \"object-cover object-center \",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-0 w-full h-full bg-gradient-to-t from-black via-transparent z-10 \".concat(isUpdating ? \"animate-pulse\" : \"\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-0 right-0 z-20 w-12 h-12 bg-white rounded-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"flex items-center justify-center w-full h-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"profilephoto\",\n                                    className: \"cursor-pointer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_UploadCloudSvg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                accept: \"image/png, image/jpeg, video/mp4\",\n                                className: \"absolute opacity-0 w-0 h-0\",\n                                type: \"file\",\n                                id: \"profilephoto\",\n                                onChange: updateAvatar\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-4 left-4 z-20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-5xl font-semibold text-white mb-2\",\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex gap-2 text-sm justify-center md:justify-start \",\n                                children: type.map((e)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \" px-2 py-1 font-semibold bg-blue-200 rounded-md\",\n                                        children: e\n                                    }, \"tag_\".concat(e), false, {\n                                        fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto md:ml-12\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DoctorPageHeader, \"eRQMziN9Uvp0im79vgRkjOLkHvE=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession,\n        _hooks_useUpdateAvatar__WEBPACK_IMPORTED_MODULE_4__.useUpdateAvatar,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery\n    ];\n});\n_c = DoctorPageHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoctorPageHeader);\nvar _c;\n$RefreshReg$(_c, \"DoctorPageHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Eb2N0b3JQYWdlSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNjO0FBQ2xCO0FBQ007QUFDZjtBQUNFO0FBQ0k7QUFRakQsTUFBTVMsbUJBQTZEO1FBQUMsRUFDbEVDLEtBQUssRUFDTEMsSUFBSSxFQUNKQyxJQUFJLEVBQ0w7UUFnQklDLGVBQUFBOztJQWZILE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFnQjtJQUNoRSxNQUFNLEVBQUVhLE1BQU1ILE9BQU8sRUFBRSxHQUFHTiwyREFBVUE7SUFDcEMsTUFBTSxFQUFFVSxZQUFZLEVBQUVDLFVBQVUsRUFBRSxHQUFHYix1RUFBZUE7SUFFcEQsTUFBTWMsc0JBQXNCO1lBR3RCTixlQUFBQTtRQUZKLE1BQU1PLFdBQVcsTUFBTUMsTUFDckIsOEJBRUUsT0FGNEJDLG9CQUM1QlQsV0FBQUEscUJBQUFBLGdDQUFBQSxnQkFBQUEsU0FBU1UsSUFBSSxjQUFiVixvQ0FBQUEsY0FBZVcsS0FBSztRQUd4QixNQUFNUixPQUFPLE1BQU1JLFNBQVNLLElBQUk7UUFDaEMsT0FBT1Q7SUFDVDtJQUVBLE1BQU0sRUFBRUEsSUFBSSxFQUFFLEdBQUdSLCtEQUFRQSxDQUN2QjtTQUFDSyxXQUFBQSxxQkFBQUEsZ0NBQUFBLGdCQUFBQSxTQUFTVSxJQUFJLGNBQWJWLG9DQUFBQSxjQUFlVyxLQUFLO1FBQUU7S0FBaUIsRUFDeENMO0lBR0ZqQixnREFBU0EsQ0FBQztRQUNSLElBQUljLFFBQVFBLEtBQUtVLEtBQUssRUFBRTtZQUN0QlgsZ0JBQWdCQyxLQUFLVSxLQUFLO1FBQzVCO0lBQ0YsR0FBRztRQUFDYjtRQUFTRztLQUFLO0lBRWxCLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ3RCLHFEQUFRQTs0QkFDUHVCLEtBQUtmLGdCQUFnQmQsaUVBQWNBOzRCQUNuQzhCLEtBQUk7NEJBQ0pGLFdBQVU7NEJBQ1ZHLElBQUk7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDSjt3QkFDQ0MsV0FBVyxpRkFFVixPQURDVixhQUFhLGtCQUFrQjs7Ozs7O2tDQUduQyw4REFBQ1M7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBT0osV0FBVTswQ0FDaEIsNEVBQUNLO29DQUNDQyxTQUFRO29DQUNSTixXQUFVOzhDQUVWLDRFQUFDeEIsNkRBQWNBOzs7Ozs7Ozs7Ozs7Ozs7MENBR25CLDhEQUFDK0I7Z0NBQ0NDLFFBQU87Z0NBQ1BSLFdBQVU7Z0NBQ1ZoQixNQUFLO2dDQUNMeUIsSUFBRztnQ0FDSEMsVUFBVXJCOzs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNVO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1c7Z0NBQUdYLFdBQVU7MENBQTBDakI7Ozs7OzswQ0FDeEQsOERBQUM2QjtnQ0FBR1osV0FBVTswQ0FDWGhCLEtBQUs2QixHQUFHLENBQUMsQ0FBQ0M7b0NBQ1QscUJBQ0UsOERBQUNDO3dDQUVDZixXQUFVO2tEQUVUYzt1Q0FISSxPQUFTLE9BQUZBOzs7OztnQ0FNbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJTiw4REFBQ2Y7Z0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztBQUdyQjtHQWxGTW5COztRQU1zQkYsdURBQVVBO1FBQ0NGLG1FQUFlQTtRQVluQ0csMkRBQVFBOzs7S0FuQnJCQztBQW9GTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RvY3RvclBhZ2VIZWFkZXIudHN4PzY4MGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbm9Qcm9maWxlSW1hZ2UgfSBmcm9tIFwiQC91dGlscy9ub1Byb2ZpbGVJbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXBsb2FkQ2xvdWRTdmcgZnJvbSBcIi4vaWNvbnMvVXBsb2FkQ2xvdWRTdmdcIjtcbmltcG9ydCB7IHVzZVVwZGF0ZUF2YXRhciB9IGZyb20gXCJAL2hvb2tzL3VzZVVwZGF0ZUF2YXRhclwiO1xuaW1wb3J0IHsgQ2xkSW1hZ2UgfSBmcm9tIFwibmV4dC1jbG91ZGluYXJ5XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5cbmludGVyZmFjZSBEb2N0b3JQYWdlSGVhZGVyUHJvcHMge1xuICBwaG90bzogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBEb2N0b3JQYWdlSGVhZGVyOiBGdW5jdGlvbkNvbXBvbmVudDxEb2N0b3JQYWdlSGVhZGVyUHJvcHM+ID0gKHtcbiAgcGhvdG8sXG4gIG5hbWUsXG4gIHR5cGUsXG59KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50UGhvdG8sIHNldEN1cnJlbnRQaG90b10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHsgdXBkYXRlQXZhdGFyLCBpc1VwZGF0aW5nIH0gPSB1c2VVcGRhdGVBdmF0YXIoKTtcblxuICBjb25zdCBmZXRjaFByb2ZpbGVQaWN0dXJlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgL2FwaS91c2VyL2F2YXRhci8/dXNlcm5hbWU9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgIHNlc3Npb24/LnVzZXI/LmVtYWlsIGFzIHN0cmluZ1xuICAgICAgKX1gXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoXG4gICAgW3Nlc3Npb24/LnVzZXI/LmVtYWlsLCBcInByb2ZpbGVQaWN0dXJlXCJdLFxuICAgIGZldGNoUHJvZmlsZVBpY3R1cmVcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICYmIGRhdGEuaW1hZ2UpIHtcbiAgICAgIHNldEN1cnJlbnRQaG90byhkYXRhLmltYWdlKTtcbiAgICB9XG4gIH0sIFtzZXNzaW9uLCBkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTIgbWQ6cC00IGZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGJnLXdoaXRlIG1kOmZsZXgtcm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG8gbWQ6bXgtMCB3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy05NiBoLVs0MDBweF0gbWQ6aC05NiBiZy1ncmF5LTMwMCBtYi0yIG92ZXJmbG93LWhpZGRlbiB6LTAgcmVsYXRpdmVcIj5cbiAgICAgICAgICA8Q2xkSW1hZ2VcbiAgICAgICAgICAgIHNyYz17Y3VycmVudFBob3RvIHx8IG5vUHJvZmlsZUltYWdlfVxuICAgICAgICAgICAgYWx0PVwicHJvZmlsZSBwaWN0dXJlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIFwiXG4gICAgICAgICAgICBmaWxsXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMCB3LWZ1bGwgaC1mdWxsIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjayB2aWEtdHJhbnNwYXJlbnQgei0xMCAke1xuICAgICAgICAgICAgaXNVcGRhdGluZyA/IFwiYW5pbWF0ZS1wdWxzZVwiIDogXCJcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCB6LTIwIHctMTIgaC0xMiBiZy13aGl0ZSByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPVwicHJvZmlsZXBob3RvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VXBsb2FkQ2xvdWRTdmcgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWcsIHZpZGVvL21wNFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBvcGFjaXR5LTAgdy0wIGgtMFwiXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBpZD1cInByb2ZpbGVwaG90b1wiXG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXZhdGFyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS00IGxlZnQtNCB6LTIwXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBtYi0yXCI+e25hbWV9PC9oMT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiB0ZXh0LXNtIGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgXCI+XG4gICAgICAgICAgICB7dHlwZS5tYXAoKGUpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGtleT17YHRhZ18ke2V9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBweC0yIHB5LTEgZm9udC1zZW1pYm9sZCBiZy1ibHVlLTIwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtZDptbC0xMlwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jdG9yUGFnZUhlYWRlcjtcbiJdLCJuYW1lcyI6WyJub1Byb2ZpbGVJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVcGxvYWRDbG91ZFN2ZyIsInVzZVVwZGF0ZUF2YXRhciIsIkNsZEltYWdlIiwidXNlU2Vzc2lvbiIsInVzZVF1ZXJ5IiwiRG9jdG9yUGFnZUhlYWRlciIsInBob3RvIiwibmFtZSIsInR5cGUiLCJzZXNzaW9uIiwiY3VycmVudFBob3RvIiwic2V0Q3VycmVudFBob3RvIiwiZGF0YSIsInVwZGF0ZUF2YXRhciIsImlzVXBkYXRpbmciLCJmZXRjaFByb2ZpbGVQaWN0dXJlIiwicmVzcG9uc2UiLCJmZXRjaCIsImVuY29kZVVSSUNvbXBvbmVudCIsInVzZXIiLCJlbWFpbCIsImpzb24iLCJpbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImZpbGwiLCJidXR0b24iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImFjY2VwdCIsImlkIiwib25DaGFuZ2UiLCJoMSIsInVsIiwibWFwIiwiZSIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DoctorPageHeader.tsx\n"));

/***/ })

});