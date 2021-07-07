import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/urgencies',
        name: 'urgencies',
        component: () => import('../components/urgencies')
    },
    {
        path: '/urgencies/new',
        name: 'add-urgencies',
        component: () => import('../components/add-urgency')
    },
    {
        path: '/urgencies/:id',
        name: 'edit-urgencies',
        component: () => import('../components/edit-urgency')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
