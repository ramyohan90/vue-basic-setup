import { createRouter, createWebHistory } from "vue-router"
import LoginVue from '../views/Login.vue';
import HomeVue from '../views/Home.vue';
import store from '../store';

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            name: 'home',
            path: '/',
            component: HomeVue,
            // Use router.beforeEach to apply guards for all routes.
            // beforeEnter: (to, from) => {
            //    console.log(store.getters['getLoggedInState'])
            //    console.log(to)
            //    if (!store.getters['getLoggedInState']) {
            //     return { name: 'login' }
            //    }
            //    if (from.fullPath == '/login') {
            //     return { name: 'home' }
            //    }             
            // }
        },
        {
            name: 'login',
            path: '/login',
            component: LoginVue,
        }
    ]
});

// Use router.beforeEach to apply guards for all routes.
router.beforeEach((to, from) => {;
    // Avoid redirection.
    if (from.name === 'login' && !store.getters['getLoggedInState']) {
        return false;
    }
    if (to.name === 'login') { return true }
    if (!store.getters['getLoggedInState']) {
        router.push('/login')
    }
})

export default router;