import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import Shopping from './components/Shopping.vue'
import Checking from './components/Checking.vue'
import Tester from './components/testshopping.vue'
import Test from './components/tester.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/shoppingcart",
            component: Shopping
        },
        {
            path: "/testing",
            component: Checking
        },
        {
            path: "/testshoppingcart",
            component: Tester
        },
        {
            path: "/test",
            component: Test
        }         
    ]
});

export default router