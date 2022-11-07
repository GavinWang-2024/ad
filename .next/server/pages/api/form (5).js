"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/form";
exports.ids = ["pages/api/form"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "./pages/api/form.js":
/*!***************************!*\
  !*** ./pages/api/form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\nasync function handler(req, res) {\n    const { name , email , company , phone , text , test  } = req.body;\n    if (name.trim() === '' || !email.includes('@') || company.trim() === '' || phone.trim() === '' || text.trim() === '' || test !== '6') {\n        res.status(400).json({\n            message: 'Ошибка в заполнении формы'\n        });\n        return;\n    }\n    let transporter = nodemailer.createTransport({\n        port: 465,\n        host: 'smtp.yandex.ru',\n        auth: {\n            user: 'NGMCompany@yandex.ru',\n            pass: '53e-Rnz-utL-gPM'\n        },\n        secure: true\n    });\n    const mailData = {\n        from: 'NGMCompany@yandex.ru',\n        to: 'asv@ngmt.ru',\n        subject: `Сообщение с сайта НГМ`,\n        html: `<p>Данные с формы сайта: </p>\n      <p> ФИО: ${req.body.name}</p>\n      <p> Email: ${req.body.email}</p>\n      <p> Компания: ${req.body.company}</p>\n      <p> Номер телефона: ${req.body.phone}</p>\n      <p> Текст сообщения: ${req.body.text}</p>`\n    };\n    await new Promise((resolve, reject)=>{\n        // send mail\n        transporter.sendMail(mailData, (err, info)=>{\n            if (err) {\n                console.error(err);\n                reject(err);\n            } else {\n                console.log(info);\n                resolve(info);\n            }\n        });\n    });\n    res.status(200).json({\n        status: 'OK'\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsOEJBQVk7QUFFeEIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBRUMsSUFBSSxHQUFFQyxJQUFJLEVBQUMsQ0FBQyxHQUFHUCxHQUFHLENBQUNRLElBQUk7SUFFNUQsRUFBRSxFQUNBTixJQUFJLENBQUNPLElBQUksT0FBTyxDQUFFLE1BQ2pCTixLQUFLLENBQUNPLFFBQVEsQ0FBQyxDQUFHLE9BQ25CTixPQUFPLENBQUNLLElBQUksT0FBTyxDQUFFLEtBQ3JCSixLQUFLLENBQUNJLElBQUksT0FBTyxDQUFFLEtBQ25CSCxJQUFJLENBQUNHLElBQUksT0FBTyxDQUFFLEtBQ2xCRixJQUFJLEtBQUssQ0FBRyxJQUNaLENBQUM7UUFDRE4sR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBMkI7UUFBdUIsQ0FBQztRQUM3RCxNQUFoQjtJQUNSLENBQUM7SUFFRCxHQUFHLENBQUNDLFdBQVcsR0FBR2pCLFVBQVUsQ0FBQ2tCLGVBQWUsQ0FBQyxDQUFDO1FBQzVDQyxJQUFJLEVBQUUsR0FBRztRQUNUQyxJQUFJLEVBQUUsQ0FBZ0I7UUFDdEJDLElBQUksRUFBRSxDQUFDO1lBQ0xDLElBQUksRUFBRSxDQUFzQjtZQUM1QkMsSUFBSSxFQUFFLENBQWlCO1FBQ3pCLENBQUM7UUFDREMsTUFBTSxFQUFFLElBQUk7SUFDZCxDQUFDO0lBQ0QsS0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBQztRQUNoQkMsSUFBSSxFQUFFLENBQXNCO1FBQzVCQyxFQUFFLEVBQUUsQ0FBYTtRQUNqQkMsT0FBTyxHQUFHO1FBQ1FDLElBQWQsR0FBRztJQU1ULENBQUM7SUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsTUFBTTtRQUNoQyxFQUFZO1FBQ1pmLFdBQVcsQ0FBQ2dCLFFBQVEsQ0FBQ1IsUUFBUSxHQUFHUyxHQUFHLEVBQUVDO1lBQ25DLEVBQUUsRUFBRUQsR0FBRyxFQUFFLENBQUM7O2dCQUVSRixNQUFNLENBQUNFLEdBQUc7WUFDWixDQUFDLE1BQU0sQ0FBQztnQkFDTkUsT0FBTyxDQUFDRSxHQUFHLENBQUNILElBQUk7Z0JBQ2hCSjtZQUNGLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEM0IsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztRQUFDRCxNQUFNLEVBQUUsQ0FBSTtJQUFDLENBQUM7QUFDdkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2FwaS9mb3JtLmpzPzExOTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBjb21wYW55LCBwaG9uZSwgdGV4dCwgdGVzdCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gIGlmIChcclxuICAgIG5hbWUudHJpbSgpID09PSAnJyB8fFxyXG4gICAgIWVtYWlsLmluY2x1ZGVzKCdAJykgfHxcclxuICAgIGNvbXBhbnkudHJpbSgpID09PSAnJyB8fFxyXG4gICAgcGhvbmUudHJpbSgpID09PSAnJyB8fFxyXG4gICAgdGV4dC50cmltKCkgPT09ICcnIHx8XHJcbiAgICB0ZXN0ICE9PSAnNidcclxuICApIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ9Ce0YjQuNCx0LrQsCDQsiDQt9Cw0L/QvtC70L3QtdC90LjQuCDRhNC+0YDQvNGLJyB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICAgIHBvcnQ6IDQ2NSxcclxuICAgIGhvc3Q6ICdzbXRwLnlhbmRleC5ydScsXHJcbiAgICBhdXRoOiB7XHJcbiAgICAgIHVzZXI6ICdOR01Db21wYW55QHlhbmRleC5ydScsXHJcbiAgICAgIHBhc3M6ICc1M2UtUm56LXV0TC1nUE0nLFxyXG4gICAgfSxcclxuICAgIHNlY3VyZTogdHJ1ZSxcclxuICB9KTtcclxuICBjb25zdCBtYWlsRGF0YSA9IHtcclxuICAgIGZyb206ICdOR01Db21wYW55QHlhbmRleC5ydScsXHJcbiAgICB0bzogJ2FzdkBuZ210LnJ1JyxcclxuICAgIHN1YmplY3Q6IGDQodC+0L7QsdGJ0LXQvdC40LUg0YEg0YHQsNC50YLQsCDQndCT0JxgLFxyXG4gICAgaHRtbDogYDxwPtCU0LDQvdC90YvQtSDRgSDRhNC+0YDQvNGLINGB0LDQudGC0LA6IDwvcD5cclxuICAgICAgPHA+INCk0JjQnjogJHtyZXEuYm9keS5uYW1lfTwvcD5cclxuICAgICAgPHA+IEVtYWlsOiAke3JlcS5ib2R5LmVtYWlsfTwvcD5cclxuICAgICAgPHA+INCa0L7QvNC/0LDQvdC40Y86ICR7cmVxLmJvZHkuY29tcGFueX08L3A+XHJcbiAgICAgIDxwPiDQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LA6ICR7cmVxLmJvZHkucGhvbmV9PC9wPlxyXG4gICAgICA8cD4g0KLQtdC60YHRgiDRgdC+0L7QsdGJ0LXQvdC40Y86ICR7cmVxLmJvZHkudGV4dH08L3A+YCxcclxuICB9O1xyXG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vIHNlbmQgbWFpbFxyXG4gICAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbERhdGEsIChlcnIsIGluZm8pID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgICByZXNvbHZlKGluZm8pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6ICdPSycgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5hbWUiLCJlbWFpbCIsImNvbXBhbnkiLCJwaG9uZSIsInRleHQiLCJ0ZXN0IiwiYm9keSIsInRyaW0iLCJpbmNsdWRlcyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJwb3J0IiwiaG9zdCIsImF1dGgiLCJ1c2VyIiwicGFzcyIsInNlY3VyZSIsIm1haWxEYXRhIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNlbmRNYWlsIiwiZXJyIiwiaW5mbyIsImNvbnNvbGUiLCJlcnJvciIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/form.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/form.js"));
module.exports = __webpack_exports__;

})();