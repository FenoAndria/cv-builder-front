<template>
  <head-title>Nouvelle langue</head-title>
  <div class="container">
    <form @submit.prevent="submit()">
      <div class="" v-if="LANGUE_DB">
        <ValidationError :errors="FORM_VALIDATION_ERRORS" column="langue_id" />
        <label for="langue">Langue</label>
        <select
          id="langue"
          class="select select-sm block"
          v-model="langue.langue_id"
        >
          <option disabled selected>Choisir une langue</option>
          <option :value="langue.id" v-for="langue in LANGUE_DB">
            {{ langue.nom }}
          </option>
        </select>
      </div>
      <div class="">
        <ValidationError :errors="FORM_VALIDATION_ERRORS" column="evaluation" />
        <label for="evaluation" class="block">Evaluation</label>
        <!-- <input type="text" id="evaluation" v-model="langue.evaluation" /> -->
        <div class="rating">
          <input
            type="radio"
            name="rating-1"
            class="mask mask-star text-primary"
            v-for="(item, index) in (1, 5)"
            :key="index"
            :value="item"
            :checked="item == langue.evaluation"
            v-model="langue.evaluation"
          />
        </div>
      </div>
      <submit-button>Enregistrer</submit-button>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeadTitle from "../../Components/Layouts/HeadTitle.vue";
import SubmitButton from "../../Components/Layouts/SubmitButton.vue";
import ValidationError from "../../components/Layouts/ValidationError.vue";
export default {
  name: "LangueCreate",
  data() {
    return {
      langue: {
        langue_id: null,
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
    ...mapGetters(["LANGUE_DB", "FORM_VALIDATION_ERRORS"]),
  },
  methods: {
    submit() {
      this.$store.commit("SET_LOADING_SUBMIT", true);
      this.$store
        .dispatch("ADD_LANGUE", this.langue)
        .then((result) => {
          this.$store.commit("SET_LOADING_SUBMIT", false);
          this.$store.commit("SET_FORM_VALIDATION_ERRORS", "");
          console.log(result);
            this.$router.push({ name: "langues" });
        })
        .catch((err) => {
          this.$store.commit("SET_LOADING_SUBMIT", false);
          this.$store.commit(
            "SET_FORM_VALIDATION_ERRORS",
            err.response.data.errors
          );
          console.log(err.response.data);
        });
      //   console.log(this.langue)
    },
  },
  created() {
    this.$store.dispatch("GET_LANGUES_DB");
    this.$store.commit("SET_FORM_VALIDATION_ERRORS", "");
  },
};
</script>