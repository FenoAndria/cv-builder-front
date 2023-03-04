<template>
  <SectionLayout id="experiences">
    <SectionTitle>Expériences</SectionTitle>
    <div class="flex flex-wrap -mx-2">
      <div
        class="pb-4 text-xl w-1/2 px-2"
        v-for="(experience, index) in experiences"
        :key="index"
      >
        <div class="">
          <p class="text-maroon text-2xl">{{ experience.titre_poste }}</p>
          <p class="">
            <i class="bi bi-person-workspace"></i>{{ experience.societe }}
          </p>
          <p class="">
            <i class="bi bi-geo-alt"></i>{{ experience.adresse_societe }}
          </p>
          <p class="">
            <i class="bi bi-calendar-range"></i>{{ experience.debut }} -
            {{ experience.en_cours ? "maintenant" : experience.fin }}
          </p>
          <p class="text-darkest pl-12">{{ experience.description }}</p>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
<script>
import SectionLayout from "./SectionLayout.vue";
import SectionTitle from "./SectionTitle.vue";
export default {
  name: "Experiences",
  props: ["experiences"],
  components: {
    SectionLayout,
    SectionTitle,
  },
};
</script>