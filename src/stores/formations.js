import API from './../services/Api'

const state = {
    formations: [],
    formations_errors: [],
    formation: '',
    diplomes: [],
}
const getters = {
    FORMATIONS_LIST: state => state.formations,
    FORMATION: state => state.formation,
    DIPLOMES: state => state.diplomes,
    FORMATIONS_ERRORS: state => state.formations_errors,
}
const mutations = {
    SET_FORMATIONS_LIST: (state, formations) => state.formations = formations,
    SET_FORMATION: (state, formation) => state.formation = formation,
    SET_DIPLOMES_LIST: (state, diplomes) => state.diplomes = diplomes,
}
const actions = {
    GET_FORMATIONS_LIST: async ({ commit }) => {
        commit('SET_LOADING_DATA', true)
        await API().get('formations').then((result) => {
            commit('SET_LOADING_DATA', false)
            commit('SET_FORMATIONS_LIST', result.data.formations)
            console.log(result.data);
        }).catch((err) => {
            commit('SET_LOADING_DATA', false)
            console.log(err);
        });
    },
    GET_FORMATION: async ({ commit }, id) => {
        commit('SET_LOADING_DATA', true)
        let { data } = await API().get('formations/' + id)
            .then((result) => {
                commit('SET_FORMATION', result.data.formation)
                commit('SET_LOADING_DATA', false)
                console.log(result);
            }).catch((err) => {
                commit('SET_LOADING_DATA', false)
                console.log(err.response);
            });
    },
    SAVE_FORMATION: async ({ commit }, formation) => {
        return await API().post('formations/', formation)
    },
    MODIFIER_FORMATION: async ({ commit }, formation) => {
        return await API().put('formations/' + formation.id, formation)
    },
    DELETE_FORMATION: async ({ commit }, formation) => {
        return await API().delete('formations/' + formation)
    },
    GET_DIPLOMES: async ({ commit }) => {
        await API().get('diplomes-db').then((result) => {
            commit('SET_DIPLOMES_LIST', result.data.diplomes)
        }).catch((err) => {
            console.log(err);
        });
    },
}
export default {
    state,
    getters,
    mutations,
    actions,
}