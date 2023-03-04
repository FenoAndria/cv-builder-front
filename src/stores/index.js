import Vuex from 'vuex'
import profil from './profil'
import loading from './loading'
import experiences from './experiences'
import formations from './formations'
import form_validation_errors from './form_validation_errors'
import competences from './competences'
import langues from './langues'

import form_validation_errors from './form_validation_errors'
import auth from './auth'
const store = new Vuex.Store({
    modules: {
        profil,
        loading,
        experiences,
        formations,
        form_validation_errors,
        competences,
        langues,
        form_validation_errors,
        auth,
    }
})
export default store