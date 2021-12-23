import {useContext} from "react";
import {ModalContext} from "../src/context";

require('dotenv').config()
const mailer = require('nodemailer')
const { content } = useContext(ModalContext)

async function main() {
    const transporter = mailer.createTransport({
       service: "Yandex",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const text = `Имя: ${content.name} Email: ${content.email} Телефон: ${content.phone}  Запрос: ${content.text}`

    const mailOptions = {
        from: 'web.baltkomlekt@yandex.ru', //отправитель
        to: "dimka180497@mail.ru, web.baltkomlekt@yandex.ru", //получатели
        subject: "Hello 3 ✔", //заголовок
        text: text, //текст письма
        // html: "<b>Hello world?</b>" //либо html либо text ^
    }

    await transporter.sendMail(mailOptions)

}
main().catch(console.error);