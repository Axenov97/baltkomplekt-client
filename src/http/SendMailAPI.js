import {$host} from "./index";

export const sendMail = async (text) => {
    const {data} = await $host.post('api/sendmail', {text})
    return data
}
