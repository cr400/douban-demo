import Vuex from 'vuex'
import Vue from 'vue'
import movie from './module/movie'
import movieDetail from './module/movieDetail'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        movie,
        movieDetail,
    }
})

export default store;