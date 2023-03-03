import { createRouter, createWebHistory } from "vue-router";
import NotFound from '../components/Layouts/NotFound.vue'

import ProfilIndex from '../views/Profil/Index.vue'
import ProfilEdit from '../views/Profil/edit.vue'
import ExperienceIndex from '../views/Experiences/Index.vue'
import ExperienceEdit from '../views/Experiences/Edit.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/profil',
            name: 'profil',
            redirect: { name: 'profilIndex' },
            children: [
                {
                    path: 'index',
                    name: 'profilIndex',
                    component: ProfilIndex,
                },
                {
                    path: '/edit',
                    name: 'profilEdit',
                    component: ProfilEdit,
                },
            ]
        },
        {
            path: '/experiences',
            name: 'experiences',
            component: ExperienceIndex,
        },
        {
            path: '/experiences/:id',
            name: 'experienceEdit',
            component: ExperienceEdit,
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