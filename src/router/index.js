import { createRouter, createWebHistory } from "vue-router";
import ProfilIndex from '../views/Profil/Index.vue'
import ProfilEdit from '../views/Profil/edit.vue'
import NotFound from '../components/Layouts/NotFound.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/profil/',
            name: 'profil',
            // component: ProfilIndex,
            children: [
                {
                    path: '',
                    name: 'profilIndex',
                    component: ProfilIndex,
                },
                {
                    path: 'edit',
                    name: 'profilEdit',
                    component: ProfilEdit,
                },
            ]
        },
        {
            path: '/experiences',
            name: 'experiences',
        },
        {
            path: '/langues',
            name: 'langues',
        },
        {
            path: '/formations',
            name: 'formations',
        },
        {
            path: '/competences',
            name: 'competences',
        },
        {
            path: '/autres',
            name: 'autres',
        },
        {
            path: '/voir',
            name: 'Voir',
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})
export default router;