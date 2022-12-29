<template>
  <div>
    <div
         v-for="factory in factories"
         :key="factory">
      <RouterLink
                  :to="('daten/' + factory)"
                  class="list-group-item list-group-item-action my-2"
                  aria-current="true">
        {{ factory }}
        <span
              v-if="edit"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              @click="deleteFactory">
          x
          <span class="visually-hidden">unread messages</span>
        </span>
      </RouterLink>
    </div>
    <div class="row">
      <edit-checkbox @checked="check" />
    </div>
    <div v-if="edit">
      <form class="mt-2">
        <div class="input-group mb-3">
          <input
                 type="text"
                 class="form-control"
                 placeholder="Neuer Betrieb"
                 aria-label="Neuer Betrieb"
                 aria-describedby="button-addon2" />
          <button
                  class="btn btn-outline-secondary"
                  @click="saveFactory"
                  type="button"
                  id="button-addon2">
            <i class="fa-solid fa-floppy-disk"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EditCheckbox from '@/components/EditCheckbox.vue';

let edit = ref(false);
defineProps({
  factories: Object,
});

const deleteFactory = () => {
  console.log('delete');
};

const saveFactory = () => {
  console.log("save")
}

const check = (event) => {
  edit.value = event;
};
</script>

<style scoped lang="scss">

</style>
