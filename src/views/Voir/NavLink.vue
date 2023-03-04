<template>
    <div >
        <a :href="path" class="voir-nav-link  ">{{ name }}</a>
    </div>
</template>
<script>
// import NavigationVue from './Navigation.vue';
export default {
    name: 'VoirNavLink',
    // components:{
    //     Navigation: NavigationVue
    // }
    props: ['name', 'path']
}
</script>