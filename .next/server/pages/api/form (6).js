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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\nasync function handler(req, res) {\n    const { name , email , company , phone , text , test  } = req.body;\n    if (name.trim() === '' || !email.includes('@') || company.trim() === '' || phone.trim() === '' || text.trim() === '' || test !== '6') {\n        res.status(400).json({\n            message: 'Ошибка в заполнении формы'\n        });\n        return;\n    }\n    let transporter = nodemailer.createTransport({\n        port: 465,\n        host: 'smtp.yandex.ru',\n        auth: {\n            user: 'NGMCompany@yandex.ru',\n            pass: '53e-Rnz-utL-gPM'\n        },\n        secure: true\n    });\n    const mailData = {\n        from: 'NGMCompany@yandex.ru',\n        to: 'NGMCompany@yandex.ru',\n        subject: `Сообщение с сайта НГМ`,\n        html: `<p>Данные с формы сайта: </p>\n      <p> ФИО: ${req.body.name}</p>\n      <p> Email: ${req.body.email}</p>\n      <p> Компания: ${req.body.company}</p>\n      <p> Номер телефона: ${req.body.phone}</p>\n      <p> Текст сообщения: ${req.body.text}</p>`\n    };\n    await new Promise((resolve, reject)=>{\n        // send mail\n        transporter.sendMail(mailData, (err, info)=>{\n            if (err) {\n                console.error(err);\n                reject(err);\n            } else {\n                console.log(info);\n                resolve(info);\n            }\n        });\n    });\n    res.status(200).json({\n        status: 'OK'\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsOEJBQVk7QUFFeEIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBRUMsSUFBSSxHQUFFQyxJQUFJLEVBQUMsQ0FBQyxHQUFHUCxHQUFHLENBQUNRLElBQUk7SUFFNUQsRUFBRSxFQUNBTixJQUFJLENBQUNPLElBQUksT0FBTyxDQUFFLE1BQ2pCTixLQUFLLENBQUNPLFFBQVEsQ0FBQyxDQUFHLE9BQ25CTixPQUFPLENBQUNLLElBQUksT0FBTyxDQUFFLEtBQ3JCSixLQUFLLENBQUNJLElBQUksT0FBTyxDQUFFLEtBQ25CSCxJQUFJLENBQUNHLElBQUksT0FBTyxDQUFFLEtBQ2xCRixJQUFJLEtBQUssQ0FBRyxJQUNaLENBQUM7UUFDRE4sR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBMkI7UUFBdUIsQ0FBQztRQUM3RCxNQUFoQjtJQUNSLENBQUM7SUFFRCxHQUFHLENBQUNDLFdBQVcsR0FBR2pCLFVBQVUsQ0FBQ2tCLGVBQWUsQ0FBQyxDQUFDO1FBQzVDQyxJQUFJLEVBQUUsR0FBRztRQUNUQyxJQUFJLEVBQUUsQ0FBZ0I7UUFDdEJDLElBQUksRUFBRSxDQUFDO1lBQ0xDLElBQUksRUFBRSxDQUFzQjtZQUM1QkMsSUFBSSxFQUFFLENBQWlCO1FBQ3pCLENBQUM7UUFDREMsTUFBTSxFQUFFLElBQUk7SUFDZCxDQUFDO0lBQ0QsS0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBQztRQUNoQkMsSUFBSSxFQUFFLENBQXNCO1FBQzVCQyxFQUFFLEVBQUUsQ0FBc0I7UUFDMUJDLE9BQU8sR0FBRztRQUNRQyxJQUFkLEdBQUc7SUFNVCxDQUFDO0lBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQ0MsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLE1BQU07UUFDaEMsRUFBWTtRQUNaZixXQUFXLENBQUNnQixRQUFRLENBQUNSLFFBQVEsR0FBR1MsR0FBRyxFQUFFQztZQUNuQyxFQUFFLEVBQUVELEdBQUcsRUFBRSxDQUFDOztnQkFFUkYsTUFBTSxDQUFDRSxHQUFHO1lBQ1osQ0FBQyxNQUFNLENBQUM7Z0JBQ05FLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDSCxJQUFJO2dCQUNoQko7WUFDRixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDNCLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFBQ0QsTUFBTSxFQUFFLENBQUk7SUFBQyxDQUFDO0FBQ3ZDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvZm9ybS5qcz8xMTk1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5vZGVtYWlsZXIgPSByZXF1aXJlKCdub2RlbWFpbGVyJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgY29tcGFueSwgcGhvbmUsIHRleHQsIHRlc3QgfSA9IHJlcS5ib2R5O1xyXG5cclxuICBpZiAoXHJcbiAgICBuYW1lLnRyaW0oKSA9PT0gJycgfHxcclxuICAgICFlbWFpbC5pbmNsdWRlcygnQCcpIHx8XHJcbiAgICBjb21wYW55LnRyaW0oKSA9PT0gJycgfHxcclxuICAgIHBob25lLnRyaW0oKSA9PT0gJycgfHxcclxuICAgIHRleHQudHJpbSgpID09PSAnJyB8fFxyXG4gICAgdGVzdCAhPT0gJzYnXHJcbiAgKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICfQntGI0LjQsdC60LAg0LIg0LfQsNC/0L7Qu9C90LXQvdC40Lgg0YTQvtGA0LzRiycgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICBwb3J0OiA0NjUsXHJcbiAgICBob3N0OiAnc210cC55YW5kZXgucnUnLFxyXG4gICAgYXV0aDoge1xyXG4gICAgICB1c2VyOiAnTkdNQ29tcGFueUB5YW5kZXgucnUnLFxyXG4gICAgICBwYXNzOiAnNTNlLVJuei11dEwtZ1BNJyxcclxuICAgIH0sXHJcbiAgICBzZWN1cmU6IHRydWUsXHJcbiAgfSk7XHJcbiAgY29uc3QgbWFpbERhdGEgPSB7XHJcbiAgICBmcm9tOiAnTkdNQ29tcGFueUB5YW5kZXgucnUnLFxyXG4gICAgdG86ICdOR01Db21wYW55QHlhbmRleC5ydScsXHJcbiAgICBzdWJqZWN0OiBg0KHQvtC+0LHRidC10L3QuNC1INGBINGB0LDQudGC0LAg0J3Qk9CcYCxcclxuICAgIGh0bWw6IGA8cD7QlNCw0L3QvdGL0LUg0YEg0YTQvtGA0LzRiyDRgdCw0LnRgtCwOiA8L3A+XHJcbiAgICAgIDxwPiDQpNCY0J46ICR7cmVxLmJvZHkubmFtZX08L3A+XHJcbiAgICAgIDxwPiBFbWFpbDogJHtyZXEuYm9keS5lbWFpbH08L3A+XHJcbiAgICAgIDxwPiDQmtC+0LzQv9Cw0L3QuNGPOiAke3JlcS5ib2R5LmNvbXBhbnl9PC9wPlxyXG4gICAgICA8cD4g0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwOiAke3JlcS5ib2R5LnBob25lfTwvcD5cclxuICAgICAgPHA+INCi0LXQutGB0YIg0YHQvtC+0LHRidC10L3QuNGPOiAke3JlcS5ib2R5LnRleHR9PC9wPmAsXHJcbiAgfTtcclxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyBzZW5kIG1haWxcclxuICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxEYXRhLCAoZXJyLCBpbmZvKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAgICAgcmVzb2x2ZShpbmZvKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzOiAnT0snIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuYW1lIiwiZW1haWwiLCJjb21wYW55IiwicGhvbmUiLCJ0ZXh0IiwidGVzdCIsImJvZHkiLCJ0cmltIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwicG9ydCIsImhvc3QiLCJhdXRoIiwidXNlciIsInBhc3MiLCJzZWN1cmUiLCJtYWlsRGF0YSIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/form.js\n");

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