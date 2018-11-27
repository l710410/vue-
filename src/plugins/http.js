import axios from 'axios'
const httpaa = {}
httpaa.install = function fn (Vue) {
  axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'

  Vue.prototype.$axios = axios
}
export default httpaa
