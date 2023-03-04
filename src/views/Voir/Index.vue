<template>
  <div>
    <Navigation />
    <div class="px-32" v-if="PROFIL_PUBLISHED">
      <Apropos :profil="PROFIL_PUBLISHED" />
      <Experiences :experiences="PROFIL_PUBLISHED.experiences" />
      <Formations :formations="PROFIL_PUBLISHED.formations" />
      <Competences :competences="PROFIL_PUBLISHED.competences" />
      <Langues :langues="PROFIL_PUBLISHED.langues" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Navigation from "./Navigation.vue";
import Apropos from "./Section/APropos.vue";
import Loading from "./Section/LoadingApropos.vue";
import Experiences from "./Section/Experiences.vue";
import Formations from "./Section/Formations.vue";
import Competences from "./Section/Competences.vue";
import Langues from "./Section/Langues.vue";

export default {
  name: "Voir",
  components: {
    Navigation,
    Apropos,
    Experiences,
    Formations,
    Competences,
    Langues,
    Loading,
  },
  computed: {
    ...mapGetters(["PROFIL_PUBLISHED"]),
  },
  mounted() {
    this.$store.dispatch("VOIR_PROFIL", this.$route.params.id);
  },
};
</script>