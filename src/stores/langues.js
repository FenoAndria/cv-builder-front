import API from './../services/Api'

const state = {
    langues: [],
    langue: null,
    languesDb: [],
}
const getters = {
    LANGUES_LIST: state => state.langues,
    LANGUE: state => state.langue,
    LANGUE_DB: state => state.languesDb,
}
const mutations = {
    SET_LANGUES_LIST: (state, langues) => state.langues = langues,
    SET_LANGUE: (state, langue) => state.langue = langue,
    SET_LANGUE_DB: (state, languesDb) => state.languesDb = languesDb,
}
const actions = {
    GET_LANGUES_DB: ({ commit }) => {
        commit('SET_LOADING_DATA', true)
        let { data } = API().get('langues-db')
            .then((result) => {
                commit('SET_LANGUE_DB', result.data.langues)
                commit('SET_LOADING_DATA', false)
            }).catch((err) => {
                commit('SET_LOADING_DATA', false)
                console.log(err);
            });
    },
    GET_LANGUES_LIST: ({ commit }) => {
        commit('SET_LOADING_DATA', true)
        let { data } = API().get('langues')
            .then((result) => {
                commit('SET_LOADING_DATA', false)
                commit('SET_LANGUES_LIST', result.data.langues)
                console.log(result.data);
            }).catch((err) => {
                commit('SET_LOADING_DATA', false)
                console.log(err);
            });
    },
    GET_LANGUE: ({ commit }, langue) => {
        commit('SET_LOADING_DATA', true)
        let { data } = API().get('langues/' + langue)
            .then((result) => {
                commit('SET_LOADING_DATA', false)
                commit('SET_LANGUE', result.data.langue)
            }).catch((err) => {
                commit('SET_LOADING_DATA', false)
                console.log(err);
            });
    },
    UPDATE_LANGUE: async ({ commit }, langue) => {
        return await API().put('langues/' + langue.id, langue)
    },
    ADD_LANGUE: async ({ commit }, langue) => {
        return await API().post('langues/', langue)
    },
    DELETE_LANGUE: async ({ commit }, langue) => {
        return await API().delete('langues/' + langue)
    },
}
export default {
    state,
    getters,
    mutations,
    actions,
}