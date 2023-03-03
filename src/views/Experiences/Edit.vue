<template>
  <div>
    <head-title>Modifier une expérience</head-title>
    <div class="" v-if="LOADING_DATA">LOADING EXPERIENCE...</div>
    <div v-else>
      <div class="" v-if="EXPERIENCE">
        <div>
          <div class="">
            <ValidationError
              :errors="EXPERIENCES_ERRORS"
              column="titre_poste"
            />
            <label for="titre_poste">Titre du poste</label>
            <input type="text" class="" v-model="EXPERIENCE.titre_poste" />
          </div>
          <div class="">
            <ValidationError :errors="EXPERIENCES_ERRORS" column="societe" />
            <label for="societe">Société</label>
            <input type="text" class="" v-model="EXPERIENCE.societe" />
          </div>
          <div class="">
            <ValidationError
              :errors="EXPERIENCES_ERRORS"
              column="adresse_societe"
            />
            <label for="societe">Adresse de la société</label>
            <input type="text" class="" v-model="EXPERIENCE.adresse_societe" />
          </div>
          <div class="">
            <label for="societe">Description du poste</label>
            <textarea
              cols="40"
              rows="5"
              v-model="EXPERIENCE.description"
              class=""
            ></textarea>
          </div>
          <div class="">
            <ValidationError :errors="EXPERIENCES_ERRORS" column="debut" />
            <label for="societe">Début</label>
            <input type="date" class="" v-model="EXPERIENCE.debut" />
          </div>
          <div class="" v-show="!EXPERIENCE.en_cours">
            <ValidationError :errors="EXPERIENCES_ERRORS" column="fin" />
            <label for="societe">Fin</label>
            <input type="date" class="" v-model="EXPERIENCE.fin" />
          </div>
          <div class="">
            <ValidationError :errors="EXPERIENCES_ERRORS" column="en_cours" />
            <label for="societe">En cours</label>
            <input
              type="checkbox"
              class="toggle"
              checked="{{EXPERIENCE.en_cours}}"
              v-model="EXPERIENCE.en_cours"
            />
          </div>
          <div class="">
            <submit-button @click="submit()">Enregistrer</submit-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import { mapGetters } from "vuex";
import HeadTitle from "../../components/Layouts/HeadTitle.vue";
import ValidationError from "../../components/Layouts/ValidationError.vue";
import SubmitButton from "../../components/Layouts/SubmitButton.vue";

export default {
  name: "ExperienceEdit",
  data() {
    return {
      en_cours: null,
    };
  },
  components: {
    HeadTitle,
    ValidationError,
    SubmitButton,
  },
  computed: {
    ...mapGetters([
      "LOADING_DATA",
      "LOADING_SUBMIT",
      "EXPERIENCES_ERRORS",
      "EXPERIENCE",
    ]),
  },
  methods: {
    submit() {
      let en_cours = this.$store.getters.EXPERIENCE.en_cours == true ? 1 : 0;
      let {
        id,
        titre_poste,
        societe,
        adresse_societe,
        debut,
        fin,
        description,
      } = this.$store.getters.EXPERIENCE;
      let experience = {
        id,
        titre_poste,
        societe,
        adresse_societe,
        debut,
        fin,
        description,
        en_cours,
      };
      if (en_cours) experience.fin = "";
      if (!experience.fin) {
        experience.fin = "";
        experience.en_cours = 1;
        // if (this.errors["fin"]) this.errors["fin"] = "";
      }
      this.$store.commit("SET_LOADING_SUBMIT", true);
      this.$store
        .dispatch("MODIFIER_EXPERIENCE", experience)
        .then((result) => {
          console.log(result.data.experience);
          this.$store.commit("SET_LOADING_SUBMIT", false);
          this.$router.push({ name: "experiences" });
          this.$store.commit("SET_EXPERIENCES_ERRORS", "");
        })
        .catch((err) => {
          this.$store.commit("SET_LOADING_SUBMIT", false);
          if (err.response) {
            let { errors } = err.response.data;
            this.$store.commit("SET_EXPERIENCES_ERRORS", errors);
            console.log(err.response.data.errors);
          }
        });
    },
    
  },
  created() {
    this.$store.dispatch("GET_EXPERIENCE", this.$route.params.id);
  },
};
</script>
