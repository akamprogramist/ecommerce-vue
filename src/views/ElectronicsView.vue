<template>
  <Title label="Electronics"></Title>
  <div
    v-if="ItemStore.itemCatElectronics.length <= 0"
    class="content columns mt-3 is-medium is-centered"
  >
    <h4>Sorry No Items Are Available Here</h4>
  </div>
  <div v-else>
    <Item
      v-for="item in ItemStore.itemCatElectronics"
      :key="item.id"
      :item="item"
    />
  </div>
</template>
<script setup>
import Item from "@/components/items/Item.vue";
import { ItemsStore } from "@/stores/ItemStore";
import Title from "../components/Title.vue";
const ItemStore = ItemsStore();
</script>
