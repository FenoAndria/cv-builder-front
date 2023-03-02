import Api from "../services/Api"

const state = {
    loading_data: false,
    loading_submit: false,
    loading_delete: false,
} 
const getters = {
    LOADING_DATA: state => state.loading_data,
    LOADING_SUBMIT: state => state.loading_submit,
    LOADING_DELETE: state => state.loading_delete,
}
const mutations = {
    SET_LOADING_DATA: (state, loading_data) => state.loading_data = loading_data,
    SET_LOADING_SUBMIT: (state, loading_submit) => state.loading_submit = loading_submit,
    SET_LOADING_DELETE: (state, loading_delete) => state.loading_delete = loading_delete,
}
const actions = {

}
export default {
    state,
    getters,
    mutations,
    actions,
}