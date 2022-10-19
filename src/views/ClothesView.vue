<template>
  <Title label="Clothes"></Title>
  <div>
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
