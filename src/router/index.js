import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        // name: 'Main',
        component: Main,
        children: [
            {
                path: '',
                // name: 'Main',
                component: () => import ('@/components/mainPage/productTable.vue')
            }, {
                path: "/productDetail",
                // name: 'productDetail',
                component: () => import ('@/views/productDetail.vue')
            }, {
                path: "/test",
                // name: 'test',
                component: () => import ('@/components/mainPage/test.vue')
            }, {
                path: '/basket',
                // name: 'basket',
                component: () => import ('../views/basket.vue')
            }, {
                path: '/customerService',
                // name: 'customerService',
                component: () => import ('../views/customerService.vue')
            }, {
                path: '/payment',
                // name: 'payment',
                component: () => import ('../views/payment.vue')
            }
        ]
    }, {
        path: '/Login',
        // name: 'Login',
        component: () => import ('../views/Login.vue')
    }, {
        path: '/blank',
        // name: 'blank',
        component: () => import ('../views/blank.vue')
    }, {
        path: '/signUp',
        // name: 'signUp',
        component: () => import ('../views/signUp.vue')
    }, {
        path: '/otoQ',
        component: () => import ('../views/otoQ.vue')
    }, {
        path: '/list',
        component: () => import ('../views/list.vue')
    }, {
        path: '/shopping',
        component: () => import ('../views/shopping.vue')
       
    
    }

const router = new VueRouter(
    {mode: 'history', base: process.env.BASE_URL, routes}
)

export default router
