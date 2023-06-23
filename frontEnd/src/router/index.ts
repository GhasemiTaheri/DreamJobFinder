import {createRouter, createWebHistory, RouterOptions} from 'vue-router'

const routes = []

const router = createRouter(<RouterOptions>{
    history: createWebHistory(),
    routes: routes
})

export default router
