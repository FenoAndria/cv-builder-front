import API from './../services/Api'

const state = {}
const getters = {}
const mutations = {}
const actions = {
    LOGIN: async ({ commit }, user) => {
        return await API().post('auth/login', user)
    },
}
export default {
    state,
    getters,
    mutations,
    actions,
}