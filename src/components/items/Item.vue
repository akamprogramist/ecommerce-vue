<template>
  <RouterLink :to="`/ViewItemPage/${item.id}`">
    <div class="card">
      <div class="card-content mt-5">
        <p class="title is-2">{{ item.name }}</p>
        <p class="title is-5 has-text-grey-light">{{ item.picked }}</p>

        <div class="content">{{ item.content }}</div>
        <div class="title is-4">{{ item.price }}$</div>
      </div>
    </div>
  </RouterLink>
  <EditDeleteButton :item="item" />

  <ModalDeleteItem
    v-if="modals.deleteItem"
    v-model="modals.deleteItem"
    :itemId="item.id"
  />
</template>

<script setup>
import { reactive } from "vue";
import EditDeleteButton from "./EditDeleteButton.vue";
import ModalDeleteItem from "./ModalDeleteItem.vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const modals = reactive({
  deleteItem: false,
});
</script>
