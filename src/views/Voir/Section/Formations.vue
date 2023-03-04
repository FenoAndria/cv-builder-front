<template>
    <SectionLayout id="formations">
        <SectionTitle>Formations</SectionTitle>
        <div class="flex flex-wrap -mx-2">
            <div class="pb-4 text-xl w-1/2  px-2  " v-for="(formation, index) in formations" :key="index">
                <div class="">
                    <p class="text-maroon text-2xl">{{ formation.titre }} - {{ formation.diplome }}</p>
                    <p class="text-lg"><i class="bi bi-person-workspace"></i>{{ formation.etablissement }} </p>
                    <p class="text-lg"><i class="bi bi-geo-alt"></i>{{ formation.adresse_etablissement }}</p>
                    <p class="text-lg"><i class="bi bi-calendar-range"></i>{{ formation.debut }} - {{
        formation.en_cours ? 'maintenant' : formation.fin
}}</p>
                    <pre class="text-darkest pl-12">{{ formation.description }}</pre>
                </div>
            </div>
        </div>
    </SectionLayout>
</template>
<script>
import SectionLayout from './SectionLayout.vue'
import SectionTitle from './SectionTitle.vue'
export default {
    name: 'Formations',
    props: ['formations'],
    components: {
        SectionLayout,
        SectionTitle,
    }
}
</script>