<template>
  <div>
    <head-title>Mes compétences</head-title>
    <div class="" v-if="LOADING_DATA">LOADING...</div>
    <div class="" v-else>
      <div class="flex flex-wrap -mx-1" v-if="COMPETENCES_LIST">
        <div
          class="w-1/3 py-1 px-1"
          v-for="(competence, i) in COMPETENCES_LIST"
          :key="i"
        >
          <Card
            class="
              h-full
              hover:bg-opacity-75
              delay-100
              transition-opacity
              relative
            "
          >
            <p class="font-bold text-xl">{{ competence.titre }}</p>
            <hr />
            <div class="">
              <p class="text-lightest text-lg">
                <i
                  v-for="i in (1, 5)"
                  :class="
                    i <= competence.evaluation ? 'bi-star-fill' : 'bi-star'
                  "
                ></i>
              </p>
            </div>
            <div class="absolute top-4 right-3">
              <router-link
                :to="{ name: 'competenceEdit', params: { id: competence.id } }"
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
        <p>Aucune compétence enregistrée</p>
      </div>
    </div>
      <bottom-button link="competenceCreate"/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeadTitle from "../../Components/Layouts/HeadTitle.vue";
import Card from "../../Components/Layouts/Card.vue";
import BottomButton from '../../components/Layouts/BottomButton.vue';

export default {
  name: "Competence",
  data() {
    return {
    };
  },
  components: {
    Card,
    HeadTitle,
    BottomButton,
  },
  computed: {
    ...mapGetters(["COMPETENCES_LIST", "LOADING_DATA"]),
  },
  methods: {
    loadCompetences() {
      this.$store.dispatch("GET_COMPETENCES_LIST");
    },
  },
  created() {
    this.loadCompetences();
  },
};
</script>
