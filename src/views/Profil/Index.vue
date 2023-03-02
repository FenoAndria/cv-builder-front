<template>
  <div>
    <head-title>Mon profil</head-title>
    <div class="" v-if="LOADING_PROFIL">LOADING PROFIL...</div>
    <div class="" v-else>
      <div class="" v-if="PROFIL">
        <div class="flex flex-wrap -mx-1">
          <div class="w-1/3 flex flex-col items-center">
            <img
              :src="'http://localhost:8000' + PROFIL.photo"
              alt="profile-image"
              class="
                w-52
                h-52
                object-cover
                rounded-full
                shadow-lg
                border-2 border-maroon
              "
            />
            <div class="my-2">
              <p class="text-3xl text-center">
                {{ PROFIL.nom }} {{ PROFIL.prenom }}
              </p>
            </div>
          </div>
          <div
            class="w-2/3 p-4 rounded bg-maroon text-white relative"
            id="profileInformation"
          >
            <p class="text-xl">
              <i class="bi bi-envelope"></i>{{ PROFIL.email }}
            </p>
            <p class="text-xl">
              <i class="bi bi-person-heart"></i>{{ PROFIL.dateNaissance }}
            </p>
            <p class="text-xl">
              <i class="bi bi-geo-alt"></i>{{ PROFIL.adresse }}
            </p>
            <p class="text-xl">
              <i class="bi bi-phone"></i>{{ PROFIL.telephone }}
            </p>
            <hr class="my-1" />
            <p class="text-xl">{{ PROFIL.bio }}</p>
            <div
              class="
                text-xl
                w-max
                text-center text-yellow
                hover:text-white
                transition-colors
                absolute
                top-3
                right-2
              "
            >
              <router-link :to="{ name: 'profilEdit' }">
                <i class="bi bi-pencil-square"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="" v-if="LOADING_COUNTER">LOADING COUNTER...</div>
        <div class="" v-else>
          <div class="mt-2" v-if="COUNTER">
            <div class="flex flex-wrap -mx-1">
              <div
                class="px-1 pb-2 w-1/4"
                v-for="(count, item) in COUNTER"
                :key="item"
              >
                <Counter :count="count" :item="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeadTitle from "../../components/Layouts/HeadTitle.vue";
import Counter from "../../components/Layouts/Counter.vue";
export default {
  name: "Profil",
  data() {
    return {
      counter: null,
    };
  },
  components: {
    HeadTitle,
    Counter,
  },
  computed: {
    ...mapGetters(["LOADING_PROFIL", "LOADING_COUNTER", "PROFIL", "COUNTER"]),
  },
  created() {
    this.$store.dispatch("GET_PROFIL");
    this.$store.dispatch("COUNTER");
  },
};
</script>