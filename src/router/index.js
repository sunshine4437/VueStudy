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
                path: "/productDetail",
                component: () => import ('@/views/productDetail.vue')
            }, {
                path: "/test",
                component: () => import ('@/components/mainPage/test.vue')
            }
        ]
    }, {
        path: '/Login',
        name: 'Login',
        component: () => import ('../views/Login.vue')
    }, {
        path: '/blank',
        name: 'blank',

        component: () => import ('../views/blank.vue')
    }, {
        path: '/productDetail',
        name: 'productDetail',

        component: () => import ('../views/productDetail.vue')
    }, {
        path: '/signUp',
        name: 'signUp',
        component: () => import ('../views/signUp.vue')
    }, {
        path: '/payment',
        name: 'payment',
        component: () => import ('../views/payment.vue')
    }, {
        path: '/customerService',
        name: 'customerService',
        component: () => import ('../views/customerService.vue')
    }
]

const router = new VueRouter(
    {mode: 'history', base: process.env.BASE_URL, routes}
)

export default router
