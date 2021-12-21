import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
// import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        children: [
            {
                path: '',
                component: () => import ('@/components/mainPage/productTable.vue')
            }, {
                path: "productDetail",
                component: () => import ('@/views/productDetail.vue')
            }, {
                path: "test",
                component: () => import ('@/components/mainPage/test.vue')
            }
        ]
    }, {
        path: '/Login',
        name: 'Login',
        // component: About route level code-splitting this generates a separate chunk
        // (about.[hash].js) for this route which is lazy-loaded when the route is
        // visited.
        component: () => import (/* webpackChunkName: "about" */
        '../views/Login.vue')
    }, {
        path: '/blank',
        name: 'blank',
        // component: About route level code-splitting this generates a separate chunk
        // (about.[hash].js) for this route which is lazy-loaded when the route is
        // visited.
        component: () => import (/* webpackChunkName: "about" */
        '../views/blank.vue')
    }, {
        path: '/productDetail',
        name: 'productDetail',
        // component: About route level code-splitting this generates a separate chunk
        // (about.[hash].js) for this route which is lazy-loaded when the route is
        // visited.
        component: () => import (/* webpackChunkName: "about" */
        '../views/productDetail.vue')
    }
]

const router = new VueRouter(
    {mode: 'history', base: process.env.BASE_URL, routes}
)

export default router
