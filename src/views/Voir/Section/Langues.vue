<template>
    <SectionLayout id="langues">
        <SectionTitle>Langues</SectionTitle>
        <div class="flex flex-wrap -mx-2">
            <div class="pb-4 text-xl w-1/4  px-2  " v-for="(langue, index) in langues" :key="index">
                <div class="">
                    <p class="text-maroon text-2xl">{{ langue.nom }} </p>
                    <p class="text-maroon text-lg">
                        <i v-for="i in (1, 5)" :class="(i <= langue.evaluation) ? 'bi-star-fill' : 'bi-star'"></i>
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
    name: 'Langues',
    props: ['langues'],
    components: {
        SectionLayout,
        SectionTitle,
    }
}
</script>