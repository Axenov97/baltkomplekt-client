import {$host} from "./index";

export const sendMail = async (name, email, phone, text, button, country) => {
    const {data} = await $host.post('api/sendmail', {name, email, phone, text, button, country})
    return data
}
