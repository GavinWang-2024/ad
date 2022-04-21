"use strict";
exports.id = 210;
exports.ids = [210];
exports.modules = {

/***/ 3086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export NextLinkComposed */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);








// Add support for the sx prop for consistency with the other branches.
const Anchor = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)('a')({
});
const NextLinkComposed = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function NextLinkComposed(props, ref) {
    const { to , linkAs , href , replace , scroll , shallow , prefetch , locale , ...other } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
        href: to,
        prefetch: prefetch,
        as: linkAs,
        replace: replace,
        scroll: scroll,
        shallow: shallow,
        passHref: true,
        locale: locale,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Anchor, {
            ref: ref,
            ...other
        })
    }));
});
NextLinkComposed.propTypes = {
    href: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
    linkAs: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
    ]),
    locale: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    passHref: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    prefetch: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    replace: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    scroll: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    shallow: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    to: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
    ]).isRequired
};
// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function Link(props, ref) {
    const { activeClassName ='active' , as: linkAs , className: classNameProps , href , noLinkStyle , role , ...other } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const pathname = typeof href === 'string' ? href : href.pathname;
    const className = clsx__WEBPACK_IMPORTED_MODULE_3___default()(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName
    });
    const isExternal = typeof href === 'string' && (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);
    if (isExternal) {
        if (noLinkStyle) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Anchor, {
                className: className,
                href: href,
                ref: ref,
                ...other
            }));
        }
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default()), {
            className: className,
            href: href,
            ref: ref,
            ...other
        }));
    }
    if (noLinkStyle) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextLinkComposed, {
            className: className,
            ref: ref,
            to: href,
            ...other
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default()), {
        component: NextLinkComposed,
        linkAs: linkAs,
        className: className,
        ref: ref,
        to: href,
        ...other
    }));
});
Link.propTypes = {
    activeClassName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    as: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
    ]),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    href: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
    noLinkStyle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    role: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ 681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_breakpoints_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4591);
/* harmony import */ var _Navigation_NavLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4340);
/* harmony import */ var _Navigation_NavLinks_NavLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1414);
/* harmony import */ var _Navigation_NavButtons_NavButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6927);
/* harmony import */ var _Navigation_NavDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7969);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navigation_NavLinks_NavLinks__WEBPACK_IMPORTED_MODULE_5__, _Navigation_NavDrawer__WEBPACK_IMPORTED_MODULE_7__]);
([_Navigation_NavLinks_NavLinks__WEBPACK_IMPORTED_MODULE_5__, _Navigation_NavDrawer__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








function Navigation(props) {
    const { initial  } = props;
    const { animate  } = props;
    const { variants  } = props;
    const { component  } = props;
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_breakpoints_context__WEBPACK_IMPORTED_MODULE_3__/* .BreakpointsContext */ .X);
    const { 0: showNav , 1: setShowNav  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    if (false) {}
    return showNav && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.AppBar, {
        sx: {
            bgcolor: 'white',
            height: '5rem',
            zIndex: 10000
        },
        position: "sticky",
        color: "primary",
        my: 1,
        initial: initial ? initial : null,
        animate: animate ? animate : null,
        variants: variants ? variants : null,
        component: component ? component : null,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
            disableGutters: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                justifyContent: "space-between",
                alignItems: "center",
                wrap: "nowrap",
                height: "100%",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation_NavLogo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    }),
                    ctx.isSmall && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        container: true,
                        item: true,
                        justifyContent: "flex-end",
                        sx: {
                            marginRight: '2rem'
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation_NavDrawer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        })
                    }),
                    (ctx.isMedium || ctx.isLarge) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        container: true,
                        justifyContent: "center",
                        alignItems: "center",
                        spacing: 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation_NavLinks_NavLinks__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        })
                    }),
                    (ctx.isMedium || ctx.isLarge) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        container: true,
                        justifyContent: "center",
                        spacing: 1,
                        md: 5,
                        wrap: "nowrap",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation_NavButtons_NavButtons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .C, {
                        })
                    })
                ]
            })
        })
    });
};

});

/***/ }),

/***/ 6927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ buttons),
  "C": () => (/* binding */ NavButtons)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/Link.js
var Link = __webpack_require__(3086);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/breakpoints-context.js
var breakpoints_context = __webpack_require__(4591);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/ButtonGroup"
var ButtonGroup_ = __webpack_require__(9580);
var ButtonGroup_default = /*#__PURE__*/__webpack_require__.n(ButtonGroup_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowDropDown"
var ArrowDropDown_ = __webpack_require__(765);
var ArrowDropDown_default = /*#__PURE__*/__webpack_require__.n(ArrowDropDown_);
// EXTERNAL MODULE: external "@mui/material/ClickAwayListener"
var ClickAwayListener_ = __webpack_require__(5371);
var ClickAwayListener_default = /*#__PURE__*/__webpack_require__.n(ClickAwayListener_);
// EXTERNAL MODULE: external "@mui/material/Grow"
var Grow_ = __webpack_require__(6262);
var Grow_default = /*#__PURE__*/__webpack_require__.n(Grow_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Popper"
var Popper_ = __webpack_require__(517);
var Popper_default = /*#__PURE__*/__webpack_require__.n(Popper_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/MenuList"
var MenuList_ = __webpack_require__(3490);
var MenuList_default = /*#__PURE__*/__webpack_require__.n(MenuList_);
;// CONCATENATED MODULE: ./src/components/Navigation/Navigation/NavButtons/NavSplit.js












const options = [
    'Расчет ЦС',
    'Продукция'
];
const hrefs = [
    '/calculator',
    '/production'
];
const colors = [
    'secondary',
    'primary'
];
function SplitButton() {
    const [open, setOpen] = external_react_.useState(false);
    const anchorRef = external_react_.useRef(null);
    const [selectedIndex, setSelectedIndex] = external_react_.useState(1);
    const handleMenuItemClick = (event, index)=>{
        setSelectedIndex(index);
        setOpen(false);
    };
    const handleToggle = ()=>{
        setOpen((prevOpen)=>!prevOpen
        );
    };
    const handleClose = (event)=>{
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ButtonGroup_default()), {
                variant: "contained",
                ref: anchorRef,
                "aria-label": "split button",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        component: Link/* default */.C,
                        href: hrefs[selectedIndex],
                        color: colors[selectedIndex],
                        children: options[selectedIndex]
                    }, options[selectedIndex]),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        size: "small",
                        "aria-controls": open ? 'split-button-menu' : undefined,
                        "aria-expanded": open ? 'true' : undefined,
                        "aria-label": "select merge strategy",
                        "aria-haspopup": "menu",
                        onClick: handleToggle,
                        color: colors[selectedIndex],
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowDropDown_default()), {
                        })
                    }, colors[selectedIndex])
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Popper_default()), {
                open: open,
                anchorEl: anchorRef.current,
                role: undefined,
                transition: true,
                disablePortal: true,
                children: ({ TransitionProps , placement  })=>/*#__PURE__*/ jsx_runtime_.jsx((Grow_default()), {
                        ...TransitionProps,
                        style: {
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ClickAwayListener_default()), {
                                onClickAway: handleClose,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((MenuList_default()), {
                                    id: "split-button-menu",
                                    children: options.map((option, index)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            selected: index === selectedIndex,
                                            onClick: (event)=>handleMenuItemClick(event, index)
                                            ,
                                            children: option
                                        }, option)
                                    )
                                })
                            })
                        })
                    })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/Navigation/Navigation/NavButtons/NavButtons.js






const buttons = [
    {
        href: '/production',
        title: 'Продукция',
        color: 'primary'
    },
    {
        href: '/calculator',
        title: 'Расчет ЦС',
        color: 'secondary'
    }, 
];
function NavButtons() {
    const ctx = (0,external_react_.useContext)(breakpoints_context/* BreakpointsContext */.X);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            ctx.isLarge && buttons.map((button)=>{
                return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        variant: "contained",
                        color: button.color,
                        component: Link/* default */.C,
                        noLinkStyle: true,
                        href: button.href,
                        children: button.title
                    }, button.title)
                }, button.title));
            }),
            ctx.isMedium && /*#__PURE__*/ jsx_runtime_.jsx(SplitButton, {
            })
        ]
    }));
};


/***/ }),

/***/ 7969:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PersistentDrawerRight)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8792);
/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2818);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Calculate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1406);
/* harmony import */ var _mui_icons_material_Calculate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Calculate__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Build__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3940);
/* harmony import */ var _mui_icons_material_Build__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Build__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9026);
/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_PrecisionManufacturing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9922);
/* harmony import */ var _mui_icons_material_PrecisionManufacturing__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PrecisionManufacturing__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3086);
/* harmony import */ var _NavButtons_NavButtons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6927);
/* harmony import */ var _NavLinks_NavLinks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1414);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavLinks_NavLinks__WEBPACK_IMPORTED_MODULE_14__]);
_NavLinks_NavLinks__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];















const DrawerHeader = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)('div')(({ theme  })=>({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start'
    })
);
function PersistentDrawerRight() {
    let drawerWidth;
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const handleDrawerOpen = ()=>{
        drawerWidth = 240;
        setOpen(true);
    };
    const handleDrawerClose = ()=>{
        drawerWidth = 0;
        setOpen(false);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
                sx: {
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth
                    }
                },
                variant: "persistent",
                anchor: "right",
                open: open,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DrawerHeader, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                            onClick: handleDrawerClose,
                            children: theme.direction === 'rtl' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_6___default()), {
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_7___default()), {
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.List, {
                        children: _NavLinks_NavLinks__WEBPACK_IMPORTED_MODULE_14__/* .links.map */ .O.map((link, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItem, {
                                button: true,
                                component: _Link__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .C,
                                href: link.href,
                                onClick: handleDrawerClose,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemIcon, {
                                        children: index === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        }) : index === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PrecisionManufacturing__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        }) : index === 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        }) : null
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {
                                        primary: link.text
                                    })
                                ]
                            }, link.text)
                        )
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.List, {
                        children: _NavButtons_NavButtons__WEBPACK_IMPORTED_MODULE_13__/* .buttons.map */ .Z.map((button, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItem, {
                                button: true,
                                component: _Link__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .C,
                                href: button.href,
                                onClick: handleDrawerClose,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemIcon, {
                                        children: index === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Build__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        }) : index === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Calculate__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        }) : null
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {
                                        primary: button.title
                                    })
                                ]
                            }, button.title)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                item: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                    color: "primary",
                    edge: "start",
                    "aria-label": "open drawer",
                    onClick: handleDrawerOpen,
                    sx: {
                        ...open && {
                            display: 'none'
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4___default()), {
                        sx: {
                            width: 50,
                            height: 50
                        }
                    })
                })
            })
        ]
    }));
};

});

/***/ }),

/***/ 1414:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ links),
/* harmony export */   "Z": () => (/* binding */ NavLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3086);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const links = [
    {
        href: '/#company',
        text: 'Компания'
    },
    {
        href: '/#production',
        text: 'Производство'
    },
    {
        href: '/#contacts',
        text: 'Контакты'
    }, 
];
function NavLinks() {
    return links.map((link)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            item: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                variant: "text",
                component: _Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .C,
                noLinkStyle: true,
                sx: {
                    color: 'black'
                },
                href: link.href,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "overline",
                    component: framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.p,
                    whileHover: {
                        color: '#ffc45a'
                    },
                    sx: {
                        fontSize: '1rem'
                    },
                    children: link.text
                })
            })
        }, link.text));
    });
};

});

/***/ }),

/***/ 4340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3086);



function NavLogo() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        container: true,
        item: true,
        md: 4,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .C, {
            href: "/",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: '/images/ngm.png',
                height: "80px",
                alt: "НГМ логотип"
            })
        })
    }));
};


/***/ }),

/***/ 4321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oq": () => (/* binding */ TypographyHeader),
/* harmony export */   "gI": () => (/* binding */ TypographyParagraph),
/* harmony export */   "nO": () => (/* binding */ TypographyParagraphNoMargin),
/* harmony export */   "Vv": () => (/* binding */ TypographyParagraphNoMarginAlign)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


const TypographyHeader = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(({ theme  })=>({
        textAlign: 'center',
        color: '#ff9327',
        margin: 0,
        [theme.breakpoints.up('xl')]: {
            fontSize: '2.6rem'
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: '2.1rem'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '1.8rem'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1.5rem'
        },
        [theme.breakpoints.between(0, 'sm')]: {
            fontSize: '1.4rem'
        }
    })
);
const TypographyParagraph = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(({ theme  })=>({
        textAlign: 'center',
        [theme.breakpoints.up('xl')]: {
            fontSize: '1.2rem',
            marginLeft: 240,
            marginRight: 240
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: '1.1rem',
            marginLeft: 200,
            marginRight: 200
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '1rem',
            marginLeft: 160,
            marginRight: 160
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1rem',
            marginLeft: 80,
            marginRight: 80
        },
        [theme.breakpoints.between(0, 'sm')]: {
            fontSize: '1rem',
            marginLeft: 40,
            marginRight: 40
        }
    })
);
const TypographyParagraphNoMargin = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(({ theme  })=>({
        textAlign: 'center',
        [theme.breakpoints.up('xl')]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: '1.1rem'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '1rem'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1rem'
        },
        [theme.breakpoints.between(0, 'sm')]: {
            fontSize: '1rem'
        }
    })
);
const TypographyParagraphNoMarginAlign = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(({ theme  })=>({
        [theme.breakpoints.up('xl')]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: '1.1rem'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '1rem'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1rem'
        },
        [theme.breakpoints.between(0, 'sm')]: {
            fontSize: '1rem'
        }
    })
);


/***/ })

};
;