<template>
  <div>
    <Search />
    <Item v-for="item in ItemStore.searchItems" :key="item.id" :item="item" />
  </div>
</template>
<script setup>
import Item from "@/components/items/Item.vue";
import Search from "@/components/items/Search.vue";
import { ItemsStore } from "@/stores/ItemStore";
const ItemStore = ItemsStore();
</script>
