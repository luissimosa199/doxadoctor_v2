"use strict";
exports.id = 718;
exports.ids = [718];
exports.modules = {

/***/ 4417:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2765);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const UserFavButton = ({ username, size = "lg", showSpan = false, isFavorite, mutation, isLoading })=>{
    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${showSpan ? "flex flex-col lg:flex-row items-center justify-center gap-1" : ""} cursor-pointer`,
        onClick: (e)=>{
            e.preventDefault();
            if (!session?.user) {
                router.push("/login");
                return;
            }
            const method = isFavorite ? "DELETE" : "POST";
            mutation.mutate({
                email: username,
                method
            });
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: `${isLoading ? "text-white animate-pulse" : isFavorite ? "text-yellow-500 sm:hover:text-white" : "text-black active:text-yellow-500 sm:hover:text-yellow-500"}  flex justify-center items-center lg:py-1`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                    size: size,
                    icon: isFavorite ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faStar : _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStar,
                    className: "w-10 h-10 lg:w-5 lg:h-5"
                })
            }),
            showSpan && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "text-sm break-normal min-h-[450px]:text-base",
                children: [
                    isFavorite ? "Eliminar de " : "Agregar a ",
                    "favoritos"
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserFavButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1255:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ useFavorite)
/* harmony export */ });
/* harmony import */ var _utils_toggleFavorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6286);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function useFavorite(username) {
    const [isFavorite, setIsFavorite] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { data, isLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "favorites",
        username
    ], async ()=>{
        const response = await fetch(`${"http://localhost:3000"}/api/user/favorites`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    });
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    const mutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_utils_toggleFavorite__WEBPACK_IMPORTED_MODULE_2__/* .toggleFavorite */ .m, {
        onMutate: ({ email, method })=>{
            queryClient.cancelQueries([
                "favorites",
                username
            ]);
            const previousFavorites = queryClient.getQueryData([
                "favorites",
                username
            ]) || [];
            if (Array.isArray(previousFavorites)) {
                if (method === "DELETE") {
                    queryClient.setQueryData([
                        "favorites",
                        username
                    ], previousFavorites.filter((fav)=>fav !== email));
                    setIsFavorite(false);
                } else {
                    queryClient.setQueryData([
                        "favorites",
                        username
                    ], [
                        ...previousFavorites,
                        email
                    ]);
                    setIsFavorite(true);
                }
            }
            return {
                previousFavorites
            };
        },
        onSettled: ()=>{
            queryClient.invalidateQueries([
                "favorites",
                username
            ]);
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data) {
            setIsFavorite(data.includes(username));
        }
    }, [
        data,
        username
    ]);
    return {
        isFavorite,
        mutation,
        isLoading
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ noProfileImage)
/* harmony export */ });
const noProfileImage = "https://res.cloudinary.com/dahu3rii0/image/upload/v1695906400/utpg0w4bhenetupbxto4.jpg";


/***/ }),

/***/ 6286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ toggleFavorite)
/* harmony export */ });
const toggleFavorite = async ({ email, method })=>{
    const response = await fetch(`${"http://localhost:3000"}/api/user/favorites`, {
        method,
        body: email
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};


/***/ })

};
;