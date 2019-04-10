import axios from 'axios';
import router from './router/index';

/*
 * 超时时间 
 */
axios.defaults.timeout = 5000;

/*
 * 添加请求拦截器，请求成功和请求失败 
 */ 
axios.interceptors.request.use(
    config => {
        // 加载loading
        if (this.$store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${this.$store.state.token}`;
        }
        return config;
    },

    err => {
        // loading关闭，弹出提示信息
        return Promise.reject(err);
    }
)

/*
 * 添加响应拦截器，响应成功和请求失败 
 */ 
axios.interceptors.response.use(
    response => {
        // loading关闭
        return response;
    },
    error => {
        if(error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }

        // 弹出提示信息
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    }

)

export default axios;
