import API from './../services/Api'

const state = {
    competences: [],
    competence: '',
    loadingCompetences: false,
}
const getters = {
    COMPETENCES_LIST: state => state.competences,
    COMPETENCE: state => state.competence,
    LOADING_COMPETENCES: state => state.loadingCompetences,
}
const mutations = {
    SET_COMPETENCES_LIST: (state, competences) => state.competences = competences,
    SET_COMPETENCE: (state, competence) => state.competence = competence,
    SET_LOADING_COMPETENCES: (state, loadingCompetences) => state.loadingCompetences = loadingCompetences,
}
const actions = {
    GET_COMPETENCES_LIST: async ({ commit }) => {
        commit('SET_LOADING_DATA', true)
        await API().get('competences')
            .then((result) => {
                commit('SET_COMPETENCES_LIST', result.data.competences)
                console.log(result.data);
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                commit('SET_LOADING_DATA', false)
            });
    },
    GET_COMPETENCE: async ({ commit }, id) => {
        commit('SET_LOADING_COMPETENCES', true)
        let { data } = await API().get('competences/' + id).then((result) => {
            commit('SET_COMPETENCE', result.data.competence)
            console.log(result);
        }).catch((err) => {
            console.log(err.response);
        }).finally(() => {
            commit('SET_LOADING_COMPETENCES', false)
        });
    },
    SAVE_COMPETENCE: async ({ commit }, competence) => {
        return await API().post('competences/', competence)
    },
    MODIFIER_COMPETENCE: async ({ commit }, competence) => {
        return await API().put('competences/' + competence.id, competence)
    },
    DELETE_COMPETENCE: async ({ commit }, competence) => {
        return await API().delete('competences/' + competence)
    },
}
export default {
    state,
    getters,
    mutations,
    actions,
}