<template>
  <button
    :class="
      'mr-2 btn btn-error w-32 btn-sm' + (LOADING_DELETE ? ' loading' : '')
    "
  >
    <slot></slot>
  </button>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "DeleteButton",
  props: ["color"],
  computed: {
    ...mapGetters(["LOADING_DELETE"]),
  },
};
</script>