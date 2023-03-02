
<template>
  <div class=" min-h-screen">
    <Navbar />
    <div class="container py-2 px-32">
      <MainCard>
        <router-view />
        <h1>COUCOU</h1>
      </MainCard>
    </div>
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
