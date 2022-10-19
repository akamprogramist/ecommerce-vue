<template>
  <div class="card">
    <footer class="card-footer">
      <RouterLink :to="`/edititemview/${item.id}`" class="card-footer-item"
        >Edit</RouterLink
      >
      <a @click.prevent="modals.deleteItem = true" class="card-footer-item"
        >Delete</a
      >
    </footer>
    <ModalDeleteItem
      v-if="modals.deleteItem"
      v-model="modals.deleteItem"
      :itemId="item.id"
    />
  </div>
</template>
<script setup>
import { reactive } from "vue";
import ModalDeleteItem from "./ModalDeleteItem.vue";
const modals = reactive({
  deleteItem: false,
});
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
