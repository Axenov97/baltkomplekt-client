import axios from "axios";

const $host = axios.create({
    baseURL: 'https://vm671464.vps.masterhost.tech/'
    // baseURL: 'http://localhost:5000/'
})

const $authHost = axios.create({
    baseURL: 'https://vm671464.vps.masterhost.tech/'
    // baseURL: 'http://localhost:5000/'
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