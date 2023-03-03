const state = {
    form_validation_errors: [],
}
const getters = {
    FORM_VALIDATION_ERRORS: state => state.form_validation_errors,
}
const mutations = {
    SET_FORM_VALIDATION_ERRORS: (state, form_validation_errors) => state.form_validation_errors = form_validation_errors,
}
const actions = {

}
export default {
    state,
    getters,
    mutations,
    actions,
}