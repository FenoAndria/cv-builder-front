import Vuex from 'vuex'
import profil from './profil'
import loading from './loading'
import experiences from './experiences'
import formations from './formations'
import form_validation_errors from './form_validation_errors'

const store = new Vuex.Store({
    modules: {
        profil,
        loading,
        experiences,
        formations,
        form_validation_errors,
    }
})
export default store