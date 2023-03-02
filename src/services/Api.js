import axios from 'axios'
import router from '../router';
const API = axios.create({
  baseURL: `http://localhost:8000/api/`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Authorization": 'Bearer ' + localStorage.userToken
  }
})

API.interceptors.response.use(function (response) {
  return response
}, function (error) {
  console.log(error);
  if (error.response.status === 401) {
    // router.push('/login')
  }
  return Promise.reject(error)
})

export default () => {
  return API
}
