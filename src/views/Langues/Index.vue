<template>
  <head-title>Mes langues</head-title>
  <div class="">
    <div class="" v-if="LOADING_DATA">LOADING LANGUES...</div>
    <div v-else>
      <div class="flex flex-wrap -mx-1" v-if="LANGUES_LIST">
        <div class="w-1/3 p-1" v-for="(langue, i) in LANGUES_LIST" :key="i">
          <Card class="relative">
            <p class="font-bold text-xl">{{ langue.nom }}</p>
            <hr />
            <p class="text-lightest text-lg">
              <i
                v-for="i in (1, 5)"
                :class="i <= langue.evaluation ? 'bi-star-fill' : 'bi-star'"
              ></i>
            </p>
            <div class="absolute top-4 right-3">
              <router-link
                :to="{ name: 'langueEdit', params: { id: langue.id } }"
              >
                <span class="text-yellow hover:text-white transition-colors"
                  ><i class="bi bi-pencil-square"></i
                ></span>
              </router-link>
            </div>
          </Card>
        </div>
      </div>
      <div class="" v-else>
        <p>Aucune langue enregistrée</p>
      </div>
    </div>
    <bottom-button link="langueCreate" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeadTitle from "../../Components/Layouts/HeadTitle.vue";
import Card from "../../Components/Layouts/Card.vue";
import SubmitButton from "../../Components/Layouts/SubmitButton.vue";
import BottomButton from "../../components/Layouts/BottomButton.vue";
export default {
  name: "Langue",
  computed: {
    ...mapGetters(["LOADING_DATA", "LANGUES_LIST"]),
  },
  components: {
    HeadTitle,
    Card,
    SubmitButton,
    BottomButton,
  },
  methods: {
    loadlangues() {
      this.$store.dispatch("GET_LANGUES_LIST");
    },
  },
  mounted() {
    this.loadlangues();
  },
};
</script>