import axios from 'axios';
import router from '../router';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5173/api'
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (request) => {
    // 再发送请求之前做些什么
    console.log('before request')
    return request;
  },
  (error) => {
    // 处理错误请求
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 处理响应数据之前做些什么
    if (response.data.code === 200) {
      return response.data;
    } else if (response.data.code === 401) {
      router.push("/login?redirectUrl=" + encodeURI(router.currentRoute.value.path))
      return Promise.reject({ msg: '登录超时' });
    }
    return response;
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default axiosInstance;
