import Vuex from 'vuex'
import profil from './profil'
import loading from './loading'
import form_validation_errors from './form_validation_errors'
import auth from './auth'
const store = new Vuex.Store({
    modules: {
        profil,
        loading,
        form_validation_errors,
        auth,
    }
})
export default store