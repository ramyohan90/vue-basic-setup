import { createRouter, createWebHistory } from "vue-router"
import LoginVue from '../views/Login.vue';
import HomeVue from '../views/Home.vue';
import store from '../store';

const routes = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            name: 'home',
            path: '/',
            component: HomeVue,
            beforeEnter: (to, from, next) => {
               console.log(store.getters['getLoggedInState'])
               if (!store.getters['getLoggedInState']) {
                next('login');
               }
            }
        },
        {
            name: 'login',
            path: '/login',
            component: LoginVue,
        }
    ]
});

export default routes;