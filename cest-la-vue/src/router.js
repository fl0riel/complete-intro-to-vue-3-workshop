import HomePage from './views/HomePage.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/LoginPage.vue')
    },
    {
        path: '/users',
        name: 'users',
        component: () => import('./views/UsersPage.vue')
    }
];