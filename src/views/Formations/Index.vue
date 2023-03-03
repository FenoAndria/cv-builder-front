<template>
  <div>
    <head-title>Mes formations</head-title>
    <div class="">
      <div class="" v-if="LOADING_DATA">LOADING FORMATIONS...</div>
      <div v-else>
        <div class="flex flex-wrap -mx-1" v-if="FORMATIONS_LIST.length > 0">
          <div
            class="w-1/2 py-1 px-1"
            v-for="(formation, i) in FORMATIONS_LIST"
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
              <p class="font-bold text-xl">
                {{ formation.titre }} - {{ formation.diplome }}
              </p>
              <p class="text-lg">
                <i class="bi bi-person-workspace"></i
                >{{ formation.etablissement }}
              </p>
              <p class="text-lg">
                <i class="bi bi-geo-alt"></i
                >{{ formation.adresse_etablissement }}
              </p>
              <p class="text-lg">
                <i class="bi bi-calendar-range"></i>{{ formation.debut }} -
                {{ formation.en_cours ? "maintenant" : formation.fin }}
              </p>
              <!-- <pre class="text-darkest">{{ formation.description }}</pre> -->
              <!-- <router-link :to="{ name: 'experienceEdit', params: { id: experience.id } }">Modifier</router-link> -->
              <div class="absolute top-4 right-3">
                <label
                  class="text-orange hover:text-white ho transition-colors"
                  for="modalShowFormation"
                  @click="setModalContent(formation)"
                  ><i class="bi bi-eye"></i
                ></label>
                <router-link
                  :to="{ name: 'formationEdit', params: { id: formation.id } }"
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
          <p>Aucune formation enregistrée</p>
        </div>
      </div>
      <bottom-button link="formationCreate"/>

      <Modal modalId="modalShowFormation">
        <div class="" v-if="this.formation">
          <p class="font-bold text-xl">
            {{ this.formation.titre }} - {{ this.formation.diplome }}
          </p>
          <p class="text-lg">
            <i class="bi bi-person-workspace"></i
            >{{ this.formation.etablissement }}
          </p>
          <p class="text-lg">
            <i class="bi bi-geo-alt"></i
            >{{ this.formation.adresse_etablissement }}
          </p>
          <p class="text-lg">
            <i class="bi bi-calendar-range"></i>{{ this.formation.debut }} -
            {{ this.formation.en_cours ? "maintenant" : this.formation.fin }}
          </p>
          <pre class="text-darkest">{{ this.formation.description }}</pre>
        </div>
      </Modal>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import BottomButton from '../../components/Layouts/BottomButton.vue';
import Card from "../../Components/Layouts/Card.vue";
import HeadTitle from "../../Components/Layouts/HeadTitle.vue";
import Modal from "../../Components/Layouts/Modal.vue";

export default {
  name: "Formation",
  data() {
    return {
      formations: [],
      formation: null,
    };
  },
  components: {
    HeadTitle,
    Card,
    Modal,
    BottomButton,
  },
  computed: {
    ...mapGetters(["LOADING_DATA", "FORMATIONS_LIST"]),
  },
  methods: {
    loadFormations() {
      this.$store.dispatch("GET_FORMATIONS_LIST");
    },
    setModalContent(formation) {
      this.formation = formation;
    },
  },
  mounted() {
    this.loadFormations();
  },
};
</script>
