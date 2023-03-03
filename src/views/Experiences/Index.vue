<template>
  <div>
    <head-title>Mes expériences</head-title>
    <div class="">
      <div v-if="LOADING_DATA">LOADING EXPERIENCES...</div>
      <div v-else>
        <div class="flex flex-wrap -mx-1" v-if="EXPERIENCES_LIST">
          <div
            class="w-1/2 py-1 px-1"
            v-for="(experience, i) in EXPERIENCES_LIST"
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
              <p class="font-bold text-2xl">{{ experience.titre_poste }}</p>
              <p class="text-lg">
                <i class="bi bi-person-workspace"></i>{{ experience.societe }}
              </p>
              <p class="text-lg">
                <i class="bi bi-geo-alt"></i>{{ experience.adresse_societe }}
              </p>
              <p class="text-lg">
                <i class="bi bi-calendar-range"></i>{{ experience.debut }} -
                {{ experience.en_cours ? "maintenant" : experience.fin }}
              </p>
              <div class="absolute top-4 right-3">
                <label
                  class="text-orange hover:text-white ho transition-colors"
                  for="modalShowExperience"
                  @click="setModalContent(experience)"
                  ><i class="bi bi-eye"></i
                ></label>
                <router-link
                  :to="{
                    name: 'experienceEdit',
                    params: { id: experience.id },
                  }"
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
          <p>Aucune expérience enregistrée</p>
        </div>
      </div>

      <Modal modalId="modalShowExperience">
        <div class="" v-if="this.experience">
          <p class="font-bold text-2xl">{{ this.experience.titre_poste }}</p>
          <p class="text-lg">
            <i class="bi bi-person-workspace"></i>{{ this.experience.societe }}
          </p>
          <p class="text-lg">
            <i class="bi bi-geo-alt"></i>{{ this.experience.adresse_societe }}
          </p>
          <p class="text-lg">
            <i class="bi bi-calendar-range"></i>{{ this.experience.debut }} -
            {{ this.experience.en_cours ? "maintenant" : this.experience.fin }}
          </p>
          <p class="text-darkest">{{ this.experience.description }}</p>
        </div>
      </Modal>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeadTitle from "../../components/Layouts/HeadTitle.vue";
import Card from "../../components/Layouts/Card.vue";
import Modal from "../../components/Layouts/Modal.vue";
export default {
  name: "ExperienceIndex",
  data() {
    return {
      experiences: [],
      modalContent: "",
      experience: null,
    };
  },
  components: {
    HeadTitle,
    Card,
    Modal,
  },
  computed: {
    ...mapGetters(["LOADING_DATA", "EXPERIENCES_LIST"]),
  },
  methods: {
    loadExperiences() {
      this.$store.dispatch("GET_EXPERIENCES_LIST");
    },
    setModalContent(experience) {
      this.modalContent = experience;
      this.experience = experience;
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>
