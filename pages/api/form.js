const nodemailer = require('nodemailer');

export default async function handler(req, res) {
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

  let transporter = nodemailer.createTransport({
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
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ status: 'OK' });
}
