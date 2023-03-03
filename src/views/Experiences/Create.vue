<template>
  <div>
    <head-title>Nouvelle expérience</head-title>
    <div class="">
      <form @submit.prevent="submit()">
        <div class="">
          <ValidationError :errors="errors" column="titre_poste" />
          <label for="titre_poste">Titre du poste</label>
          <input type="text" class="" v-model="experience.titre_poste" />
        </div>
        <div class="">
          <ValidationError :errors="errors" column="societe" />
          <label for="societe">Société</label>
          <input type="text" class="" v-model="experience.societe" />
        </div>
        <div class="">
          <ValidationError :errors="errors" column="adresse_societe" />
          <label for="societe">Adresse de la société</label>
          <input type="text" class="" v-model="experience.adresse_societe" />
        </div>
        <div class="">
          <label for="societe">Description du poste</label>
          <textarea
            cols="40"
            rows="5"
            v-model="experience.description"
          ></textarea>
        </div>
        <div class="">
          <ValidationError :errors="errors" column="debut" />
          <label for="societe">Début</label>
          <input type="date" class="" v-model="experience.debut" />
        </div>
        <div class="" v-show="!experience.en_cours">
          <ValidationError :errors="errors" column="fin" />
          <label for="societe">Fin</label>
          <input type="date" class="" v-model="experience.fin" />
        </div>
        <div class="">
          <ValidationError :errors="errors" column="en_cours" />
          <label for="societe">En cours</label>
          <input
            type="checkbox"
            class="toggle"
            @change="en_cours"
            v-model="experience.en_cours"
          />
        </div>
        <button class="btn btn-primary loading" v-if="LOADING_SUBMIT">
          Enregistrer
        </button>
        <button class="btn btn-primary" v-else>Enregistrer</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeadTitle from "../../Components/Layouts/HeadTitle.vue";
import ValidationError from "../../Components/Layouts/ValidationError.vue";
export default {
  name: "ExperienceCreate",
  data() {
    return {
      experience: {
        titre_poste: "1235",
        societe: "gf",
        adresse_societe: "adre",
        description: "desc",
        debut: "2019-05-23",
        fin: "2019-04-19",
        en_cours: false,
        ordre: 1,
        profil_id: 1,
      },
      errors: "",
    };
  },
  components: {
    HeadTitle,
    ValidationError,
  },
  computed: {
    ...mapGetters(["LOADING_SUBMIT"]),
  },
  methods: {
    submit() {
      if (this.experience.en_cours) this.experience.fin = "";
      if (!this.experience.fin) {
        this.experience.fin = "";
        this.experience.en_cours = true;
        if (this.errors["fin"]) this.errors["fin"] = "";
      }
      this.$store.commit("SET_LOADING_SUBMIT", true);
      this.$store
        .dispatch("SAVE_EXPERIENCE", this.experience)
        .then((result) => {
          this.$store.commit("SET_LOADING_SUBMIT", false);
          this.errors = "";
          console.log(result);
          this.$router.push({ name: "experiences" });
        })
        .catch((err) => {
          this.$store.commit("SET_LOADING_SUBMIT", false);
          let { errors } = err.response.data;
          this.errors = errors;
          console.log(err.response.data);
        });
    },
  },
};
</script>