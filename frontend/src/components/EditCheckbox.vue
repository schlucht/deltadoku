<template>
  <div class="row d-flex justify-content-end mt-1">
    <button
            class="btn btn-outline-primary d-flex align-items-center"
            @click="clickEdit">
      <i class="fa-solid fa-pencil"></i>
      <input
             type="checkbox"
             name="edit"
             id="edit" />
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['checked']);
const clickEdit = () => {
  const ck = document.querySelector('input[type="checkbox"]');
  ck.checked = !ck.checked;
  emit('checked', ck.checked)
};

</script>

<style lang="scss" scoped>
button {
  width: 2.5rem;
  height: 2.5rem;
}

input[type='checkbox'] {
  display: none;
}
</style>
