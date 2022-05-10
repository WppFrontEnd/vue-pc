import axios from "axios"

export const service =axios.create({
  baseURL:'',
  timeout:30000,
  headers:{

  }
})
service.interceptors.request.use((config)=>{
  return config
},error=>{
  console.log('request error',error)
  // return Promise.reject(new Error(error).message)
})

service.interceptors.response.use(response=>{
  console.log('...',response)
  return response.data
},error=>{
  console.log('response error:',error)
})

export default service