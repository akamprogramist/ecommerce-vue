<template>
  <div>
    <Title label="All Products"></Title>
    <Search v-model="ItemStore.searchValue" ref="search" />

    <Item v-for="item in ItemStore.searchItems" :key="item.id" :item="item" />
  </div>
</template>
<script setup>
import Item from "@/components/items/Item.vue";
import Search from "@/components/items/Search.vue";
import { ItemsStore } from "@/stores/ItemStore";
import Title from "../components/Title.vue";
const ItemStore = ItemsStore();
</script>
