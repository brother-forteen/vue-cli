const Home = () => import(/* webpackChunkName: "group-home" */ '../views/Home.vue');

export default [
    {
        path:'/',
        redirect: '/home'
    },
    {
        path:'/home',
        name: 'home',
        /*
        *  添加该字段，表示进入这个路由是需要登录的
        * */
        /*
        meta: {
            requireAuth: true
        },
        */
        component: Home
    }
]
