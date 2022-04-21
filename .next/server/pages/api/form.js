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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const { name , email , company , phone , text , test  } = req.body;\n    if (name.trim() === '' || !email.includes('@') || company.trim() === '' || phone.trim() === '' || text.trim() === '' || test !== '6') {\n        res.status(400).json({\n            message: 'Ошибка в заполнении формы'\n        });\n        return;\n    }\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        port: 465,\n        host: 'smtp.gmail.com',\n        auth: {\n            user: 'ngmcompanyru@gmail.com',\n            pass: 'NGMcompany23'\n        },\n        secure: true\n    });\n    const mailData = {\n        from: 'ngmcompanyru@gmail.com',\n        to: 'asv@ngmt.ru',\n        subject: `Сообщение с сайта НГМ`,\n        html: `<p>Данные с формы сайта: </p>\n      <p> ФИО: ${req.body.name}</p>\n      <p> Email: ${req.body.email}</p>\n      <p> Компания: ${req.body.company}</p>\n      <p> Номер телефона: ${req.body.phone}</p>\n      <p> Текст сообщения: ${req.body.text}</p>`\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) console.log(err);\n        else console.log(info);\n    });\n    res.status(200).json({\n        message: 'Сообщение отправлено!'\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsUUFBUSxDQUFDQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDekMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLE9BQU8sR0FBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUVDLElBQUksRUFBQyxDQUFDLEdBQUdQLEdBQUcsQ0FBQ1EsSUFBSTtJQUU1RCxFQUFFLEVBQ0FOLElBQUksQ0FBQ08sSUFBSSxPQUFPLENBQUUsTUFDakJOLEtBQUssQ0FBQ08sUUFBUSxDQUFDLENBQUcsT0FDbkJOLE9BQU8sQ0FBQ0ssSUFBSSxPQUFPLENBQUUsS0FDckJKLEtBQUssQ0FBQ0ksSUFBSSxPQUFPLENBQUUsS0FDbkJILElBQUksQ0FBQ0csSUFBSSxPQUFPLENBQUUsS0FDbEJGLElBQUksS0FBSyxDQUFHLElBQ1osQ0FBQztRQUNETixHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUEyQjtRQUF1QixDQUFDO1FBQzdELE1BQWhCO0lBQ1IsQ0FBQztJQUVELEdBQUcsQ0FBQ0MsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFZO0lBQ3JDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHRixVQUFVLENBQUNHLGVBQWUsQ0FBQyxDQUFDO1FBQzlDQyxJQUFJLEVBQUUsR0FBRztRQUNUQyxJQUFJLEVBQUUsQ0FBZ0I7UUFDdEJDLElBQUksRUFBRSxDQUFDO1lBQ0xDLElBQUksRUFBRSxDQUF3QjtZQUM5QkMsSUFBSSxFQUFFLENBQWM7UUFDdEIsQ0FBQztRQUNEQyxNQUFNLEVBQUUsSUFBSTtJQUNkLENBQUM7SUFDRCxLQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFDO1FBQ2hCQyxJQUFJLEVBQUUsQ0FBd0I7UUFDOUJDLEVBQUUsRUFBRSxDQUFhO1FBQ2pCQyxPQUFPLEdBQUc7UUFDUUMsSUFBZCxHQUFHO0lBTUssQ0FBYjtJQUNEWixXQUFXLENBQUNhLFFBQVEsQ0FBQ0wsUUFBUSxFQUFFO1FBQzdCLEVBQUUsRUFBRU0sR0FBRyxFQUFFRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRzthQUNuQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUk7SUFDdkIsQ0FBQztJQUNEOUI7UUFBdUJZLE9BQU8sRUFBRSxDQUF1QjtJQUFDLENBQUM7QUFDM0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2FwaS9mb3JtLmpzPzExOTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIGNvbXBhbnksIHBob25lLCB0ZXh0LCB0ZXN0IH0gPSByZXEuYm9keTtcclxuXHJcbiAgaWYgKFxyXG4gICAgbmFtZS50cmltKCkgPT09ICcnIHx8XHJcbiAgICAhZW1haWwuaW5jbHVkZXMoJ0AnKSB8fFxyXG4gICAgY29tcGFueS50cmltKCkgPT09ICcnIHx8XHJcbiAgICBwaG9uZS50cmltKCkgPT09ICcnIHx8XHJcbiAgICB0ZXh0LnRyaW0oKSA9PT0gJycgfHxcclxuICAgIHRlc3QgIT09ICc2J1xyXG4gICkge1xyXG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAn0J7RiNC40LHQutCwINCyINC30LDQv9C+0LvQvdC10L3QuNC4INGE0L7RgNC80YsnIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IG5vZGVtYWlsZXIgPSByZXF1aXJlKCdub2RlbWFpbGVyJyk7XHJcbiAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICBwb3J0OiA0NjUsXHJcbiAgICBob3N0OiAnc210cC5nbWFpbC5jb20nLFxyXG4gICAgYXV0aDoge1xyXG4gICAgICB1c2VyOiAnbmdtY29tcGFueXJ1QGdtYWlsLmNvbScsXHJcbiAgICAgIHBhc3M6ICdOR01jb21wYW55MjMnLFxyXG4gICAgfSxcclxuICAgIHNlY3VyZTogdHJ1ZSxcclxuICB9KTtcclxuICBjb25zdCBtYWlsRGF0YSA9IHtcclxuICAgIGZyb206ICduZ21jb21wYW55cnVAZ21haWwuY29tJyxcclxuICAgIHRvOiAnYXN2QG5nbXQucnUnLFxyXG4gICAgc3ViamVjdDogYNCh0L7QvtCx0YnQtdC90LjQtSDRgSDRgdCw0LnRgtCwINCd0JPQnGAsXHJcbiAgICBodG1sOiBgPHA+0JTQsNC90L3Ri9C1INGBINGE0L7RgNC80Ysg0YHQsNC50YLQsDogPC9wPlxyXG4gICAgICA8cD4g0KTQmNCeOiAke3JlcS5ib2R5Lm5hbWV9PC9wPlxyXG4gICAgICA8cD4gRW1haWw6ICR7cmVxLmJvZHkuZW1haWx9PC9wPlxyXG4gICAgICA8cD4g0JrQvtC80L/QsNC90LjRjzogJHtyZXEuYm9keS5jb21wYW55fTwvcD5cclxuICAgICAgPHA+INCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsDogJHtyZXEuYm9keS5waG9uZX08L3A+XHJcbiAgICAgIDxwPiDQotC10LrRgdGCINGB0L7QvtCx0YnQtdC90LjRjzogJHtyZXEuYm9keS50ZXh0fTwvcD5gLFxyXG4gIH07XHJcbiAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbERhdGEsIGZ1bmN0aW9uIChlcnIsIGluZm8pIHtcclxuICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICBlbHNlIGNvbnNvbGUubG9nKGluZm8pO1xyXG4gIH0pO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ9Ch0L7QvtCx0YnQtdC90LjQtSDQvtGC0L/RgNCw0LLQu9C10L3QviEnIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibmFtZSIsImVtYWlsIiwiY29tcGFueSIsInBob25lIiwidGV4dCIsInRlc3QiLCJib2R5IiwidHJpbSIsImluY2x1ZGVzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJub2RlbWFpbGVyIiwicmVxdWlyZSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwicG9ydCIsImhvc3QiLCJhdXRoIiwidXNlciIsInBhc3MiLCJzZWN1cmUiLCJtYWlsRGF0YSIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwic2VuZE1haWwiLCJlcnIiLCJpbmZvIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/form.js\n");

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