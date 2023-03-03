<template>
  <div>
    <head-title>Nouvelle formation</head-title>
    <div class="">
      <form @submit.prevent="submit()">
        <div class="">
          <ValidationError :errors="FORM_VALIDATION_ERRORS" column="titre" />
          <label for="titre">Titre de la formation</label>
          <input type="text" class="" v-model="formation.titre" />
        </div>
        <div class="">
          <ValidationError
            :errors="FORM_VALIDATION_ERRORS"
            column="etablissement"
          />
          <label for="etablissement">Etablissement</label>
          <input type="text" class="" v-model="formation.etablissement" />
        </div>
        <div class="">
          <ValidationError
            :errors="FORM_VALIDATION_ERRORS"
            column="adresse_etablissement"
          />
          <label for="etablissement">Adresse de l'établissement</label>
          <input
            type="text"
            class=""
            v-model="formation.adresse_etablissement"
          />
        </div>
        <div class="" v-show="DIPLOMES">
          <ValidationError
            :errors="FORM_VALIDATION_ERRORS"
            column="diplome_id"
          />
          <label for="etablissement">Diplôme</label>
          <select class="select select-sm block" v-model="formation.diplome_id">
            <option disabled selected>Choisir un diplôme</option>
            <option :value="diplome.id" v-for="diplome in DIPLOMES">
              {{ diplome.nom }}
            </option>
          </select>
        </div>
        <div class="">
          <label for="etablissement">Description de la formation</label>
          <textarea
            cols="40"
            rows="5"
            v-model="formation.description"
            class="textarea"
          ></textarea>
        </div>
        <div class="">
          <ValidationError :errors="FORM_VALIDATION_ERRORS" column="debut" />
          <label for="etablissement">Début</label>
          <input type="date" class="" v-model="formation.debut" />
        </div>
        <div class="" v-show="!formation.en_cours">
          <ValidationError :errors="FORM_VALIDATION_ERRORS" column="fin" />
          <label for="etablissement">Fin</label>
          <input type="date" class="" v-model="formation.fin" />
        </div>
        <div class="">
          <ValidationError :errors="FORM_VALIDATION_ERRORS" column="en_cours" />
          <label for="etablissement">En cours</label>
          <input type="checkbox" class="toggle" v-model="formation.en_cours" />
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
  name: "FormationCreate",
  data() {
    return {
      formation: {
        titre: "titre",
        etablissement: "sct",
        adresse_etablissement: "adre",
        description: "desc",
        debut: "2019-05-23",
        fin: "2021-04-19",
        en_cours: false,
        diplome_id: null,
        profil_id: 1,
      },
    };
  },
  components: {
    HeadTitle,
    ValidationError,
  },
  computed: {
    ...mapGetters(["FORM_VALIDATION_ERRORS", "LOADING_SUBMIT", "DIPLOMES"]),
  },
  methods: {
    submit() {
      if (this.formation.en_cours) this.formation.fin = "";
      if (!this.formation.fin) {
        this.formation.fin = "";
        this.formation.en_cours = true;
      }
      this.formation.en_cours = this.formation.en_cours == true ? 1 : 0;
      this.$store.commit("SET_LOADING_SUBMIT", true);
      this.$store
        .dispatch("SAVE_FORMATION", this.formation)
        .then((result) => {
          this.$router.push({ name: "formations" });
          console.log(result);
          this.$store.commit("SET_LOADING_SUBMIT", false);
          this.$store.commit("SET_FORM_VALIDATION_ERRORS", "");
        })
        .catch((err) => {
          this.$store.commit("SET_LOADING_SUBMIT", false);
          this.$store.commit(
            "SET_FORM_VALIDATION_ERRORS",
            err.response.data.errors
          );
          console.log(err.response);
        });
    },
  },
  created() {
    this.$store.commit("SET_FORM_VALIDATION_ERRORS", "");
    this.$store.dispatch("GET_DIPLOMES");
  },
};
</script>