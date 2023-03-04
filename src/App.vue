<template>
  <div class="min-h-screen" v-if="this.$route.name != 'Voir'">
    <Navbar />
    <div class="container py-2 px-32">
      <MainCard>
        <router-view />
      </MainCard>
    </div>
  </div>
  <div class="" v-else>
    <router-view />
  </div>
</template>

<script >
import Navbar from "./components/Layouts/Navbar.vue";
import MainCard from "./components/Layouts/MainCard.vue";
export default {
  name: "APP",
  components: {
    Navbar,
    MainCard,
  },
};
</script>
<style scoped>
</style>
