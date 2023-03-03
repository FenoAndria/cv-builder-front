import Vuex from 'vuex'
import profil from './profil'
import loading from './loading'
import experiences from './experiences'
const store = new Vuex.Store({
    modules: {
        profil,
        loading,
        experiences,
    }
})
export default store