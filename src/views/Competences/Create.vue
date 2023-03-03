<template>
  <div>
    <head-title>Nouvelle compétence</head-title>
    <div class="">
      <form @submit.prevent="submit()">
        <div class="">
          <ValidationError
            :errors="FORM_VALIDATION_ERRORS"
            column="titre"
          />
          <label for="titre">Titre de la compétence</label>
          <input
            type="text"
            class="border-2 p-1 rounded"
            v-model="competence.titre"
          />
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
              class="mask mask-star text-primary"
              v-for="(item, index) in (1, 5)"
              :key="index"
              :value="item"
              :checked="item == competence.evaluation"
              v-model="competence.evaluation"
            />
          </div>
        </div>
        <submit-button>Enregistrer</submit-button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeadTitle from "../../Components/Layouts/HeadTitle.vue";
import SubmitButton from "../../Components/Layouts/SubmitButton.vue";
import ValidationError from "../../components/Layouts/ValidationError.vue";
export default {
  name: "competenceCreate",
  data() {
    return {
      competence: {
        titre: "",
        evaluation: 1,
      },
    };
  },
  components: {
    HeadTitle,
    SubmitButton,
    ValidationError,
  },
  computed: {
    ...mapGetters(["FORM_VALIDATION_ERRORS"]),
  },
  methods: {
    submit() {
      this.$store.commit("SET_LOADING_SUBMIT", true);
      this.$store
        .dispatch("SAVE_COMPETENCE", this.competence)
        .then((result) => {
          this.$store.commit("SET_FORM_VALIDATION_ERRORS", "");
          this.$store.commit("SET_LOADING_SUBMIT", false);
            this.$router.push({ name: "competences" });
          // console.log(result);
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
  },
};
</script>