import API from './../services/Api'

const state = {
    experiences: [],
    experiences_errors: [],
    experience: '',
    loadingExperiences: false,
    loadingSingleExperience: false,
}
const getters = {
    EXPERIENCES_LIST: state => state.experiences,
    EXPERIENCE: state => state.experience,
    EXPERIENCES_ERRORS: state => state.experiences_errors,
    LOADING_EXPERIENCES: state => state.loadingExperiences,
    LOADING_SINGLE_EXPERIENCE: state => state.loadingSingleExperience,
}
const mutations = {
    SET_EXPERIENCES_LIST: (state, experiences) => state.experiences = experiences,
    SET_EXPERIENCE: (state, experience) => state.experience = experience,
    SET_LOADING_EXPERIENCES: (state, loadingExperiences) => state.loadingExperiences = loadingExperiences,
    SET_EXPERIENCES_ERRORS: (state, experiences_errors) => state.experiences_errors = experiences_errors,
}
const actions = {
    GET_EXPERIENCES_LIST: async ({ commit }) => {
        commit('SET_LOADING_DATA', true)
        await API().get('experiences').then((result) => {
            commit('SET_LOADING_DATA', false)
            commit('SET_EXPERIENCES_LIST', result.data.experiences)
            console.log(result.data);
        }).catch((err) => {
            commit('SET_LOADING_DATA', false)
            console.log(err.response);
        })
    },
    GET_EXPERIENCE: async ({ commit }, id) => {
        commit('SET_LOADING_DATA', true)
        let { data } = await API().get('experiences/' + id).then((result) => {
            commit('SET_LOADING_DATA', false)
            commit('SET_EXPERIENCE', result.data.experience)
            console.log(result);
        }).catch((err) => {
            commit('SET_LOADING_DATA', false)
            console.log(err);
        })
    },
    SAVE_EXPERIENCE: async ({ commit }, experience) => {
        return await API().post('experiences/', experience)
    },
    MODIFIER_EXPERIENCE: async ({ commit }, experience) => {
        return await API().put('experiences/' + experience.id, experience)
    },
    DELETE_EXPERIENCE: async ({ commit }, experience) => {
        return await API().delete('experiences/' + experience)
    }
}
export default {
    state,
    getters,
    mutations,
    actions,
}