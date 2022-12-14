import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';


const routes = [
    {
        path: '/',
        name: 'homepage',
        component: HomePage
    }
]


const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router;