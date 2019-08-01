import VueRouter from 'vue-router'
import Vue from 'vue'

import MovieView from './views/MovieView'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/movie', 
        component: MovieView,
     },
     {
         path:'/',
         redirect: '/movie',
     }
]

const router = new VueRouter({
    routes
})

export default router;