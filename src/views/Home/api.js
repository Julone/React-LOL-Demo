import axios from 'axios';
const instance  = axios.create({
    timeout: 10000
})
instance.interceptors.request.use(config => {
    return config;
}, error => {
   return Promise.reject(error)
}
)
instance.interceptors.response.use(config => {

})