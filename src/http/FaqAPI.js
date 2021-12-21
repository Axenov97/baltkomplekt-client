import {$authHost, $host} from "./index";

export const createFaq = async (question, answer) => {
    const {data} = await $authHost.post(`http://root@vm671464.vps.masterhost.tech:5000/api/faq`, {question, answer})
    return data
}

export const changeFaq = async (id, question, answer) => {
    const {data} = await $authHost.post(`http://root@vm671464.vps.masterhost.tech:5000/api/faq/${id}`, {params: {id}, question, answer})
    return data
}

export const removeFaq = async (id) => {
    const {data} = await $authHost.post(`http://root@vm671464.vps.masterhost.tech:5000/api/faq/remove/${id}`, {params: {id}})
    return data
}

export const fetchFaq = async () => {
    const {data} = await $host.get(`http://root@vm671464.vps.masterhost.tech:5000/api/faq`)
    return data
}