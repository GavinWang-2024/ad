"use strict";
exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 4591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ BreakpointsContext),
/* harmony export */   "y": () => (/* binding */ BreakpointsContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__);




const BreakpointsContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    isSmall: null,
    isMedium: null,
    isLarge: null
});
const BreakpointsContextProvider = (props)=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const isSmall = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()(theme.breakpoints.down('md'));
    const isMedium = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()(theme.breakpoints.between('md', 'lg'));
    const isLarge = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()(theme.breakpoints.up('lg'));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BreakpointsContext.Provider, {
        value: {
            isSmall,
            isMedium,
            isLarge
        },
        children: props.children
    }));
};


/***/ })

};
;