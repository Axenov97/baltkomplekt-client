import {$authHost, $host} from "./index";

export const createNews = async (title, description, description_2, description_3, keywords) => {
    const {data} = await $authHost.post('api/news', {title, description, description_2, description_3, keywords})
    return data
}

export const changeNews = async (id, title, description) => {
    const {data} = await $authHost.post(`api/news/${id}`, {params: {id}, title, description})
    return data
}

export const removeNews = async (id) => {
    const {data} = await $authHost.post(`api/news/remove/${id}`, {params: {id}})
    return data
}

export const fetchNews = async (page, limit) => {
    const {data} = await $host.get('api/news', {params: {page, limit} })
    return data
}