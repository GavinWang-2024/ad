export default function handler(req, res) {
  const { name, email, company, phone, text, test } = req.body;

  if (
    name.trim() === '' ||
    !email.includes('@') ||
    company.trim() === '' ||
    phone.trim() === '' ||
    text.trim() === '' ||
    test !== '6'
  ) {
    res.status(400).json({ message: 'Ошибка в заполнении формы' });
    return;
  }

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'ngmcompanyru@gmail.com',
      pass: 'NGMcompany23',
    },
    secure: true,
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
      <p> Текст сообщения: ${req.body.text}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200).json({ message: 'Сообщение отправлено!' });
}
