<template>
  <label class="btn btn-error" for="modalDeleteExperience">Supprimer</label>
  <Modal modalId="modalDeleteExperience">
    <div class="flex flex-col items-center space-y-2">
      <h3 class="text-xl">Voulez-vous vraiment supprimer?</h3>
      <div class="space-x-2">
        <delete-button @click="deleteRecord"> Oui </delete-button>
        <button class="btn btn-sm w-32 btn-accent">Non</button>
      </div>
    </div>
  </Modal>
</template>
<script>
import DeleteButton from "./DeleteButton.vue";
import Modal from "./Modal.vue";
export default {
  components: { Modal, DeleteButton },
  name: "DeleteRecord",
  props: ["dispatchingName", "dispatchingParam", "redirectRoute"],
  methods: {
    deleteRecord() {
      this.$store.commit("SET_LOADING_DELETE", true);
      this.$store
        .dispatch(this.dispatchingName, this.dispatchingParam)
        .then((result) => {
          console.log(result);
          this.$router.push({ name: this.redirectRoute });
          this.$store.commit("SET_LOADING_DELETE", false);
        })
        .catch((err) => {
          this.$store.commit("SET_LOADING_DELETE", false);
          console.log(err);
        });
    },
  },
  mounted() {},
};
</script>