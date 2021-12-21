import {$authHost, $host} from "./index";

export const createMaterials = async (materials) => {
    const {data} = await $authHost.post('api/materials', materials)
    return data
}

export const changeMaterials = async (materials, id, title, description, file) => {
    const {data} = await $authHost.post(`api/materials/` + id, materials, {params: {id}, title, description, file})
    return data
}

export const removeMaterials = async (id) => {
    const {data} = await $authHost.post(`api/materials/remove/` + id, {params: {id}})
    return data
}

export const fetchMaterials = async () => {
    const {data} = await $host.get('api/materials')
    return data
}