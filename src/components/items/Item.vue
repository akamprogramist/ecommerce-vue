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
  <div class="card">
    <footer class="card-footer">
      <RouterLink :to="`/EditItem/${item.id}`" class="card-footer-item"
        >Edit</RouterLink
      >
      <a @click.prevent="removeItem" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
import { ItemsStore } from "@/stores/ItemStore";
const ItemStore = ItemsStore();
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const removeItem = (item) => {
  ItemStore.delete(item);
};
</script>
