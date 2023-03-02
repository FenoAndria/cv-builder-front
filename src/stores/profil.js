import API from '../services/Api'

const state = {
    profil: '',
    counter: '',
    profil_published: '',
    loadingProfil: false,
    loadingCounter: false,
}
const getters = {
    PROFIL: state => state.profil,
    COUNTER: state => state.counter,
    PROFIL_PUBLISHED: state => state.profil_published,
    LOADING_PROFIL: state => state.loadingProfil,
    LOADING_COUNTER: state => state.loadingCounter,
}
const mutations = {
    SET_PROFIL: (state, profil) => state.profil = profil,
    SET_COUNTER: (state, counter) => state.counter = counter,
    SET_PROFIL_PUBLISHED: (state, profil_published) => state.profil_published = profil_published,
    SET_LOADING_PROFIL: (state, loadingProfil) => state.loadingProfil = loadingProfil,
    SET_LOADING_COUNTER: (state, loadingCounter) => state.loadingCounter = loadingCounter,
    // ADD_LANGUES: (state, type_produit) => state.types_produit.unshift(type_produit)
}
const actions = {
    GET_PROFIL: async ({ commit }) => {
        commit('SET_LOADING_DATA', true)
        await API().get('profil/')
            .then((result) => {
                commit('SET_LOADING_DATA', false)
                commit('SET_PROFIL', result.data.profil)
                console.log(result);
            })
            .catch((err) => {
                commit('SET_LOADING_DATA', false)
                console.log(err.response);
            })
    },
    MODIFIER_PROFIL: async ({ commit }, profil) => {
        return await API().post('profil/', profil)
    },
    COUNTER: async ({ commit }) => {
        commit('SET_LOADING_COUNTER', true)
        await API().get('counter')
            .then((result) => {
                commit('SET_COUNTER', result.data.counter)
                // console.log(result.data);
            }).catch((err) => {
                console.log(err.response);
            })
            .finally(() => {
                commit('SET_LOADING_COUNTER', false)
            })
    },
    VOIR_PROFIL: async ({ commit }, id) => {
        let { data } = await API().get('profil/' + id).then((result) => {
            commit('SET_PROFIL_PUBLISHED', result.data.profil)
            return (result);
        }).catch((err) => {
            return (err.response);
        });
        console.log(data);
    },
}
export default {
    state,
    getters,
    mutations,
    actions,
}