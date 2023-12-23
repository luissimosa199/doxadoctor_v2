"use strict";
exports.id = 9825;
exports.ids = [9825];
exports.modules = {

/***/ 3029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const HeadMetaTags = ({ timeline, timelineName, timeLineUrl, message, siteName })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            timeline && timeline?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                itemProp: "image",
                content: timeline[0].url
            }),
            timeline && timeline?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: timeline[0].url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: `${timeLineUrl}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: `${timelineName}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: `${timelineName}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: `${message}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: `${message}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image:type",
                content: "image/jpeg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:site_name",
                content: siteName
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadMetaTags);


/***/ }),

/***/ 9785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const IFrame = ({ src, w = "100%", h = "100%", title = "iframe", ...props })=>{
    const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoaded(true);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loaded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
            src: src,
            width: w,
            height: h,
            title: title,
            ...props
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IFrame);


/***/ }),

/***/ 3018:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserPageCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9539);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var _UserButtonsPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4745);
/* harmony import */ var _hooks_useFavorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1255);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UserPageCard__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, _UserButtonsPanel__WEBPACK_IMPORTED_MODULE_4__, _hooks_useFavorite__WEBPACK_IMPORTED_MODULE_5__]);
([_UserPageCard__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, _UserButtonsPanel__WEBPACK_IMPORTED_MODULE_4__, _hooks_useFavorite__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const PostAuthorCard = ({ username })=>{
    const { data: userData, isLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "timelineAuthorData",
        username
    ], async ()=>{
        const response = await fetch(`/api/user?username=${username}`);
        return response.json();
    });
    const { isFavorite, mutation, isLoading: FavLoading } = (0,_hooks_useFavorite__WEBPACK_IMPORTED_MODULE_5__/* .useFavorite */ .s)(username);
    if (isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "h-40 bg-gray-300 animate-pulse"
        });
    }
    console.log({
        isFavorite,
        FavLoading
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserPageCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                userData: userData[0]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden lg:block lg:mt-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserButtonsPanel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    isFavorite: isFavorite,
                    mutation: mutation,
                    isLoading: FavLoading,
                    username: userData?.email
                }, "3")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostAuthorCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9825:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _TimeLineEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1035);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ShareButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2345);
/* harmony import */ var _HeadMetaTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3029);
/* harmony import */ var _utils_formatDateString__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8496);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4563);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9752);
/* harmony import */ var _Iframe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9785);
/* harmony import */ var _utils_isYtUrl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(455);
/* harmony import */ var _YoutubePlayer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6346);
/* harmony import */ var _PostAuthorCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3018);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ShareButtons__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__, _PostAuthorCard__WEBPACK_IMPORTED_MODULE_13__]);
([_ShareButtons__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__, _PostAuthorCard__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const TimeLine = ({ timeline, length, mainText, createdAt, tags, _id, authorId, authorName, links, urlSlug })=>{
    const BASE_URL = "http://localhost:3000";
    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession)();
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useQueryClient)();
    const handleDeleteTimeline = async (event)=>{
        event.preventDefault();
        try {
            const willDelete = await sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
                title: "Estas seguro?",
                text: "Esta publicaci\xf3n no podr\xe1 ser recuperada una vez confirmes",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Borrar",
                cancelButtonText: "Volver",
                reverseButtons: true
            });
            if (willDelete.isConfirmed) {
                const response = await fetch(`/api/timeline/${_id}`, {
                    method: "DELETE"
                });
                if (response.ok) {
                    const data = await response.json();
                    queryClient.invalidateQueries([
                        "timelines"
                    ]);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
                        title: "Publicaci\xf3n borrada",
                        icon: "success"
                    });
                } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
                        title: `Error: ${response.status} ${response.statusText}`,
                        icon: "error"
                    });
                }
            }
        } catch (error) {
            console.error("Error: ", error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
                title: `Error: ${JSON.stringify(error)}`,
                icon: "error"
            });
        }
    };
    const timeLineUrl = BASE_URL + `/nota/${urlSlug ? urlSlug : _id}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-4 max-w-[850px] lg:max-w-[1024px] mx-auto break-all flex flex-col lg:flex-row lg:gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeadMetaTags__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    timeline: timeline,
                    timelineName: mainText?.slice(0, 50) || "",
                    timeLineUrl: timeLineUrl,
                    message: "Comparte con Doxa-Board",
                    siteName: "doxa-board"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "py-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: ""
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-left",
                                children: mainText && mainText.split("\n").map((paragraph, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `${mainText.length > 300 ? "text-md font-normal" : "text-xl font-semibold"} mb-2 break-words `,
                                        children: paragraph
                                    }, idx))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm text-white mt-2",
                                children: tags.join(", ")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm text-gray-300",
                                children: (0,_utils_formatDateString__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(createdAt)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm text-gray-300 capitalize",
                                children: authorName === "defaultName" ? "" : authorName
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-4 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: _id !== "newitem" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ShareButtons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            url: timeLineUrl,
                                            title: `${mainText?.slice(0, 50)}`
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-fit flex gap-2",
                                        children: _id !== "newitem" && session?.user?.email === authorId && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    className: "text-blue-500 w-6 h-6 hover:text-blue-700 transition ease-in-out duration-150",
                                                    href: `/nota/editar/${_id}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faPenToSquare,
                                                        size: "lg"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "w-5 h-5",
                                                    onClick: handleDeleteTimeline,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faTrashCan,
                                                        size: "lg",
                                                        className: "text-red-500 hover:text-red-700 transition ease-in-out duration-150"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-6 ",
                        children: [
                            timeline && timeline.map((e)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TimeLineEntry__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    idx: e.idx,
                                    data: e,
                                    length: length
                                }, e.idx)),
                            links && links.map((e, idx)=>{
                                let src;
                                let caption;
                                if (typeof e === "object" && e.value) {
                                    src = e.value;
                                    caption = e.caption;
                                } else if (typeof e === "string") {
                                    src = e;
                                    caption = undefined;
                                } else {
                                    return null;
                                }
                                if ((0,_utils_isYtUrl__WEBPACK_IMPORTED_MODULE_15__/* .isYtUrl */ .T)(src) && (0,_utils_isYtUrl__WEBPACK_IMPORTED_MODULE_15__/* .extractVideoId */ .Tm)(src)) {
                                    const start = (0,_utils_isYtUrl__WEBPACK_IMPORTED_MODULE_15__/* .extractTimestamp */ .Lm)(src);
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-4 max-w-[800px] w-full mx-auto bg-white",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_YoutubePlayer__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    videoId: (0,_utils_isYtUrl__WEBPACK_IMPORTED_MODULE_15__/* .extractVideoId */ .Tm)(src),
                                                    h: "500px",
                                                    start: start
                                                }),
                                                caption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-lg text-gray-500 mt-2 ml-2",
                                                    children: caption
                                                })
                                            ]
                                        })
                                    }, src + _id);
                                }
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-4 max-w-[800px] w-full mx-auto bg-white",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iframe__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                src: src,
                                                h: "800px"
                                            }),
                                            caption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-lg text-gray-500 mt-2 ml-2",
                                                children: caption
                                            })
                                        ]
                                    })
                                }, src + _id);
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full lg:w-1/5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PostAuthorCard__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            username: authorId
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden lg:block lg:border lg:w-full lg:h-screen lg:mt-32"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeLine);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7526);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cloudinary__WEBPACK_IMPORTED_MODULE_1__);


const TimeLineEntry = ({ data, idx, length })=>{
    const isVideo = data.url.includes("/dahu3rii0/video/upload/") && data.url.endsWith(".mp4") || data.url.includes("data:video/mp4");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-4 w-fit mx-auto bg-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full",
                children: isVideo ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                    controls: true,
                    width: "850",
                    height: "850",
                    className: "rounded mx-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                            src: data.url,
                            type: "video/mp4"
                        }),
                        "Your browser does not support the video tag."
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_cloudinary__WEBPACK_IMPORTED_MODULE_1__.CldImage, {
                    className: "rounded mx-auto",
                    src: data.url,
                    alt: data.caption || "image",
                    width: 850,
                    height: 850,
                    priority: idx === 0
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-lg text-gray-500 mt-2 ml-2",
                children: data.caption
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeLineEntry);


/***/ }),

/***/ 5361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_UserBio)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/UserCategories.tsx


const UserCategories = ({ tags })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "w-full",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "flex mt-1",
            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                className: "w-full mx-auto flex gap-2 flex-wrap lg:w-1/2",
                children: tags && tags.length > 0 ? tags.map((e, idx)=>{
                    return /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: `flex items-center text-xs font-medium tracking-wider text-left uppercase px-2 transition-all text-gray-500 mb-1`,
                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                            children: e
                        })
                    }, `${e}${idx}`);
                }) : /*#__PURE__*/ jsx_runtime.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-gray-400 text-xs font-medium tracking-wider text-left uppercase py-0.5 px-1",
                        children: "No has agregado categor\xedas a tu perfil"
                    })
                })
            })
        })
    });
};
/* harmony default export */ const components_UserCategories = (UserCategories);

;// CONCATENATED MODULE: ./src/components/UserBio.tsx



const UserBio = ({ name, tags, bio })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-2 items-start mb-6 p-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                className: "text-2xl font-semibold text-white",
                children: [
                    "Sobre ",
                    name
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex gap-2 w-full mt-1",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                        className: "text-white text-sm break-normal min-h-[450px]:text-base",
                        children: [
                            "Categor\xedas:",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(components_UserCategories, {
                        tags: tags
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-lg text-gray-300",
                children: bio
            })
        ]
    });
};
/* harmony default export */ const components_UserBio = (UserBio);


/***/ }),

/***/ 4745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UserFavButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4417);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _UserFavButton__WEBPACK_IMPORTED_MODULE_5__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _UserFavButton__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const UserButtonsPanel = ({ username, isLoading, isFavorite, mutation })=>{
    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const buttons = [
        {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faMessage,
            href: `${session?.user ? `/chat/${(session?.user?.email).split("@")[0]}y${username}` : "/login"}`,
            name: "Enviar mensaje",
            color: "bg-violet-400"
        },
        {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faVideoCamera,
            href: `${session?.user ? `/videocall?name=${username}` : "/login"}`,
            name: "Videollamada",
            color: "bg-emerald-400"
        },
        {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faDollarSign,
            href: "/premium",
            name: "Contenido Premium",
            color: "bg-emerald-400"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "flex justify-around my-4 lg:my-0 lg:gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "w-28 h-20 lg:h-fit lg:w-fit lg:rounded-lg lg:px-4 text-gray-300 lg:bg-[#3a3a3a] active:hover:opacity-70 lg:hover:opacity-70",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col lg:flex-row lg:gap-2 justify-center items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserFavButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        isFavorite: isFavorite,
                        mutation: mutation,
                        isLoading: isLoading,
                        size: "2x",
                        username: username,
                        showSpan: true
                    }, "1")
                })
            }),
            buttons.map((e, idx)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "w-28 h-20 lg:h-fit lg:w-fit lg:rounded-lg lg:px-4 text-gray-300 lg:bg-[#3a3a3a] active:hover:opacity-70 lg:hover:opacity-70",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: "flex flex-col lg:flex-row lg:gap-2 justify-center items-center lg:py-1",
                        href: e.href,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                size: "2x",
                                icon: e.icon,
                                className: "w-10 h-10 lg:w-5 lg:h-5"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm break-normal min-h-[450px]:text-base",
                                children: e.name
                            })
                        ]
                    })
                }, idx);
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserButtonsPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserBio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5361);
/* harmony import */ var _UserButtonsPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4745);
/* harmony import */ var _UserPicture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1539);
/* harmony import */ var _hooks_useFavorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1255);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UserButtonsPanel__WEBPACK_IMPORTED_MODULE_3__, _hooks_useFavorite__WEBPACK_IMPORTED_MODULE_5__]);
([_UserButtonsPanel__WEBPACK_IMPORTED_MODULE_3__, _hooks_useFavorite__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const UserPageCard = ({ userData })=>{
    const { isFavorite, mutation, isLoading } = (0,_hooks_useFavorite__WEBPACK_IMPORTED_MODULE_5__/* .useFavorite */ .s)(userData?.email);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col lg:flex-row justify-around items-center lg:items-start bg-[#1a1a1a] py-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserPicture__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                image: userData?.image,
                name: userData?.name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center lg:text-left lg:flex lg:self-end lg:items-end lg:justify-between lg:ml-12 w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-semibold text-2xl my-3 text-white break-normal",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: `/usuarios/${userData?.slug}`,
                                children: userData?.name
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-auto lg:mx-0 flex flex-col justify-center lg:self-end w-full lg:max-w-lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "lg:hidden",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserButtonsPanel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    isFavorite: isFavorite,
                                    mutation: mutation,
                                    isLoading: isLoading,
                                    username: userData?.email
                                }, "1")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "lg:hidden",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserBio__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    name: userData?.name,
                                    tags: userData?.tags,
                                    bio: userData?.bio
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPageCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _utils_noProfileImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9059);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7526);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cloudinary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const UserPicture = ({ image, name })=>{
    const [fullScreenPic, setFullScreenPic] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "pb-2 md:p-4 flex flex-col items-end bg-white md:flex-row",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>{
                    setFullScreenPic(!fullScreenPic);
                },
                className: `relative mx-auto md:mx-0`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `w-screen md:w-96 h-[400px] md:h-96 bg-gray-300 mb-2 overflow-hidden z-0`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_cloudinary__WEBPACK_IMPORTED_MODULE_1__.CldImage, {
                        src: image || _utils_noProfileImage__WEBPACK_IMPORTED_MODULE_3__/* .noProfileImage */ .j,
                        fill: true,
                        alt: `${name}'s Avatar`,
                        className: `object-cover object-center`
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPicture);


/***/ }),

/***/ 6346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const YouTubePlayer = ({ videoId, h = "800px", start })=>{
    // https://www.npmjs.com/package/js-video-url-parser ?
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
        width: "100%",
        height: h,
        src: `https://www.youtube.com/embed/${videoId}${start ? "?start=" + start : ""}`,
        title: `YouTube video player ${videoId + start}`,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowFullScreen: true
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YouTubePlayer);


/***/ }),

/***/ 8496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ formatDateString)
/* harmony export */ });
function formatDateString(dateString) {
    const date = new Date(dateString);
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit", // Uncomment if you want seconds
        timeZone: "UTC"
    };
    return date.toLocaleDateString("es-ES", options);
}


/***/ }),

/***/ 455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lm: () => (/* binding */ extractTimestamp),
/* harmony export */   T: () => (/* binding */ isYtUrl),
/* harmony export */   Tm: () => (/* binding */ extractVideoId)
/* harmony export */ });
function isYtUrl(url) {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?.*v=|youtu\.be\/|youtube\.com\/embed\/)[a-zA-Z0-9_-]{11}(?:&.*|\?.*)?$/;
    return youtubeRegex.test(url);
}
function extractVideoId(url) {
    const regexes = [
        /^https?:\/\/youtu\.be\/([a-zA-Z0-9_-]{11})(?:\?.*)?$/,
        /^https?:\/\/www\.youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})(?:&.*|$)/,
        /^https?:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})(?:\?.*)?$/
    ];
    for (const regex of regexes){
        const match = url.match(regex);
        if (match) {
            return match[1];
        }
    }
    return null;
}
function extractTimestamp(url) {
    const match = url.match(/[?&]t=(\d+)/); // Changed the regex here
    return match ? parseInt(match[1], 10) : null;
}


/***/ })

};
;