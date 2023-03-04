import { createRouter, createWebHistory } from "vue-router";
import NotFound from '../components/Layouts/NotFound.vue'
import ProfilIndex from '../views/Profil/Index.vue'
import ProfilEdit from '../views/Profil/edit.vue'
import Login from '../views/Auth/Login.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/login',
            name:'login',
            component:Login
        },
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
                    path: 'create',
                    name: 'experienceCreate',
                    component: ExperienceCreate,
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
                {
                    path: 'create',
                    name: 'formationCreate',
                    component: FormationCreate,
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
                    path: 'create',
                    name: 'competenceCreate',
                    component: CompetenceCreate,
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
                    path: 'create',
                    name: 'langueCreate',
                    component: LangueCreate,
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
            path: '/voir/:id',
            name: 'Voir',
            component: Voir
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})
export default router;