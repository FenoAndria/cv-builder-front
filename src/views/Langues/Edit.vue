<template>
  <head-title>Modifier une langue</head-title>
  <div v-if="LOADING_DATA">LOADING LANGUE...</div>
  <div v-else>
    <div class="container" v-if="LANGUE">
      <p class="text-xl font-semibold">{{ LANGUE.nom }}</p>
      <hr />
      <div class="">
        <!-- <form @submit.prevent="submit()"> -->
        <div class="">
          <label for="evaluation" class="block">Evaluation</label>
          <div class="rating">
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star text-primary"
              v-for="(item, index) in (1, 5)"
              :key="index"
              :checked="item == LANGUE.evaluation"
              :value="item"
              v-model="LANGUE.evaluation"
            />
          </div>
        </div>
        <submit-button @click="submit">Enregistrer</submit-button>
        <delete-record
          dispatchingName="DELETE_LANGUE"
          :dispatchingParam="this.$route.params.id"
          redirectRoute="langues"
        />
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import DeleteRecord from "../../Components/Layouts/DeleteRecord.vue";
import HeadTitle from "../../Components/Layouts/HeadTitle.vue";
import SubmitButton from "../../Components/Layouts/SubmitButton.vue";
export default {
  name: "LangueEdit",
  computed: {
    ...mapGetters(["LANGUE", "LOADING_DATA"]),
  },
  components: {
    HeadTitle,
    SubmitButton,
    DeleteRecord,
  },
  methods: {
    submit() {
      this.$store.commit("SET_LOADING_SUBMIT", true);
      this.$store
        .dispatch("UPDATE_LANGUE", this.LANGUE)
        .then((result) => {
          this.$store.commit("SET_LOADING_SUBMIT", false);
          console.log(result);
          this.$router.push({ name: "langues" });
        })
        .catch((err) => {
          this.$store.commit("SET_LOADING_SUBMIT", false);
          console.log(err.response);
        });
    },
  },
  created() {
    this.$store.dispatch("GET_LANGUE", this.$route.params.id);
  },
};
</script>