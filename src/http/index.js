import axios from "axios";

const $host = axios.create({
    baseURL: 'https://vm671464.vps.masterhost.tech:8080/'
})

const $authHost = axios.create({
    baseURL: 'https://vm671464.vps.masterhost.tech:8080/'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}