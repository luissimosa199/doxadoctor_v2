"use strict";
exports.id = 4864;
exports.ids = [4864];
exports.modules = {

/***/ 8783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_DoctorPageBody)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/icons/VideoCamSvg.tsx
var VideoCamSvg = __webpack_require__(8256);
// EXTERNAL MODULE: ./src/components/icons/EnvelopeSvg.tsx
var EnvelopeSvg = __webpack_require__(9761);
;// CONCATENATED MODULE: ./src/components/icons/ClockSvg.tsx


const ClockSvg = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "16",
        width: "16",
        viewBox: "0 0 512 512",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
        })
    });
};
/* harmony default export */ const icons_ClockSvg = (ClockSvg);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./src/components/DoctorPageButtons.tsx







const DoctorPageButtons = ({ setCurrentTab, currentTab, username })=>{
    const { data: session } = (0,react_.useSession)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mx-4 flex flex-col-reverse justify-center md:justify-between md:flex-row",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                className: "flex text-lg justify-around md:justify-left",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            onClick: ()=>{
                                setCurrentTab("informacion");
                            },
                            className: `${currentTab !== "informacion" ? "" : "border-b-2 border-blue-600"} px-4 py-2 text-blue-600 font-semibold`,
                            children: "Informaci\xf3n"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            onClick: ()=>{
                                setCurrentTab("opiniones");
                            },
                            className: `${currentTab !== "opiniones" ? "" : "border-b-2 border-blue-600"} px-4 py-2 text-blue-600 font-semibold`,
                            children: "Opiniones"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                className: "flex gap-4 justify-center md:justify-end items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            href: `${session?.user ? `/chat/${(session?.user?.email).split("@")[0]}y${username}` : "/login"}`,
                            className: "bg-blue-300 shadow-sm px-2 py-1 rounded-md flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(EnvelopeSvg/* default */.Z, {
                                    fill: "black"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: "Mensaje"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            href: `${session?.user ? `/videocall?name=${username}` : "/login"}`,
                            className: "bg-blue-300 shadow-sm px-2 py-1 rounded-md flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(VideoCamSvg/* default */.Z, {}),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: "Videollamada"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            href: "#",
                            className: "bg-blue-300 shadow-sm px-2 py-1 rounded-md flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(icons_ClockSvg, {}),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: "Solicitar turno"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_DoctorPageButtons = (DoctorPageButtons);

;// CONCATENATED MODULE: ./src/components/icons/ThumbsDownSvg.tsx


const ThumbsDownSvg = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "16",
        width: "16",
        viewBox: "0 0 512 512",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16H286.5c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8H384c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H32z"
        })
    });
};
/* harmony default export */ const icons_ThumbsDownSvg = (ThumbsDownSvg);

;// CONCATENATED MODULE: ./src/components/icons/ThumbsUpSvg.tsx


const ThumbsUpSvg = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "16",
        width: "16",
        viewBox: "0 0 512 512",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"
        })
    });
};
/* harmony default export */ const icons_ThumbsUpSvg = (ThumbsUpSvg);

;// CONCATENATED MODULE: ./src/components/DoctorPageOpinionCard.tsx




const DoctorPageOpinionCard = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "shadow-md w-full flex gap-2 p-4 mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "w-24 h-24 rounded-full bg-gray-200 shrink-0"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "font-semibold",
                                        children: "Nombre"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-sm",
                                        children: "19 de diciembre 2023"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: "xxxxx"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit modi debitis ut ab, at cupiditate aperiam quae dolores? Soluta magnam non quisquam temporibus qui officia distinctio quasi! Dolorem, sit cumque quibusdam consequatur magnam rerum distinctio facilis dolore eaque pariatur sed omnis deserunt quo rem? Quas placeat fugiat ipsam minima veritatis?"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-1 justify-end items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "font-semibold",
                                children: "\xbfTe result\xf3 \xfatil?"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                className: "border rounded-md px-2 py-1 flex gap-1 items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(icons_ThumbsUpSvg, {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "Si"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                className: "border rounded-md px-2 py-1 flex gap-1 items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(icons_ThumbsDownSvg, {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "No"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_DoctorPageOpinionCard = (DoctorPageOpinionCard);

;// CONCATENATED MODULE: ./src/components/DoctorPageOpinionsTab.tsx



const DoctorPageOpinionsTab = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "p-4",
        children: [
            ...Array(10)
        ].map((_, idx)=>{
            if ((idx + 1) % 3 === 0 && idx !== 0) {
                return /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "h-48 w-full bg-gray-300 mb-8"
                }, `comment_${idx}`);
            }
            return /*#__PURE__*/ jsx_runtime.jsx(components_DoctorPageOpinionCard, {}, `comment_${idx}`);
        })
    });
};
/* harmony default export */ const components_DoctorPageOpinionsTab = (DoctorPageOpinionsTab);

;// CONCATENATED MODULE: ./src/components/icons/PhoneSvg.tsx


const PhoneSvg = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "16",
        width: "16",
        viewBox: "0 0 512 512",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
        })
    });
};
/* harmony default export */ const icons_PhoneSvg = (PhoneSvg);

// EXTERNAL MODULE: ./src/components/icons/LocationSvg.tsx
var LocationSvg = __webpack_require__(8138);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9332);
;// CONCATENATED MODULE: ./src/components/DoctorPageInfoTab.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const DoctorPageInfoTab = ({ visiblePhone, phone, hours, address, slug })=>{
    const [showNumber, setShowNumber] = (0,external_react_.useState)(!!visiblePhone);
    const router = (0,navigation.useRouter)();
    const handleShowPhone = ()=>{
        router.replace(`/telefono/medicos/${slug}#phone`);
        setShowNumber(true);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "p-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "shadow-md w-full p-4 mb-8",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                    className: "text-xl font-semibold mb-2",
                    children: "Informaci\xf3n"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(LocationSvg/* default */.Z, {}),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: address
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(icons_ClockSvg, {}),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: hours
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(icons_PhoneSvg, {}),
                        showNumber && /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: phone
                        }),
                        !showNumber && /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: "text-blue-500 font-semibold",
                            onClick: handleShowPhone,
                            children: "Mostrar n\xfamero"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_DoctorPageInfoTab = (DoctorPageInfoTab);

;// CONCATENATED MODULE: ./src/components/CurrentTabContent.tsx




const CurrentTabContent = ({ currentTab, visiblePhone, phone, hours, address, slug })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${currentTab !== "informacion" ? "hidden" : "block"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(components_DoctorPageInfoTab, {
                        visiblePhone: visiblePhone,
                        phone: phone,
                        hours: hours,
                        address: address,
                        slug: slug
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "w-ful h-32 bg-gray-200 mx-4 mb-4"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `${currentTab !== "opiniones" ? "hidden" : "block"}`,
                children: /*#__PURE__*/ jsx_runtime.jsx(components_DoctorPageOpinionsTab, {})
            })
        ]
    });
};
/* harmony default export */ const components_CurrentTabContent = (CurrentTabContent);

;// CONCATENATED MODULE: ./src/components/DoctorPageBody.tsx




const DoctorPageBody = ({ visiblePhone, phone, hours, address, slug, username })=>{
    const [currentTab, setCurrentTab] = (0,external_react_.useState)("informacion");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-white",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "shadow-md",
                children: /*#__PURE__*/ jsx_runtime.jsx(components_DoctorPageButtons, {
                    username: username,
                    currentTab: currentTab,
                    setCurrentTab: setCurrentTab
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_CurrentTabContent, {
                slug: slug,
                visiblePhone: visiblePhone,
                currentTab: currentTab,
                phone: phone,
                hours: hours,
                address: address
            })
        ]
    });
};
/* harmony default export */ const components_DoctorPageBody = (DoctorPageBody);


/***/ }),

/***/ 5514:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _utils_noProfileImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9059);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_UploadCloudSvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3800);
/* harmony import */ var _hooks_useUpdateAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8475);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7526);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_cloudinary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useUpdateAvatar__WEBPACK_IMPORTED_MODULE_3__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__]);
([_hooks_useUpdateAvatar__WEBPACK_IMPORTED_MODULE_3__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const DoctorPageHeader = ({ photo, name, type })=>{
    const [currentPhoto, setCurrentPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    const { updateAvatar, isUpdating } = (0,_hooks_useUpdateAvatar__WEBPACK_IMPORTED_MODULE_3__/* .useUpdateAvatar */ .M)();
    const fetchProfilePicture = async ()=>{
        const response = await fetch(`/api/user/avatar/?username=${encodeURIComponent(session?.user?.email)}`);
        const data = await response.json();
        return data;
    };
    const { data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)([
        session?.user?.email,
        "profilePicture"
    ], fetchProfilePicture);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data && data.image) {
            setCurrentPhoto(data.image);
        }
    }, [
        session,
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pb-2 md:p-4 flex flex-col items-end bg-white md:flex-row",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mx-auto md:mx-0 w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full md:w-96 h-[400px] md:h-96 bg-gray-300 mb-2 overflow-hidden z-0 relative",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_cloudinary__WEBPACK_IMPORTED_MODULE_4__.CldImage, {
                            src: currentPhoto || _utils_noProfileImage__WEBPACK_IMPORTED_MODULE_7__/* .noProfileImage */ .j,
                            alt: "profile picture",
                            className: "object-cover object-center ",
                            fill: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `absolute top-0 w-full h-full bg-gradient-to-t from-black via-transparent z-10 ${isUpdating ? "animate-pulse" : ""}`
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute bottom-0 right-0 z-20 w-12 h-12 bg-white rounded-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "flex items-center justify-center w-full h-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "profilephoto",
                                    className: "cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_UploadCloudSvg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                accept: "image/png, image/jpeg, video/mp4",
                                className: "absolute opacity-0 w-0 h-0",
                                type: "file",
                                id: "profilephoto",
                                onChange: updateAvatar
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute bottom-4 left-4 z-20",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-5xl font-semibold text-white mb-2",
                                children: name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "flex gap-2 text-sm justify-center md:justify-start ",
                                children: type.map((e)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: " px-2 py-1 font-semibold bg-blue-200 rounded-md",
                                        children: e
                                    }, `tag_${e}`);
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-auto md:ml-12"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoctorPageHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const UploadCloudSvg = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "28",
        width: "28",
        viewBox: "0 0 640 512",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadCloudSvg);


/***/ }),

/***/ 8475:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ useUpdateAvatar)
/* harmony export */ });
/* harmony import */ var _utils_formHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6939);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_formHelpers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_formHelpers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useUpdateAvatar = ()=>{
    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    const [isUpdating, setIsUpdating] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const updateAvatar = async (event)=>{
        setIsUpdating(true);
        setError(null);
        try {
            const file = event.target.files?.[0];
            if (!file) return;
            const dataUrl = await new Promise((resolve, reject)=>{
                const reader = new FileReader();
                reader.onloadend = ()=>resolve(reader.result);
                reader.onerror = ()=>reject(new Error("Failed to read the file"));
                reader.readAsDataURL(file);
            });
            queryClient.cancelQueries([
                session?.user?.email,
                "profilePicture"
            ]);
            queryClient.setQueryData([
                session?.user?.email,
                "profilePicture"
            ], {
                image: dataUrl
            });
            const avatarArr = await (0,_utils_formHelpers__WEBPACK_IMPORTED_MODULE_0__/* .uploadImages */ .eg)(event);
            const avatarUrl = avatarArr?.[0];
            await updateAvatarOnServer(avatarUrl);
        } catch (error) {
            setError(error);
        } finally{
            setIsUpdating(false);
        }
    };
    const updateAvatarOnServer = async (avatarUrl)=>{
        const response = await fetch(`/api/user/avatar/?username=${encodeURIComponent(session.user.email)}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                image: avatarUrl
            })
        });
        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || `Server responded with ${response.status}`);
        }
        return response.json();
    };
    return {
        updateAvatar,
        isUpdating,
        error
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ noProfileImage)
/* harmony export */ });
const noProfileImage = "https://res.cloudinary.com/dahu3rii0/image/upload/v1695906400/utpg0w4bhenetupbxto4.jpg";


/***/ })

};
;