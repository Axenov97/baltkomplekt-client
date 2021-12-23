import {$host} from "./index";

export const sendMail = async (name, email, phone, text, button) => {
    const {data} = await $host.post('api/sendmail', {name, email, phone, text, button})
    return data
}
