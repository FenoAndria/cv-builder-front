<template>
  <div>
    <head-title>Modifier une formation</head-title>
    <div v-if="LOADING_DATA">LOADING FORMATION...</div>
    <div v-else>
      <div v-if="FORMATION">
        <!-- <form @submit.prevent="submit()"> -->
        <div>
          <div class="">
            <ValidationError :errors="FORM_VALIDATION_ERRORS" column="titre" />
            <label for="titre">Titre de la formation</label>
            <input type="text" class="" v-model="FORMATION.titre" />
          </div>
          <div class="">
            <ValidationError
              :errors="FORM_VALIDATION_ERRORS"
              column="etablissement"
            />
            <label for="etablissement">Etablissement</label>
            <input type="text" class="" v-model="FORMATION.etablissement" />
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
              v-model="FORMATION.adresse_etablissement"
            />
          </div>
          <div class="" v-show="DIPLOMES">
            <ValidationError
              :errors="FORM_VALIDATION_ERRORS"
              column="diplome_id"
            />
            <label for="etablissement">Diplôme</label>
            <select
              class="select select-sm block"
              v-model="FORMATION.diplome_id"
            >
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
              v-model="FORMATION.description"
              class="textarea"
            ></textarea>
          </div>
          <div class="">
            <ValidationError :errors="FORM_VALIDATION_ERRORS" column="debut" />
            <label for="etablissement">Début</label>
            <input type="date" class="" v-model="FORMATION.debut" />
          </div>
          <div class="" v-show="!FORMATION.en_cours">
            <ValidationError :errors="FORM_VALIDATION_ERRORS" column="fin" />
            <label for="etablissement">Fin</label>
            <input type="date" class="" v-model="FORMATION.fin" />
          </div>
          <div class="">
            <ValidationError
              :errors="FORM_VALIDATION_ERRORS"
              column="en_cours"
            />
            <label for="etablissement">En cours</label>
            <input
              type="checkbox"
              class="toggle"
              v-model="FORMATION.en_cours"
            />
          </div>
          <submit-button @click="submit()">Enregistrer</submit-button>
          <delete-record
            dispatchingName="DELETE_FORMATION"
            :dispatchingParam="this.$route.params.id"
            redirectRoute="formations"
          />
        </div>
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeadTitle from "../../components/Layouts/HeadTitle.vue";
import ValidationError from "../../components/Layouts/ValidationError.vue";
import DeleteRecord from "../../Components/Layouts/DeleteRecord.vue";
import SubmitButton from "../../Components/Layouts/SubmitButton.vue";
export default {
  name: "FormationEdit",
  components: {
    HeadTitle,
    ValidationError,
    SubmitButton,
    DeleteRecord,
  },
  computed: {
    ...mapGetters([
      "FORM_VALIDATION_ERRORS",
      "LOADING_DATA",
      "LOADING_SUBMIT",
      "FORMATION",
      "DIPLOMES",
    ]),
  },
  methods: {
    submit() {
      if (this.FORMATION.en_cours) this.FORMATION.fin = "";
      if (!this.FORMATION.fin) {
        this.FORMATION.fin = "";
        this.FORMATION.en_cours = true;
      }
      this.FORMATION.en_cours = this.FORMATION.en_cours == true ? 1 : 0;
      this.$store.commit("SET_LOADING_SUBMIT", true);
      this.$store
        .dispatch("MODIFIER_FORMATION", this.FORMATION)
        .then((result) => {
          this.$router.push({ name: "formations" });
          //   console.log(result);
          this.$store.commit("SET_LOADING_SUBMIT", false);
          this.$store.commit("SET_FORM_VALIDATION_ERRORS", "");
        })
        .catch((err) => {
          this.$store.commit("SET_LOADING_SUBMIT", false);
          this.$store.commit(
            "SET_FORM_VALIDATION_ERRORS",
            err.response.data.errors
          );
          //   console.log(err.response);
        });
    },
  },
  created() {
    this.$store.dispatch("GET_FORMATION", this.$route.params.id);
    this.$store.commit("SET_FORM_VALIDATION_ERRORS", "");
    this.$store.dispatch("GET_DIPLOMES");
  },
};
</script>