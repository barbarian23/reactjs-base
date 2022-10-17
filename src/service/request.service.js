import axios from "axios";

const instance = axios.create({
    baseURL: 'url',
    timeout: 300000,
    headers: {
        'Content-Type': 'application/json',
    }
})

//set token
// instance.setToken = (token) => {
//     instance.defaults.headers\['x-access-token'\] = token
//     window.localStorage.setItem('token', token)
// }

//refresh token
// function refreshToken () {
//     return instance.post('/token',{
//         refreshToken: getLocalRefreshToken()
//     })
// }

//some access token có thể bị hết hạn và cần dùng refresh token để lấy lại
//instance.interceptors.response.use((response) => {
//     const {code, auto} = response.data
//     if (code === 401) {
//         if(auto === 'yes'){

//             console.log('get new token using refresh token', getLocalRefreshToken())
//             return refreshToken().then(rs => {
//                 console.log('get token refreshToken>>', rs.data)
//                 const { token } = rs.data
//                 instance.setToken(token);
//                 const config = response.config
//                 config.headers\['x-access-token'\] = token
//                 config.baseURL = 'http://localhost:3000/'
//                 return instance(config)

//             })
//         }
//     }
//     return response
// }, error => {
//     console.warn('Error status', error.response.status)
//     // return Promise.reject(error)
//     if (error.response) {
//         return parseError(error.response.data)
//     } else {
//         return Promise.reject(error)
//     }
// })

export const requestGet = (url, param) => {
    return axios.get(url, param);
}
