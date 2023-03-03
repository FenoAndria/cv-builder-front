<template>
  <div>
    <router-link :to="{ name: link }">
      <div class="bottom-5 right-5 fixed">
        <i
          class="
            bi bi-plus
            text-5xl
            bg-orange
            hover:bg-purple
            text-white
            transition-colors
            rounded-md
            shadow
          "
        ></i>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "BottomButton",
  props: ["link"],
};
</script>