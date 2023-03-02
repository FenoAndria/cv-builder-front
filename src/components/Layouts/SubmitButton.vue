<template>
  <button
    :class="
      'mr-2 btn ' +
      (color ?? 'btn-primary') +
      (LOADING_SUBMIT ? ' loading' : '')
    "
  >
    <slot></slot>
  </button>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SubmitButton",
  props: ["color"],
  computed: {
    ...mapGetters(["LOADING_SUBMIT"]),
  },
};
</script>