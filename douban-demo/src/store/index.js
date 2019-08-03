import Vuex from 'vuex'
import Vue from 'vue'
import movie from './module/movie'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        movie,
    }
})

export default store;