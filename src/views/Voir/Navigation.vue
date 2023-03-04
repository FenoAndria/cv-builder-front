<template>
    <div class="bg-white h-16 w-full fixed shadow-md flex justify-center">
        <div class=" flex justify-center items-center space-x-12">
            <nav-link v-for="(link, index) in links" :key="index" :name="link.name" :path="link.path" />
        </div>
    </div>
</template>
<script>
import NavLink from './NavLink.vue';
export default {
    name: 'VoirNavigation',
    data() {
        return {
            links: [
                { name: 'A Propos', path: '#apropos' },
                { name: 'Expériences', path: '#experiences' },
                { name: 'Formations', path: '#formations' },
                { name: 'Compétences', path: '#competences' },
                { name: 'Langues', path: '#langues' },
            ]
        }
    },
    components: {
        NavLink
    }
}
</script>