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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\nasync function handler(req, res) {\n    const { name , email , company , phone , text , test  } = req.body;\n    if (name.trim() === '' || !email.includes('@') || company.trim() === '' || phone.trim() === '' || text.trim() === '' || test !== '6') {\n        res.status(400).json({\n            message: 'Ошибка в заполнении формы'\n        });\n        return;\n    }\n    let transporter = nodemailer.createTransport({\n        port: 465,\n        host: 'smtp.gmail.com',\n        auth: {\n            user: 'ngmcompanyru@gmail.com',\n            pass: 'xP3-jcu-zmg-6jJ'\n        },\n        secure: true\n    });\n    const mailData = {\n        from: 'ngmcompanyru@gmail.com',\n        to: 'asv@ngmt.ru',\n        subject: `Сообщение с сайта НГМ`,\n        html: `<p>Данные с формы сайта: </p>\n      <p> ФИО: ${req.body.name}</p>\n      <p> Email: ${req.body.email}</p>\n      <p> Компания: ${req.body.company}</p>\n      <p> Номер телефона: ${req.body.phone}</p>\n      <p> Текст сообщения: ${req.body.text}</p>`\n    };\n    await new Promise((resolve, reject)=>{\n        // send mail\n        transporter.sendMail(mailData, (err, info)=>{\n            if (err) {\n                console.error(err);\n                reject(err);\n            } else {\n                console.log(info);\n                resolve(info);\n            }\n        });\n    });\n    res.status(200).json({\n        status: 'OK'\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsOEJBQVk7QUFFeEIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBRUMsSUFBSSxHQUFFQyxJQUFJLEVBQUMsQ0FBQyxHQUFHUCxHQUFHLENBQUNRLElBQUk7SUFFNUQsRUFBRSxFQUNBTixJQUFJLENBQUNPLElBQUksT0FBTyxDQUFFLE1BQ2pCTixLQUFLLENBQUNPLFFBQVEsQ0FBQyxDQUFHLE9BQ25CTixPQUFPLENBQUNLLElBQUksT0FBTyxDQUFFLEtBQ3JCSixLQUFLLENBQUNJLElBQUksT0FBTyxDQUFFLEtBQ25CSCxJQUFJLENBQUNHLElBQUksT0FBTyxDQUFFLEtBQ2xCRixJQUFJLEtBQUssQ0FBRyxJQUNaLENBQUM7UUFDRE4sR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBMkI7UUFBdUIsQ0FBQztRQUM3RCxNQUFoQjtJQUNSLENBQUM7SUFFRCxHQUFHLENBQUNDLFdBQVcsR0FBR2pCLFVBQVUsQ0FBQ2tCLGVBQWUsQ0FBQyxDQUFDO1FBQzVDQyxJQUFJLEVBQUUsR0FBRztRQUNUQyxJQUFJLEVBQUUsQ0FBZ0I7UUFDdEJDLElBQUksRUFBRSxDQUFDO1lBQ0xDLElBQUksRUFBRSxDQUF3QjtZQUM5QkMsSUFBSSxFQUFFLENBQWlCO1FBQ3pCLENBQUM7UUFDREMsTUFBTSxFQUFFLElBQUk7SUFDZCxDQUFDO0lBQ0QsS0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBQztRQUNoQkMsSUFBSSxFQUFFLENBQXdCO1FBQzlCQyxFQUFFLEVBQUUsQ0FBYTtRQUNqQkMsT0FBTyxHQUFHO1FBQ1FDLElBQWQsR0FBRztJQU1ULENBQUM7SUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsTUFBTTtRQUNoQyxFQUFZO1FBQ1pmLFdBQVcsQ0FBQ2dCLFFBQVEsQ0FBQ1IsUUFBUSxHQUFHUyxHQUFHLEVBQUVDO1lBQ25DLEVBQUUsRUFBRUQsR0FBRyxFQUFFLENBQUM7O2dCQUVSRixNQUFNLENBQUNFLEdBQUc7WUFDWixDQUFDLE1BQU0sQ0FBQztnQkFDTkUsT0FBTyxDQUFDRSxHQUFHLENBQUNILElBQUk7Z0JBQ2hCSjtZQUNGLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEM0IsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztRQUFDRCxNQUFNLEVBQUUsQ0FBSTtJQUFDLENBQUM7QUFDdkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2FwaS9mb3JtLmpzPzExOTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBjb21wYW55LCBwaG9uZSwgdGV4dCwgdGVzdCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gIGlmIChcclxuICAgIG5hbWUudHJpbSgpID09PSAnJyB8fFxyXG4gICAgIWVtYWlsLmluY2x1ZGVzKCdAJykgfHxcclxuICAgIGNvbXBhbnkudHJpbSgpID09PSAnJyB8fFxyXG4gICAgcGhvbmUudHJpbSgpID09PSAnJyB8fFxyXG4gICAgdGV4dC50cmltKCkgPT09ICcnIHx8XHJcbiAgICB0ZXN0ICE9PSAnNidcclxuICApIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ9Ce0YjQuNCx0LrQsCDQsiDQt9Cw0L/QvtC70L3QtdC90LjQuCDRhNC+0YDQvNGLJyB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICAgIHBvcnQ6IDQ2NSxcclxuICAgIGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXHJcbiAgICBhdXRoOiB7XHJcbiAgICAgIHVzZXI6ICduZ21jb21wYW55cnVAZ21haWwuY29tJyxcclxuICAgICAgcGFzczogJ3hQMy1qY3Utem1nLTZqSicsXHJcbiAgICB9LFxyXG4gICAgc2VjdXJlOiB0cnVlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IG1haWxEYXRhID0ge1xyXG4gICAgZnJvbTogJ25nbWNvbXBhbnlydUBnbWFpbC5jb20nLFxyXG4gICAgdG86ICdhc3ZAbmdtdC5ydScsXHJcbiAgICBzdWJqZWN0OiBg0KHQvtC+0LHRidC10L3QuNC1INGBINGB0LDQudGC0LAg0J3Qk9CcYCxcclxuICAgIGh0bWw6IGA8cD7QlNCw0L3QvdGL0LUg0YEg0YTQvtGA0LzRiyDRgdCw0LnRgtCwOiA8L3A+XHJcbiAgICAgIDxwPiDQpNCY0J46ICR7cmVxLmJvZHkubmFtZX08L3A+XHJcbiAgICAgIDxwPiBFbWFpbDogJHtyZXEuYm9keS5lbWFpbH08L3A+XHJcbiAgICAgIDxwPiDQmtC+0LzQv9Cw0L3QuNGPOiAke3JlcS5ib2R5LmNvbXBhbnl9PC9wPlxyXG4gICAgICA8cD4g0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwOiAke3JlcS5ib2R5LnBob25lfTwvcD5cclxuICAgICAgPHA+INCi0LXQutGB0YIg0YHQvtC+0LHRidC10L3QuNGPOiAke3JlcS5ib2R5LnRleHR9PC9wPmAsXHJcbiAgfTtcclxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyBzZW5kIG1haWxcclxuICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxEYXRhLCAoZXJyLCBpbmZvKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAgICAgcmVzb2x2ZShpbmZvKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzOiAnT0snIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuYW1lIiwiZW1haWwiLCJjb21wYW55IiwicGhvbmUiLCJ0ZXh0IiwidGVzdCIsImJvZHkiLCJ0cmltIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwicG9ydCIsImhvc3QiLCJhdXRoIiwidXNlciIsInBhc3MiLCJzZWN1cmUiLCJtYWlsRGF0YSIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/form.js\n");

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