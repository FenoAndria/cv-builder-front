<template>
  <div class="text-dark">
    <input type="checkbox" :id="this.modalId" class="modal-toggle" />
    <label :for="this.modalId" class="modal modal-middle cursor-pointer">
      <label class="modal-box relative" for="">
        <slot></slot>
      </label>
    </label>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: ["modalId"],
  
};
</script>