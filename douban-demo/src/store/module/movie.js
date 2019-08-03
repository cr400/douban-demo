import api from '../../api'

const state = {
    hotMovies: [],
    count: 0,
    total: 0,
}

const mutations = {
    in_theaters(state, movies) {
        state.hotMovies = movies
        console.log(JSON.stringify(result))
    }
}

const actions = {
    in_theaters({dispatch, commit, state} ) {
        api.get('/v2/movie/in_theaters', {"start":0,"count":10}).then(result => {
            console.log(JSON.stringify(result.subjects))
            commit('in_theaters', result.subjects)
        })
        .catch(error => {
            console.log(JSON.stringify(error))
        })
    }
}

export default {
    state,
    mutations,
    actions,
}