import {$authHost, $host} from "./index";

export const createCases = async (title, description, meta_title, meta_description, meta_keywords, meta_link) => {
    const {data} = await $authHost.post('api/case', {title, description, meta_title, meta_description, meta_keywords, meta_link})
    return data
}

export const changeCases = async (id, title, description, meta_title, meta_description, meta_keywords, meta_link) => {
    const {data} = await $authHost.post(`api/case/${id}`, {params: {id}, title, description, meta_title, meta_description, meta_keywords, meta_link})
    return data
}

export const removeCases = async (id) => {
    const {data} = await $authHost.post(`api/case/remove/${id}`, {params: {id}})
    return data
}

export const fetchCases = async () => {
    const {data} = await $host.get('api/case')
    return data
}

