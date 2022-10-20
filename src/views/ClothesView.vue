<template>
  <Title label="Clothes"></Title>
  <div
    v-if="ItemStore.itemCatClothes.length <= 0"
    class="content columns mt-3 is-medium is-centered"
  >
    <h4>Sorry No Items Are Available Here</h4>
  </div>
  <div v-else>
    <Item
      v-for="item in ItemStore.itemCatClothes"
      :key="item.id"
      :item="item"
    />
  </div>
</template>
<script setup>
import Item from "@/components/items/Item.vue";
import Search from "@/components/items/Search.vue";
import Title from "../components/Title.vue";
import { ItemsStore } from "@/stores/ItemStore";
const ItemStore = ItemsStore();
</script>
