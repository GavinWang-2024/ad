"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 5064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    const { name , email , company , phone , text , test  } = req.body;
    if (name.trim() === '' || !email.includes('@') || company.trim() === '' || phone.trim() === '' || text.trim() === '' || test !== '6') {
        res.status(400).json({
            message: 'Ошибка в заполнении формы'
        });
        return;
    }
    let nodemailer = __webpack_require__(5184);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: 'ngmcompanyru@gmail.com',
            pass: 'NGMcompany23'
        },
        secure: true
    });
    const mailData = {
        from: 'ngmcompanyru@gmail.com',
        to: 'asv@ngmt.ru',
        subject: `Сообщение с сайта НГМ`,
        html: `<p>Данные с формы сайта: </p>
      <p> ФИО: ${req.body.name}</p>
      <p> Email: ${req.body.email}</p>
      <p> Компания: ${req.body.company}</p>
      <p> Номер телефона: ${req.body.phone}</p>
      <p> Текст сообщения: ${req.body.text}</p>`
    };
    transporter.sendMail(mailData, function(err, info) {
        if (err) console.log(err);
        else console.log(info);
    });
    res.status(200).json({
        message: 'Сообщение отправлено!'
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5064));
module.exports = __webpack_exports__;

})();