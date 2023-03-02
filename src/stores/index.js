import Vuex from 'vuex'
import profil from './profil'
import loading from './loading'
const store = new Vuex.Store({
    modules: {
        profil,
        loading,
    }
})
export default store