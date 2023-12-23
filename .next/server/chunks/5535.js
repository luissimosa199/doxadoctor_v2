exports.id = 5535;
exports.ids = [5535];
exports.modules = {

/***/ 3068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/icons/AglesRightSvg.tsx


const AglesRightSvg = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "#ffffff",
        height: "16",
        width: "16",
        viewBox: "0 0 512 512",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
        })
    });
};
/* harmony default export */ const icons_AglesRightSvg = (AglesRightSvg);

;// CONCATENATED MODULE: ./src/components/FooterLink.tsx




const FooterLink = ({ href, children })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
        href: href,
        className: "flex gap-1 items-center",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(icons_AglesRightSvg, {}),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                children: children
            })
        ]
    });
};
/* harmony default export */ const components_FooterLink = (FooterLink);

// EXTERNAL MODULE: ./src/components/icons/EnvelopeSvg.tsx
var EnvelopeSvg = __webpack_require__(9761);
;// CONCATENATED MODULE: ./src/components/icons/MessengerSvg.tsx


const MessengerSvg = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "16",
        width: "16",
        fill: "#ffffff",
        viewBox: "0 0 512 512",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"
        })
    });
};
/* harmony default export */ const icons_MessengerSvg = (MessengerSvg);

;// CONCATENATED MODULE: ./src/components/icons/WhatsappSvg.tsx


const WhatsappSvg = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "16",
        width: "14",
        fill: "#ffffff",
        viewBox: "0 0 448 512",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
        })
    });
};
/* harmony default export */ const icons_WhatsappSvg = (WhatsappSvg);

;// CONCATENATED MODULE: ./src/components/Footer.tsx








// import WhatsAppBtn from "./WhatsAppBtn";
const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "bg-blue-500 pt-8 pb-32 px-4 md:px-32 flex flex-col text-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col gap-2 md:gap-0 md:flex-row justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-2xl font-semibold mb-6",
                                children: "Especialidades"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "Alergia e inmunolog\xeda"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "Bioqu\xedmica"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "Cardiolog\xeda"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "Cirug\xeda"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "Cl\xednica General"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-2xl font-semibold mb-4",
                                children: "M\xe1s especialidades"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "Cl\xednica m\xe9dica"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "Ecograf\xeda"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "Lactancia"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "Pediatr\xeda"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "Neonatolog\xeda"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-2xl font-semibold mb-4",
                                children: "Nosotros"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "Contacto"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "Agregar m\xe9dico"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "Ranking"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(components_FooterLink, {
                                            href: "#",
                                            children: "T\xe9rminos y condiciones"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-2xl font-semibold mb-4",
                                children: "Contacto"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: "#",
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(EnvelopeSvg/* default */.Z, {}),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Contacto"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: "#",
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(icons_MessengerSvg, {}),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Chatear"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: "#",
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(icons_WhatsappSvg, {}),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Compartir en Whatsapp"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col md:flex-row justify-between border-t border-white pt-4",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: "\xa9 Doxadoctor 2013-2023 All rights reserved."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-1 items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex gap-1 items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "relative overflow-hidden w-[14px] h-[14px] rounded-full",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            fill: true,
                                            className: "object-cover",
                                            alt: "uruguay flag",
                                            src: "/uruguay_flag.png"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "Doxadoctor Uruguay"
                                    })
                                ]
                            }),
                            "|",
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex gap-1 items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "relative overflow-hidden w-[14px] h-[14px] rounded-full",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            fill: true,
                                            className: "object-cover",
                                            alt: "mexico flag",
                                            src: "/mexico_flag.png"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "Doxadoctor M\xe9xico"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "w-full h-36 mt-4 bg-gray-300"
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);


/***/ }),

/***/ 5874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ NavBar)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/useOnlineLogger.ts


function useOnlineLogger() {
    const { data: session, status } = (0,react_.useSession)();
    (0,external_react_.useEffect)(()=>{
        if (status === "authenticated") {
            const saveSessionStatus = ()=>{
                fetch(`api/user/online`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        online: true
                    })
                });
            };
            const intervalId = setInterval(saveSessionStatus, 120000);
            return ()=>{
                clearInterval(intervalId);
                fetch(`api/user/online`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        online: false
                    })
                });
            };
        }
    }, [
        session?.user?.email,
        status
    ]);
}
/* harmony default export */ const hooks_useOnlineLogger = (useOnlineLogger);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/DesktopNav.tsx



const DesktopNav = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("nav", {
                className: "ml-4 w-full hidden md:block",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    className: "flex gap-4 items-start w-full font-semibold text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "#",
                                children: "Profesionales"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "#",
                                children: "Notas"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "#",
                                children: "Agregar Profesional"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                    className: "hidden md:block px-4 py-2 border-2 border-white rounded-md text-white uppercase font-semibold",
                    children: "Ingresar"
                })
            })
        ]
    });
};
/* harmony default export */ const components_DesktopNav = (DesktopNav);

;// CONCATENATED MODULE: ./src/components/icons/BarsSvg.tsx


const BarsSvg = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        width: "24",
        fill: "#ffffff",
        viewBox: "0 0 448 512",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        })
    });
};
/* harmony default export */ const icons_BarsSvg = (BarsSvg);

;// CONCATENATED MODULE: ./src/components/MobileNav.tsx





const MobileNav = ()=>{
    const [menuIsOpen, toggleMenu] = (0,external_react_.useState)(false);
    const { data: session, status } = (0,react_.useSession)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "md:hidden",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                onClick: ()=>{
                    toggleMenu(!menuIsOpen);
                },
                children: /*#__PURE__*/ jsx_runtime.jsx(icons_BarsSvg, {})
            }),
            menuIsOpen && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute w-full left-0 top-16 bg-white shadow-md z-50",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: "border-b w-1/2 text-center py-2",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "#",
                                children: "Profesionales"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: "border-b w-1/2 text-center py-2",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "#",
                                children: "Notas"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: "border-b w-1/2 text-center py-2",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "#",
                                children: "Agregar Profesional"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: "border-b w-1/2 text-center py-2",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: status === "authenticated" ? "/perfil" : "/login",
                                children: status === "authenticated" ? "Perfil" : "Ingresar"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_MobileNav = (MobileNav);

;// CONCATENATED MODULE: ./src/components/NavBar.tsx







const Navbar = ()=>{
    const { data: session } = (0,react_.useSession)();
    const router = (0,router_.useRouter)();
    const isUsersPage = router.asPath === "/usuarios";
    hooks_useOnlineLogger();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: "bg-blue-500 py-4 flex justify-between items-center px-2 md:px-32",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex gap-2",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: "/logo.png",
                    alt: "logo",
                    width: 160,
                    height: 30
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_DesktopNav, {}),
            /*#__PURE__*/ jsx_runtime.jsx(components_MobileNav, {})
        ]
    });
};
/* harmony default export */ const NavBar = (Navbar);


/***/ }),

/***/ 9761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const EnvelopeSvg = ({ fill })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "16",
        width: "16",
        fill: fill || "#ffffff",
        viewBox: "0 0 512 512",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnvelopeSvg);


/***/ }),

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9621);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_3__);




const useTrackUserAgent = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (false) {}
        if (!router.isReady) return;
        const utmKeys = [
            "utm_source",
            "utm_medium",
            "utm_campaign",
            "utm_term",
            "utm_content"
        ];
        let utm_params = {};
        utmKeys.forEach((key)=>{
            if (router.query[key]) {
                utm_params[key] = router.query[key];
            }
        });
        const parser = new (ua_parser_js__WEBPACK_IMPORTED_MODULE_2___default())(window.navigator.userAgent);
        const userData = {
            timestamp: new Date(),
            utm_params,
            entry_point: window.location.href,
            os: parser.getOS(),
            browser: parser.getBrowser(),
            device: parser.getDevice()
        };
        fetch("/api/user_agent_info", {
            method: (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.hasCookie)(`user_agent_id`) ? "PUT" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userData,
                id: (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.getCookie)(`user_agent_id`)
            })
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        router.isReady
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTrackUserAgent);


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useTrackUserAgent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(107);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5874);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3068);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function App({ Component, pageProps: { session, ...pageProps } }) {
    (0,_hooks_useTrackUserAgent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const queryClient = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient(), []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {
        session: session,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
            client: queryClient,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.Hydrate, {
                state: pageProps.dehydratedState,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                className: "bg-zinc-50",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;