import Contact from '@/Pages/Contact.vue'
import Home from '@/Pages/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ],
    linkActiveClass: 'active',
})

export default router