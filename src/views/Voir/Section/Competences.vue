<template>
    <SectionLayout id="competences">
        <SectionTitle>Competences</SectionTitle>
        <div class="flex flex-wrap -mx-2">
            <div class="pb-4 text-xl w-1/4  px-2  " v-for="(competence, index) in competences" :key="index">
                <div class="">
                    <p class="text-maroon text-2xl">{{ competence.titre }} </p>
                    <p class="text-maroon text-lg">
                        <i v-for="i in (1, 5)" :class="(i <= competence.evaluation) ? 'bi-star-fill' : 'bi-star'"></i>
                    </p>
                </div>
            </div>
        </div>
    </SectionLayout>
</template>
<script>
import SectionLayout from './SectionLayout.vue'
import SectionTitle from './SectionTitle.vue'
export default {
    name: 'Competences',
    props: ['competences'],
    components: {
        SectionLayout,
        SectionTitle,
    }
}
</script>