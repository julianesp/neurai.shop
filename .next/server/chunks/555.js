"use strict";
exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 7555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/img/cerebro.svg
/* harmony default export */ const cerebro = ({"src":"/_next/static/media/cerebro.a885bf46.svg","height":394,"width":394});
;// CONCATENATED MODULE: ./src/components/NavBar/NavBar.js





const NavBar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "flex items-center justify-between flex-wrap bg-teal-500 h-15 p-3 p-md-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center flex-shrink-0 text-white mr-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "w-10",
                        alt: "Logo de empresa",
                        src: cerebro
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-semibold text-xl tracking-tight",
                        children: "Neurai.Shop"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "block lg:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "fill-current h-3 w-3",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "Menu"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("menu", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "Inicio"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Profile",
                        children: "Sobre m\xed"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const NavBar_NavBar = (NavBar);

;// CONCATENATED MODULE: ./src/components/Layout.js


const Layout = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar_NavBar, {}),
            children
        ]
    });
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;