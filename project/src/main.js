import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/store';
import axios from './http';
import './registerServiceWorker';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
