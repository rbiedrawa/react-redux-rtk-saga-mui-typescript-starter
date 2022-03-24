import axios from 'axios'


export default function makeApi(baseURL: string) {
  const api = axios.create({
    baseURL,
  })

  api.defaults.headers.post['Content-Type'] = "application/json";
  api.defaults.headers.put['Content-Type'] = "application/json";
  api.defaults.headers.delete['Content-Type'] = "application/json";

  api.interceptors.request.use(
    (config) => {

      if(localStorage.getItem('authToken')) {
        config.headers = {...config.headers, Authorization: `Bearer ${localStorage.getItem('authToken')}`}
      }

      return config;
    },
    (error) => Promise.reject(error)
  )

  api.interceptors.response.use(
    (response) => response.data, // return data object
    (error) => Promise.reject(error)
  )
  return api
}
