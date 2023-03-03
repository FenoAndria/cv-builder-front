import { createRouter, createWebHistory } from "vue-router";
import NotFound from '../components/Layouts/NotFound.vue'

import ProfilIndex from '../views/Profil/Index.vue'
import ProfilEdit from '../views/Profil/edit.vue'
import ExperienceIndex from '../views/Experiences/Index.vue'
import ExperienceEdit from '../views/Experiences/Edit.vue'
import FormationIndex from '../views/Formations/Index.vue'
import FormationEdit from '../views/Formations/Edit.vue'
import CompetenceIndex from '../views/Competences/Index.vue'
import CompetenceEdit from '../views/Competences/Edit.vue'
import LangueIndex from '../views/Langues/Index.vue'
import LangueEdit from '../views/Langues/Edit.vue'

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
            redirect: { name: 'experienceIndex' },
            children: [
                {
                    path: 'index',
                    name: 'experienceIndex',
                    component: ExperienceIndex,
                },
                {
                    path: ':id',
                    name: 'experienceEdit',
                    component: ExperienceEdit,
                },
            ]
        },
        {
            path: '/formations',
            name: 'formations',
            redirect: { name: 'formationIndex' },
            children: [
                {
                    path: 'index',
                    name: 'formationIndex',
                    component: FormationIndex,
                },
                {
                    path: ':id',
                    name: 'formationEdit',
                    component: FormationEdit,
                },
            ]
        },
        {
            path: '/competences',
            name: 'competences',
            redirect: { name: 'competenceIndex' },
            children: [
                {
                    path: 'index',
                    name: 'competenceIndex',
                    component: CompetenceIndex,
                },
                {
                    path: ':id',
                    name: 'competenceEdit',
                    component: CompetenceEdit,
                },
            ]
        },
        {
            path: '/langues',
            name: 'langues',
            redirect: { name: 'langueIndex' },
            children: [
                {
                    path: 'index',
                    name: 'langueIndex',
                    component: LangueIndex,
                },
                {
                    path: ':id',
                    name: 'langueEdit',
                    component: LangueEdit,
                },
            ]
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