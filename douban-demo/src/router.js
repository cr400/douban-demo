import VueRouter from 'vue-router'
import Vue from 'vue'

import MovieView from './views/MovieView'
import movieDetail from './views/movieDetail'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/movie', 
        component: MovieView,
     },
     { 
        path: '/movieDetail/:movieId', 
        name: 'movieDetail',
        component: movieDetail,
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