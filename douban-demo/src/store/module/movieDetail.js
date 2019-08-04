import api from '../../api'

const state = {
    movie_subject: {},
    commentTotal: 0,
    commentCount: 0,
    commentStart: 0,
    comments: [],
}

const mutations = {
    movieSubjectById(state, subject) {
        state.movie_subject = subject;
    },

    movieCommentsById(state, body) {
        state.comments = body.comments;
        state.commentCount = body.count;
        state.commentStart = body.next_start;
        state.commentTotal = body.total;
    }
}

const actions = {
    movieSubjectById({commit, state}, movieId){
        api.get('/v2/movie/subject/' + movieId)
            .then(result => {
                commit('movieSubjectById', result)
            })
            .catch(error => {
                console.log(error)
            })
    },
    movieCommentsById({commit, state}, movieId){
        api.get('/v2/movie/subject/' + movieId + '/comments', {start:state.start, count:10})
            .then(result => {
                commit('movieCommentsById', result)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default {
    state,
    mutations,
    actions,
}