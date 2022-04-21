(() => {
var exports = {};
exports.id = 282;
exports.ids = [282];
exports.modules = {

/***/ 3761:
/***/ ((module) => {

// Exports
module.exports = {
	"table": "ProductionPageData_table__SuX1c",
	"tdmain": "ProductionPageData_tdmain__jmbFC",
	"header": "ProductionPageData_header__dDyu7",
	"td": "ProductionPageData_td__YpVRD",
	"tr": "ProductionPageData_tr__1jQ_t",
	"active": "ProductionPageData_active__dRRa2"
};


/***/ }),

/***/ 8065:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(681);
/* harmony import */ var _src_components_Production_ProductionData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6751);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Production_ProductionData__WEBPACK_IMPORTED_MODULE_4__, _src_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__]);
([_src_components_Production_ProductionData__WEBPACK_IMPORTED_MODULE_4__, _src_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





function ProductDetailPage(props) {
    const { loadedProduct  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                show: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Production_ProductionData__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                data: loadedProduct
            })
        ]
    }));
}
async function getStaticProps(context) {
    const { params  } = context;
    const productId = params.pid;
    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'data', 'product-details.json');
    const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_2___default().readFile(filePath);
    const data = JSON.parse(jsonData);
    const product1 = data.products.find((product)=>product.id === productId
    );
    return {
        props: {
            loadedProduct: product1
        }
    };
}
async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    pid: 'scmbu'
                }
            },
            {
                params: {
                    pid: 'sc144'
                }
            },
            {
                params: {
                    pid: 'sc200'
                }
            },
            {
                params: {
                    pid: 'sc250'
                }
            },
            {
                params: {
                    pid: 'svs'
                }
            },
            {
                params: {
                    pid: 'bkf'
                }
            },
            {
                params: {
                    pid: 'ku02m'
                }
            },
            {
                params: {
                    pid: 'kupnsh'
                }
            },
            {
                params: {
                    pid: 'umosh'
                }
            }, 
        ],
        fallback: false
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetailPage);

});

/***/ }),

/***/ 6751:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_TypographyVariants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4321);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_StyledImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7571);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _mui_icons_material_InsertLinkRounded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2738);
/* harmony import */ var _mui_icons_material_InsertLinkRounded__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_InsertLinkRounded__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ProductionPageData_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3761);
/* harmony import */ var _ProductionPageData_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ProductionPageData_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
framer_motion__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











const ProductionVariants = {
    initial: {
        y: 150
    },
    animate: {
        y: 0,
        transition: {
            type: 'spring',
            duration: 1.5
        }
    }
};
const MotionProps = {
    initial: 'initial',
    whileInView: 'animate',
    viewport: {
        once: true
    },
    variants: ProductionVariants
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { 0: isClicked , 1: setIsClicked  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { 0: activeIndex , 1: setActiveIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: props.data.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: props.data.purpose
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                ...MotionProps,
                component: framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Backdrop, {
                        open: isClicked,
                        onClick: ()=>{
                            setIsClicked(!isClicked);
                        },
                        sx: {
                            zIndex: 49999
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_TypographyVariants__WEBPACK_IMPORTED_MODULE_2__/* .TypographyHeader */ .oq, {
                        sx: {
                            mt: 5
                        },
                        children: props.data.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        container: true,
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                src: props.data.image,
                                width: props.data.imageWidth,
                                height: props.data.imageHeight
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_TypographyVariants__WEBPACK_IMPORTED_MODULE_2__/* .TypographyParagraphNoMargin */ .nO, {
                                    sx: {
                                        mt: {
                                            xs: 5,
                                            lg: 5
                                        },
                                        textAlign: 'center',
                                        fontWeight: 'bold'
                                    },
                                    children: "Назначение:"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                container: true,
                                justifyContent: "center",
                                sx: {
                                    textAlign: 'justify'
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_TypographyVariants__WEBPACK_IMPORTED_MODULE_2__/* .TypographyParagraph */ .gI, {
                                        sx: {
                                            textAlign: {
                                                xs: 'justify',
                                                lg: 'left'
                                            },
                                            mt: 3
                                        },
                                        children: props.data.purpose
                                    }),
                                    props.data.text && props.data.text.map((item)=>{
                                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                            container: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_TypographyVariants__WEBPACK_IMPORTED_MODULE_2__/* .TypographyParagraph */ .gI, {
                                                sx: {
                                                    textAlign: {
                                                        xs: 'justify',
                                                        lg: 'justify'
                                                    },
                                                    mt: 3
                                                },
                                                children: item
                                            })
                                        }, item));
                                    }),
                                    props.data.tables && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_TypographyVariants__WEBPACK_IMPORTED_MODULE_2__/* .TypographyParagraphNoMarginAlign */ .Vv, {
                                            sx: {
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                my: 3
                                            },
                                            children: "Состав:"
                                        })
                                    }),
                                    props.data.tables && props.data.tables.map((item)=>{
                                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                            container: true,
                                            justifyContent: "center",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                                className: (_ProductionPageData_module_css__WEBPACK_IMPORTED_MODULE_10___default().table),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                colSpan: "2",
                                                                className: (_ProductionPageData_module_css__WEBPACK_IMPORTED_MODULE_10___default().header),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_TypographyVariants__WEBPACK_IMPORTED_MODULE_2__/* .TypographyParagraphNoMarginAlign */ .Vv, {
                                                                    children: item.tableHeader
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    item.details && item.details.map((detail)=>{
                                                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                className: (_ProductionPageData_module_css__WEBPACK_IMPORTED_MODULE_10___default().tr),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_ProductionPageData_module_css__WEBPACK_IMPORTED_MODULE_10___default().tdmain),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_TypographyVariants__WEBPACK_IMPORTED_MODULE_2__/* .TypographyParagraphNoMarginAlign */ .Vv, {
                                                                            children: detail.name
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_ProductionPageData_module_css__WEBPACK_IMPORTED_MODULE_10___default().td),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_TypographyVariants__WEBPACK_IMPORTED_MODULE_2__/* .TypographyParagraphNoMarginAlign */ .Vv, {
                                                                            children: detail.amount
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }, detail.name));
                                                    })
                                                ]
                                            }, item.tableHeader)
                                        }, item.tableHeader));
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_TypographyVariants__WEBPACK_IMPORTED_MODULE_2__/* .TypographyParagraphNoMargin */ .nO, {
                                    sx: {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        my: 3
                                    },
                                    children: "Фотогалерея:"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                container: true,
                                spacing: 2,
                                children: props.data.gallery.map((item, index)=>{
                                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                        item: true,
                                        xs: 12,
                                        sm: 4,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_StyledImages__WEBPACK_IMPORTED_MODULE_4__/* .ImageSmall */ .cu, {
                                                onClick: ()=>{
                                                    setIsClicked(!isClicked);
                                                    setActiveIndex(item.title);
                                                },
                                                className: ` ${(isClicked && activeIndex) === index ? (_ProductionPageData_module_css__WEBPACK_IMPORTED_MODULE_10___default().active) : 'null'}`,
                                                src: item.image,
                                                sx: {
                                                    width: '100%',
                                                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                                                }
                                            }, item.title),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_InsertLinkRounded__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                className: (_ProductionPageData_module_css__WEBPACK_IMPORTED_MODULE_10___default().SVGIcon),
                                                htmlColor: "white"
                                            })
                                        ]
                                    }, item.title));
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                container: true,
                                justifyContent: "center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    sx: {
                                        mt: 10,
                                        mb: 5,
                                        zIndex: 0
                                    },
                                    variant: "contained",
                                    color: "primary",
                                    onClick: router.back,
                                    children: "Назад"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 7571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cu": () => (/* binding */ ImageSmall)
/* harmony export */ });
/* unused harmony exports Image300, Image450, ImageFullWidth */
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

const Image300 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)('img')(({ theme  })=>({
        boxSizing: 'border-box',
        [theme.breakpoints.up('md')]: {
            height: '300px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '250px'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '160px'
        }
    })
);
const Image450 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)('img')(({ theme  })=>({
        boxSizing: 'border-box',
        [theme.breakpoints.up('md')]: {
            height: '450px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '350px'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '300px'
        }
    })
);
const ImageFullWidth = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)('img')(({ theme  })=>({
        boxSizing: 'border-box',
        [theme.breakpoints.up('md')]: {
            width: '1000px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '100%'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%'
        }
    })
);
const ImageSmall = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)('img')(({ theme  })=>({
        boxSizing: 'border-box'
    })
);


/***/ }),

/***/ 765:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ArrowDropDown");

/***/ }),

/***/ 3940:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Build");

/***/ }),

/***/ 1406:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Calculate");

/***/ }),

/***/ 6959:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ChevronLeft");

/***/ }),

/***/ 2818:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ChevronRight");

/***/ }),

/***/ 8792:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Info");

/***/ }),

/***/ 2738:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/InsertLinkRounded");

/***/ }),

/***/ 9026:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Mail");

/***/ }),

/***/ 3365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 9922:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/PrecisionManufacturing");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 9580:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ButtonGroup");

/***/ }),

/***/ 5371:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ClickAwayListener");

/***/ }),

/***/ 6262:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Grow");

/***/ }),

/***/ 5246:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Link");

/***/ }),

/***/ 9271:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 3490:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuList");

/***/ }),

/***/ 1598:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 517:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Popper");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 3292:
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,591,210], () => (__webpack_exec__(8065)));
module.exports = __webpack_exports__;

})();