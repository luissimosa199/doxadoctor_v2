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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_noProfileImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/noProfileImage */ \"./src/utils/noProfileImage.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _icons_UploadCloudSvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/UploadCloudSvg */ \"./src/components/icons/UploadCloudSvg.tsx\");\n/* harmony import */ var _hooks_useUpdateAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useUpdateAvatar */ \"./src/hooks/useUpdateAvatar.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DoctorPageHeader = (param)=>{\n    let { photo, name, type } = param;\n    _s();\n    const { updateAvatar, isUpdating, image } = (0,_hooks_useUpdateAvatar__WEBPACK_IMPORTED_MODULE_5__.useUpdateAvatar)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-2 md:p-4 flex flex-col items-end bg-white md:flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative mx-auto md:mx-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen md:w-96 h-[400px] md:h-96 bg-gray-300 mb-2 overflow-hidden z-0 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: image || _utils_noProfileImage__WEBPACK_IMPORTED_MODULE_1__.noProfileImage,\n                            alt: \"profile picture\",\n                            className: \"object-cover object-center \",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-0 w-full h-full bg-gradient-to-t from-black via-transparent z-10 \".concat(isUpdating ? \"animate-pulse\" : \"\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-0 right-0 z-20 w-12 h-12 bg-white rounded-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"flex items-center justify-center w-full h-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"profilephoto\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_UploadCloudSvg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                accept: \"image/png, image/jpeg, video/mp4\",\n                                className: \"absolute opacity-0 w-0 h-0\",\n                                type: \"file\",\n                                id: \"profilephoto\",\n                                onChange: updateAvatar\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-4 left-4 z-20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-5xl font-semibold text-white mb-2\",\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex gap-2 text-sm justify-center md:justify-start \",\n                                children: type.map((e)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \" px-2 py-1 font-semibold bg-blue-200 rounded-md\",\n                                        children: e\n                                    }, \"tag_\".concat(e), false, {\n                                        fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto md:ml-12\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\simos\\\\Documents\\\\Webfiles\\\\DOXA\\\\doxadoctor\\\\src\\\\components\\\\DoctorPageHeader.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DoctorPageHeader, \"d66qyHQVrve/QcWS9UwBqPeuGEA=\", false, function() {\n    return [\n        _hooks_useUpdateAvatar__WEBPACK_IMPORTED_MODULE_5__.useUpdateAvatar\n    ];\n});\n_c = DoctorPageHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoctorPageHeader);\nvar _c;\n$RefreshReg$(_c, \"DoctorPageHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Eb2N0b3JQYWdlSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDekI7QUFDa0I7QUFDRztBQUNNO0FBUTFELE1BQU1LLG1CQUE2RDtRQUFDLEVBQ2xFQyxLQUFLLEVBQ0xDLElBQUksRUFDSkMsSUFBSSxFQUNMOztJQUNDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBRSxHQUFHUCx1RUFBZUE7SUFFM0QscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDWixtREFBS0E7NEJBQ0phLEtBQUtILFNBQVNYLGlFQUFjQTs0QkFDNUJlLEtBQUk7NEJBQ0pGLFdBQVU7NEJBQ1ZHLElBQUk7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDSjt3QkFDQ0MsV0FBVyxpRkFFVixPQURDSCxhQUFhLGtCQUFrQjs7Ozs7O2tDQUduQyw4REFBQ0U7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBT0osV0FBVTswQ0FDaEIsNEVBQUNLO29DQUFNQyxTQUFROzhDQUNiLDRFQUFDaEIsNkRBQWNBOzs7Ozs7Ozs7Ozs7Ozs7MENBR25CLDhEQUFDaUI7Z0NBQ0NDLFFBQU87Z0NBQ1BSLFdBQVU7Z0NBQ1ZMLE1BQUs7Z0NBQ0xjLElBQUc7Z0NBQ0hDLFVBQVVkOzs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNHO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1c7Z0NBQUdYLFdBQVU7MENBQTBDTjs7Ozs7OzBDQUN4RCw4REFBQ2tCO2dDQUFHWixXQUFVOzBDQUNYTCxLQUFLa0IsR0FBRyxDQUFDLENBQUNDO29DQUNULHFCQUNFLDhEQUFDQzt3Q0FFQ2YsV0FBVTtrREFFVGM7dUNBSEksT0FBUyxPQUFGQTs7Ozs7Z0NBTWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSU4sOERBQUNmO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFHckI7R0F4RE1SOztRQUt3Q0QsbUVBQWVBOzs7S0FMdkRDO0FBMEROLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdG9yUGFnZUhlYWRlci50c3g/NjgwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub1Byb2ZpbGVJbWFnZSB9IGZyb20gXCJAL3V0aWxzL25vUHJvZmlsZUltYWdlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVwbG9hZENsb3VkU3ZnIGZyb20gXCIuL2ljb25zL1VwbG9hZENsb3VkU3ZnXCI7XG5pbXBvcnQgeyB1c2VVcGRhdGVBdmF0YXIgfSBmcm9tIFwiQC9ob29rcy91c2VVcGRhdGVBdmF0YXJcIjtcblxuaW50ZXJmYWNlIERvY3RvclBhZ2VIZWFkZXJQcm9wcyB7XG4gIHBob3RvOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nW107XG59XG5cbmNvbnN0IERvY3RvclBhZ2VIZWFkZXI6IEZ1bmN0aW9uQ29tcG9uZW50PERvY3RvclBhZ2VIZWFkZXJQcm9wcz4gPSAoe1xuICBwaG90byxcbiAgbmFtZSxcbiAgdHlwZSxcbn0pID0+IHtcbiAgY29uc3QgeyB1cGRhdGVBdmF0YXIsIGlzVXBkYXRpbmcsIGltYWdlIH0gPSB1c2VVcGRhdGVBdmF0YXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMiBtZDpwLTQgZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQgYmctd2hpdGUgbWQ6ZmxleC1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBtZDpteC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gbWQ6dy05NiBoLVs0MDBweF0gbWQ6aC05NiBiZy1ncmF5LTMwMCBtYi0yIG92ZXJmbG93LWhpZGRlbiB6LTAgXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2ltYWdlIHx8IG5vUHJvZmlsZUltYWdlfVxuICAgICAgICAgICAgYWx0PVwicHJvZmlsZSBwaWN0dXJlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIFwiXG4gICAgICAgICAgICBmaWxsXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMCB3LWZ1bGwgaC1mdWxsIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjayB2aWEtdHJhbnNwYXJlbnQgei0xMCAke1xuICAgICAgICAgICAgaXNVcGRhdGluZyA/IFwiYW5pbWF0ZS1wdWxzZVwiIDogXCJcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCB6LTIwIHctMTIgaC0xMiBiZy13aGl0ZSByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJvZmlsZXBob3RvXCI+XG4gICAgICAgICAgICAgIDxVcGxvYWRDbG91ZFN2ZyAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvanBlZywgdmlkZW8vbXA0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIG9wYWNpdHktMCB3LTAgaC0wXCJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGlkPVwicHJvZmlsZXBob3RvXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBdmF0YXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgbGVmdC00IHotMjBcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIG1iLTJcIj57bmFtZX08L2gxPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHRleHQtc20ganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydCBcIj5cbiAgICAgICAgICAgIHt0eXBlLm1hcCgoZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAga2V5PXtgdGFnXyR7ZX1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHB4LTIgcHktMSBmb250LXNlbWlib2xkIGJnLWJsdWUtMjAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtlfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1kOm1sLTEyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JQYWdlSGVhZGVyO1xuIl0sIm5hbWVzIjpbIm5vUHJvZmlsZUltYWdlIiwiSW1hZ2UiLCJSZWFjdCIsIlVwbG9hZENsb3VkU3ZnIiwidXNlVXBkYXRlQXZhdGFyIiwiRG9jdG9yUGFnZUhlYWRlciIsInBob3RvIiwibmFtZSIsInR5cGUiLCJ1cGRhdGVBdmF0YXIiLCJpc1VwZGF0aW5nIiwiaW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJmaWxsIiwiYnV0dG9uIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJhY2NlcHQiLCJpZCIsIm9uQ2hhbmdlIiwiaDEiLCJ1bCIsIm1hcCIsImUiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DoctorPageHeader.tsx\n"));

/***/ })

});