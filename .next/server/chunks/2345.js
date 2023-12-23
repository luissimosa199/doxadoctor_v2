"use strict";
exports.id = 2345;
exports.ids = [2345];
exports.modules = {

/***/ 2345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(303);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ShareButtons = ({ url, title })=>{
    const [copySuccess, setCopySuccess] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const shareLinks = [
        {
            platform: "WhatsApp",
            url: `https://wa.me/?text=${encodedUrl + "?utm_source=w"}%20${encodedTitle}`,
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faWhatsapp,
            color: "#25D366"
        },
        {
            platform: "Facebook",
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl + "?utm_source=f"}`,
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFacebook,
            color: "#3b5998"
        },
        {
            platform: "Twitter",
            url: `https://twitter.com/share?url=${encodedUrl + "?utm_source=tw"}&text=${encodedTitle}`,
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faTwitter,
            color: "#1DA1F2"
        },
        {
            platform: "LinkedIn",
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl + "?utm_source=l"}`,
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faLinkedin,
            color: "#0077b5"
        },
        {
            platform: "Pinterest",
            url: `https://pinterest.com/pin/create/button/?url=${encodedUrl + "?utm_source=p"}&media=&description=${encodedTitle}`,
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPinterest,
            color: "#BD081C"
        },
        {
            platform: "Reddit",
            url: `https://reddit.com/submit?url=${encodedUrl + "?utm_source=r"}&title=${encodedTitle}`,
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faReddit,
            color: "#FF5700"
        },
        {
            platform: "Telegram",
            url: `https://telegram.me/share/url?url=${encodedUrl + "?utm_source=t"}&text=${encodedTitle}`,
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faTelegram,
            color: "#0088cc"
        },
        {
            platform: "Email",
            url: `mailto:?subject=${encodedTitle}&body=${encodedUrl + "?utm_source=e"}`,
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faTelegram,
            color: "#D44638"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "flex gap-2 px-2 justify-center",
        children: [
            shareLinks.map((shareLink, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "w-5 h-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: shareLink.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                            icon: shareLink.icon,
                            style: {
                                color: shareLink.color
                            }
                        })
                    })
                }, index)),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "w-5",
                        onClick: ()=>{
                            navigator.clipboard.writeText(url + "?utm_source=cp");
                            setCopySuccess(true);
                            setTimeout(()=>{
                                setCopySuccess(false);
                            }, 1000);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCopy,
                            className: "text-slate-500"
                        })
                    }),
                    copySuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `ml-2 text-xs`,
                        children: "Copiado!"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareButtons);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;