<template>
  <div>
    <head-title>Modifier une compétence</head-title>
    <div class="" v-if="LOADING_COMPETENCES">LOADING COMPETENCE...</div>
    <div class="" v-else>
      <div class="" v-if="COMPETENCE">
        <div class="">
          <ValidationError :errors="FORM_VALIDATION_ERRORS" column="titre" />
          <label for="titre">Titre de la compétence</label>
          <input type="text" class="" v-model="COMPETENCE.titre" />
        </div>
        <div class="">
          <ValidationError
            :errors="FORM_VALIDATION_ERRORS"
            column="evaluation"
          />
          <label for="evaluation" class="block">Evaluation</label>
          <div class="rating">
            <input
              type="radio"
              name="rating-1"
              class="mask  mask-star "
              v-for="(item, index) in (1,5)"
              :key="index"
              :checked="item == COMPETENCE.evaluation"
              :value="item"
              v-model="COMPETENCE.evaluation"
            />
          </div>
        </div>
        <submit-button @click="submit">Enregistrer</submit-button>
        <delete-record
          dispatchingName="DELETE_COMPETENCE"
          :dispatchingParam="this.$route.params.id"
          redirectRoute="competences"
        /> 
      </div>
    </div>
  </div>
</template> 
<script>
import { mapGetters } from "vuex";
import HeadTitle from "../../Components/Layouts/HeadTitle.vue";
import SubmitButton from "../../Components/Layouts/SubmitButton.vue";
import ValidationError from "../../components/Layouts/ValidationError.vue";
import DeleteRecord from "../../Components/Layouts/DeleteRecord.vue";
export default {
  name: "CompetenceEdit",
  data() {
    return {
    };
  },
  components: {
    HeadTitle,
    SubmitButton,
    ValidationError,
    DeleteRecord,
  },
  computed: {
    ...mapGetters([
      "COMPETENCE",
      "LOADING_COMPETENCES",
      "FORM_VALIDATION_ERRORS",
    ]),
  },
  methods: {
    submit() {
      this.$store.commit("SET_LOADING_SUBMIT", true);
      this.$store
        .dispatch("MODIFIER_COMPETENCE", this.COMPETENCE)
        .then((result) => {
          this.$router.push({ name: "competences" });
          this.$store.commit("SET_LOADING_SUBMIT", false);
          this.$store.commit("SET_FORM_VALIDATION_ERRORS", "");
          console.log(result.data);
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
    this.$store.dispatch("GET_COMPETENCE", this.$route.params.id);
    this.$store.commit("SET_FORM_VALIDATION_ERRORS", "");
  },
};
</script>
