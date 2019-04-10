import Vue from 'vue';
import Router from 'vue-router';
import routes from './route_config';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
